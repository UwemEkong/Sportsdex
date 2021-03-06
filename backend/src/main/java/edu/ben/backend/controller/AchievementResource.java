package edu.ben.backend.controller;

import edu.ben.backend.model.Achievement;
import edu.ben.backend.model.dto.AchievementDTO;
import edu.ben.backend.model.dto.userDTO;
import edu.ben.backend.model.userRating;
import edu.ben.backend.service.AchievementService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping(value = "api/achievement", produces = "application/json")
public class AchievementResource {

    private final AchievementService achievementService;

    public AchievementResource(AchievementService achievementService){
        this.achievementService = achievementService;
    }

    @GetMapping("/getLockedAchievements")
    public List<AchievementDTO> getLockedAchievements() {
        return this.achievementService.getLockedAchievements();
    }

    @GetMapping("/getUnlockedAchievements")
    public List<AchievementDTO> getUnlockedAchievements() {
        return this.achievementService.getUnlockedAchievements();
    }

    @GetMapping("/unlockAchievement/{achievementId}")
    public void unlockAchievement(@PathVariable Long achievementId) {
         this.achievementService.unlockAchievement(achievementId);
    }

    @DeleteMapping("/deleteUserAchievement/{achievementId}")
    public void deleteUserAchievement(@PathVariable Long achievementId) {
        this.achievementService.deleteUserAchievement(achievementId);
    }

    @GetMapping("/getLockedFilteredAchievements/{team}")
    public List<AchievementDTO> getFilteredAchievements(@PathVariable String team) {
        return this.achievementService.getFilteredData(team);
    }

    @GetMapping("/getLeaderboard")
    public List<userDTO> getLeaderboard() {
        return this.achievementService.getLeaderboard();
    }

    @GetMapping("/getUserAch/")
        public List<userRating> getUserAch() {
        return this.achievementService.getNumUnlockedAch();
        }
}
