package com.app.portfolio.dao.userDao;

import com.app.portfolio.dto.UserResponseDto;
import com.app.portfolio.entity.User;
import com.app.portfolio.helper.UserMapper;
import com.app.portfolio.repository.userRepository.UserRepository;
import jakarta.persistence.EntityExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class UserDao {

    @Autowired
    private UserRepository userRepository;


    public User findByEmail(String emailId) {
        return userRepository.findByEmail(emailId).orElseThrow(EntityExistsException::new);
    }

    public User updateUser(UserResponseDto userResponseDto, String emailId) {
        Optional<User> user = userRepository.findByEmail(emailId);
        User updateUser = UserMapper.toEntity(userResponseDto, user.get());
        return userRepository.save(updateUser);
    }
}
