'use client'

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components for Chart.js
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend);

export const WeeklyRecap = () => {
    const [data, setData] = useState({ visits: [], purchases: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Replace with your actual API endpoint
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.example.com/weekly-recap'); // Your API endpoint here
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="text-white">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500">Error: {error.message}</div>;
    }

    // Sample data structure for visits and purchases
    const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Website Visits',
                data: data.visits,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
            {
                label: 'Purchases',
                data: data.purchases,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true,
            },
        ],
    };

    return (
        <div className="bg-gray-800 p-4 rounded">
            <h2 className="text-xl font-bold mb-4">Weekly Recap</h2>
            <div className="text-white mb-4">
                <p className="mb-2">Website Visits: <span className="font-bold">{data.visits.reduce((a, b) => a + b, 0)}</span></p>
                <p className="mb-2">Purchases: <span className="font-bold">{data.purchases.reduce((a, b) => a + b, 0)}</span></p>
            </div>
            <Line data={chartData} />
        </div>
    );
};