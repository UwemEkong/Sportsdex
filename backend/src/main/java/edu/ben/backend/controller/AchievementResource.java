package edu.ben.backend.controller;

import edu.ben.backend.model.Achievement;
import edu.ben.backend.service.AchievementService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "api/achievements", produces = "application/json")
public class AchievementResource {

    private final AchievementService achievementService;

    public AchievementResource(AchievementService achievementService){
        this.achievementService = achievementService;
    }

    @GetMapping("getAchievements")
    public void getAchievements() {
        this.achievementService.getAllAchievements();
    }
}
