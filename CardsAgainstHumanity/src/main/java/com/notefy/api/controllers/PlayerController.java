package com.notefy.api.controllers;

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
import com.notefy.api.entity.models.Player;
import com.notefy.api.entity.services.IPlayerService;

@CrossOrigin(origins = {"*","http:/localhost:8100"})
@RestController
public class PlayerController {

	@Autowired
	IPlayerService playerService;
	
	@GetMapping("/players")
	public List<Player> getAllPlayers(){
		return playerService.getAll();
	}
	
	@GetMapping("/player/{id}")
	public Player getOne(@PathVariable(value = "id") long id) {
		return playerService.get(id);
	}
	
	@PostMapping("/postPlayer")
	public void add(@RequestBody Player player) {
		playerService.post(player);
	}
	
	@PutMapping("/update/{id}")
	public void updatePoints(@RequestBody Player player,@PathVariable(value = "id") long id){
		playerService.put(player, id);
	}
	
	@DeleteMapping("/player/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		playerService.delete(id);
	}
}
