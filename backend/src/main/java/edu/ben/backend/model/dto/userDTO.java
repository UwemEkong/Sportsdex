package edu.ben.backend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@ToString
@EqualsAndHashCode
public class userDTO {

    String firstname;
    String lastname;
    String email;
    String username;
    String password;
    Long id;

    public userDTO (String firstname, String lastname, String email, String username, String password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.username = username;
        this.password = password;
    }
    public userDTO(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public userDTO(String username) {
        this.username = username;
    }

    public userDTO(Long id, String username, String password, String email, String firstname, String lastname) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;

    }
}