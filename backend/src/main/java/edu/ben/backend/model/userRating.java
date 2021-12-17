package edu.ben.backend.model;


import lombok.*;

import javax.persistence.Entity;


@ToString
@EqualsAndHashCode
@Builder
@Data
public class userRating {

    long userId;

    int totalAchiev;

    String username;

    public userRating (long userId, int totalAchiev, String username) {
        this.totalAchiev = totalAchiev;
        this.userId = userId;
        this.username = username;
    }

    public userRating() {

    }
}
