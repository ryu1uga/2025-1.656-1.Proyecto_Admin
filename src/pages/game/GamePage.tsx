import { useState } from "react";
import { Link } from "react-router-dom";
import type { Game } from "../../components/game/GameList";
import "./GamePage.css";

const GamePage = () => {
    const [games, setGames] = useState<Game[]>(() => {
        const juegosGuardadosStr = localStorage.getItem("games");
        if (juegosGuardadosStr) {
            try {
                return JSON.parse(juegosGuardadosStr);
            } catch {
                return [];
            }
        }
        return [];
    });

    const deleteGame = (id: number) => {
        const actualizados = games.filter(game => game.id !== id);
        setGames(actualizados);
        localStorage.setItem("games", JSON.stringify(actualizados));
    };

    return (
        <div className="container">
            <h1 className="mb-4">Available Games</h1>

            <div className="d-flex justify-content-center mb-4">
                <Link to="/game/add" id="addGame" className="btn btn-secondary">
                    Add Game
                </Link>
            </div>

            <div className="d-grid gap-3">
                {games.map((game) => (
                    <div className="card p-3" key={game.id}>
                        <div className="d-flex justify-content-between align-items-start">
                            <div className="w-100">
                                <h5 className="mb-1">{game.name}</h5>
                                {game.description && <p className="mb-1 text-muted">{game.description}</p>}
                                <small>
                                    📷 {game.photos?.length ?? 0} photo(s) | 🎬 {game.trailers?.length ?? 0} trailer(s)
                                </small>
                            </div>
                            <div className="d-flex flex-column align-items-end ms-3">
                                <Link to="/game/details" className="btn btn-outline-info mb-2" onClick={() => localStorage.setItem("selectedGame", JSON.stringify(game))}>
                                    Details
                                </Link>
                                <Link to={`/game/edit/${game.id}`} className="btn btn-outline-primary mb-2">
                                    Edit
                                </Link>
                                <button className="btn btn-outline-danger" onClick={() => deleteGame(game.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GamePage;