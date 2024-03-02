// a custom hook to flip a card from front to back

// Both the *PokemonCard* and the *PlayingCard* components can be flipped over when clicked on. You may have noticed that there is some duplicate code in these components. Create a *hooks.js* file in *src/*, and in that file write a custom hook called *useFlip* which will hold the business logic for flipping any type of card.

// *useFlip* doesn’t need to take an argument, and similar to *useState*, it should return an array with two elements. The first element is the current flip state of the card, and the second element is a function that will toggle the flip state.

// Once you’ve written this hook, refactor *PokemonCard* and *PlayingCard* to use this custom hook.

import {useState} from 'react';

const useFlip = (initialState=true) => {
    const [state, setState] = useState(initialState);
    const flipCard =() =>{
        setState(state => !state)
    }
    return [state, flipCard]
}
export default useFlip