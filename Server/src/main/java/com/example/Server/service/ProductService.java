package com.example.Server.service;

import com.example.Server.model.Products;
import com.example.Server.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepo productRepo;

    public List<Products> getProducts(){
        return productRepo.findAll();
    }
}
