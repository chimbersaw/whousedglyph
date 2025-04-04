import { NavLink } from "react-router";
import { glyphActions } from "../../redux/slices/glyph";
import { useTypedDispatch, useTypedSelector } from "../../redux/store/store";
import MatchDetails from "../MatchDetails/MatchDetails";
import classes from "./Title.module.css";
import logoImage from "../../assets/logo.png";

const Title = () => {
	const dispatch = useTypedDispatch();
	const isLoading = useTypedSelector((state) => state.ui.isLoading);
	const matchId = useTypedSelector((state) => state.glyph.matchId);

	return (
		<div className={classes.root}>
			{matchId && !isLoading ? (
				<MatchDetails />
			) : (
				<NavLink
					onClick={() => {
						dispatch(glyphActions.clearGlyphs());
					}}
					to=""
				>
					<img className={classes.logo} src={logoImage} alt="logo" />
				</NavLink>
			)}
		</div>
	);
};

export default Title;
