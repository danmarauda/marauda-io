import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import { DateRangePicker, Range } from 'react-date-range';
import colors from 'tailwindcss/colors';
import Container from '../../../components/layouts/Container/Container';
import PageWrapper from '../../../components/layouts/PageWrapper/PageWrapper';
import ChartPartial from './_partial/Chart.partial';
import TablePartial from './_partial/Table.partial';
import Balance1Partial from './_partial/Balance1.partial';
import Balance2Partial from './_partial/Balance2.partial';
import Balance3Partial from './_partial/Balance3.partial';
import Balance4Partial from './_partial/Balance4.partial';
import TimelinePartial from './_partial/Timeline.partial';
import Subheader, {
	SubheaderLeft,
	SubheaderRight,
} from '../../../components/layouts/Subheader/Subheader';
import CommentPartial from './_partial/Comment.partial';
import PeriodButtonsPartial from './_partial/PeriodButtons.partial';
import PERIOD, { TPeriod } from '../../../constants/periods.constant';
import Header, { HeaderLeft, HeaderRight } from '../../../components/layouts/Header/Header';
import DefaultHeaderRightCommon from '../../../templates/layouts/Headers/_common/DefaultHeaderRight.common';
import Dropdown, { DropdownMenu, DropdownToggle } from '../../../components/ui/Dropdown';
import Button from '../../../components/ui/Button';
import themeConfig from '../../../config/theme.config';
import Breadcrumb from '../../../components/layouts/Breadcrumb/Breadcrumb';
import Card from '../../../components/ui/Card';

const SalesDashboardPage = () => {
	const { i18n } = useTranslation();

	const [activeTab, setActiveTab] = useState<TPeriod>(PERIOD.DAY);

	const [selectedDate, setSelectedDate] = useState<Range[]>([
		{
			startDate: dayjs().startOf('week').add(-1, 'week').toDate(),
			endDate: dayjs().endOf('week').toDate(),
			key: 'selection',
		},
	]);

	useEffect(() => {
		if (activeTab === PERIOD.DAY) {
			setSelectedDate([
				{
					startDate: dayjs().startOf('day').toDate(),
					endDate: dayjs().endOf('day').toDate(),
					key: 'selection',
				},
			]);
		}
		if (activeTab === PERIOD.WEEK) {
			setSelectedDate([
				{
					startDate: dayjs().startOf('week').toDate(),
					endDate: dayjs().endOf('week').toDate(),
					key: 'selection',
				},
			]);
		}
		if (activeTab === PERIOD.MONTH) {
			setSelectedDate([
				{
					startDate: dayjs().startOf('month').toDate(),
					endDate: dayjs().endOf('month').toDate(),
					key: 'selection',
				},
			]);
		}
		return () => {};
	}, [activeTab]);
	useEffect(() => {
		const selectedStart = dayjs(selectedDate[0].startDate).format('LL');
		const selectedEnd = dayjs(selectedDate[0].endDate).format('LL');

		if (
			selectedStart === dayjs().startOf('day').format('LL') &&
			selectedEnd === dayjs().endOf('day').format('LL')
		) {
			setActiveTab(PERIOD.DAY);
		}
		if (
			selectedStart === dayjs().startOf('week').format('LL') &&
			selectedEnd === dayjs().endOf('week').format('LL')
		) {
			setActiveTab(PERIOD.WEEK);
		}
		if (
			selectedStart === dayjs().startOf('month').format('LL') &&
			selectedEnd === dayjs().endOf('month').format('LL')
		) {
			setActiveTab(PERIOD.MONTH);
		}
		return () => {};
	}, [selectedDate]);

	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb path='Pages / Dashboard' currentPage='Sales' />
				</HeaderLeft>
				<HeaderRight>
					<DefaultHeaderRightCommon />
				</HeaderRight>
			</Header>
			<PageWrapper name='Sales Dashboard'>
				<Subheader>
					<SubheaderLeft>
						<PeriodButtonsPartial activeTab={activeTab} setActiveTab={setActiveTab} />
					</SubheaderLeft>
					<SubheaderRight>
						<Dropdown>
							<DropdownToggle>
								<Button icon='HeroCalendarDays'>
									{activeTab === PERIOD.DAY &&
										dayjs().locale(i18n.language).format('LL')}
									{activeTab === PERIOD.WEEK &&
										`${dayjs()
											.startOf('week')
											.locale(i18n.language)
											.format('MMMM D')} - ${dayjs()
											.endOf('week')
											.locale(i18n.language)
											.format('MMMM D, YYYY')}`}
									{activeTab === PERIOD.MONTH &&
										dayjs()
											.startOf('month')
											.locale(i18n.language)
											.format('MMMM, YYYY')}
								</Button>
							</DropdownToggle>
							<DropdownMenu className='!p-0'>
								<DateRangePicker
									onChange={(item) => setSelectedDate([item.selection])}
									moveRangeOnFirstSelection={false}
									months={2}
									ranges={selectedDate}
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
				<Container>
					<div className='grid grid-cols-12 gap-4'>
						<div className='col-span-12 sm:col-span-6 lg:col-span-3'>
							<Balance1Partial activeTab={activeTab} />
						</div>
						<div className='col-span-12 sm:col-span-6 lg:col-span-3'>
							<Balance2Partial activeTab={activeTab} />
						</div>
						<div className='col-span-12 sm:col-span-6 lg:col-span-3'>
							<Balance3Partial activeTab={activeTab} />
						</div>
						<div className='col-span-12 sm:col-span-6 lg:col-span-3'>
							<Balance4Partial activeTab={activeTab} />
						</div>

						<div className='col-span-12 2xl:col-span-8'>
							<ChartPartial />
						</div>
						<div className='col-span-12 2xl:col-span-4'>
							<CommentPartial />
						</div>

						<div className='col-span-12 2xl:col-span-8'>
							<Card className='h-full'>
								<TablePartial />
							</Card>
						</div>
						<div className='col-span-12 2xl:col-span-4'>
							<TimelinePartial />
						</div>
					</div>
				</Container>
			</PageWrapper>
		</>
	);
};

export default SalesDashboardPage;
