package com.app.portfolio.helper;

import com.app.portfolio.dto.UserResponseDto;
import com.app.portfolio.entity.User;
import com.app.portfolio.service.userService.UserService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    // Convert User entity to UserResponseDto
    public static UserResponseDto toDto(User user) {
        return new UserResponseDto(
                user.getName(),
                user.getEmail(),
                user.getPassword(),
                user.getBio(),
                user.getProfilePic(),
                user.getLocation(),
                user.getLinkedinUrl(),
                user.getGithubUrl(),
                user.getProjects(),
                user.getSkills(),
                user.getExperiences(),
                user.getEducationList(),
                user.getContacts(),
                user.getCertificates()
        );
    }


    // Convert UserResponseDto to User entity
    public static User toEntity(UserResponseDto userResponseDto, User user) {
        user.setEmail(user.getEmail());
        user.setBio(userResponseDto.getBio());
        user.setProfilePic(userResponseDto.getProfilePic());
        user.setLocation(userResponseDto.getLocation());
        user.setLinkedinUrl(userResponseDto.getLinkedinUrl());
        user.setGithubUrl(userResponseDto.getGithubUrl());

        // Update projects
        if (userResponseDto.getProjects() != null) {
            user.getProjects().clear();  // Clear the existing collection
            userResponseDto.getProjects().forEach(project -> project.setUser(user));
            user.getProjects().addAll(userResponseDto.getProjects());
        }

        // Update skills
        if (userResponseDto.getSkills() != null) {
            user.getSkills().clear();  // Clear the existing collection
            userResponseDto.getSkills().forEach(skill -> skill.setUser(user));
            user.getSkills().addAll(userResponseDto.getSkills());
        }

        // Update experiences
        if (userResponseDto.getExperiences() != null) {
            user.getExperiences().clear();  // Clear the existing collection
            userResponseDto.getExperiences().forEach(experience -> experience.setUser(user));
            user.getExperiences().addAll(userResponseDto.getExperiences());
        }

        // Update education list
        if (userResponseDto.getEducationList() != null) {
            user.getEducationList().clear();  // Clear the existing collection
            userResponseDto.getEducationList().forEach(education -> education.setUser(user));
            user.getEducationList().addAll(userResponseDto.getEducationList());
        }

        // Update contacts
        if (userResponseDto.getContacts() != null) {
            user.getContacts().clear();  // Clear the existing collection
            userResponseDto.getContacts().forEach(contact -> contact.setUser(user));
            user.getContacts().addAll(userResponseDto.getContacts());
        }

        // Update certificates
        if (userResponseDto.getCertificates() != null) {
            user.getCertificates().clear();  // Clear the existing collection
            userResponseDto.getCertificates().forEach(certificate -> certificate.setUser(user));
            user.getCertificates().addAll(userResponseDto.getCertificates());
        }

        return user;
    }
}
