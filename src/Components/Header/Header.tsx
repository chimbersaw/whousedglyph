import clsx from "clsx";
import MatchDetailsForm from "../MatchDetailsForm/MatchDetailsForm";
import Title from "../Title/Title";
import classes from "./Header.module.css";

const Header = () => {
	return (
		<div
			className={clsx(
				"d-flex flex-column gap-3 m-3 flex-grow-1 justify-content-center align-items-center",
				classes.header
			)}
		>
			<Title />
			<MatchDetailsForm />
		</div>
	);
};

export default Header;
