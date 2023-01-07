import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useFetchedData from '../../Hooks/useFetchedData';
import './Analytics.css';


const Analytics = () => {
    const url = "data.json";
    const [data, setData] = useFetchedData(url);
    
    return (
        <div>
            <div className='analytics-header'>
                <h1>Our Business Analytics for Shareholders</h1>
            </div>

            <div className='analytics-container'>
               
                <ResponsiveContainer width="85%" height={250}>
                    <LineChart  data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis dataKey="sell" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            
                    </LineChart>

                </ResponsiveContainer>

                <ResponsiveContainer width="85%" height={250}>
                    <ComposedChart  data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        
                        <XAxis dataKey="month" />
                        <YAxis dataKey="investment" />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Bar dataKey="investment" barSize={30} fill="#413ea0" />
                        <Line type="monotone" dataKey="revenue" stroke="#ff7300" />

                    </ComposedChart>

                </ResponsiveContainer>
            </div>
            
        </div>
    );
};

export default Analytics;