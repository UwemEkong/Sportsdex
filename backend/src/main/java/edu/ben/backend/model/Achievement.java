package edu.ben.backend.model;

import lombok.*;

import javax.persistence.*;

@Entity
@ToString
@EqualsAndHashCode
//@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Table(name = "achievements")
public class Achievement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "idachievements")
    Long id;
    @Column(name = "description")
    String description;
    @Column(name = "points")
    int points;
    @Column(name = "team")
    String team;
    @Column(name = "imagePath")
    String imagePath;

    public Achievement (Long id, String description, int points, String team, String imagePath){
        this.id = id;
        this.description = description;
        this.points = points;
        this.team = team;
        this.imagePath = imagePath;
    }
}
