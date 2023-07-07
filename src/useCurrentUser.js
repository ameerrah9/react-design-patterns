import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('/current-user');
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return user;
};

// Implement the useCurrentUser hook in src/App.js:
// const currentUser = useCurrentUser();
