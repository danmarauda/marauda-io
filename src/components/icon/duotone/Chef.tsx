import React, { SVGProps } from 'react';

const SvgChef = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' opacity={0.3} x={5} y={20} width={14} height={2} rx={1} />
				<path
					d='M5 12.874a4.002 4.002 0 011.336-7.86 6.003 6.003 0 0111.328 0A4 4 0 0119 12.874V17a1 1 0 01-1 1H6a1 1 0 01-1-1v-4.126z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgChef;
