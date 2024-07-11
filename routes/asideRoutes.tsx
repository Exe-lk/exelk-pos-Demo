import React from 'react';
import dynamic from 'next/dynamic';
import { demoPagesMenu, pageLayoutTypesPagesMenu } from '../menu';


const AdminAside = dynamic(() => import('../pages/_layout/_asides/AdminAside'));
const AccountAside = dynamic(() => import('../pages/_layout/_asides/AccountAsider'));
const DataentryAside = dynamic(() => import('../pages/_layout/_asides/DataentryAsider'));
const StockAside = dynamic(() => import('../pages/_layout/_asides/stockKeeperAsider'));
const OwnerAside = dynamic(() => import('../pages/_layout/_asides/OwnerAsider'));


const asides = [
	
	{ path: '/admin/*', element: <AdminAside/>, exact: true },
	{ path: '/accountant/*', element: <AccountAside/>, exact: true },
	{ path: '/dataentry-operater/*', element: <DataentryAside/>, exact: true },
	{ path: '/stock-keeper/*', element: <StockAside/>, exact: true },
	{ path: '/owner/*', element: <OwnerAside/>, exact: true },

];

export default asides;
