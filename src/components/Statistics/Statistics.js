import React from 'react';
import './Statistics.css'
import { useLoaderData } from 'react-router-dom';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const values = useLoaderData().data;
    return (
        <div> <h1>Below The Chart Illustrates that the Number of Quiz for Each Quiz Category.</h1>
        <div className='rechart my-5 text-center'>
           
            <LineChart width={700} height={400} data={values} >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="name" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>
        </div>
        </div>
    );
};

export default Statistics;