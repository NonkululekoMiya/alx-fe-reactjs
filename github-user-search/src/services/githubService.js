import axios from 'axios';

const API_URL = 'https://api.github.com/users';

export const getUser = async (username, location, minRepos) => {
  try {
    const response = await axios.get(`${API_URL}/${username}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export const fetchUserData = async (username) => {
    return await getUser(username);
  };