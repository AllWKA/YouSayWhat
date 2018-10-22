package com.notefy.api.entity.services;

import java.util.List;

import com.notefy.api.entity.models.Room;

public interface IRoomService {
	public Room get(long id);
	public List<Room> getAll();
	public void post(Room room);
	public void put(Room room, long id);
	public void delete(long id);
}
