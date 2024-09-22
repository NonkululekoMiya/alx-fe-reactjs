import React, { useState } from 'react';
import { fetchUserData } from './services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === 'username') setUsername(value);
        if (id === 'location') setLocation(value);
        if (id === 'minRepos') setMinRepos(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const data = await fetchUserData(username, location, minRepos, currentPage);
            setUsers(data.items);
            setTotalPages(Math.ceil(data.total_count / 30)); // GitHub API returns 30 results per page by default
        } catch (err) {
            setError('Looks like we can\'t find any users');
        } finally {
            setLoading(false);
        }
    };

    const loadMore = async () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
            await handleSubmit(); // Fetch next page
        }
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Enter GitHub Username"
                    value={username}
                    onChange={handleInputChange}
                    id="username"
                    className="p-2 border border-gray-300 rounded-md"
                    required
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={handleInputChange}
                    id="location"
                    className="p-2 border border-gray-300 rounded-md"
                />
                <input
                    type="number"
                    placeholder="Minimum Repositories"
                    value={minRepos}
                    onChange={handleInputChange}
                    id="minRepos"
                    className="p-2 border border-gray-300 rounded-md"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                    Search
                </button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {users.length > 0 && users.map(user => (
                <div key={user.id} className="mt-4 border border-gray-300 p-4 rounded-md">
                    <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full" />
                    <h3 className="text-lg font-semibold">{user.login}</h3>
                    <p>Location: {user.location || 'N/A'}</p>
                    <p>Repositories: {user.public_repos}</p>
                    <a href={user.html_url} className="text-blue-500 hover:underline">View Profile</a>
                </div>
            ))}
            {currentPage < totalPages && (
                <button onClick={loadMore} className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                    Load More
                </button>
            )}  
        </div>
    );
};

export default Search;
