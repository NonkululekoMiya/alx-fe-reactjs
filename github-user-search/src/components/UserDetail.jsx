import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserData } from '../services/githubService';

const UserDetail = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await fetchUserData(username);
        setUser(userData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [username]);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>User not found!</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Username: {user.login}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <img src={user.avatar_url} alt={user.login} width="100" />
    </div>
  );
};

export default UserDetail;
