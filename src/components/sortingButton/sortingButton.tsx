import classes from './sortingButton.module.scss';
interface Props {
	children: React.ReactNode;
	onClickHandler: () => void;
	color?: string | undefined;
}

export default function SortingButton({ color = '#282828', onClickHandler, children }: Props) {
	return (
		<button className={classes.button} onClick={onClickHandler} style={{ backgroundColor: color }}>
			{children}
		</button>
	);
}
