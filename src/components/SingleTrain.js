import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleTrain, getAuthToken } from '../api';

function SingleTrain() {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    // Get Auth Token and set it in the state
    const fetchToken = async () => {
      const authData = { /* your auth data */ };
      const token = await getAuthToken(authData);
      setToken(token);
    };
    fetchToken();
  }, []);

  useEffect(() => {
    const fetchTrain = async () => {
      const trainData = await getSingleTrain(trainNumber, token);
      setTrain(trainData);
    };

    if (token) {
      fetchTrain();
    }
  }, [trainNumber, token]);

  return (
    <div>
      {/* Your single train UI here */}
    </div>
  );
}

export default SingleTrain;