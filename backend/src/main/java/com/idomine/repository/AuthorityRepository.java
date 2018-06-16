package com.idomine.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.idomine.model.Authority;
import com.idomine.model.UserRoleName;

public interface AuthorityRepository extends JpaRepository<Authority, Long> {
  Authority findByName(UserRoleName name);
}
