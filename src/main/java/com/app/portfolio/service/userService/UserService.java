package com.app.portfolio.service.userService;

import com.app.portfolio.dto.UserResponseDto;
import com.app.portfolio.entity.User;
import org.springframework.http.ResponseEntity;

public interface UserService {
    User findByEmail(String emailId);
    User updateUser(UserResponseDto userResponseDto, String emailId);
}
