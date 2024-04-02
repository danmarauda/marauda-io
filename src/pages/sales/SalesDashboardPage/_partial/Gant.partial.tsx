import React, { useState } from 'react';
import dayjs from 'dayjs';
import colors from 'tailwindcss/colors';
import Card, {
	CardBody,
	CardHeader,
	CardHeaderChild,
	CardTitle,
} from '../../../../components/ui/Card';
import Chart from '../../../../components/Chart';
import { IChartOptions } from '../../../../interface/chart.interface';

const GantPartial = () => {
	const [state] = useState<IChartOptions>({
		series: [
			{
				name: 'Bob',
				data: [
					{
						x: 'Design',
						y: [
							dayjs().startOf('week').valueOf(),
							dayjs().startOf('week').add(1, 'day').valueOf(),
						],
					},
					{
						x: 'Code',
						y: [
							dayjs().startOf('week').add(1, 'day').valueOf(),
							dayjs().startOf('week').add(1, 'day').add(12, 'hours').valueOf(),
						],
					},
					{
						x: 'Test',
						y: [
							dayjs().startOf('week').add(1, 'day').add(12, 'hours').valueOf(),
							dayjs().startOf('week').add(2, 'day').valueOf(),
						],
					},
					{
						x: 'Validation',
						y: [
							dayjs().startOf('week').add(2, 'day').valueOf(),
							dayjs().startOf('week').add(3, 'day').valueOf(),
						],
					},
					{
						x: 'Deployment',
						y: [
							dayjs().startOf('week').add(3, 'day').add(12, 'hours').valueOf(),
							dayjs().startOf('week').add(4, 'day').valueOf(),
						],
					},
				],
			},
			{
				name: 'Joe',
				data: [
					{
						x: 'Code',
						y: [
							dayjs().startOf('week').valueOf(),
							dayjs().startOf('week').add(2, 'day').valueOf(),
						],
					},
					{
						x: 'Code',
						y: [
							dayjs().startOf('week').add(2, 'day').add(12, 'hours').valueOf(),
							dayjs().startOf('week').add(3, 'day').valueOf(),
						],
					},
					{
						x: 'Validation',
						y: [
							dayjs().startOf('week').add(3, 'day').valueOf(),
							dayjs().startOf('week').add(3, 'day').add(8, 'hours').valueOf(),
						],
					},
					{
						x: 'Deployment',
						y: [
							dayjs().startOf('week').add(3, 'day').valueOf(),
							dayjs().startOf('week').add(5, 'day').valueOf(),
						],
					},
				],
			},
			{
				name: 'Dan',
				data: [
					{
						x: 'Code',
						y: [
							dayjs().startOf('week').add(2, 'day').valueOf(),
							dayjs().startOf('week').add(2, 'day').add(6, 'hours').valueOf(),
						],
					},
					{
						x: 'Test',
						y: [
							dayjs().startOf('week').add(18, 'hours').valueOf(),
							dayjs().startOf('week').add(1, 'day').valueOf(),
						],
					},
					{
						x: 'Test',
						y: [
							dayjs().startOf('week').add(1, 'day').add(12, 'hours').valueOf(),
							dayjs().startOf('week').add(2, 'day').add(6, 'hours').valueOf(),
						],
					},
					{
						x: 'Test',
						y: [
							dayjs().startOf('week').add(2, 'day').add(12, 'hours').valueOf(),
							dayjs().startOf('week').add(3, 'day').add(6, 'hours').valueOf(),
						],
					},
					{
						x: 'Test',
						y: [
							dayjs().startOf('week').add(4, 'day').add(12, 'hours').valueOf(),
							dayjs().startOf('week').add(5, 'day').valueOf(),
						],
					},
					{
						x: 'Deployment',
						y: [
							dayjs().startOf('week').add(5, 'day').valueOf(),
							dayjs().startOf('week').add(6, 'day').valueOf(),
						],
					},
				],
			},
		],
		options: {
			colors: [colors.emerald['500'], colors.amber['500'], colors.purple['500']],
			plotOptions: {
				bar: {
					horizontal: true,
					barHeight: '80%',
				},
			},
			xaxis: {
				type: 'datetime',
			},
			stroke: {
				width: 4,
			},
			fill: {
				type: 'solid',
				opacity: 0.5,
			},
			legend: {
				position: 'top',
				horizontalAlign: 'left',
			},
			tooltip: { theme: 'dark' },
			annotations: {
				xaxis: [
					{
						x: dayjs().valueOf(),
						strokeDashArray: 0,
						borderColor: colors.blue['500'],
						label: {
							borderColor: colors.blue['500'],
							style: {
								color: colors.white,
								background: colors.blue['500'],
							},
							text: 'NOW',
						},
					},
				],
			},
		},
	});

	return (
		<Card className='h-full'>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle>Gant</CardTitle>
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<Chart series={state.series} options={state.options} type='rangeBar' height={400} />
			</CardBody>
		</Card>
	);
};

export default GantPartial;
