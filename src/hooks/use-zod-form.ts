'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { type UseFormProps, useForm } from 'react-hook-form';

import type { z } from 'zod';
import type { ZodTypeDef } from 'zod/v3';

export const useZodForm = <
	TSchema extends Parameters<typeof zodResolver>[0],
	TDef extends ZodTypeDef
>(
	zodSchema: TSchema,
	props?: Exclude<UseFormProps<z.input<TSchema>, TDef, z.output<TSchema>>, 'resolver'>
) =>
	useForm<z.input<TSchema>, TDef, z.output<TSchema>>({
		resolver: zodResolver(zodSchema),
		...props
	});
