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

    public userRating (long userId, int totalAchiev) {
        this.totalAchiev = totalAchiev;
        this.userId = userId;
    }

    public userRating() {

    }
}
