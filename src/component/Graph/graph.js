import React from 'react'
// import { withTheme } from '../../Theme/SkaraNewTheme';
import ReactEcharts from "echarts-for-react";

export const GraphComponent = (props) => {
    const { xAxis, series, legend } = props;
    const option = {
        title : {
            text: 'Average Watch time',
            subtext: 'Vendor: newunicorn-vercel',
            x : 'center',
            lineHeight: 56
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: legend,
            orient: 'vertical',
            left: 'right'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '1%',
            
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xAxis,
        
        },
        yAxis: {
            type: 'value',
        
        },
        series: series
    };

    return (
        <ReactEcharts option={option} />
    )
}

export const Graph = GraphComponent