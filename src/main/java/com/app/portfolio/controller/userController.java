package com.app.portfolio.controller;

import com.app.portfolio.constants.CommonConstants;
import com.app.portfolio.constants.RequestMappingConstants;
import com.app.portfolio.entity.User;
import com.app.portfolio.model.UserResult;
import com.app.portfolio.service.userService.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(RequestMappingConstants.USERAPIVERSION)
public class userController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = RequestMappingConstants.GETUSER, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public ResponseEntity<?> getUser(@RequestParam("emailId") String emailId) {

        User user = userService.findByEmail(emailId);

        if (user == null) {
            return new ResponseEntity<>(new UserResult<>(user, HttpStatus.NOT_FOUND, CommonConstants.EXCEPTION), HttpStatus.NOT_FOUND);
        } else {
            return ResponseEntity.ok(new UserResult<>(user, HttpStatus.OK, CommonConstants.SUCCESS));

        }
    }
}
