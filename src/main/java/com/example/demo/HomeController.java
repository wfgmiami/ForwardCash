package com.example.demo;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;

@Component
public class HomeController{
	
	@RequestMapping(value="/")
	public String index() {
		return "index";
	}
}