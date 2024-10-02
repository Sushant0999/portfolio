package com.app.portfolio.dto;

import com.app.portfolio.entity.*;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;

import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserResponseDto {
    private String name;
    private String email;
    private String password;
    private String bio;
    private String profilePic;
    private String location;
    private String linkedinUrl;
    private String githubUrl;
    private List<Project> projects;
    private List<Skills> skills;
    private List<Experience> experiences;
    private List<Education> educationList;
    private List<Contact> contacts;
    private List<Certificates> certificates;
}
