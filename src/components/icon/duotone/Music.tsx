import React, { SVGProps } from 'react';

const SvgMusic = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5.857 2h7.88a1.5 1.5 0 01.968.355l4.764 4.029A1.5 1.5 0 0120 7.529v12.554c0 1.79-.02 1.917-1.857 1.917H5.857C4.02 22 4 21.874 4 20.083V3.917C4 2.127 4.02 2 5.857 2z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M9.833 17C8.821 17 8 16.316 8 15.472s.82-1.528 1.833-1.528c.215 0 .42.031.611.087v-4.24c0-.313.196-.59.483-.683l3.514-1.075c.442-.144.892.2.892.684v1.075c0 .358-.335.587-.61.652-.397.095-1.416.299-3.056.612v4.448a.837.837 0 01-.013.152c-.11.757-.883 1.344-1.82 1.344z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgMusic;
