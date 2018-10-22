package com.notefy.api.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.notefy.api.entity.dao.IRoomDao;
import com.notefy.api.entity.models.Room;

@Service
public class RoomServiceImpl implements IRoomService{

	@Autowired
	private IRoomDao roomDao;
	
	@Override
	public Room get(long id) {
		return roomDao.findById(id).get();
	}

	@Override
	public List<Room> getAll() {
		return (List<Room>) roomDao.findAll();
	}

	@Override
	public void post(Room room) {
		roomDao.save(room);
	}

	@Override
	public void put(Room room, long id) {
		roomDao.findById(id).ifPresent((x)->{
			room.setId(id);
			roomDao.save(room);
		});
	}

	@Override
	public void delete(long id) {
		roomDao.deleteById(id);
	}

}
