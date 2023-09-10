import React, { useEffect, useState } from 'react';
import { getAllTrains, getAuthToken } from '../api';
import { Link } from 'react-router-dom';
<Link to={'/train/${train.trainNumber}'}>View Details</Link>
function TrainList() {
  const [trains, setTrains] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    // Get Auth Token and set it in the state
    // Normally, you should store the token securely and not in the state
    const fetchToken = async () => {
      const authData = { /* your auth data */ };
      const token = await getAuthToken(authData);
      setToken(token);
    };
    fetchToken();
  }, []);

  useEffect(() => {
    // Fetch trains once the token is available
    const fetchTrains = async () => {
      const trainData = await getAllTrains(token);
      // TODO: Implement sorting logic here
      setTrains(trainData);
    };

    if (token) {
      fetchTrains();
    }
  }, [token]);

  return (
    <div>
      {/* Your train listing UI here */}
    </div>
  );
}

export default TrainList;