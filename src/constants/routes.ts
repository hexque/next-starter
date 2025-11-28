export const ROUTES = {
	// Public routes
	HOME: '/',

	// Auth
	SIGN_IN: '/sign-in',
	SIGN_UP: '/sign-up',
	FORGOT_PASSWORD: '/forgot-password',

	// Private Routes
	PROFILE: '/profile'
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
