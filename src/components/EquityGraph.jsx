import React from 'react'
import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Area,
    ComposedChart,
    Legend,
    Bar,
} from 'recharts';

function EquityGraph() {
    const data = [{
        dis: 'name',
        amount: '70'
    }]
    return (
        <>
            <div className='text-black'>
                the edjh jkjdhkjehd
            </div>
            <ResponsiveContainer width="100%">
                <ComposedChart
                    layout="vertical"
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    {/* <XAxis type="number" /> */}
                    <YAxis dataKey="dis" type="category" scale="band" />
                    <Tooltip />
                    <Legend />
                    <Area dataKey="amount" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                    {/* <Line dataKey="uv" stroke="#ff7300" /> */}
                </ComposedChart>
            </ResponsiveContainer>
        </>
    )
}

export default EquityGraph
