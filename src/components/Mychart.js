import React from 'react';
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from "recharts";
import { data } from './Mydatalistpage';


function Mychart() {
  return (
    <BarChart width={1200} height={500} data={data} style={{border:'5px solid green'}}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
      <Bar dataKey="amt" fill="red" />
    </BarChart>
  )
}

export default Mychart