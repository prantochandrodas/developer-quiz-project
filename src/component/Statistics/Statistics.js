import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const getData = useLoaderData();
    const data = getData.data;
    return (
        <div>
            <h2 className='text-center my-4'>Statistics of Total </h2>
             <ResponsiveContainer width="95%" height={400}>
             <LineChart  width={500} height={400} data={data}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
             </ResponsiveContainer>
            

        </div>
    );
};

export default Statistics;