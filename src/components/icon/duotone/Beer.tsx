import React, { SVGProps } from 'react';

const SvgBeer = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M16 7v2h3a1 1 0 011 1v3a1 1 0 01-1 1h-3v2h3a3 3 0 003-3v-3a3 3 0 00-3-3h-3z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M4.758 5A4.496 4.496 0 018.5 3c1.56 0 2.935.794 3.742 2H4.758z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path d='M7 5a4 4 0 118 0H7z' fill='currentColor' opacity={0.3} />
				<path d='M12.05 5a2.5 2.5 0 014.9 0h-4.9z' fill='currentColor' opacity={0.3} />
				<path
					d='M8 8a1 1 0 011 1v9a1 1 0 01-2 0V9a1 1 0 011-1zm5 0a1 1 0 011 1v9a1 1 0 01-2 0V9a1 1 0 011-1zM4.06 5h12.88a1 1 0 01.998 1.059l-.827 14.058A2 2 0 0115.114 22H5.886a2 2 0 01-1.997-1.883L3.062 6.06A1 1 0 014.061 5z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgBeer;
