package com.app.portfolio.dao.userDao;

import com.app.portfolio.entity.User;
import com.app.portfolio.repository.userRepository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserDao {

    @Autowired
    private UserRepository userRepository;
    public User findByEmail(String emailId) {
       return userRepository.findByEmail(emailId);
    }
}
