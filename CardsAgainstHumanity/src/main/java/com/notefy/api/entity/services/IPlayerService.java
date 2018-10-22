package com.notefy.api.entity.services;

import java.util.List;

import com.notefy.api.entity.models.Player;

public interface IPlayerService {
	public Player get(long id);
	public List<Player> getAll();
	public void post(Player player);
	public void put(Player player, long id);
	public void delete(long id);
}
