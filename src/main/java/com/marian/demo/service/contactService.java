package com.marian.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marian.demo.model.Contact;
import com.marian.demo.repository.contactRepository;

@Service
public class contactService {
	@Autowired
	public contactRepository contactRepo;
	
	public List<Contact> GetAllContacts() {
		return contactRepo.findAll();
	}
	
	public String saveContact(Contact contact) {
		contactRepo.save(contact);
		return "New contact added";
	}

}
