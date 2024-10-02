package com.app.portfolio.dto;

import com.app.portfolio.entity.*;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Data
public class RegisterUserDto {
    private String email;
    private String password;
    private String name;
//    private String bio;
//    private String profilePic;
//    private String location;
//    private String linkedinUrl;
//    private String githubUrl;
//    private List<Project> projects;
//    private List<Skills> skills;
//    private List<Experience> experiences;
//    private List<Education> educationList;
//    private List<Contact> contacts;
//    private List<Certificates> certificates;
}



