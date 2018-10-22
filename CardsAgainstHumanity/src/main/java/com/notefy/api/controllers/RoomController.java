package com.notefy.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.notefy.api.entity.models.Room;
import com.notefy.api.entity.services.IRoomService;

@CrossOrigin(origins = {"*"})
@RestController
public class RoomController {
	
	@Autowired
	IRoomService roomService;
	
	@GetMapping("/rooms")
	public List<Room> getAllcards(){
		return roomService.getAll();
	}
	
	@GetMapping("/room/{id}")
	public Room getOne(@PathVariable(value = "id") long id) {
		return roomService.get(id);
	}
	
	@PostMapping("/postRoom")
	public void add(@RequestBody Room room) {
		roomService.post(room);
	}
	
	@DeleteMapping("/room/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		roomService.delete(id);
	}
}
