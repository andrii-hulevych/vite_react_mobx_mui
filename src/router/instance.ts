import {
	createRouter,
	createRootRoute,
	createRoute,
	lazyRouteComponent,
} from '@tanstack/react-router';

import { Root } from 'components/Root';

const rootRoute = createRootRoute({
	component: Root,
});

const dashboardRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: lazyRouteComponent(() => import('pages/Dashboard'), 'Dashboard'),
});

const monstersRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/monsters',
	component: lazyRouteComponent(() => import('pages/Monsters'), 'Monsters'),
});

const spellsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/spells',
	component: lazyRouteComponent(() => import('pages/Spells'), 'Spells'),
});

const routeTree = rootRoute.addChildren([
	dashboardRoute,
	monstersRoute,
	spellsRoute,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}
