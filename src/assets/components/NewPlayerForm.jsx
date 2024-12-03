import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPlayer } from '../../../API';

const NewPlayerForm = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        breed: '',
        status: 'bench',
        imageUrl: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
    console.log( 'hello world')
        e.preventDefault();
        try {
            const newPlayer = await createPlayer(formData);
            navigate(`/players/${newPlayer.id}`);
        } catch (err) {
            setError('Error creating new player');
            console.error(err);
        }
    };

    return (
        <div className="new-player-form-container">
            <h2>Add New Player</h2>
            {error && <p className="error-message">{error}</p>}
            
            <form onSubmit={handleSubmit} className="new-player-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="breed">Breed:</label>
                    <input
                        type="text"
                        id="breed"
                        name="breed"
                        value={formData.breed}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="status">Status:</label>
                    <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                    >
                        <option value="bench">Bench</option>
                        <option value="field">Field</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input
                        type="url"
                        id="imageUrl"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        placeholder="https://example.com/image.jpg"
                    />
                </div>

                <div className="form-actions">
                    <button type="submit" className="submit-button">
                        Add Player
                    </button>
                    <button 
                        type="button" 
                        onClick={() => navigate('/')}
                        className="cancel-button"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewPlayerForm;
