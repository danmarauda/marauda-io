import React, { useRef } from 'react';
import useScrollSpy from 'react-use-scrollspy';
import Subheader, {
	SubheaderLeft,
	SubheaderRight,
} from '../../../../components/layouts/Subheader/Subheader';
import Breadcrumb from '../../../../components/layouts/Breadcrumb/Breadcrumb';
import PageWrapper from '../../../../components/layouts/PageWrapper/PageWrapper';
import Doc, { DocContent, DocNav } from '../../../../templates/for-demo/Doc';
import ExampleView from '../../../../templates/for-demo/ExampleView';

import Card, { CardBody } from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Container from '../../../../components/layouts/Container/Container';
import WaveSurferExample1Partial from './_partial/WaveSurferExample1.partial';
import WaveSurferExample1MD from './md/WaveSurferExample1.md';

const WaveSurferPage = () => {
	const sectionRefs = [
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
	];
	const activeSection = useScrollSpy({
		sectionElementRefs: sectionRefs,
		offsetPx: -90,
	});

	return (
		<PageWrapper name='WaveSurfer'>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb
						path='Components & Templates / Integrated'
						currentPage='WaveSurfer'
					/>
				</SubheaderLeft>
				<SubheaderRight>
					<Button
						icon='CustomNpm'
						onClick={() => {
							window.open('https://www.npmjs.com/package/wavesurfer.js', '_blank');
						}}>
						wavesurfer.js
					</Button>
					<Button
						icon='CustomGithub'
						onClick={() => {
							window.open(
								'https://github.com/katspaugh/wavesurfer.js#readme',
								'_blank',
							);
						}}>
						wavesurfer.js
					</Button>
				</SubheaderRight>
			</Subheader>
			<Container>
				<Doc>
					<DocContent>
						<div
							id='Examples'
							ref={sectionRefs[0]}
							className='scroll-mt-offset col-span-12'>
							<span className='text-3xl font-semibold'>Examples</span>
						</div>
						<div className='col-span-12'>
							<ExampleView
								title='Example 1'
								mdFile={WaveSurferExample1MD as RequestInfo}>
								<Card>
									<CardBody>
										<WaveSurferExample1Partial />
									</CardBody>
								</Card>
							</ExampleView>
						</div>
					</DocContent>
					<DocNav>
						<Button isActive={activeSection === 0} className='!px-0'>
							<a href='#Examples'>Examples</a>
						</Button>
					</DocNav>
				</Doc>
			</Container>
		</PageWrapper>
	);
};

export default WaveSurferPage;
