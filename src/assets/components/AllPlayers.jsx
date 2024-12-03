import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllPlayers } from '../../../API';

const AllPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function getAllPlayers() {
            try {
                const playersData = await fetchAllPlayers();
                setPlayers(playersData);
            } catch (err) {
                setError('Error fetching players');
                console.error(err);
            }
        }
        getAllPlayers();
    }, []);

    if (error) return <div>Error: {error}</div>;

    return (
        <div className="players-container">
            <div className="header-section">
                <h2>All Players</h2>
                <button onClick={() => navigate('/players/new')} className="add-player-button">
                    Add New Player
                </button>
            </div>
            <div className="players-grid">
                {players.map((player) => (
                    <div key={player.id} className="player-card">
                        <h3>{player.name}</h3>
                        <img src={player.imageUrl} alt={player.name} />
                        <p>#{player.id}</p>
                        <p>Breed: {player.breed}</p>
                        <p>Status: {player.status}</p>
                        <button onClick={() => navigate(`/players/${player.id}`)}>
                            See Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllPlayers;
