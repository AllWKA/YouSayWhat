package com.notefy.api.entity.models;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
@Entity
@Table(name = "room")
public class Room implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "max_player")
	private int maxPlayer;
	
	@Column(name = "tta")
	private int tta;
	
	public Room(int maxPlayer,  int tta) {
		this.maxPlayer = maxPlayer;
		this.tta = tta;
	}

	public Room() {
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getMaxPlayer() {
		return maxPlayer;
	}

	public void setMaxPlayer(int maxPlayer) {
		this.maxPlayer = maxPlayer;
	}

	public int getTta() {
		return tta;
	}

	public void setTta(int tta) {
		this.tta = tta;
	}
	
	
	
}
