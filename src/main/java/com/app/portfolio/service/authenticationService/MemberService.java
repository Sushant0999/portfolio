package com.app.portfolio.service.authenticationService;

import com.app.portfolio.entity.Member;

public interface MemberService{
    Member findMember(String username);
}
