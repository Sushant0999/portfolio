package com.app.portfolio.serviceImpl.authenticationServiceImpl;

import com.app.portfolio.dto.JwtRequest;
import com.app.portfolio.dto.RegisterUserDto;
import com.app.portfolio.entity.Member;
import com.app.portfolio.entity.User;
import com.app.portfolio.repository.MemberRepository;
import com.app.portfolio.repository.userRepository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    @Autowired
    private  MemberRepository memberRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private  PasswordEncoder passwordEncoder;

    @Autowired
    private  AuthenticationManager authenticationManager;



    public User signup(RegisterUserDto input) {
        User user = new User();

        user.setName(input.getFullName());
        user.setEmail(input.getEmail());
        user.setPassword(passwordEncoder.encode(input.getPassword()));
        return userRepository.save(user);
    }

    public Member authenticate(JwtRequest input) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        input.getUsername(),
                        input.getPassword()
                )
        );

        return memberRepository.findByEmail(input.getUsername())
                .orElseThrow();
    }
}
