import React, { useRef } from 'react';
import useScrollSpy from 'react-use-scrollspy';
import PageWrapper from '../../../../components/layouts/PageWrapper/PageWrapper';
import Container from '../../../../components/layouts/Container/Container';
import Doc, { DocContent, DocNav } from '../../../../templates/for-demo/Doc';
import Button from '../../../../components/ui/Button';
import ExampleView from '../../../../templates/for-demo/ExampleView';
import Card, {
	CardBody,
	CardHeader,
	CardHeaderChild,
	CardTitle,
} from '../../../../components/ui/Card';
import ValidationExample1Partial from './_partial/ValidationExample1.partial';
import ValidationExample2Partial from './_partial/ValidationExample2.partial';
import MdViewer from '../../../../components/MdViewer';
import ValidationExample1MD from './md/ValidationExample1.md';
import ValidationExample2MD from './md/ValidationExample2.md';
import ValidationInterfaceMD from './md/ValidationInterface.md';
import Subheader, { SubheaderLeft } from '../../../../components/layouts/Subheader/Subheader';
import Breadcrumb from '../../../../components/layouts/Breadcrumb/Breadcrumb';

const ValidationPage = () => {
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
		<PageWrapper name='Validation'>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb path='Components & Templates / Form' currentPage='Validation' />
				</SubheaderLeft>
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
								mdFile={ValidationExample1MD as RequestInfo}>
								<Card>
									<CardBody>
										<ValidationExample1Partial />
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12 md:col-span-6'>
							<ExampleView
								title='Example 2'
								mdFile={ValidationExample2MD as RequestInfo}>
								<Card>
									<CardBody>
										<ValidationExample2Partial />
									</CardBody>
								</Card>
							</ExampleView>
						</div>
						<div
							id='Interface'
							ref={sectionRefs[1]}
							className='scroll-mt-offset col-span-12'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Interface</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<MdViewer mdFile={ValidationInterfaceMD as RequestInfo} />
								</CardBody>
							</Card>
						</div>
					</DocContent>
					<DocNav>
						<Button isActive={activeSection === 0} className='!px-0'>
							<a href='#Examples'>Examples</a>
						</Button>
						<Button isActive={activeSection === 1} className='!px-0'>
							<a href='#Interface'>Interface</a>
						</Button>
						<code className='text-xs'>{'<Validation />'}</code>
					</DocNav>
				</Doc>
			</Container>
		</PageWrapper>
	);
};

export default ValidationPage;
