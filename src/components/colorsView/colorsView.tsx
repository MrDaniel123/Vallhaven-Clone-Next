import classes from './colorsView.module.scss';

export default function ColorsViews({ colors }: { colors: string[] }) {
	return (
		<div className={classes.colorsWrapper}>
			{colors.map(color => (
				<div className={classes.color} style={{ backgroundColor: color }} key={color}></div>
			))}
		</div>
	);
}
