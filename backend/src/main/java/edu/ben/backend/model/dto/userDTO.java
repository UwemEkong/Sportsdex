package edu.ben.backend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@ToString
@EqualsAndHashCode
@AllArgsConstructor
public class userDTO {



    Long id;
    String username;
    String password;
    String email;
    String firstname;
    String lastname;
    String favoriteteam;


    public userDTO (String firstname, String lastname, String email, String username, String password, String favoriteteam) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.username = username;
        this.password = password;
        this.favoriteteam = favoriteteam;
    }
    public userDTO(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public userDTO(String username) {
        this.username = username;
    }

    public userDTO(){}


}
