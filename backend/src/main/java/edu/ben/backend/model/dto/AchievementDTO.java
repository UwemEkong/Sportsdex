package edu.ben.backend.model.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@ToString
@EqualsAndHashCode
public class AchievementDTO {

    Long id;
    String description;
    int points;
    String team;
    String imagePath;


    public AchievementDTO(Long id, String description, int points, String team, String imagePath){
        this.id = id;
        this.description = description;
        this.points = points;
        this.team = team;
        this.imagePath = imagePath;
    }
}
