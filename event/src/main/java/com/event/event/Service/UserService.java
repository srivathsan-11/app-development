package com.event.event.Service;

import java.lang.foreign.Linker.Option;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.event.event.Model.User;
import com.event.event.Repository.UserRepo;

@Service
public class UserService {
     @Autowired
     UserRepo userrepo;

     public  User user(User U)
     {
        return userrepo.save(U);
     }
     
      public List<User> getall()
      {
         return userrepo.findAll();
      }

      public Optional<User> getbyid(int id)
      {
         return userrepo.findById(id);
      }

      public User updateuser(User user)
      {
         return userrepo.save(user);
      }
       public void deleteuser(int id)
      {
         userrepo.deleteById(id);
      }
}
