package com.app.portfolio.service;

import com.app.portfolio.dto.UserResponseDto;
import com.app.portfolio.entity.User;
import org.springframework.http.ResponseEntity;

public interface UserService {
    User findByEmail(String emailId);
    UserResponseDto updateUser(UserResponseDto userResponseDto, String emailId);
}
