package com.idomine.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.idomine.model.Authority;

public interface AuthorityRepository extends JpaRepository<Authority, Long> {
  Authority findByName(String name);
}
