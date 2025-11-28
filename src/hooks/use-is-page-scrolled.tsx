'use client';

import { useCallback, useEffect, useState } from 'react';
import { useEventListener } from 'usehooks-ts';

export const useIsPageScrolled = () => {
	const [isPageScrolled, setIsPageScrolled] = useState(false);

	const isSticky = useCallback(() => {
		const scrollTop = window.scrollY;
		setIsPageScrolled(scrollTop >= 1);
	}, []);

	useEffect(() => {
		isSticky();
	}, [isSticky]);

	useEventListener('scroll', isSticky);

	return isPageScrolled;
};
