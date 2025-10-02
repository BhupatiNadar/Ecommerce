package com.example.Server.Controller;

import com.example.Server.model.Products;
import com.example.Server.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductsController {

    @Autowired
    ProductService productService;

    @GetMapping("/products")
    public List<Products> getProducts(){
        return productService.getProducts();
    }
}
