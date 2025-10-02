package com.example.Server.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Products {

    @Id
    private int id;

    private String name;
    private String category;
    private double rating;
    private int price;

    @Column(name = "prep_time")
    private String prepTime;

    @Column(name = "cook_time")
    private String cookTime;

    @Column(name = "image_url")
    private String imageUrl;
}