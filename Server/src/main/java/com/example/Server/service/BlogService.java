package com.example.Server.service;

import com.example.Server.model.Blogs;
import com.example.Server.repository.BlogRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogService {

    @Autowired
    BlogRepo blogRepo;

    public List<Blogs> getBlogs()
    {
        return blogRepo.findAll();
    }
}
