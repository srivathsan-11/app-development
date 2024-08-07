package com.event.event.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.event.event.Model.User;


public interface UserRepo extends JpaRepository<User,Integer> {

}
