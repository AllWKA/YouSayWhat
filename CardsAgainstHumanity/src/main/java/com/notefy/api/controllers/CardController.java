package com.notefy.api.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.notefy.api.entity.models.Card;
import com.notefy.api.entity.services.ICardService;


@CrossOrigin(origins = {"*","http:/localhost:8100"})
@RestController
public class CardController{
	
	@Autowired
	ICardService cardService;
	
	@GetMapping("/cards")
	public List<Card> getAllCards(){
		return cardService.getAll();
	}
	
	@GetMapping("/card/{id}")
	public Card getOne(@PathVariable(value = "id") long id) {
		return cardService.get(id);
	}
	
	@PostMapping("/postCard")
	public void add(@RequestBody Card card) {
		System.out.println("\nauthor:" + card.getAuthor() + "\ndesc:" + card.getDesc() + "\nwhite:" + card.isWhite()+"\n");
		cardService.post(card);
		
	}
	
	@PutMapping("/card/{id}")
	public void update(@RequestBody Card card,@PathVariable(value = "id") long id) {
		cardService.put(card, id); 	
	}
	
	@GetMapping("/whites")
	public List<Card> getWhites() {
		List <Card> result = new ArrayList<Card>();
		for (int i = 0; i < cardService.getAll().size(); i++) {
			if (cardService.getAll().get(i).isWhite().equals("true")) {
				result.add(cardService.getAll().get(i));
			}
		}
		return result;
	}
	
	@GetMapping("/blacks")
	public List<Card> getBlacks() {
		List <Card> result = new ArrayList<Card>();
		for (int i = 0; i < cardService.getAll().size(); i++) {
			if (!cardService.getAll().get(i).isWhite().equals("true")) {
				result.add(cardService.getAll().get(i));
			}
		}
		return result;
	}
	
	@DeleteMapping("/card/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		cardService.delete(id);
	}
}
