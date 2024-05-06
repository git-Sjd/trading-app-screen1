import React from 'react';
import riskicon from '../components/images/riskIcon.png';
import upArrow from '../components/images/upArrow.png';
import arrows from '../components/images/arrows.png';
import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Area,
} from 'recharts';

import { format, parseIso, subDays, sunDays } from 'date-fns';

function NewChart() {
    const timeline = ['1M', '6M', '1Y', '2Y', 'MAX', 'SIP'];

    const data = [];
    for (let num = 60; num >= 0; num--) {
        data.push({
            date: subDays(new Date(), num).toISOString().substring(0, 10),
            value: 1 + Math.random()
        })
    }
    console.log(data, 'data')

    return (
        <div className='mt-12 mx-auto' style={{ width: '1440px', height: '1089px', backgroundColor: '#1F79E0' }}>
            <div className='flex justify-between px-20 pt-48' >
                <div className='space-y-2'>
                    <div className='text-xl font-normal font-hind' >Plan</div>
                    <div className='font-medium text-2xl' style={{ fontFamily: 'Futura' }}>Growth</div>
                </div>
                <div style={{ backgroundColor: '#92B2D7', width: '1px', height: '60px' }}></div>
                <div className='space-y-2'>
                    <div className='text-xl font-normal font-hind' >Expense Ratio</div>
                    <div className='font-medium text-2xl' style={{ fontFamily: 'Futura' }}>1.34%</div>
                </div>
                <div style={{ backgroundColor: '#92B2D7', width: '1px', height: '60px' }}></div>
                <div className='space-y-2'>
                    <div className='text-xl font-normal font-hind' >Riskometer</div>
                    <div className='flex border font-medium text-lg rounded-2xl space-x-2 px-3' style={{ color: '#FFA2A2', borderColor: '#5CA8FF' }}> <img src={riskicon}></img>High Risk</div>
                </div>
                <div style={{ backgroundColor: '#92B2D7', width: '1px', height: '60px' }}></div>
                <div className='space-y-2'>
                    <div className='text-xl font-normal font-hind' >Fund Size</div>
                    <div className='font-medium text-2xl' style={{ fontFamily: 'Futura' }}>₹ 939.52 Cr</div>
                </div>
                <div style={{ backgroundColor: '#92B2D7', width: '1px', height: '60px' }}></div>
                <div className='space-y-2'>
                    <div className='text-xl font-normal font-hind'>NAV-Growth</div>
                    <div className='font-normal text-2xl' style={{ fontFamily: 'Futura' }}>₹ 87.7833</div>
                    <div className='text-sm font-hind' style={{ color: '#CBCBCB' }}>As on 04-Apr-2024</div>
                </div>
                <div style={{ backgroundColor: '#92B2D7', width: '1px', height: '60px' }}></div>
                <div className='space-y-2'>
                    <div className='text-xl font-hind'>PE Ratio</div>
                    <div className='font-medium text-2xl' style={{ fontFamily: 'Futura' }}>37.36</div>
                </div>

            </div>

            <div className='px-20'>
                <div className='text-3xl font-medium pt-20'>
                    Price Chart
                </div>
                <div className='flex justify-between pt-10'>
                    <div className='flex justify-between' style={{ width: '401px', height: '67px' }}>
                        <div className='space-y-3'>
                            <div className='text-xl font-normal font-hind'>High</div>
                            <div className='font-medium text-2xl'>₹ 95.32 Cr</div>
                        </div>
                        <div className='space-y-3'>
                            <div className='text-xl font-normal font-hind'>Low</div>
                            <div className='font-medium text-2xl'>₹ 95.32 Cr</div>
                        </div>
                        <div className='space-y-3'>
                            <div className='text-xl font-normal font-hind'>Returns</div>
                            <div className='flex'>
                                <div className='font-medium text-2xl text-green-300'>37.35 % </div>
                                <div className='rounded-full border-2 border-green-300 ml-3 w-6 h-6 mt-1'><img src={arrows} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='mr-8 space-y-3' >
                            <div className='text-xl font-normal font-hind'>
                                Benchmark
                            </div>
                            <div className='border rounded-md flex justify-evenly items-center' style={{ width: '199px', height: '50px' }}>
                                <div className='w-5 h-5 bg-green-300 rounded-full'></div>
                                <div className='text-xl'>NIFTY 500 TRI</div>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='text-xl font-normal font-hind'>Timeline</div>
                            <div className='border rounded-md flex justify-between items-center px-0 py-0' style={{ width: '426px', height: '50px' }}>
                                {/* <span className='hover:bg-white' style={{ width: '24px', height: '50px' }}>1M</span>
                                <span className='hover:bg-white'>6M</span>
                                <span>1Y</span>
                                <span>2Y</span>
                                <span className='hover:bg-white'>MAX</span>
                                <span>SIP</span> */}
                                {timeline.map((time, id) => {
                                    return (
                                        <div className="text-xl hover:bg-white hover:text-blue-400 px-5 py-2.5">{time}</div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* <div className='mt-8 bg-red-500'> */}
            <ResponsiveContainer className='mt-8' width='100%' height={530}>
                <AreaChart
                    data={data}
                >
                    <Area dataKey="value" type="monotone" stroke="#8884d8" fill="white" />
                    {/* <XAxis dataKey='date' /> */}
                    {/* <YAxis dataKey='value' /> */}
                    <Tooltip />
                    {/* <CartesianGrid /> */}

                </AreaChart>

            </ResponsiveContainer>
            {/* </div> */}
        </div>
    )
}

export default NewChart
