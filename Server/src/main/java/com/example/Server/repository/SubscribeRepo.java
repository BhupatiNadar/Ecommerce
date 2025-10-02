package com.example.Server.repository;

import com.example.Server.model.Subscribe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubscribeRepo extends JpaRepository<Subscribe,Integer> {
}
