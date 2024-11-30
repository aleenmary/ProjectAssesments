package com.marian.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.marian.demo.model.Contact;

import com.marian.demo.service.contactService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class contactController {
	@Autowired
	public contactService contactSr;
	
	@GetMapping("/api/contacts")
	public List<Contact> display(){
		return contactSr.GetAllContacts();
	}

	@PostMapping("/api/contacts")
	public String save(@RequestBody Contact contact) {
		return contactSr.saveContact(contact);
	}
}
