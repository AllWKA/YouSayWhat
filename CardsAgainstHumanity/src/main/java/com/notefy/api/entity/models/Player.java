 package com.notefy.api.entity.models;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.springframework.web.bind.annotation.CrossOrigin;

@Entity
@Table(name = "player")
public class Player implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotEmpty
	private String name;
	
	@NotNull
	private int pts;
	
	@NotEmpty
	private String img;

	@NotNull
	@ManyToOne
	@JoinColumn(name = "room_id")
	private Room room;
	
	@ManyToMany
	@JoinTable(name = "player_used_card", joinColumns = { @JoinColumn (name = "player_id") }, inverseJoinColumns = { @JoinColumn(name = "card_id") })
	private Set<Card> cards;
	
	public Player(@NotEmpty String name, @NotNull int pts, @NotEmpty String img, @NotNull Room room) {
		this.name = name;
		this.pts = pts;
		this.img = img;
		this.room = room;
	}

	public Player() {
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getPts() {
		return pts;
	}

	public void setPts(int pts) {
		this.pts = pts;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}
	
	
	public Room getRoom() {
		return this.room;
	}

	public void setRoom_id(Room room) {
		this.room = room;
	}

	public Set<Card> getCards() {
		return cards;
	}

	public void setCards(Set<Card> cards) {
		this.cards = cards;
	}

	
	
	
	
	
	

	
}
