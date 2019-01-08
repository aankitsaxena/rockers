package com.roomManagement.rockers.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.roomManagement.rockers.models.Member;
import com.roomManagement.rockers.repositories.MemberRepository;
import com.roomManagement.rockers.services.MemberService;

@RestController
@RequestMapping("/api/v1/member")
public class MemberController {
	@Autowired
	private MemberRepository memberRepository;
	
	@Autowired
	private MemberService memberService;
	
	@GetMapping
	public List<Member> memberList() {
		return memberRepository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void addMember(@RequestBody Member member) {
		memberRepository.save(member);
	}
	
	@GetMapping("/{id}")
	public Member getMember(@PathVariable("id") long id) {
		return memberRepository.getOne(id);
	}
	
	@PostMapping("/{id}")
	public void delete(@PathVariable("id") long id) {
		memberService.deleteMember(id);
	}
}
