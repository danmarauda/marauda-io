import React, { useRef } from 'react';
import useScrollSpy from 'react-use-scrollspy';
import PageWrapper from '../../../../components/layouts/PageWrapper/PageWrapper';
import Container from '../../../../components/layouts/Container/Container';
import Doc, { DocContent, DocNav } from '../../../../templates/for-demo/Doc';
import Card, {
	CardBody,
	CardHeader,
	CardHeaderChild,
	CardTitle,
} from '../../../../components/ui/Card';
import MdViewer from '../../../../components/MdViewer';
import ExampleView from '../../../../templates/for-demo/ExampleView';
import TablePart from '../../../ExamplePage/_parts/Table.part';
import Table3Part from '../../../ExamplePage/_parts/Table3.part';
import Button from '../../../../components/ui/Button';
import TablePartial from '../../../sales/SalesDashboardPage/_partial/Table.partial';
import TableInterfaceMD from './md/TableInterface.md';
import TableExample1MD from './md/TableExample1.md';
import TableExample2MD from './md/TableExample2.md';
import TableExample3MD from './md/TableExample3.md';
import Subheader, {
	SubheaderLeft,
	SubheaderRight,
} from '../../../../components/layouts/Subheader/Subheader';
import Breadcrumb from '../../../../components/layouts/Breadcrumb/Breadcrumb';

const TablePage = () => {
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
		<PageWrapper name='Table'>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb path='Components & Templates / UI' currentPage='Table' />
				</SubheaderLeft>
				<SubheaderRight>
					<Button
						icon='CustomNpm'
						onClick={() => {
							window.open(
								'https://www.npmjs.com/package/@tanstack/react-table',
								'_blank',
							);
						}}>
						@tanstack/react-table
					</Button>
					<Button
						icon='CustomGithub'
						onClick={() => {
							window.open('https://github.com/tanstack/table#readme', '_blank');
						}}>
						TanStack/table
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
							<ExampleView title='Example 1' mdFile={TableExample1MD as RequestInfo}>
								<TablePart />
							</ExampleView>
						</div>
						<div className='col-span-12'>
							<ExampleView title='Example 2' mdFile={TableExample2MD as RequestInfo}>
								<Card>
									<TablePartial />
								</Card>
							</ExampleView>
						</div>
						<div className='col-span-12'>
							<ExampleView title='Example 3' mdFile={TableExample3MD as RequestInfo}>
								<Table3Part />
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
									<MdViewer mdFile={TableInterfaceMD as RequestInfo} />
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
					</DocNav>
				</Doc>
			</Container>
		</PageWrapper>
	);
};

export default TablePage;
