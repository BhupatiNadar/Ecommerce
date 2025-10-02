package com.example.Server.Controller;

import com.example.Server.model.LoginUser;
import com.example.Server.service.LoginUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
@CrossOrigin(origins = "http://localhost:5173")
public class LoginUserController {
    @Autowired
    LoginUserService loginUserService;

    @GetMapping("/LoginUser")
    public List<LoginUser> getLoginUser()
    {
       return loginUserService.getLoginUsers();
    }

    @PostMapping("/LoginUser")
    public LoginUser createLoginUser(@RequestBody LoginUser loginUser){
        return loginUserService.addLoginUser(loginUser);
    }
}
