package edu.ben.backend.service;

import edu.ben.backend.model.Achievement;
import edu.ben.backend.model.dto.AchievementDTO;
import edu.ben.backend.repository.AchievementRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AchievementService {

    AchievementRepository achievementRepository;

    public AchievementService(AchievementRepository achievementRepository) {
        this.achievementRepository = achievementRepository;
    }
    public List<AchievementDTO> getAllAchievements() {
        List<Achievement> achievements = achievementRepository.findAll();
        List<AchievementDTO> achievementDTOS = new ArrayList<>();

        for (Achievement achievement: achievements) {
            achievementDTOS.add(new AchievementDTO(achievement.getId(), achievement.getDescription(), achievement.getPoints(), achievement.getTeam(), achievement.getImagePath()));
        }
        System.out.println(achievementDTOS);
        return achievementDTOS;

    }
}
