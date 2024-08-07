package com.event.event.Model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class User {
     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private int id;
     private String name;
     private String email;
     private String password;
     private String confrimpassword;
     private String gender;
     private String role;
     private String dob;
     private String mobilenumber;
     private String state;
     private String country;
     private String languages;
}
