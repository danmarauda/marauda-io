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
import ReactSimpleMapsExample1Partial from './_partial/ReactSimpleMapsExample1.partial';
import ReactSimpleMapsExample2Partial from './_partial/ReactSimpleMapsExample2.partial';
import ReactSimpleMapsExample3Partial from './_partial/ReactSimpleMapsExample3.partial';
import ReactSimpleMapsExample4Partial from './_partial/ReactSimpleMapsExample4.partial';

import ReactSimpleMapsExample1MD from './md/ReactSimpleMapsExample1.md';
import ReactSimpleMapsExample2MD from './md/ReactSimpleMapsExample2.md';
import ReactSimpleMapsExample3MD from './md/ReactSimpleMapsExample3.md';
import ReactSimpleMapsExample4MD from './md/ReactSimpleMapsExample4.md';

const ReactSimpleMapsPage = () => {
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
		<PageWrapper name='React Simple Maps'>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb
						path='Components & Templates / Integrated'
						currentPage='React Simple Maps'
					/>
				</SubheaderLeft>
				<SubheaderRight>
					<Button
						icon='CustomNpm'
						onClick={() => {
							window.open(
								'https://www.npmjs.com/package/react-simple-maps',
								'_blank',
							);
						}}>
						react-simple-maps
					</Button>
					<Button
						icon='CustomGithub'
						onClick={() => {
							window.open(
								'https://github.com/zcreativelabs/react-simple-maps#readme',
								'_blank',
							);
						}}>
						react-simple-maps
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
						<div className='col-span-12 md:col-span-6'>
							<ExampleView
								title='Example 1'
								mdFile={ReactSimpleMapsExample1MD as RequestInfo}>
								<Card>
									<CardBody>
										<ReactSimpleMapsExample1Partial />
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<ExampleView
								title='Example 2'
								mdFile={ReactSimpleMapsExample2MD as RequestInfo}>
								<Card>
									<CardBody>
										<ReactSimpleMapsExample2Partial />
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<ExampleView
								title='Example 3'
								mdFile={ReactSimpleMapsExample3MD as RequestInfo}>
								<Card>
									<CardBody>
										<ReactSimpleMapsExample3Partial />
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<ExampleView
								title='Example 4'
								mdFile={ReactSimpleMapsExample4MD as RequestInfo}>
								<Card>
									<CardBody>
										<ReactSimpleMapsExample4Partial />
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

export default ReactSimpleMapsPage;
