const COHORT = '2408-ftb-et-web-am';
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`;

export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${API_URL}/players`);
        const result = await response.json();
        return result.data.players;
    } catch (error) {
        console.error('Error fetching players:', error);
        throw error;
    }
};

export const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${API_URL}/players/${playerId}`);
        const result = await response.json();
        return result.data.player;
    } catch (error) {
        console.error('Error fetching single player:', error);
        throw error;
    }
};

export const deletePlayer = async (playerId) => {
    try {
        const response = await fetch(`${API_URL}/players/${playerId}`, {
            method: 'DELETE',
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error deleting player:', error);
        throw error;
    }
};

export const createPlayer = async (playerData) => {
    try {
        const response = await fetch(`${API_URL}/players`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(playerData),
        });
        const result = await response.json();
        return result.data.player;
    } catch (error) {
        console.error('Error creating player:', error);
        throw error;
    }
}; 