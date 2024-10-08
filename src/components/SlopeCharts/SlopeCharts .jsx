import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const SlopeCharts = () => {
    const [chartOptions, setChartOptions] = useState({
        series: [
            {
                name: 'Bedroom 1',
                data: [
                    { x: 'Category 1', y: 503 },
                    { x: 'Category 2', y: 580 },
                    { x: 'Category 3', y: 135 },
                ],
            },
            {
                name: 'Toilet 2',
                data: [
                    { x: 'Category 1', y: 733 },
                    { x: 'Category 2', y: 385 },
                    { x: 'Category 3', y: 715 },
                ],
            },
            {
                name: 'Living room 3',
                data: [
                    { x: 'Category 1', y: 255 },
                    { x: 'Category 2', y: 211 },
                    { x: 'Category 3', y: 441 },
                ],
            },
            {
                name: 'Garden',
                data: [
                    { x: 'Category 1', y: 428 },
                    { x: 'Category 2', y: 749 },
                    { x: 'Category 3', y: 559 },
                ],
            },
        ],
        options: {
            chart: {
                height: 350,
                width: 600,
                type: 'line',
            },
            plotOptions: {
                line: {
                    isSlopeChart: true,
                },
            },
            tooltip: {
                followCursor: true,
                intersect: false,
                shared: true,
            },
            dataLabels: {
                background: {
                    enabled: true,
                },
                formatter(val, opts) {
                    const seriesName = opts.w.config.series[opts.seriesIndex].name;
                    return val !== null ? seriesName : '';
                },
            },
            yaxis: {
                show: true,
                labels: {
                    show: true,
                },
            },
            xaxis: {
                position: 'bottom',
            },
            legend: {
                show: true,
                position: 'top',
                horizontalAlign: 'left',
            },
            stroke: {
                width: [2, 3, 4, 2],
                dashArray: [0, 0, 5, 2],
                curve: 'smooth',
            },
        },
    });

    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={chartOptions.options}
                    series={chartOptions.series}
                    type="line"
                    height={350}
                    width={600}
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default SlopeCharts;
