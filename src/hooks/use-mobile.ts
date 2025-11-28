'use client';

import { useEffect, useState } from 'react';

const BREAKPOINTS = {
	xxs: 374,
	xs: 479,
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

export const useIsMobile = (breakpoint: Breakpoint = 'md') => {
	const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
	const bp = BREAKPOINTS[breakpoint];

	useEffect(() => {
		const mql = window.matchMedia(`(max-width: ${bp - 1}px)`);
		const onChange = () => {
			setIsMobile(window.innerWidth < bp);
		};
		mql.addEventListener('change', onChange);
		setIsMobile(window.innerWidth < bp);
		return () => mql.removeEventListener('change', onChange);
	}, [bp]);

	return !!isMobile;
};
