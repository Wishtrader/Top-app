import { ITagProps } from './Tag.props';
import styles from'./Tag.module.css';
import cn from 'classnames';


export const Tag = ({ size='m', href, children, color='outline', className, ...props }: ITagProps): JSX.Element => {
			return (<div
				className={cn(styles.tag, className, {
					[styles.s]: size == "s",
					[styles.m]: size == "m",
					[styles.outline]: color == 'outline',
					[styles.grey]: color == 'grey',
					[styles.red]: color == 'red',
					[styles.green]: color == 'green',
					[styles.primary]: color == 'primary'
				})}
				{...props}
			>
				{
					href
						? <a href={href}>{ children}</a>
						: <>{ children}</>
				}
			</div>
			);
		};
