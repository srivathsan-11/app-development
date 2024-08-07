package com.event.event.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.event.event.Model.Manager;


public interface ManagerRepo extends JpaRepository<Manager,Integer> {

}
