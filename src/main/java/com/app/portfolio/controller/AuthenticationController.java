package com.app.portfolio.controller;


import com.app.portfolio.entity.User;
import com.app.portfolio.constants.RequestMappingConstants;
import com.app.portfolio.dto.JwtRequest;
import com.app.portfolio.dto.LoginResponse;
import com.app.portfolio.dto.RegisterUserDto;
import com.app.portfolio.helper.JwtService;
import com.app.portfolio.serviceImpl.authenticationServiceImpl.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(RequestMappingConstants.AUTHAPIVERSION)
public class AuthenticationController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationService authenticationService;


    @RequestMapping(value = RequestMappingConstants.SIGNUP, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    public ResponseEntity<?> register(@RequestBody RegisterUserDto registerUserDto) {
        User registeredUser = authenticationService.signup(registerUserDto);

        return ResponseEntity.ok(registeredUser);
    }

    @RequestMapping(value = RequestMappingConstants.GETTOKEN, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    public ResponseEntity<?> authenticate(@RequestBody JwtRequest jwtRequest) {
        User authenticatedUser = authenticationService.authenticate(jwtRequest);

        String jwtToken = jwtService.generateToken(authenticatedUser);

        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setToken(jwtToken);
        loginResponse.setExpiresIn(jwtService.getExpirationTime());

        return ResponseEntity.ok(loginResponse);
    }

}