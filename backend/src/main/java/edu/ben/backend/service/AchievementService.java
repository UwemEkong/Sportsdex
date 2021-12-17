package edu.ben.backend.service;

import edu.ben.backend.model.Achievement;
import edu.ben.backend.model.UserAchievement;
import edu.ben.backend.model.dto.AchievementDTO;
import edu.ben.backend.model.dto.userDTO;
import edu.ben.backend.model.user;
import edu.ben.backend.model.userRating;
import edu.ben.backend.repository.AchievementRepository;
import edu.ben.backend.repository.UserAchievementRepository;
import edu.ben.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AchievementService {

    UserRepository userRepository;
    AchievementRepository achievementRepository;
    UserAchievementRepository userAchievementRepository;
    AuthService authService;
    public AchievementService(AchievementRepository achievementRepository, UserAchievementRepository userAchievementRepository, AuthService authService, UserRepository userRepository ) {
        this.achievementRepository = achievementRepository;
        this.userAchievementRepository = userAchievementRepository;
        this.authService = authService;
        this.userRepository = userRepository;
    }
    public List<AchievementDTO> getAllAchievements() {
        List<Achievement> achievements = achievementRepository.findAll();
        List<AchievementDTO> achievementDTOS = new ArrayList<>();

        for (Achievement achievement: achievements) {
            achievementDTOS.add(new AchievementDTO(achievement.getId(), achievement.getDescription(), achievement.getPoints(), achievement.getTeam(), achievement.getImage()));
        }
        System.out.println(achievementDTOS);
        return achievementDTOS;
    }

    public void unlockAchievement(Long achievementId) {
        UserAchievement existingAchievement = userAchievementRepository.findUserAchievementByAchievementIdAndUserId(achievementId, this.authService.getLoggedInUser().getId());

        if (existingAchievement == null) {
            userAchievementRepository.save(new UserAchievement(authService.getLoggedInUser().getId(), achievementId));
        } else {
            throw new RuntimeException("Already Unlocked!");
        }
    }

    public List<AchievementDTO> getUnlockedAchievements() {
        List<UserAchievement> unlocked = userAchievementRepository.findUserAchievementByUserId(authService.getLoggedInUser().getId());
        List<AchievementDTO> answ = new ArrayList();
        for (UserAchievement userAchievement: unlocked) {
            Achievement achievement = achievementRepository.getById(userAchievement.getAchievementId());
            answ.add(new AchievementDTO(achievement.getId(), achievement.getDescription(), achievement.getPoints(), achievement.getTeam(), achievement.getImage()));
        }
        return answ;
    }

    public List<AchievementDTO> getLockedAchievements() {
        List<UserAchievement> unlocked = userAchievementRepository.findUserAchievementByUserId(authService.getLoggedInUser().getId());
        List<Achievement> allAchievements = achievementRepository.findAll();
        List<AchievementDTO> locked = new ArrayList();

        for (Achievement achievement: allAchievements) {
            if (isLocked(achievement, unlocked)) {
                locked.add(new AchievementDTO(achievement.getId(), achievement.getDescription(), achievement.getPoints(), achievement.getTeam(), achievement.getImage()));
            }
        }
        return locked;
    }

    public List<AchievementDTO> getFilteredData(String team) {
        List<Achievement> locked = achievementRepository.findByTeam(team);
        List<AchievementDTO> answer = new ArrayList<>();
        for (Achievement achievement:locked) {
            answer.add(new AchievementDTO(achievement.getId(), achievement.getDescription(), achievement.getPoints(), achievement.getTeam(), achievement.getImage()));
        }
        return answer;
    }

    private boolean isLocked(Achievement achievement, List<UserAchievement> unlocked) {
        for (UserAchievement userAchievement: unlocked) {
            if (achievement.getId() == userAchievement.getAchievementId()) {
                return false;
            }
        }
        return true;
    }

    public void deleteUserAchievement(Long achievementId) {
        userAchievementRepository.deleteUserAchievementByAchievementId(achievementId);
    }

    public List<userDTO> getLeaderboard() {
        List<user> users = userRepository.findAll();
        List<userDTO> userUnlocks = new ArrayList<>();
        for (user user: users) {
            userUnlocks.add(new userDTO(user.getId(), user.getUsername(), user.getPassword(), user.getEmail(), user.getFirstname(), user.getLastname(), user.getFavoriteteam()));
        }
        List<UserAchievement> achievementList = userAchievementRepository.findAll();

        HashMap<Long, Integer> userMapping = new HashMap<>();
        for (UserAchievement userAchievement: achievementList) {
            if (userMapping.containsKey(userAchievement.getUserId())) {
                userMapping.put(userAchievement.getUserId(), userMapping.get(userAchievement.getUserId()) + 1);
            } else {
                userMapping.put(userAchievement.getUserId(), 1);
            }
        }






        Collections.sort(userUnlocks, new MapComparator(userMapping));

        return userUnlocks;
    }

    class MapComparator implements Comparator<userDTO> {

        HashMap<Long, Integer> map;

        public MapComparator(HashMap<Long, Integer> map) {
            this.map = map;
        }

        public int compare(userDTO a, userDTO b) {

            if (map.get(a.getId()) > map.get(b.getId())) {
                return -1;
            } else if (map.get(a.getId()) < map.get(b.getId())) {
                return 1;
            } else {
                return map.get(a.getId()).compareTo(map.get(b.getId()));
            }
        }

    }

    public List<userRating> getNumUnlockedAch() {

        List<UserAchievement> achievementList = userAchievementRepository.findAll();
        HashMap<Long, Integer> userMapping = new HashMap<>();
        for (UserAchievement userAchievement: achievementList) {
            if (userMapping.containsKey(userAchievement.getUserId())) {
                userMapping.put(userAchievement.getUserId(), userMapping.get(userAchievement.getUserId()) + 1);
            } else {
                userMapping.put(userAchievement.getUserId(), 1);
            }
        }
        List<userRating> answer = new ArrayList<>();
        for (Long id: userMapping.keySet()) {
            user user = userRepository.getById(id);
            answer.add(new userRating(id, userMapping.get(id), user.getUsername()));
        }
        answer.sort(Comparator.comparing(userRating::getTotalAchiev).reversed());

        return answer;
    }

}
