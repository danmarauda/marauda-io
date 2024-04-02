import React from 'react';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import dayjs from 'dayjs';
import AsideRouter from '../components/router/AsideRouter';
import Wrapper from '../components/layouts/Wrapper/Wrapper';
import HeaderRouter from '../components/router/HeaderRouter';
import ContentRouter from '../components/router/ContentRouter';
import FooterRouter from '../components/router/FooterRouter';
import useFontSize from '../hooks/useFontSize';
import getOS from '../utils/getOS.util';

const App = () => {
	getOS();

	const { fontSize } = useFontSize();
	dayjs.extend(localizedFormat);

	return (
		<>
			<style>{`:root {font-size: ${fontSize}px}`}</style>
			<div data-component-name='App' className='flex grow flex-col'>
				<AsideRouter />
				<Wrapper>
					<HeaderRouter />
					<ContentRouter />
					<FooterRouter />
				</Wrapper>
			</div>
		</>
	);
};

export default App;
