import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/layouts/PageWrapper/PageWrapper';
import Button from '../../components/ui/Button';
import Input from '../../components/form/Input';
import Checkbox, { CheckboxGroup, TCheckboxDimension } from '../../components/form/Checkbox';
import Label from '../../components/form/Label';
import Radio from '../../components/form/Radio';
import Card, {
	CardBody,
	CardFooter,
	CardFooterChild,
	CardHeader,
	CardHeaderChild,
} from '../../components/ui/Card';
import useFontSize from '../../hooks/useFontSize';
import ButtonGroup from '../../components/ui/ButtonGroup';
import SelectReact, { TSelectGroups, TSelectOptions } from '../../components/form/SelectReact';
import ModalPart from './_parts/Modal.part';
import OffCanvasPart from './_parts/OffCanvas.part';
import AlertPart from './_parts/Alert.part';

import DropdownPart from './_parts/Dropdown.part';
import BadgePart from './_parts/Badge.part';
import Table, { TBody, Td, Th, THead, Tr } from '../../components/ui/Table';
import TablePart from './_parts/Table.part';
import Container from '../../components/layouts/Container/Container';
import Subheader, { SubheaderLeft } from '../../components/layouts/Subheader/Subheader';
import { appPages } from '../../config/pages.config';
import Validation from '../../components/form/Validation';

const options: TSelectOptions = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];
const optionsGroup: TSelectGroups = [
	{
		label: 'Colours',
		options: [
			{ value: 'chocolate', label: 'Chocolate' },
			{ value: 'strawberry', label: 'Strawberry' },
			{ value: 'vanilla', label: 'Vanilla' },
		],
	},
	{
		label: 'Cars',
		options: [
			{ value: 'volvo', label: 'Volvo', isFixed: true },
			{ value: 'audi', label: 'Audi' },
			{ value: 'bmw', label: 'BMW' },
			{ value: 'mercedes', label: 'Mercedes' },
			{ value: 'VW', label: 'VW', isDisabled: true },
		],
	},
];

