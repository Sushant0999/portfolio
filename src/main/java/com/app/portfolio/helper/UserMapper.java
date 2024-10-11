package com.app.portfolio.helper;

import com.app.portfolio.dto.UserResponseDto;
import com.app.portfolio.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    // Convert User entity to UserResponseDto
    public static UserResponseDto toDto(User user) {
        UserResponseDto userResponseDto = new UserResponseDto();
        userResponseDto.setName(user.getName());
        userResponseDto.setEmail(user.getEmail());
        userResponseDto.setBio(user.getBio());
        userResponseDto.setProfilePic(user.getProfilePic());
        userResponseDto.setLocation(user.getLocation());
        userResponseDto.setLinkedinUrl(user.getLinkedinUrl());
        userResponseDto.setGithubUrl(user.getGithubUrl());
        userResponseDto.setProjects(user.getProjects());
        userResponseDto.setSkills(user.getSkills());
        userResponseDto.setExperiences(user.getExperiences());
        userResponseDto.setEducationList(user.getEducationList());
        userResponseDto.setContacts(user.getContacts());
        userResponseDto.setCertificates(user.getCertificates());
        return userResponseDto;
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
