package edu.ben.backend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@ToString
@EqualsAndHashCode
public class userDTO {

    String firstName;
    String lastName;
    String email;
    String username;
    String password;

    public userDTO (String firstName, String lastName, String email, String username, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
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

    }
}
