import { useState, useEffect } from 'react';
import { fetchPokemon } from './utils/api';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import './styles/App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    const loadCards = async () => {
      const pokemon = await fetchPokemon();
      setCards(pokemon);
    };
    loadCards();
  }, []);

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      // Game over
      setScore(0);
      setClickedCards([]);
    } else {
      // Correct guess
      const newScore = score + 1;
      setScore(newScore);
      setClickedCards([...clickedCards, id]);
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
    }
    // Shuffle cards
    setCards([...cards].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="app">
      <Header score={score} bestScore={bestScore} />
      <GameBoard cards={cards} onCardClick={handleCardClick} />
    </div>
  );
}

export default App;