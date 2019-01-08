package com.roomManagement.rockers.services;

import org.springframework.beans.factory.annotation.Autowired;

import com.roomManagement.rockers.dao.MemberDao;

public class MemberServiceImpl implements MemberService {

	@Autowired
	private MemberDao memberDao;
	
	@Override
	public void deleteMember(long id) {
		memberDao.deleteMember(id);
	}

}
