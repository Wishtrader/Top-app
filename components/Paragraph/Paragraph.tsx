import { IParagraphProps } from './Paragraph.props';
import styles from'./Paragraph.module.css';
import cn from 'classnames';


export const Paragraph = ({ size="m", children, className, ...props }: IParagraphProps): JSX.Element => {
	return (
		<p className={cn(styles.p, className, {
			[styles.size_s]: size == "s",
			[styles.size_m]: size == "m",
			[styles.size_l]: size == "l",
		})}
		{...props}
		>
			{ children }
		</p>
	);
};

