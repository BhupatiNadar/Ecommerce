package com.example.Server.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Blogs {
    @Id
    private int id;

    private String title;

    private String content;

    private Date date;

    @Column(name="image")
    private String imageUrl;
}
