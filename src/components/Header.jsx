import '../styles/Header.css';

function Header({ score, bestScore }) {
  return (
    <header className="header">
      <h1>Pokémon Memory Game</h1>
      <div className="scores">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </header>
  );
}

export default Header;