package com.example.demo;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Entity;

import lombok.Data;
import lombok.AllArgsConstructor;

@Data
@Entity
@AllArgsConstructor
public class ProjectedCash{
		
	@Id @GeneratedValue 
	private Long id;
	private String date;
	private String desc1;
	private String desc2;
	private String LATFHY;
	private String LASDHYM;
	private String NTL;
	private String LAAMTTF;
	private String CA;
	private String NY;
	private String NJ;
	private String LATFINSI;
	private String LASDTF;
	
	public ProjectedCash() {}
	
	
}