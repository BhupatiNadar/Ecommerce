package com.example.Server.service;

import com.example.Server.model.LoginUser;
import com.example.Server.repository.LoginUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginUserService {
    @Autowired
    LoginUserRepo loginUserRepo;

    public List<LoginUser> getLoginUsers()
    {
        return loginUserRepo.findAll();
    }

    public LoginUser addLoginUser(LoginUser loginUser)
    {
        return loginUserRepo.save(loginUser);
    }
}
