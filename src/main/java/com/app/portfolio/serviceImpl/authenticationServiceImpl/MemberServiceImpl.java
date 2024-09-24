package com.app.portfolio.serviceImpl.authenticationServiceImpl;

import com.app.portfolio.entity.Member;
import com.app.portfolio.repository.MemberRepository;
import com.app.portfolio.service.authenticationService.MemberService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MemberServiceImpl implements MemberService {

    @Autowired
    private MemberRepository memberRepository;

    @Override
    public Member findMember(String username) {
        Optional<Member> member = memberRepository.findByEmail(username);
        if(member.isPresent()){
            return member.get();
        }
        else{
            return null;
        }
    }
}
