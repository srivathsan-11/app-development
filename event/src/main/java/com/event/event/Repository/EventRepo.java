package com.event.event.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.event.event.Model.Event;


public interface EventRepo extends JpaRepository<Event,Integer> {

}