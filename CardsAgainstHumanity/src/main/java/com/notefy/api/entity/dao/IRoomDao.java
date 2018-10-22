package com.notefy.api.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.notefy.api.entity.models.Room;

public interface IRoomDao extends CrudRepository<Room, Long>{

}
