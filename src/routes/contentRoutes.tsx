import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import { appPages, authPages, componentsPages, examplePages } from '../config/pages.config';
import NotFoundPage from '../pages/NotFound.page';
import LoginPage from '../pages/Login.page';

/**
 * UI
 */
const AlertPage = lazy(() => import('../pages/componentsAndTemplates/ui/AlertPage/Alert.page'));
const BadgePage = lazy(() => import('../pages/componentsAndTemplates/ui/BadgePage/Badge.page'));
const ButtonPage = lazy(() => import('../pages/componentsAndTemplates/ui/ButtonPage/Button.page'));
const ButtonGroupPage = lazy(
	() => import('../pages/componentsAndTemplates/ui/ButtonGroup/ButtonGroup.page'),
);
const CardPage = lazy(() => import('../pages/componentsAndTemplates/ui/CardPage/Card.page'));
const CollapsePage = lazy(
	() => import('../pages/componentsAndTemplates/ui/CollapsePage/Collapse.page'),
);
const DropdownPage = lazy(
	() => import('../pages/componentsAndTemplates/ui/DropdownPage/Dropdown.page'),
);
const ModalPage = lazy(() => import('../pages/componentsAndTemplates/ui/ModalPage/Modal.page'));
const OffcanvasPage = lazy(
	() => import('../pages/componentsAndTemplates/ui/OffcanvasPage/Offcanvas.page'),
);
const ProgressPage = lazy(
	() => import('../pages/componentsAndTemplates/ui/ProgressPage/Progress.page'),
);
const TablePage = lazy(() => import('../pages/componentsAndTemplates/ui/TablePage/Table.page'));
const TooltipPage = lazy(
	() => import('../pages/componentsAndTemplates/ui/TooltipPage/Tooltip.page'),
);

/**
 * FORM
 */
const FieldWrapPage = lazy(
	() => import('../pages/componentsAndTemplates/form/FieldWrapPage/FieldWrap.page'),
);
const CheckboxPage = lazy(
	() => import('../pages/componentsAndTemplates/form/CheckboxPage/Checkbox.page'),
);
const CheckboxGroupPage = lazy(
	() => import('../pages/componentsAndTemplates/form/CheckboxGroupPage/CheckboxGroup.page'),
);
const InputPage = lazy(() => import('../pages/componentsAndTemplates/form/InputPage/Input.page'));
const LabelPage = lazy(() => import('../pages/componentsAndTemplates/form/LabelPage/Label.page'));
const RadioPage = lazy(() => import('../pages/componentsAndTemplates/form/RadioPage/Radio.page'));
const RichTextPage = lazy(
	() => import('../pages/componentsAndTemplates/form/RichTextPage/RichText.page'),
);
const SelectPage = lazy(
	() => import('../pages/componentsAndTemplates/form/SelectPage/Select.page'),
);
const SelectReactPage = lazy(
	() => import('../pages/componentsAndTemplates/form/SelectReactPage/SelectReact.page'),
);
const TextareaPage = lazy(
	() => import('../pages/componentsAndTemplates/form/TextareaPage/Textarea.page'),
);
const ValidationPage = lazy(
	() => import('../pages/componentsAndTemplates/form/ValidationPage/Validation.page'),
);

/**
 * Integrated
 */
const ReactDateRangePage = lazy(
	() =>
		import('../pages/componentsAndTemplates/integrated/ReactDateRangePage/ReactDateRange.page'),
);
const FullCalendarPage = lazy(
	() => import('../pages/componentsAndTemplates/integrated/FullCalendarPage/FullCalendarPage'),
);
const ApexChartsPage = lazy(
	() => import('../pages/componentsAndTemplates/integrated/ApexChartsPage/ApexCharts.page'),
);
const ReactSimpleMapsPage = lazy(
	() =>
		import(
			'../pages/componentsAndTemplates/integrated/ReactSimpleMapsPage/ReactSimpleMaps.page'
		),
);
const WaveSurferPage = lazy(
	() => import('../pages/componentsAndTemplates/integrated/WaveSurferPage/WaveSurfer.page'),
);

/**
 * Icons
 */
const IconPage = lazy(() => import('../pages/componentsAndTemplates/icons/IconPage/Icon.page'));
const HeroiconsPage = lazy(
	() => import('../pages/componentsAndTemplates/icons/HeroiconsPage/Heroicons.page'),
);
const DuotoneIconsPage = lazy(
	() => import('../pages/componentsAndTemplates/icons/DuotoneIconsPage/DuotoneIcons.page'),
);

/**
 * SALES
 */
const SalesDashboardPage = lazy(
	() => import('../pages/sales/SalesDashboardPage/SalesDashboard.page'),
);
const ProductListPage = lazy(
	() => import('../pages/sales/products/ProductListPage/ProductList.page'),
);
const ProductPage = lazy(() => import('../pages/sales/products/ProductPage/Product.page'));
const CategoryListPage = lazy(
	() => import('../pages/sales/categories/CategoryListPage/CategoryList.page'),
);
const CategoryPage = lazy(() => import('../pages/sales/categories/CategoryPage/Category.page'));

