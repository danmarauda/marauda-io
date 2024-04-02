import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { Descendant } from 'slate';
import PageWrapper from '../components/layouts/PageWrapper/PageWrapper';
import { useAuth } from '../context/authContext';
import Container from '../components/layouts/Container/Container';
import Subheader, {
	SubheaderLeft,
	SubheaderRight,
} from '../components/layouts/Subheader/Subheader';
import Card, { CardBody, CardFooter, CardFooterChild } from '../components/ui/Card';
import Button, { IButtonProps } from '../components/ui/Button';
import { TIcons } from '../types/icons.type';
import Label from '../components/form/Label';
import Input from '../components/form/Input';
import Select from '../components/form/Select';
import rolesDb from '../mocks/db/roles.db';
import Avatar from '../components/Avatar';
import useSaveBtn from '../hooks/useSaveBtn';
import FieldWrap from '../components/form/FieldWrap';
import Icon from '../components/icon/Icon';
import Checkbox from '../components/form/Checkbox';
import Badge from '../components/ui/Badge';
import RichText from '../components/RichText';
import Radio, { RadioGroup } from '../components/form/Radio';
import useDarkMode from '../hooks/useDarkMode';
import { TDarkMode } from '../types/darkMode.type';

type TTab = {
	text:
		| 'Edit Profile'
		| 'Social'
		| 'Password'
		| '2FA'
		| 'Newsletter'
		| 'Sessions'
		| 'Connected'
		| 'Appearance';
	icon: TIcons;
};
type TTabs = {
	[key in
		| 'EDIT'
		| 'SOCIAL'
		| 'PASSWORD'
		| '2FA'
		| 'NEWSLETTER'
		| 'SESSIONS'
		| 'CONNECTED'
		| 'APPEARANCE']: TTab;
};
const TAB: TTabs = {
	EDIT: {
		text: 'Edit Profile',
		icon: 'HeroPencil',
	},
	SOCIAL: {
		text: 'Social',
		icon: 'HeroGlobeAmericas',
	},
	PASSWORD: {
		text: 'Password',
		icon: 'HeroKey',
	},
	'2FA': {
		text: '2FA',
		icon: 'HeroShieldExclamation',
	},
	NEWSLETTER: {
		text: 'Newsletter',
		icon: 'HeroBell',
	},
	SESSIONS: {
		text: 'Sessions',
		icon: 'HeroQueueList',
	},
	CONNECTED: {
		text: 'Connected',
		icon: 'HeroLink',
	},
	APPEARANCE: {
		text: 'Appearance',
		icon: 'HeroSwatch',
	},
};

