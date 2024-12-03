import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchSinglePlayer, deletePlayer } from '../../../API';

const SinglePlayer = () => {
    const [player, setPlayer] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getPlayer() {
            try {
                const playerData = await fetchSinglePlayer(id);
                setPlayer(playerData);
            } catch (err) {
                setError('Error fetching player details');
                console.error(err);
            }
        }
        getPlayer();
    }, [id]);

    const handleDelete = async () => {
        try {
            await deletePlayer(id);
            navigate('/');
        } catch (err) {
            setError('Error deleting player');
            console.error(err);
        }
    };

    if (error) return <div>Error: {error}</div>;
    if (!player) return <div>Loading...</div>;

    return (
        <div className="single-player-container">
            <h2>{player.name}</h2>
            <img src={player.imageUrl} alt={player.name} className="player-image" />
            <div className="player-details">
                <p>ID: #{player.id}</p>
                <p>Breed: {player.breed}</p>
                <p>Status: {player.status}</p>
                <p>Team: {player.teamId ? player.teamId : 'Not assigned'}</p>
            </div>
            <div className="player-actions">
                <button onClick={() => navigate('/')}>Back to All Players</button>
                <button onClick={handleDelete} className="delete-button">
                    Remove Player
                </button>
            </div>
        </div>
    );
};

export default SinglePlayer;
