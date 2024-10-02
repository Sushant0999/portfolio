package com.app.portfolio.controller;

import com.app.portfolio.constants.CommonConstants;
import com.app.portfolio.constants.RequestMappingConstants;
import com.app.portfolio.dto.UserResponseDto;
import com.app.portfolio.entity.User;
import com.app.portfolio.model.UserResult;
import com.app.portfolio.service.userService.UserService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(RequestMappingConstants.USERAPIVERSION)
@Tag(name = "User Operations", description = "get, create or update user details.")
public class UserController {

    @Autowired
    private UserService userService;


    @RequestMapping(value = RequestMappingConstants.GETUSER, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public ResponseEntity<?> getUser(@RequestParam("emailId") String emailId) {
        try {
            User user = userService.findByEmail(emailId);
            if (user == null) {
                return new ResponseEntity<>(new UserResult<>(user, HttpStatus.NOT_FOUND, CommonConstants.EXCEPTION), HttpStatus.NOT_FOUND);
            } else {
                return ResponseEntity.ok(new UserResult<>(user, HttpStatus.OK, CommonConstants.SUCCESS));
            }
        } catch (Exception e) {
            return new ResponseEntity<>(new UserResult<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, CommonConstants.EXCEPTION), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(value = RequestMappingConstants.UPDATEUSER, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    public ResponseEntity<?> updateUser(@RequestParam("emailId") String emailId, @RequestBody UserResponseDto userResponseDto) {
        try {
            User user = userService.findByEmail(emailId);
            if (user == null) {
                return new ResponseEntity<>(new UserResult<>(user, HttpStatus.NOT_FOUND, CommonConstants.EXCEPTION), HttpStatus.NOT_FOUND);
            } else {
                User updatedUser = userService.updateUser(userResponseDto, emailId);
                if (updatedUser == null) {
                    return new ResponseEntity<>(new UserResult<>(null, HttpStatus.INTERNAL_SERVER_ERROR, CommonConstants.EXCEPTION), HttpStatus.INTERNAL_SERVER_ERROR);
                } else {
                    return ResponseEntity.ok(new UserResult<>(user, HttpStatus.OK, CommonConstants.SUCCESS));
                }
            }
        } catch (Exception e) {
            return new ResponseEntity<>(new UserResult<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, CommonConstants.EXCEPTION), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}