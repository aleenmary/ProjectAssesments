package com.marian.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marian.demo.model.Contact;

@Repository
public interface contactRepository extends JpaRepository<Contact,Integer> {

}