const ExamplesPage = () => {
	const { fontSize, setFontSize } = useFontSize();

	const formik = useFormik({
		initialValues: {
			firstName: '',
			optionA: false,
			optionB: true,
			optionC: false,
			radioOption: 'second',
			assigned: undefined,
			assignedMulti: [optionsGroup[1].options[0]],
		},
		validate: (values) => {
			const errors: {
				firstName?: string;
				assigned?: string;
			} = {};

			if (!values.firstName) {
				errors.firstName = 'Required';
			} else if (values.firstName.length > 15) {
				errors.firstName = 'Must be 15 characters or less';
			}

			if (!values.assigned) {
				errors.assigned = 'Required';
			}

			return errors;
		},
		onSubmit: (values) => {
			// eslint-disable-next-line no-console
			console.log(values);
		},
	});

	const [dimension, setDimension] = useState<TCheckboxDimension>('default');

	const { t, i18n } = useTranslation();

	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Link
						className='font-bold text-blue-500'
						to={appPages.salesAppPages.subPages.productPage.subPages.listPage.to}>
						{appPages.salesAppPages.subPages.productPage.subPages.listPage.text}
					</Link>
				</SubheaderLeft>
			</Subheader>
			<Container>
				<div className='grid grid-cols-12 gap-4'>
					<div className='col-span-12 gap-4'>
						<div>{t('DemoPages')}</div>
						<div>{t('item.itemA')}</div>
						<div>{dayjs().locale(i18n.language).format('MMMM D, YYYY')}</div>
					</div>
					<div className='col-span-12'>
						<TablePart />
					</div>

					<div className='col-span-12'>
						<Card className='h-full'>
							<CardHeader>
								<CardHeaderChild>
									<h3>Form</h3>
								</CardHeaderChild>
							</CardHeader>
							<CardBody>
								<form className='grid grid-cols-12 gap-4' noValidate>
									<div className='col-span-12 md:col-span-3'>
										<Label htmlFor='fontSize'>Font Size:</Label>
										<Input
											type='number'
											id='fontSize'
											name='fontSize'
											value={fontSize}
											className='dark:text-black'
											onChange={(
												event: React.ChangeEvent<HTMLInputElement>,
											) => setFontSize(Number(event.target.value))}
											dimension={dimension}
										/>
									</div>
									<div className='col-span-12 md:col-span-3'>
										<Label htmlFor='firstName'>First Name:</Label>
										<Validation
											isValid={formik.isValid}
											isTouched={formik.touched.firstName}
											invalidFeedback={formik.errors.firstName}
											validFeedback='Looks good! - input'>
											<Input
												id='firstName'
												name='firstName'
												onChange={formik.handleChange}
												value={formik.values.firstName}
												onBlur={formik.handleBlur}
												dimension={dimension}
												type='text'
											/>
										</Validation>
									</div>
									<div className='col-span-12 md:col-span-3'>
										<Label htmlFor='assigned'>Coffee:</Label>
										<Validation
											isValid={formik.isValid}
											isTouched={formik.touched.assigned}
											invalidFeedback={formik.errors.assigned}
											validFeedback='Looks good! - select'>
											<SelectReact
												options={options}
												id='assigned'
												name='assigned'
												dimension={dimension}
												value={formik.values.assigned}
												onChange={(value) =>
													formik.setFieldValue('assigned', value)
												}
												onBlur={formik.handleBlur}
											/>
										</Validation>
									</div>
									<div className='col-span-12 md:col-span-3'>
										<Label htmlFor='assignedMulti'>First Name:</Label>
										<SelectReact
											name='assignedMulti'
											options={optionsGroup}
											isMulti
											value={formik.values.assignedMulti}
											menuPlacement='auto'
											dimension={dimension}
											onChange={(value) =>
												formik.setFieldValue('assignedMulti', value)
											}
										/>
									</div>
									<div className='col-span-12 md:col-span-3'>
										<Label htmlFor='fontSize'>Example Checkbox</Label>
										<CheckboxGroup isInline>
											<Checkbox
												label='Example'
												id='optionA'
												onChange={formik.handleChange}
												checked={formik.values.optionA}
												dimension={dimension}
											/>
											<Checkbox
												label='Example 2'
												id='optionB'
												onChange={formik.handleChange}
												checked={formik.values.optionB}
												dimension={dimension}
											/>
											<Checkbox
												variant='switch'
												label='Example 3'
												id='optionC'
												onChange={formik.handleChange}
												checked={formik.values.optionC}
												dimension={dimension}
											/>
										</CheckboxGroup>
									</div>
									<div className='col-span-12 md:col-span-3'>
										<Label htmlFor='fontSize'>Example Radio</Label>
										<Radio
											label='Example'
											name='radioOption'
											value='first'
											selectedValue={formik.values.radioOption}
											onChange={formik.handleChange}
											dimension={dimension}
										/>
										<Radio
											label='Example 2'
											name='radioOption'
											value='second'
											selectedValue={formik.values.radioOption}
											onChange={formik.handleChange}
											dimension={dimension}
										/>
										<Radio
											label='Example 3'
											name='radioOption'
											value='third'
											selectedValue={formik.values.radioOption}
											onChange={formik.handleChange}
											dimension={dimension}
										/>
									</div>
								</form>
							</CardBody>
							<CardFooter>
								<CardFooterChild />
								<CardFooterChild>
									<Button
										variant='outline'
										icon='HeroPaperAirplane'
										color='zinc'
										onClick={() => formik.handleSubmit()}>
										Submit
									</Button>
								</CardFooterChild>
							</CardFooter>
						</Card>
					</div>

					<BadgePart />

					<DropdownPart />
					<ModalPart />
					<OffCanvasPart />

					<AlertPart />
					<div className='col-span-12 md:col-span-6 2xl:col-span-4'>
						<Card className='h-full'>
							<CardHeader>
								<CardHeaderChild>
									<h3>Button</h3>
								</CardHeaderChild>
							</CardHeader>
							<CardBody className='grow-0 py-4'>
								<div className='flex flex-row flex-wrap items-center gap-4'>
									<div className='basis-auto'>
										<Button variant='solid' size='xs' icon='HeroServer'>
											XS Button
										</Button>
									</div>
									<div className='basis-auto'>
										<Button variant='solid' size='sm' icon='HeroServer'>
											SM Button
										</Button>
									</div>
									<div className='basis-auto'>
										<Button variant='solid' icon='HeroServer' isLoading>
											Button
										</Button>
									</div>
									<div className='basis-auto'>
										<Button variant='solid' size='lg' icon='HeroServer'>
											LG Button
										</Button>
									</div>
									<div className='basis-auto'>
										<Button variant='solid' size='xl' icon='HeroServer'>
											XL Button
										</Button>
									</div>
								</div>
							</CardBody>
							<CardBody className='grow-0 py-4'>
								<div className='flex flex-row flex-wrap items-center gap-4'>
									<div className='basis-auto'>
										<Button
											variant='outline'
											size='xs'
											icon='HeroServer'
											isDisable>
											XS Button
										</Button>
										<Button
											variant='outline'
											size='xs'
											icon='HeroServer'
											isDisable
										/>
									</div>
									<div className='basis-auto'>
										<Button
											variant='outline'
											size='sm'
											icon='HeroServer'
											isActive={dimension === 'sm'}
											onClick={() => setDimension('sm')}>
											SM Button
										</Button>
										<Button
											variant='outline'
											size='sm'
											icon='HeroServer'
											isActive={dimension === 'sm'}
											onClick={() => setDimension('sm')}
										/>
									</div>
									<div className='basis-auto'>
										<Button
											variant='outline'
											icon='HeroServer'
											isActive={dimension === 'default'}
											onClick={() => setDimension('default')}>
											Button
										</Button>
										<Button
											variant='outline'
											icon='HeroServer'
											isActive={dimension === 'default'}
											onClick={() => setDimension('default')}
										/>
									</div>
									<div className='basis-auto'>
										<Button
											variant='outline'
											size='lg'
											icon='HeroServer'
											isActive={dimension === 'lg'}
											onClick={() => setDimension('lg')}>
											LG Button
										</Button>{' '}
										<Button
											variant='outline'
											size='lg'
											icon='HeroServer'
											isActive={dimension === 'lg'}
											onClick={() => setDimension('lg')}
										/>
									</div>
									<div className='basis-auto'>
										<Button
											variant='outline'
											size='xl'
											icon='HeroServer'
											isActive={dimension === 'xl'}
											onClick={() => setDimension('xl')}>
											XL Button
										</Button>
										<Button
											variant='outline'
											size='xl'
											icon='HeroServer'
											isActive={dimension === 'xl'}
											onClick={() => setDimension('xl')}
										/>
									</div>
								</div>
							</CardBody>
							<CardBody className='grow-0 py-4'>
								<div className='flex flex-row flex-wrap items-center gap-4'>
									<div className='basis-auto'>
										<Button
											variant='outline'
											size='xs'
											icon='HeroServer'
											isDisable
										/>
									</div>
									<div className='basis-auto'>
										<Button
											variant='outline'
											size='sm'
											icon='HeroServer'
											isActive={dimension === 'sm'}
											onClick={() => setDimension('sm')}
										/>
									</div>
									<div className='basis-auto'>
										<Button
											variant='outline'
											icon='HeroServer'
											isActive={dimension === 'default'}
											onClick={() => setDimension('default')}
										/>
									</div>
									<div className='basis-auto'>
										<Button
											variant='outline'
											size='lg'
											icon='HeroServer'
											isActive={dimension === 'lg'}
											onClick={() => setDimension('lg')}
										/>
									</div>
									<div className='basis-auto'>
										<Button
											variant='outline'
											size='xl'
											icon='HeroServer'
											isActive={dimension === 'xl'}
											onClick={() => setDimension('xl')}
										/>
									</div>
								</div>
							</CardBody>
							<CardBody className='grow-0 py-4'>
								<div className='flex flex-row flex-wrap items-center gap-4'>
									<div className='basis-auto'>
										<Button size='xs' icon='HeroServer' isDisable>
											XS Button
										</Button>
									</div>
									<div className='basis-auto'>
										<Button
											size='sm'
											icon='HeroServer'
											isActive={dimension === 'sm'}
											onClick={() => setDimension('sm')}>
											SM Button
										</Button>
									</div>
									<div className='basis-auto'>
										<Button
											icon='HeroServer'
											isActive={dimension === 'default'}
											onClick={() => setDimension('default')}>
											Button
										</Button>
									</div>
									<div className='basis-auto'>
										<Button
											size='lg'
											icon='HeroServer'
											isActive={dimension === 'lg'}
											onClick={() => setDimension('lg')}>
											LG Button
										</Button>
									</div>
									<div className='basis-auto'>
										<Button
											size='xl'
											icon='HeroServer'
											isActive={dimension === 'xl'}
											onClick={() => setDimension('xl')}>
											XL Button
										</Button>
									</div>
								</div>
							</CardBody>
							<CardBody className='grow-0 py-4'>
								<div className='flex flex-row flex-wrap items-center gap-4'>
									<div className='basis-auto'>
										<ButtonGroup size={dimension}>
											<Button
												icon='HeroBattery0'
												variant='outline'
												isActive={dimension === 'sm'}
												onClick={() => setDimension('sm')}>
												Small
											</Button>
											<Button
												icon='HeroBattery50'
												variant='outline'
												isActive={dimension === 'default'}
												onClick={() => setDimension('default')}>
												Default
											</Button>
											<Button
												icon='HeroBattery100'
												variant='outline'
												isActive={dimension === 'lg'}
												onClick={() => setDimension('lg')}>
												Large
											</Button>
										</ButtonGroup>
									</div>
									<div className='basis-auto'>
										<ButtonGroup size={dimension}>
											<Button
												icon='HeroBattery0'
												variant='solid'
												isActive={dimension === 'sm'}
												onClick={() => setDimension('sm')}
											/>
											<Button
												icon='HeroBattery50'
												variant='solid'
												isActive={dimension === 'default'}
												onClick={() => setDimension('default')}
											/>
											<Button
												icon='HeroBattery100'
												variant='solid'
												isActive={dimension === 'lg'}
												onClick={() => setDimension('lg')}
											/>
										</ButtonGroup>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-span-12 md:col-span-6 2xl:col-span-4'>
						<Card className='h-full'>
							<CardHeader>
								<CardHeaderChild>
									<h3>Typo</h3>
								</CardHeaderChild>
							</CardHeader>
							<CardBody>
								<Table>
									<THead>
										<Tr>
											<Th className='text-left'>Tag</Th>
											<Th className='text-left'>Title</Th>
										</Tr>
									</THead>
									<TBody>
										<Tr>
											<Td>h1</Td>
											<Td>
												<h1>Heading 1</h1>
											</Td>
										</Tr>
										<Tr>
											<Td>h2</Td>
											<Td>
												<h2>Heading 2</h2>
											</Td>
										</Tr>
										<Tr>
											<Td>h3</Td>
											<Td>
												<h3>Heading 3</h3>
											</Td>
										</Tr>
										<Tr>
											<Td>h4</Td>
											<Td>
												<h4>Heading 4</h4>
											</Td>
										</Tr>
										<Tr>
											<Td>h5</Td>
											<Td>
												<h5>Heading 5</h5>
											</Td>
										</Tr>
										<Tr>
											<Td>h6</Td>
											<Td>
												<h6>Heading 6</h6>
											</Td>
										</Tr>
									</TBody>
								</Table>
							</CardBody>
						</Card>
					</div>

					<div className='col-span-12 md:col-span-6 2xl:col-span-4'>
						<Card className='h-full'>
							<CardHeader>
								<CardHeaderChild>
									<span>First</span>
								</CardHeaderChild>
								<CardHeaderChild>
									<Button variant='outline'>Click</Button>
								</CardHeaderChild>
							</CardHeader>
							<CardBody>Body</CardBody>
							<CardFooter>
								<CardFooterChild>
									<span>First</span>
								</CardFooterChild>
								<CardFooterChild>
									<span>Second</span>
								</CardFooterChild>
							</CardFooter>
						</Card>
					</div>
				</div>
			</Container>
		</PageWrapper>
	);
};

export default ExamplesPage;
