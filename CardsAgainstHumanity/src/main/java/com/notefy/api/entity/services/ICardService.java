package com.notefy.api.entity.services;

import java.util.List;

import com.notefy.api.entity.models.Card;

public interface ICardService {
	public Card get(long id);
	public List<Card> getAll();
	public void post(Card card);
	public void put(Card card, long id);
	public void delete(long id);
}
