import React from 'react';
import { RouteProps } from 'react-router-dom';
import DefaultHeaderTemplate from '../templates/layouts/Headers/DefaultHeader.template';
import { appPages, authPages, componentsPages } from '../config/pages.config';
import ComponentAndTemplateHeaderTemplate from '../templates/layouts/Headers/ComponentAndTemplateHeader.template';

const headerRoutes: RouteProps[] = [
	{ path: authPages.loginPage.to, element: null },
	{
		path: `${componentsPages.uiPages.to}/*`,
		element: <ComponentAndTemplateHeaderTemplate />,
	},
	{
		path: `${componentsPages.formPages.to}/*`,
		element: <ComponentAndTemplateHeaderTemplate />,
	},
	{
		path: `${componentsPages.integratedPages.to}/*`,
		element: <ComponentAndTemplateHeaderTemplate />,
	},
	{
		path: appPages.projectAppPages.subPages.projectDashboardPage.to,
		element: null,
	},
	{
		path: '',
		element: null,
	},
	{ path: '*', element: <DefaultHeaderTemplate /> },
];

export default headerRoutes;
