package com.example.Server.repository;

import com.example.Server.model.LoginUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginUserRepo extends JpaRepository<LoginUser, Integer> {
}