/**
 * CRM
 */
const CustomerDashboardPage = lazy(
	() => import('../pages/crm/CustomerDashboardPage/CustomerDashboard.page'),
);
const CustomerListPage = lazy(
	() => import('../pages/crm/customer/CustomerListPage/CustomerList.page'),
);
const CustomerPage = lazy(() => import('../pages/crm/customer/CustomerPage/Customer.page'));
const RoleListPage = lazy(() => import('../pages/crm/role/RoleListPage/RoleList.page'));
const RolePage = lazy(() => import('../pages/crm/role/RolePage/Role.page'));

/**
 * Project
 */
const ProjectDashboardPage = lazy(
	() => import('../pages/project/ProjectDashboardPage/ProjectDashboard.page'),
);
const ProjectBoardPage = lazy(() => import('../pages/project/ProjectBoardPage/ProjectBoard.page'));

const ExamplesPage = lazy(() => import('../pages/ExamplePage/Examples.page'));
const ProfilePage = lazy(() => import('../pages/Profile.page'));

/**
 * AI
 */
const AiDashboardPage = lazy(() => import('../pages/ai/AiDashboardPage/AiDashboard.page'));
const ChatPhotoPage = lazy(() => import('../pages/ai/chat/ChatPhotoPage/ChatPhoto.page'));
const ChatVideoPage = lazy(() => import('../pages/ai/chat/ChatVideoPage/ChatVideo.page'));
const ChatAudioPage = lazy(() => import('../pages/ai/chat/ChatAudioPage/ChatAudio.page'));
const ChatCodePage = lazy(() => import('../pages/ai/chat/ChatCodePage/ChatCode.page'));

/**
 * CHAT
 */
const ChatPage = lazy(() => import('../pages/ChatPage/Chat.page'));

/**
 * Other
 */
const UnderConstructionPage = lazy(() => import('../pages/UnderConstruction.page'));

