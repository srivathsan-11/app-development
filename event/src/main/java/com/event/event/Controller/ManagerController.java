package com.event.event.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.event.event.Model.Manager;
import com.event.event.Service.ManagerService;

@RestController
public class ManagerController {
     @Autowired
     ManagerService managerService;

     @PostMapping("/Manager/insert")
     public Manager insertManager(@RequestBody Manager manager) {
        return managerService.manager(manager);
     }

     @GetMapping("/Manager/{id}")
     public Optional<Manager> getManager(@PathVariable int id) {
        return managerService.getManagerbyid(id);
     }
}
