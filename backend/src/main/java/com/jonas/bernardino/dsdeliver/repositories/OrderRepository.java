package com.jonas.bernardino.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jonas.bernardino.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
