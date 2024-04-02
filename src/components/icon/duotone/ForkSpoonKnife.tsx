import React, { SVGProps } from 'react';

const SvgForkSpoonKnife = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M11 3l.45 4.502a.552.552 0 001.1 0L13 3h1l.45 4.502a.552.552 0 001.1 0L16 3h1v4.5a3.5 3.5 0 01-7 0V3h1z'
					fill='currentColor'
				/>
				<path
					d='M13.5 13c.561 0 1.024.438 1.055.998l.362 6.504A1.419 1.419 0 0113.5 22a1.419 1.419 0 01-1.417-1.498l.362-6.504c.03-.56.494-.998 1.055-.998zM21.5 15c.563 0 1.031.435 1.071.997l.322 4.507A1.397 1.397 0 0121.5 22a1.397 1.397 0 01-1.393-1.496l.322-4.507c.04-.562.508-.997 1.071-.997z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path d='M20 3v10h4V7a4 4 0 00-4-4z' fill='currentColor' />
				<path
					d='M4.5 14c.562 0 1.027.437 1.062.998l.344 5.505A1.41 1.41 0 014.5 22a1.41 1.41 0 01-1.406-1.497l.344-5.505c.035-.561.5-.998 1.062-.998z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M4.5 12C2.567 12 1 9.433 1 7.5 1 5.567 2.567 3 4.5 3S8 5.567 8 7.5C8 9.433 6.433 12 4.5 12zm.01-7.399l.05 5.347a2.097 2.097 0 001.917-2.053c.02-1.134-.844-3.19-1.967-3.294z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgForkSpoonKnife;