const ProfilePage = () => {
	const { i18n } = useTranslation();

	const { setDarkModeStatus } = useDarkMode();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { userData, isLoading } = useAuth();
	const [activeTab, setActiveTab] = useState<TTab>(TAB.EDIT);

	const defaultProps: IButtonProps = {
		color: 'zinc',
	};
	const activeProps: IButtonProps = {
		...defaultProps,
		isActive: true,
		color: 'blue',
		colorIntensity: '500',
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isSaving, setIsSaving] = useState<boolean>(false);

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			fileUpload: '',
			username: userData?.username,
			email: userData?.email,
			firstName: userData?.firstName,
			lastName: userData?.lastName,
			position: userData?.position,
			role: userData?.role,
			oldPassword: '',
			newPassword: '',
			newPasswordConfirmation: '',
			twitter: userData?.socialProfiles?.twitter,
			facebook: userData?.socialProfiles?.facebook,
			instagram: userData?.socialProfiles?.instagram,
			github: userData?.socialProfiles?.github,
			twoFactorAuth: userData?.twoFactorAuth,
			weeklyNewsletter: userData?.newsletter?.weeklyNewsletter || false,
			lifecycleEmails: userData?.newsletter?.lifecycleEmails || false,
			promotionalEmails: userData?.newsletter?.promotionalEmails || false,
			productUpdates: userData?.newsletter?.productUpdates || false,
			bio: (userData?.bio && (JSON.parse(userData.bio) as Descendant[])) || [],
			gender: 'Male',
			theme: 'dark',
			birth: '1987-12-21',
		},
		onSubmit: () => {},
	});

	useEffect(() => {
		setDarkModeStatus(formik.values.theme as TDarkMode);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formik.values.theme]);

	const [passwordShowStatus, setPasswordShowStatus] = useState<boolean>(false);
	const [passwordNewShowStatus, setPasswordNewShowStatus] = useState<boolean>(false);
	const [passwordNewConfShowStatus, setPasswordNewConfShowStatus] = useState<boolean>(false);

	const { saveBtnText, saveBtnColor, saveBtnDisable } = useSaveBtn({
		isNewItem: false,
		isSaving,
		isDirty: formik.dirty,
	});

	return (
		<PageWrapper name={formik.values.firstName}>
			<Subheader>
				<SubheaderLeft>
					{`${userData?.firstName} ${userData?.lastName}`}{' '}
					<Badge
						color='blue'
						variant='outline'
						rounded='rounded-full'
						className='border-transparent'>
						Edit User
					</Badge>
				</SubheaderLeft>
				<SubheaderRight>
					<Button
						icon='HeroServer'
						variant='solid'
						color={saveBtnColor}
						isDisable={saveBtnDisable}
						onClick={() => formik.handleSubmit()}>
						{saveBtnText}
					</Button>
				</SubheaderRight>
			</Subheader>
			<Container className='h-full'>
				<Card className='h-full'>
					<CardBody>
						<div className='grid grid-cols-12 gap-4'>
							<div className='col-span-12 flex gap-4 max-sm:flex-wrap sm:col-span-4 sm:flex-col md:col-span-2'>
								{Object.values(TAB).map((i) => (
									<div key={i.text}>
										<Button
											icon={i.icon}
											// eslint-disable-next-line react/jsx-props-no-spreading
											{...(activeTab.text === i.text
												? {
														...activeProps,
													}
												: {
														...defaultProps,
													})}
											onClick={() => {
												setActiveTab(i);
											}}>
											{i.text}
										</Button>
									</div>
								))}
								<div className='border-zinc-500/25 dark:border-zinc-500/50 max-sm:border-s sm:border-t sm:pt-4'>
									<Button icon='HeroTrash' color='red'>
										Delete Account
									</Button>
								</div>
							</div>
							<div className='col-span-12 flex flex-col gap-4 sm:col-span-8 md:col-span-10'>
								{activeTab === TAB.EDIT && (
									<>
										<div className='text-4xl font-semibold'>Edit Profile</div>
										<div className='flex w-full gap-4'>
											<div className='flex-shrink-0'>
												<Avatar
													src={userData?.image?.thumb}
													className='!w-24'
													// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
													name={`${userData?.firstName} ${userData?.lastName}`}
												/>
											</div>
											<div className='flex grow items-center'>
												<div>
													<div className='w-full'>
														<Label
															htmlFor='fileUpload'
															className=''
															description='At least 800x800 px recommended. JPG or PNG and GIF is allowed'>
															Upload new image
														</Label>
														<Input
															id='fileUpload'
															name='fileUpload'
															type='file'
															onChange={formik.handleChange}
															value={formik.values.fileUpload}
														/>
													</div>
												</div>
											</div>
										</div>
										<div className='grid grid-cols-12 gap-4'>
											<div className='col-span-12 lg:col-span-6'>
												<Label htmlFor='username'>Username</Label>
												<FieldWrap
													firstSuffix={
														<Icon icon='HeroUser' className='mx-2' />
													}>
													<Input
														id='username'
														name='username'
														onChange={formik.handleChange}
														value={formik.values.username}
														autoComplete='username'
													/>
												</FieldWrap>
											</div>
											<div className='col-span-12 lg:col-span-6'>
												<Label htmlFor='email'>Email</Label>
												<FieldWrap
													firstSuffix={
														<Icon
															icon='HeroEnvelope'
															className='mx-2'
														/>
													}>
													<Input
														id='email'
														name='email'
														onChange={formik.handleChange}
														value={formik.values.email}
														autoComplete='email'
													/>
												</FieldWrap>
											</div>
											<div className='col-span-12 lg:col-span-6'>
												<Label htmlFor='firstName'>First Name</Label>
												<Input
													id='firstName'
													name='firstName'
													onChange={formik.handleChange}
													value={formik.values.firstName}
													autoComplete='given-name'
													autoCapitalize='words'
												/>
											</div>
											<div className='col-span-12 lg:col-span-6'>
												<Label htmlFor='lastName'>Last Name</Label>
												<Input
													id='lastName'
													name='lastName'
													onChange={formik.handleChange}
													value={formik.values.lastName}
													autoComplete='family-name'
													autoCapitalize='words'
												/>
											</div>

											<div className='col-span-12 lg:col-span-6'>
												<Label htmlFor='birth'>Last Name</Label>
												<Input
													type='date'
													id='birth'
													name='birth'
													onChange={formik.handleChange}
													value={formik.values.birth}
													autoComplete='bday'
												/>
											</div>
											<div className='col-span-12 lg:col-span-6'>
												<Label htmlFor='gender'>Gender</Label>
												<RadioGroup isInline>
													{['Male', 'Female'].map((i) => (
														<Radio
															key={i}
															label={i}
															name='gender'
															value={i}
															selectedValue={formik.values.gender}
															onChange={formik.handleChange}
														/>
													))}
												</RadioGroup>
											</div>

											<div className='col-span-12'>
												<Label htmlFor='position'>Role</Label>
												<FieldWrap
													firstSuffix={
														<Icon
															icon='HeroShieldCheck'
															className='mx-2'
														/>
													}
													lastSuffix={
														<Icon
															icon='HeroChevronDown'
															className='mx-2'
														/>
													}>
													<Select
														name='role'
														onChange={formik.handleChange}
														value={formik.values.role}
														placeholder='Select role'>
														{rolesDb.map((role) => (
															<option key={role.id} value={role.id}>
																{role.name}
															</option>
														))}
													</Select>
												</FieldWrap>
											</div>
											<div className='col-span-12'>
												<Label htmlFor='position'>Position</Label>

												<FieldWrap
													firstSuffix={
														<Icon
															icon='HeroBriefcase'
															className='mx-2'
														/>
													}>
													<Input
														id='position'
														name='position'
														onChange={formik.handleChange}
														value={formik.values.position}
													/>
												</FieldWrap>
											</div>
											<div className='col-span-12'>
												<Label htmlFor='bio'>Bio</Label>
												<RichText
													id='bio'
													value={formik.values.bio}
													handleChange={(event) => {
														formik
															.setFieldValue('bio', event)
															.then(() => {})
															.catch(() => {});
													}}
												/>
											</div>
										</div>
									</>
								)}
								{activeTab === TAB.SOCIAL && (
									<>
										<div className='text-4xl font-semibold'>Social</div>
										<div className='grid grid-cols-12 gap-4'>
											<div className='col-span-12'>
												<Label htmlFor='twitter'>Twitter</Label>
												<FieldWrap firstSuffix='https://twitter.com/'>
													<Input
														id='twitter'
														name='twitter'
														onChange={formik.handleChange}
														value={formik.values.twitter}
														placeholder='username'
													/>
												</FieldWrap>
											</div>

											<div className='col-span-12'>
												<Label htmlFor='facebook'>Facebook</Label>
												<FieldWrap firstSuffix='https://facebook.com/'>
													<Input
														id='facebook'
														name='facebook'
														onChange={formik.handleChange}
														value={formik.values.facebook}
														placeholder='username'
													/>
												</FieldWrap>
											</div>

											<div className='col-span-12'>
												<Label htmlFor='instagram'>Instagram</Label>
												<FieldWrap firstSuffix='https://instagram.com/'>
													<Input
														id='instagram'
														name='instagram'
														onChange={formik.handleChange}
														value={formik.values.instagram}
														placeholder='username'
													/>
												</FieldWrap>
											</div>

											<div className='col-span-12'>
												<Label htmlFor='github'>GitHub</Label>
												<FieldWrap firstSuffix='https://github.com/'>
													<Input
														id='github'
														name='github'
														onChange={formik.handleChange}
														value={formik.values.github}
														placeholder='username'
													/>
												</FieldWrap>
											</div>
										</div>
									</>
								)}
								{activeTab === TAB.PASSWORD && (
									<>
										<div className='text-4xl font-semibold'>Password</div>
										<div className='grid grid-cols-12 gap-4'>
											<div className='col-span-12'>
												<Label htmlFor='oldPassword'>Old Password</Label>
												<FieldWrap
													lastSuffix={
														<Icon
															className='mx-2'
															icon={
																passwordShowStatus
																	? 'HeroEyeSlash'
																	: 'HeroEye'
															}
															onClick={() => {
																setPasswordShowStatus(
																	!passwordShowStatus,
																);
															}}
														/>
													}>
													<Input
														type={
															passwordShowStatus ? 'text' : 'password'
														}
														id='oldPassword'
														name='oldPassword'
														onChange={formik.handleChange}
														value={formik.values.oldPassword}
														autoComplete='current-password'
													/>
												</FieldWrap>
											</div>
											<div className='col-span-12'>
												<Label htmlFor='newPassword'>New Password</Label>
												<FieldWrap
													lastSuffix={
														<Icon
															className='mx-2'
															icon={
																passwordNewShowStatus
																	? 'HeroEyeSlash'
																	: 'HeroEye'
															}
															onClick={() => {
																setPasswordNewShowStatus(
																	!passwordNewShowStatus,
																);
															}}
														/>
													}>
													<Input
														type={
															passwordNewShowStatus
																? 'text'
																: 'password'
														}
														id='newPassword'
														name='newPassword'
														onChange={formik.handleChange}
														value={formik.values.newPassword}
														autoComplete='new-password'
													/>
												</FieldWrap>
											</div>
											<div className='col-span-12'>
												<Label htmlFor='newPasswordConfirmation'>
													New Password Confirmation
												</Label>
												<FieldWrap
													lastSuffix={
														<Icon
															className='mx-2'
															icon={
																passwordNewConfShowStatus
																	? 'HeroEyeSlash'
																	: 'HeroEye'
															}
															onClick={() => {
																setPasswordNewConfShowStatus(
																	!passwordNewConfShowStatus,
																);
															}}
														/>
													}>
													<Input
														type={
															passwordNewConfShowStatus
																? 'text'
																: 'password'
														}
														id='newPasswordConfirmation'
														name='newPasswordConfirmation'
														onChange={formik.handleChange}
														value={
															formik.values.newPasswordConfirmation
														}
														autoComplete='new-password'
													/>
												</FieldWrap>
											</div>
										</div>
									</>
								)}
								{activeTab === TAB['2FA'] && (
									<>
										<div className='text-4xl font-semibold'>2FA</div>
										<div className='flex flex-wrap divide-y divide-dashed divide-zinc-500/50 [&>*]:py-4'>
											<div className='flex basis-full gap-4'>
												<div className='flex grow items-center'>
													<div className='w-full text-xl font-semibold'>
														Authenticator App
													</div>
												</div>
												<div className='flex-shrink-0'>
													<Button
														variant='outline'
														isDisable={!formik.values.twoFactorAuth}>
														Set up
													</Button>
												</div>
											</div>
											<div className='flex basis-full gap-4'>
												<div className='flex grow items-center'>
													<div className='w-full text-xl font-semibold'>
														Security Keys
													</div>
												</div>
												<div className='flex-shrink-0'>
													<Button
														color='red'
														className='!px-0'
														isDisable={!formik.values.twoFactorAuth}>
														Deactivate
													</Button>
												</div>
											</div>
											<div className='flex basis-full gap-4'>
												<div className='flex grow items-center'>
													<div className='w-full text-xl font-semibold'>
														Telephone Number
													</div>
												</div>
												<div className='flex flex-shrink-0 items-center gap-4'>
													<span className='text-zinc-500'>
														{userData?.phone}
													</span>
													<Button
														variant='outline'
														color='zinc'
														isDisable={!formik.values.twoFactorAuth}>
														Edit
													</Button>
												</div>
											</div>
										</div>
									</>
								)}
								{activeTab === TAB.NEWSLETTER && (
									<>
										<div className='text-4xl font-semibold'>Newsletter</div>
										<div className='flex flex-wrap divide-y divide-dashed divide-zinc-500/50 [&>*]:py-4'>
											<div className='flex basis-full gap-4'>
												<div className='flex grow items-center'>
													<Label
														htmlFor='weeklyNewsletter'
														className='!mb-0'>
														<div className='text-xl font-semibold'>
															Weekly newsletter
														</div>
														<div className='text-zinc-500'>
															Get notified about articles, discounts
															and new products.
														</div>
													</Label>
												</div>
												<div className='flex flex-shrink-0 items-center'>
													<Checkbox
														variant='switch'
														id='weeklyNewsletter'
														name='weeklyNewsletter'
														onChange={formik.handleChange}
														checked={formik.values.weeklyNewsletter}
													/>
												</div>
											</div>
											<div className='flex basis-full gap-4'>
												<div className='flex grow items-center'>
													<Label
														htmlFor='lifecycleEmails'
														className='!mb-0'>
														<div className='text-xl font-semibold'>
															Lifecycle emails
														</div>
														<div className='text-zinc-500'>
															Get personalized offers and emails based
															on your activity.
														</div>
													</Label>
												</div>
												<div className='flex flex-shrink-0 items-center'>
													<Checkbox
														variant='switch'
														id='lifecycleEmails'
														name='lifecycleEmails'
														onChange={formik.handleChange}
														checked={formik.values.lifecycleEmails}
													/>
												</div>
											</div>
											<div className='flex basis-full gap-4'>
												<div className='flex grow items-center'>
													<Label
														htmlFor='promotionalEmails'
														className='!mb-0'>
														<div className='text-xl font-semibold'>
															Promotional emails
														</div>
														<div className='text-zinc-500'>
															Get personalized offers and emails based
															on your orders & preferences.
														</div>
													</Label>
												</div>
												<div className='flex flex-shrink-0 items-center'>
													<Checkbox
														variant='switch'
														id='promotionalEmails'
														name='promotionalEmails'
														onChange={formik.handleChange}
														checked={formik.values.promotionalEmails}
													/>
												</div>
											</div>
											<div className='flex basis-full gap-4'>
												<div className='flex grow items-center'>
													<Label
														htmlFor='productUpdates'
														className='!mb-0'>
														<div className='text-xl font-semibold'>
															Product updates
														</div>
														<div className='text-zinc-500'>
															Checking this will allow us to notify
															you when we make updates to products you
															have downloaded/purchased.
														</div>
													</Label>
												</div>
												<div className='flex flex-shrink-0 items-center'>
													<Checkbox
														variant='switch'
														id='productUpdates'
														name='productUpdates'
														onChange={formik.handleChange}
														checked={formik.values.productUpdates}
													/>
												</div>
											</div>
										</div>
									</>
								)}
								{activeTab === TAB.SESSIONS && (
									<>
										<div className='text-4xl font-semibold'>Newsletter</div>
										<div className='flex flex-wrap divide-y divide-dashed divide-zinc-500/50 [&>*]:py-4'>
											<div className='group flex basis-full gap-4'>
												<div className='flex grow items-center'>
													<div>
														<div className='text-xl font-semibold'>
															Chrome
														</div>
														<div className='text-zinc-500'>
															MacOS 13.4.1
														</div>
													</div>
													<Button
														className='invisible group-hover:visible'
														color='red'>
														Delete
													</Button>
												</div>
												<div className='flex flex-shrink-0 items-center gap-4'>
													<Icon icon='CustomUSA' size='text-3xl' />
													<Badge
														variant='outline'
														rounded='rounded-full'
														className='border-transparent'>
														3 hours ago
													</Badge>
												</div>
											</div>
											<div className='group flex basis-full gap-4'>
												<div className='flex grow items-center'>
													<div>
														<div className='text-xl font-semibold'>
															Safari
														</div>
														<div className='text-zinc-500'>
															MacOS 13.4.1
														</div>
													</div>
													<Button
														className='invisible group-hover:visible'
														color='red'>
														Delete
													</Button>
												</div>
												<div className='flex flex-shrink-0 items-center gap-4'>
													<Icon icon='CustomUSA' size='text-3xl' />
													<Badge
														variant='outline'
														rounded='rounded-full'
														className='border-transparent'>
														1 day ago
													</Badge>
												</div>
											</div>
											<div className='group flex basis-full gap-4'>
												<div className='flex grow items-center'>
													<div>
														<div className='text-xl font-semibold'>
															App
														</div>
														<div className='text-zinc-500'>
															iOS 16.5.1
														</div>
													</div>
													<Button
														className='invisible group-hover:visible'
														color='red'>
														Delete
													</Button>
												</div>
												<div className='flex flex-shrink-0 items-center gap-4'>
													<Icon icon='CustomUSA' size='text-3xl' />
													<Badge
														variant='outline'
														rounded='rounded-full'
														className='border-transparent'>
														3 days ago
													</Badge>
												</div>
											</div>
											<div className='group flex basis-full gap-4'>
												<div className='flex grow items-center'>
													<div>
														<div className='text-xl font-semibold'>
															Safari
														</div>
														<div className='text-zinc-500'>
															iPadOS 16.5.1
														</div>
													</div>
													<Button
														className='invisible group-hover:visible'
														color='red'>
														Delete
													</Button>
												</div>
												<div className='flex flex-shrink-0 items-center gap-4'>
													<Icon icon='CustomUSA' size='text-3xl' />
													<Badge
														variant='outline'
														rounded='rounded-full'
														color='red'
														className='border-transparent'>
														Expired
													</Badge>
												</div>
											</div>
										</div>
									</>
								)}
								{activeTab === TAB.CONNECTED && (
									<>
										<div className='text-4xl font-semibold'>Connected</div>
										<div className='flex flex-wrap divide-y divide-dashed divide-zinc-500/50 [&>*]:py-4'>
											{userData?.socialAuth &&
												Object.keys(userData?.socialAuth).map((i) => {
													// @ts-ignore
													// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
													const status = userData?.socialAuth[i];
													return (
														<div
															key={i}
															className='flex basis-full gap-4'>
															<div className='flex grow items-center'>
																<div className='text-xl font-semibold capitalize'>
																	{i}
																</div>
															</div>
															<div className='flex flex-shrink-0 items-center gap-4'>
																<Button
																	icon={
																		status
																			? 'HeroTrash'
																			: 'HeroCog8Tooth'
																	}
																	color={status ? 'red' : 'blue'}>
																	{status ? 'Delete' : 'Set up'}
																</Button>
															</div>
														</div>
													);
												})}
										</div>
									</>
								)}
								{activeTab === TAB.APPEARANCE && (
									<>
										<div className='text-4xl font-semibold'>Appearance</div>
										<div className='grid grid-cols-12 gap-4'>
											<div className='col-span-12'>
												<Label htmlFor='theme'>Theme</Label>
												<RadioGroup isInline>
													<Radio
														name='theme'
														value='dark'
														selectedValue={formik.values.theme}
														onChange={formik.handleChange}>
														<div className='relative'>
															<div className='flex h-2 w-full items-center gap-1 bg-zinc-500 p-1'>
																<div className='h-1 w-1 rounded-full bg-red-500' />
																<div className='h-1 w-1 rounded-full bg-amber-500' />
																<div className='h-1 w-1 rounded-full bg-emerald-500' />
															</div>
															<div className='flex aspect-video w-56 bg-zinc-950'>
																<div className='h-full w-1/4 border-e border-zinc-800/50 bg-zinc-900/75' />
																<div className='h-full w-3/4'>
																	<div className='h-4 w-full border-b border-zinc-800/50 bg-zinc-900/75' />
																	<div />
																</div>
															</div>
														</div>
													</Radio>
													<Radio
														name='theme'
														value='light'
														selectedValue={formik.values.theme}
														onChange={formik.handleChange}>
														<div className='relative'>
															<div className='flex h-2 w-full items-center gap-1 bg-zinc-500 p-1'>
																<div className='h-1 w-1 rounded-full bg-red-500' />
																<div className='h-1 w-1 rounded-full bg-amber-500' />
																<div className='h-1 w-1 rounded-full bg-emerald-500' />
															</div>
															<div className='flex aspect-video w-56 bg-zinc-100'>
																<div className='h-full w-1/4 border-e border-zinc-300/25 bg-white' />
																<div className='h-full w-3/4'>
																	<div className='h-4 w-full border-b border-zinc-300/25 bg-white' />
																	<div />
																</div>
															</div>
														</div>
													</Radio>
												</RadioGroup>
											</div>
										</div>
									</>
								)}
							</div>
						</div>
					</CardBody>
					<CardFooter>
						<CardFooterChild>
							<div className='flex items-center gap-2'>
								<Icon icon='HeroDocumentCheck' size='text-2xl' />
								<span className='text-zinc-500'>Last saved:</span>
								<b>{dayjs().locale(i18n.language).format('LLL')}</b>
							</div>
						</CardFooterChild>
						<CardFooterChild>
							<Button
								icon='HeroServer'
								variant='solid'
								color={saveBtnColor}
								isDisable={saveBtnDisable}
								onClick={() => formik.handleSubmit()}>
								{saveBtnText}
							</Button>
						</CardFooterChild>
					</CardFooter>
				</Card>
			</Container>
		</PageWrapper>
	);
};

export default ProfilePage;
