import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: '300',
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 400,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 280,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 390,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 300,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 450,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 400,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Page H',
        uv: 500,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Page I',
        uv: 300,
        pv: 4300,
        amt: 2100,
    },
];

// const totaluv = data.map((item, index) => {
//     item.uv.reduce((accu: any, curr: any) => accu + curr)
// })

const Graph = (props: any) => {
    console.log(props.bgColor.launchpad.colorFill)
    return (
        <>
            <ResponsiveContainer width="100%" height="100%" >
                <AreaChart
                    width={200}
                    height={10}
                    data={data}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}>
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="" fill={props.bgColor.launchpad.colorFill} />
                </AreaChart>
            </ResponsiveContainer >
        </>
    )
}

export default Graph


