package com.notefy.api.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.notefy.api.entity.models.Player;

public interface IPlayerDao extends CrudRepository<Player, Long>{

}
