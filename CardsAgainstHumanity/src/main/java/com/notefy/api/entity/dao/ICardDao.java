package com.notefy.api.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.notefy.api.entity.models.Card;

public interface ICardDao extends CrudRepository<Card, Long>{
}
