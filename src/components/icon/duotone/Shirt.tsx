import React, { SVGProps } from 'react';

const SvgShirt = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M6.182 4.095A2.994 2.994 0 018.5 3h7c.933 0 1.767.426 2.317 1.094.022.01.043.022.064.034l4.709 2.719a1 1 0 01.366 1.366L21.3 11.082a1 1 0 01-1.366.366L18.5 10.62V19a1 1 0 01-1 1h-11a1 1 0 01-1-1v-8.38l-1.433.828a1 1 0 01-1.366-.366l-1.656-2.87a1 1 0 01.366-1.365l4.71-2.719c.02-.012.04-.023.061-.033z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M9.852 3.223l-.59.883a.5.5 0 00.116.678L11 6l-.965 6.753a.5.5 0 00.142.424l1.47 1.47a.5.5 0 00.707 0l1.47-1.47a.5.5 0 00.14-.424L13 6l1.622-1.216a.5.5 0 00.116-.678l-.59-.883A.5.5 0 0013.732 3h-3.464a.5.5 0 00-.416.223z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgShirt;
