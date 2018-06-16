package com.idomine.service;

import java.util.List;

import com.idomine.model.Authority;
import com.idomine.model.UserRoleName;

public interface AuthorityService {
  List<Authority> findById(Long id);

  List<Authority> findByname(UserRoleName name);

}
