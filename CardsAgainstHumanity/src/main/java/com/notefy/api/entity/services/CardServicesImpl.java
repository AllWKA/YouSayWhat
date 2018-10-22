package com.notefy.api.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.notefy.api.entity.dao.ICardDao;
import com.notefy.api.entity.models.Card;

@Service
public class CardServicesImpl implements ICardService{
	
	@Autowired
	private ICardDao cardDao;

	@Override
	public Card get(long id) {
		return cardDao.findById(id).get();
	}

	@Override
	public List<Card> getAll() {
		return (List<Card>) cardDao.findAll();
	}

	@Override
	public void post(Card card) {
		cardDao.save(card);
	}

	@Override
	public void put(Card card, long id) {
		cardDao.findById(id).ifPresent((x)->{
			card.setId(id);
			cardDao.save(card);
		});
		
	}

	@Override
	public void delete(long id) {
		cardDao.deleteById(id);
	}

}
