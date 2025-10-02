package com.example.Server.service;

import com.example.Server.model.Subscribe;
import com.example.Server.repository.SubscribeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubscribeService {

    @Autowired
    SubscribeRepo subscribeRepo;

    public List<Subscribe> getSubscribes(){
        return subscribeRepo.findAll();
    }

    public Subscribe addSubscribe( Subscribe subscribe){
        return subscribeRepo.save(subscribe);
    }
}
