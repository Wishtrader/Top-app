import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ITagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size: 's' | 'm',
	color: 'outline' | 'red' | 'green' | 'grey' | 'primary',
	href?: string,
	children: ReactNode
}