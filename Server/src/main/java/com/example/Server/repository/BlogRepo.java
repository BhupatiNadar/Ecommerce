package com.example.Server.repository;

import com.example.Server.model.Blogs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  BlogRepo extends JpaRepository<Blogs, Integer> {
}
