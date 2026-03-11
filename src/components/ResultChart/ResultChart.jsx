import React from 'react';
import { Bar, BarChart, Line, LineChart, RadialBar, RadialBarChart, Tooltip, XAxis, YAxis } from 'recharts';

const resultData = [
  {
    "id": 1,
    "name": "Rahim",
    "physics": 55,
    "chemistry": 38,
    "math": 82
  },
  {
    "id": 2,
    "name": "Karim",
    "physics": 74,
    "chemistry": 81,
    "math": 69
  },
  {
    "id": 3,
    "name": "Ayesha",
    "physics": 90,
    "chemistry": 88,
    "math": 95
  },
  {
    "id": 4,
    "name": "Nusrat",
    "physics": 67,
    "chemistry": 72,
    "math": 70
  },
  {
    "id": 5,
    "name": "Sakib",
    "physics": 80,
    "chemistry": 76,
    "math": 84
  },
]

const ResultChart = () => {
    return (
        <div className='flex gap-10'>
          {/* Line Chart */}
          <div>
            <LineChart width={400} height={300} data={resultData}>

          <Line dataKey={'physics'} stroke='red'></Line>
          <Line dataKey={'chemistry'} stroke='green'></Line>
          <Line dataKey={'math'} stroke='blue'></Line>
          <XAxis dataKey={'name'}></XAxis>
          <YAxis></YAxis>
          </LineChart>
          </div>
          <div>
            <BarChart width={400} height={300} data={resultData}>
              <Bar dataKey={'physics'}></Bar>
              <Bar dataKey={'chemistry'}></Bar>
              <Bar dataKey={'math'}></Bar>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            </BarChart>
          </div>
          <div>
            <RadialBarChart height={300} width={400} data={resultData} barSize={14}>
              <RadialBar dataKey={'physics'} fill='red'></RadialBar>
              <Tooltip></Tooltip>
              <RadialBar dataKey={'chemistry'} fill='green'></RadialBar>
              <RadialBar dataKey={'math'} fill='blue'></RadialBar>
              <XAxis dataKey={'name'}></XAxis>
              <YAxis></YAxis>
            </RadialBarChart>
              
          </div>
        </div>
    );
};

export default ResultChart;