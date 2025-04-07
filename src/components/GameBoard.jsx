import Card from './Card';
import '../styles/GameBoard.css';

function GameBoard({ cards, onCardClick }) {
  return (
    <div className="game-board">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          image={card.image}
          onClick={() => onCardClick(card.id)}
        />
      ))}
    </div>
  );
}

export default GameBoard;