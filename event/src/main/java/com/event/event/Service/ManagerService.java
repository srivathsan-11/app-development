package com.event.event.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.event.event.Model.Manager;
import com.event.event.Repository.ManagerRepo;

@Service
public class ManagerService {
    @Autowired
    ManagerRepo managerRepo;

     public Manager manager(Manager M)
     {
        return managerRepo.save(M);
     }

     public Optional<Manager> getManagerbyid(int id)
     {
        return managerRepo.findById(id);
     }
}
