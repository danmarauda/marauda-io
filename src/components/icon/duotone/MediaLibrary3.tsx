import React, { SVGProps } from 'react';

const SvgMediaLibrary3 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			viewBox='0 0 24 24'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			className='svg-icon'
			{...props}>
			<defs>
				<path
					d='M19 5H9a1 1 0 100 2h10v13.25c0 .414-.313.75-.7.75H7.45C6.097 21 5 19.825 5 18.375V5.625C5 4.175 6.097 3 7.45 3H18.3c.387 0 .7.336.7.75V5z'
					id='media-library-3_svg__a'
				/>
			</defs>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<mask id='media-library-3_svg__b' fill='#fff'>
					<use xlinkHref='#media-library-3_svg__a' />
				</mask>
				<use fill='currentColor' opacity={0.3} xlinkHref='#media-library-3_svg__a' />
				<path
					d='M10.833 19C9.821 19 9 18.316 9 17.472s.82-1.528 1.833-1.528c.215 0 .42.031.611.087v-4.24c0-.313.196-.59.483-.683l3.514-1.075c.442-.144.892.2.892.684v1.075c0 .358-.335.587-.61.652-.397.095-1.416.299-3.056.612v4.448a.837.837 0 01-.013.152c-.11.757-.883 1.344-1.82 1.344z'
					fill='currentColor'
					mask='url(#media-library-3_svg__b)'
				/>
			</g>
		</svg>
	);
};

export default SvgMediaLibrary3;
