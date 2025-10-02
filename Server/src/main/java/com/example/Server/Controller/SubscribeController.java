package com.example.Server.Controller;

import com.example.Server.model.Subscribe;
import com.example.Server.service.SubscribeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
@CrossOrigin(origins = "http://localhost:5173")
public class SubscribeController {

    @Autowired
    private SubscribeService subscribeService;

    @GetMapping("/subscribe")
    public List<Subscribe> getSubscribes(){
        return subscribeService.getSubscribes();
    }

    @PostMapping("/subscribe")
    public Subscribe createSubscribe(@RequestBody Subscribe subscribe){
        return subscribeService.addSubscribe(subscribe);
    }
}
