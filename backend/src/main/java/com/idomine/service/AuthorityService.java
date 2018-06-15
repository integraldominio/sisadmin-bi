package com.idomine.service;

import java.util.List;

import com.idomine.model.Authority;

public interface AuthorityService {
  List<Authority> findById(Long id);

  List<Authority> findByname(String name);

}
