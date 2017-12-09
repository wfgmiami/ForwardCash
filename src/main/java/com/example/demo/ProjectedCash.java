package com.example.demo;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Entity;

import lombok.Data;

@Data
@Entity
public class ProjectedCash{
		
	private @Id @GeneratedValue Long id;
	
	
}