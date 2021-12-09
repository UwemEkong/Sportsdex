package edu.ben.backend.repository;

import java.sql.*;

public class Connector {
    static Connection connection = null;

    /**
     * Connection to the database using local host url, username, and password
     * Username = "root"
     * password = "software1!"
     * Static variable Connection passed called inside method so multiple instances aren't created
     *
     * @throws ClassNotFoundException Throws if ClassNotFoundException
     * @throws SQLException           Throws if SQLException
     */
    public static void connect() throws ClassNotFoundException, SQLException {

        Class.forName("com.mysql.cj.jdbc.Driver");

        String url = "jdbc:mysql://localhost:3306/Software";
        String user1 = "root";
        String password = "flutter1!";

        connection = DriverManager.getConnection(url, user1, password);
    }
}
