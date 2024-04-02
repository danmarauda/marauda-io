import React, { SVGProps } from 'react';

const SvgCoffee1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M8.4 17H5c-1.657 0-3-1.843-3-3.5S3.343 10 5 10h1V8h15v3.5A7.5 7.5 0 018.4 17zm-1.535-2a7.455 7.455 0 01-.849-3H5c-.552 0-1 .948-1 1.5S4.448 15 5 15h1.865z'
					fill='currentColor'
				/>
				<rect fill='currentColor' opacity={0.3} x={6} y={21} width={15} height={2} rx={1} />
				<path
					d='M8.116 0l1.157 1.153a2.195 2.195 0 00.242 3.307l.485.362-.977 1.31-.485-.363A3.829 3.829 0 018.116 0zM13.116 1l1.157 1.153a2.195 2.195 0 00.242 3.307l.485.362-.977 1.31-.485-.363A3.829 3.829 0 0113.116 1zM18.116 0l1.157 1.153a2.195 2.195 0 00.242 3.307l.485.362-.977 1.31-.485-.363A3.829 3.829 0 0118.116 0z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgCoffee1;
