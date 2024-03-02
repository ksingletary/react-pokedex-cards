import React, { useState } from "react";

import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hooks/useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function PlayingCardList() {


  let [cards, setCards] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");

  console.log('cards',cards)
  // setCards accepts an array of additional url arguments
  const addCard = () => ([...cards],setCards())
  
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => ( <PlayingCard key={cardData.id} front={cardData.data.cards[0].image} /> ))}
      </div>
    </div>
  );
}

PlayingCardList.defaultProps = {};

export default PlayingCardList;
