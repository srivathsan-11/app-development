package com.event.event.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Event {
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Integer eventid;
 private String eventname;
 
}
