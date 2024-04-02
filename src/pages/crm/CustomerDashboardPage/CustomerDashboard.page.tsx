import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import dayjs from 'dayjs';
import colors from 'tailwindcss/colors';
import { useTranslation } from 'react-i18next';
import PageWrapper from '../../../components/layouts/PageWrapper/PageWrapper';
import Container from '../../../components/layouts/Container/Container';
import MapPartial from './_partial/Map.partial';
import Subheader, {
	SubheaderLeft,
	SubheaderRight,
} from '../../../components/layouts/Subheader/Subheader';
import ChartPartial from './_partial/Chart.partial';
import ReportsPartial from './_partial/Reports.partial';
import UserListPartial from './_partial/UserList.partial';
import CalendarPartial from './_partial/Calendar.partial';
import Mini1Partial from './_partial/Mini1.partial';
import Mini2Partial from './_partial/Mini2.partial';
import Mini3Partial from './_partial/Mini3.partial';
import Mini4Partial from './_partial/Mini4.partial';
import Mini5Partial from './_partial/Mini5.partial';
import Mini6Partial from './_partial/Mini6.partial';
import Button from '../../../components/ui/Button';
import Dropdown, { DropdownMenu, DropdownToggle } from '../../../components/ui/Dropdown';
import themeConfig from '../../../config/theme.config';

const TABS: {
	[key in 'OVERVIEW' | 'ONLINE_USERS' | 'TASKS']: 'Overview' | 'Online Users' | 'Tasks';
} = {
	OVERVIEW: 'Overview',
	ONLINE_USERS: 'Online Users',
	TASKS: 'Tasks',
};

const CustomerDashboardPage = () => {
	const [activeTab, setActiveTab] = useState(TABS.OVERVIEW);
	const [state, setState] = useState({
		selection: {
			startDate: dayjs().startOf('week').add(-1, 'week').toDate(),
			endDate: dayjs().endOf('week').toDate(),
			key: 'selection',
		},
		selection2: {
			startDate: dayjs().startOf('week').add(-1, 'week').add(2, 'day').toDate(),
			endDate: dayjs().endOf('week').add(-4, 'day').toDate(),
			key: 'selection2',
		},
		selection3: {
			startDate: dayjs().startOf('week').add(2, 'week').add(2, 'day').toDate(),
			endDate: dayjs().startOf('week').add(3, 'week').add(5, 'day').toDate(),
			key: 'selection3',
		},
	});

	const { i18n } = useTranslation();

	return (
		<PageWrapper name='CRM Dashboard'>
			<Subheader>
				<SubheaderLeft>
					{Object.values(TABS).map((i) => (
						<Button
							key={i}
							className='!p-0'
							isActive={i === activeTab}
							onClick={() => setActiveTab(i)}>
							{i}
						</Button>
					))}
				</SubheaderLeft>
				<SubheaderRight>
					<Dropdown>
						<DropdownToggle>
							<Button icon='HeroCalendarDays'>{`${dayjs(state.selection.startDate)
								.locale(i18n.language)
								.format('LL')} - ${dayjs(state.selection3.endDate).format(
								'LL',
							)}`}</Button>
						</DropdownToggle>
						<DropdownMenu className='!p-0'>
							<DateRangePicker
								onChange={(item) =>
									setState({
										...state,
										...item,
									})
								}
								moveRangeOnFirstSelection={false}
								retainEndDateOnFirstSelection={false}
								months={2}
								ranges={Object.values(state)}
								direction='horizontal'
								rangeColors={[
									colors[themeConfig.themeColor][themeConfig.themeColorShade],
									colors.emerald[themeConfig.themeColorShade],
									colors.amber[themeConfig.themeColorShade],
								]}
							/>
						</DropdownMenu>
					</Dropdown>
				</SubheaderRight>
			</Subheader>
			<Container breakpoint={null} className='h-full w-full'>
				{activeTab === TABS.OVERVIEW && (
					<div className='grid grid-cols-12 gap-4'>
						<div className='col-span-12 sm:col-span-6 2xl:col-span-2'>
							<Mini1Partial />
						</div>
						<div className='col-span-12 sm:col-span-6 2xl:col-span-2'>
							<Mini2Partial />
						</div>
						<div className='col-span-12 sm:col-span-6 2xl:col-span-2'>
							<Mini3Partial />
						</div>
						<div className='col-span-12 sm:col-span-6 2xl:col-span-2'>
							<Mini4Partial />
						</div>
						<div className='col-span-12 sm:col-span-6 2xl:col-span-2'>
							<Mini5Partial />
						</div>
						<div className='col-span-12 sm:col-span-6 2xl:col-span-2'>
							<Mini6Partial />
						</div>

						<div className='col-span-12 2xl:col-span-3'>
							<MapPartial />
						</div>
						<div className='col-span-12 2xl:col-span-3'>
							<ChartPartial />
						</div>
						<div className='col-span-12 2xl:col-span-6'>
							<ReportsPartial />
						</div>

						<div className='col-span-12 2xl:col-span-6'>
							<UserListPartial />
						</div>
						<div className='col-span-12 2xl:col-span-6'>
							<CalendarPartial />
						</div>
					</div>
				)}
				{activeTab === TABS.ONLINE_USERS && (
					<div className='grid grid-cols-12 gap-4'>
						<div className='col-span-12'>
							<MapPartial composableMapClassName='aspect-[2/1]' />
						</div>
					</div>
				)}
				{activeTab === TABS.TASKS && (
					<div className='grid h-full grid-cols-12 gap-4'>
						<div className='col-span-12 h-full'>
							<CalendarPartial height='100%' />
						</div>
					</div>
				)}
			</Container>
		</PageWrapper>
	);
};

export default CustomerDashboardPage;
