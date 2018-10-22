package com.notefy.api.entity.models;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "card")
public class Card implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotEmpty
	private String author;
	
	@NotEmpty
	private String desc;
	
	@NotEmpty
	private String white;
	
	/*@OneToMany(mappedBy = "cardId")
	private Set<Player> players;*/
	
	public Card(@NotEmpty String author, @NotEmpty String desc, @NotNull String white) {
		this.author = author;
		this.desc = desc;
		this.white = white;
	}

	public Card() {
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public String isWhite() {
		return white;
	}

	public void setWhite(String white) {
		this.white = white;
	}

	/*public Set<Player> getPlayers() {
		return players;
	}

	public void setPlayers(Set<Player> players) {
		this.players = players;
	}*/

	public String getWhite() {
		return white;
	}

	

	
	
	

	
}
