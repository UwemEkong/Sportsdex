package edu.ben.backend.service;

import edu.ben.backend.model.Achievement;
import edu.ben.backend.model.UserAchievement;
import edu.ben.backend.model.dto.AchievementDTO;
import edu.ben.backend.repository.AchievementRepository;
import edu.ben.backend.repository.UserAchievementRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AchievementService {

    AchievementRepository achievementRepository;
    UserAchievementRepository userAchievementRepository;
    AuthService authService;
    public AchievementService(AchievementRepository achievementRepository, UserAchievementRepository userAchievementRepository, AuthService authService) {
        this.achievementRepository = achievementRepository;
        this.userAchievementRepository = userAchievementRepository;
        this.authService = authService;
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
        UserAchievement existingAchievement = userAchievementRepository.findUserAchievementByAchievementId(achievementId);

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
}