const contentRoutes: RouteProps[] = [
	/**
	 * SALES::BEGIN
	 */
	{
		path: appPages.salesAppPages.subPages.salesDashboardPage.to,
		element: <SalesDashboardPage />,
	},
	{
		path: appPages.salesAppPages.subPages.productPage.subPages.listPage.to,
		element: <ProductListPage />,
	},
	{
		path: `${appPages.salesAppPages.subPages.productPage.subPages.editPageLink.to}/:id`,
		element: <ProductPage />,
	},
	{
		path: appPages.salesAppPages.subPages.categoryPage.subPages.listPage.to,
		element: <CategoryListPage />,
	},
	{
		path: `${appPages.salesAppPages.subPages.categoryPage.subPages.editPageLink.to}/:id`,
		element: <CategoryPage />,
	},
	/**
	 * SALES::END
	 */

	/**
	 * CRM::BEGIN
	 */
	{
		path: appPages.crmAppPages.subPages.crmDashboardPage.to,
		element: <CustomerDashboardPage />,
	},
	{
		path: appPages.crmAppPages.subPages.customerPage.subPages.listPage.to,
		element: <CustomerListPage />,
	},
	{
		path: `${appPages.crmAppPages.subPages.customerPage.subPages.editPageLink.to}/:id`,
		element: <CustomerPage />,
	},
	{
		path: appPages.crmAppPages.subPages.rolePage.subPages.listPage.to,
		element: <RoleListPage />,
	},
	{
		path: `${appPages.crmAppPages.subPages.rolePage.subPages.editPageLink.to}/:id`,
		element: <RolePage />,
	},
	/**
	 * CRM::END
	 */

	/**
	 * Project::BEGIN
	 */
	{
		path: appPages.projectAppPages.subPages.projectDashboardPage.to,
		element: <ProjectDashboardPage />,
	},
	{
		path: `${appPages.projectAppPages.subPages.projectBoardPageLink.to}/:id`,
		element: <ProjectBoardPage />,
	},
	/**
	 * Project::END
	 */

	/**
	 * AI::BEGIN
	 */
	{
		path: appPages.aiAppPages.subPages.aiDashboardPage.to,
		element: <AiDashboardPage />,
	},
	{
		path: appPages.aiAppPages.subPages.chatPages.subPages.photoPage.to,
		element: <ChatPhotoPage />,
	},
	{
		path: appPages.aiAppPages.subPages.chatPages.subPages.videoPage.to,
		element: <ChatVideoPage />,
	},
	{
		path: appPages.aiAppPages.subPages.chatPages.subPages.audioPage.to,
		element: <ChatAudioPage />,
	},
	{
		path: appPages.aiAppPages.subPages.chatPages.subPages.codePage.to,
		element: <ChatCodePage />,
	},
	/**
	 * AI::END
	 */

	/**
	 * EDUCATION::BEGIN
	 */
	{
		path: appPages.educationAppPages.to,
		element: <UnderConstructionPage />,
	},
	/**
	 * EDUCATION::END
	 */

	/**
	 * RESERVATION::BEGIN
	 */
	{
		path: appPages.reservationAppPages.to,
		element: <UnderConstructionPage />,
	},
	/**
	 * RESERVATION::END
	 */

	/**
	 * MAIL::BEGIN
	 */
	{
		path: appPages.mailAppPages.to,
		element: <UnderConstructionPage />,
	},
	/**
	 * MAIL::END
	 */

	/**
	 * CHAT::BEGIN
	 */
	{
		path: `${appPages.chatAppPages.to}/:id`,
		element: <ChatPage />,
	},
	/**
	 * CHAT::END
	 */

	{ path: examplePages.examplesPage.to, element: <ExamplesPage /> },

	/**
	 * UI::BEGIN
	 */
	{ path: componentsPages.uiPages.subPages.alertPage.to, element: <AlertPage /> },
	{ path: componentsPages.uiPages.subPages.badgePage.to, element: <BadgePage /> },
	{ path: componentsPages.uiPages.subPages.buttonPage.to, element: <ButtonPage /> },
	{ path: componentsPages.uiPages.subPages.buttonGroupPage.to, element: <ButtonGroupPage /> },
	{ path: componentsPages.uiPages.subPages.cardPage.to, element: <CardPage /> },
	{ path: componentsPages.uiPages.subPages.collapsePage.to, element: <CollapsePage /> },
	{ path: componentsPages.uiPages.subPages.dropdownPage.to, element: <DropdownPage /> },
	{ path: componentsPages.uiPages.subPages.modalPage.to, element: <ModalPage /> },
	{ path: componentsPages.uiPages.subPages.offcanvasPage.to, element: <OffcanvasPage /> },
	{ path: componentsPages.uiPages.subPages.progressPage.to, element: <ProgressPage /> },
	{ path: componentsPages.uiPages.subPages.tablePage.to, element: <TablePage /> },
	{ path: componentsPages.uiPages.subPages.tooltipPage.to, element: <TooltipPage /> },
	/**
	 * UI::END
	 */

	/**
	 * FORM::BEGIN
	 */
	{ path: componentsPages.formPages.subPages.fieldWrapPage.to, element: <FieldWrapPage /> },
	{ path: componentsPages.formPages.subPages.checkboxPage.to, element: <CheckboxPage /> },
	{
		path: componentsPages.formPages.subPages.checkboxGroupPage.to,
		element: <CheckboxGroupPage />,
	},
	{ path: componentsPages.formPages.subPages.inputPage.to, element: <InputPage /> },
	{ path: componentsPages.formPages.subPages.labelPage.to, element: <LabelPage /> },
	{ path: componentsPages.formPages.subPages.radioPage.to, element: <RadioPage /> },
	{ path: componentsPages.formPages.subPages.richTextPage.to, element: <RichTextPage /> },
	{ path: componentsPages.formPages.subPages.selectPage.to, element: <SelectPage /> },
	{
		path: componentsPages.formPages.subPages.selectReactPage.to,
		element: <SelectReactPage />,
	},
	{ path: componentsPages.formPages.subPages.textareaPage.to, element: <TextareaPage /> },
	{ path: componentsPages.formPages.subPages.validationPage.to, element: <ValidationPage /> },
	/**
	 * FORM::END
	 */

	/**
	 * INTEGRATED::BEGIN
	 */
	{
		path: componentsPages.integratedPages.subPages.reactDateRangePage.to,
		element: <ReactDateRangePage />,
	},
	{
		path: componentsPages.integratedPages.subPages.fullCalendarPage.to,
		element: <FullCalendarPage />,
	},
	{
		path: componentsPages.integratedPages.subPages.apexChartsPage.to,
		element: <ApexChartsPage />,
	},
	{
		path: componentsPages.integratedPages.subPages.reactSimpleMapsPage.to,
		element: <ReactSimpleMapsPage />,
	},
	{
		path: componentsPages.integratedPages.subPages.waveSurferPage.to,
		element: <WaveSurferPage />,
	},
	/**
	 * INTEGRATED::BEGIN
	 */

	/**
	 * ICONS::BEGIN
	 */
	{ path: componentsPages.iconsPage.to, element: <IconPage /> },
	{ path: componentsPages.iconsPage.subPages.heroiconsPage.to, element: <HeroiconsPage /> },
	{
		path: componentsPages.iconsPage.subPages.duotoneIconsPage.to,
		element: <DuotoneIconsPage />,
	},
	/**
	 * ICONS::BEGIN
	 */

	{ path: authPages.loginPage.to, element: <LoginPage /> },
	{ path: authPages.profilePage.to, element: <ProfilePage /> },

	{ path: '*', element: <NotFoundPage /> },
];

export default contentRoutes;
