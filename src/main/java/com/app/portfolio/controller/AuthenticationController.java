package com.app.portfolio.controller;


import com.app.portfolio.service.authenticationService.MemberService;
import com.app.portfolio.constants.RequestMappingConstants;
import com.app.portfolio.dto.JwtRequest;
import com.app.portfolio.dto.LoginResponse;
import com.app.portfolio.dto.RegisterUserDto;
import com.app.portfolio.entity.Member;
import com.app.portfolio.helper.JwtService;
import com.app.portfolio.serviceImpl.authenticationServiceImpl.AuthenticationService;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.tags.Tags;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(RequestMappingConstants.AUTHAPIVERSION)
@Tag(name = "User authentication", description = "validate, create or update user.")
public class AuthenticationController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private MemberService memberService;


    @RequestMapping(value = RequestMappingConstants.SIGNUP, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    public ResponseEntity<Member> register(@RequestBody RegisterUserDto registerUserDto) {
        Member registeredUser = authenticationService.signup(registerUserDto);
        return ResponseEntity.ok(registeredUser);
    }

    @RequestMapping(value = RequestMappingConstants.GETTOKEN, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    public ResponseEntity<LoginResponse> authenticate(@RequestBody JwtRequest jwtRequest) {
        Member authenticatedUser = authenticationService.authenticate(jwtRequest);
        String jwtToken = jwtService.generateToken(authenticatedUser);
        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setToken(jwtToken);
        loginResponse.setExpiresIn(jwtService.getExpirationTime());
        return ResponseEntity.ok(loginResponse);
    }

}
