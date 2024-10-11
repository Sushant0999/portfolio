package com.app.portfolio.serviceImpl.userServiceImpl;

import com.app.portfolio.dao.userDao.UserDao;
import com.app.portfolio.dto.UserResponseDto;
import com.app.portfolio.entity.User;
import com.app.portfolio.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class userServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public User findByEmail(String emailId) {
        return userDao.findByEmail(emailId);
    }

    @Override
    public UserResponseDto updateUser(UserResponseDto userResponseDto, String emailId) {
        return userDao.updateUser(userResponseDto, emailId);
    }
}
