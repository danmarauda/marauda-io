import React, { SVGProps } from 'react';

const SvgScrewdriver = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M8.464 11.293l-1.06-1.06a.5.5 0 010-.708l.707-.707a.5.5 0 01.707 0l6.364 6.364a.5.5 0 010 .707l-.707.707a.5.5 0 01-.707 0l-1.06-1.06-5.658 5.656a2 2 0 01-2.828 0l-1.414-1.414a2 2 0 010-2.828l5.656-5.657zM4.575 18.01a.5.5 0 00.707.708l4.243-4.243a.5.5 0 10-.707-.707L4.575 18.01z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M16.95 5.636l-.171-.17a.5.5 0 01.168-.819l2.525-1.01a.5.5 0 01.54.11l.24.242a.5.5 0 01.11.539l-1.01 2.525a.5.5 0 01-.817.168l-.171-.17-5.657 5.656-1.414-1.414 5.657-5.657z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgScrewdriver;
