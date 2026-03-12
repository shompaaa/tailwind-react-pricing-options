import React, { use } from 'react';
import { Bar, BarChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise)
    const marksData = marksDataRes.data;


    //Data Processing for the chart

const marksChartData = marksData.map(studentData => {
    const student = {
        id: studentData.id,
        name: studentData.name,
        physics: studentData.marks.physics,
        chemistry: studentData.marks.chemistry,
        math: studentData.marks.math
    }
    return student;
})

    return (
        <div>
            <BarChart width={500} height={300} data={marksChartData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={'chemistry'} fill='pink'></Bar>
                <Bar dataKey={'physics'} fill='magenta'></Bar>
                <Bar dataKey={'math'} fill='black'></Bar>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default MarksChart;