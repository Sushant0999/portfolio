package com.app.portfolio.serviceImpl.authenticationServiceImpl;

import com.app.portfolio.service.authenticationService.MemberService;
import com.app.portfolio.entity.Member;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceImpl implements MemberService {
    @Override
    public Member findMember(String username) {
        return null;
    }
}
