import React from 'react';
import { useState, useEffect } from 'react';

const HealthAPI = process.env.HealthEndpoint;

export default function Health() {
  const [health, setHealth] = useState<string>();
  const [error, setError] = useState<unknown>();
  useEffect(() => {
    const getHealth = async () => {
      try {
        const res = await fetch(`${HealthAPI}`);
        const data = await res.json();
        setHealth(data);
      } catch (error) {
        setError(error);
      }
    }
    getHealth();
  }, [])
  if (error) {
    return <>Something went wrong:{error}</>
  }
  return (
    <div>
      <p>
        {health}
      </p>
    </div>
  );
};