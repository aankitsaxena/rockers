package com.roomManagement.rockers.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.roomManagement.rockers.models.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {

}
