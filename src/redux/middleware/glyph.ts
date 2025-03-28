import { uiActions } from "../slices/ui";
import { glyphActions } from "../slices/glyph";
import { glyphApi } from "../../api/glyphApi";
import { AppThunkType } from "../store/store";
import { AxiosError, HttpStatusCode } from "axios";

export const setGlyphs =
	(matchId: string, setUrlMatchId?: (id: string) => void): AppThunkType =>
	async (dispatch) => {
		dispatch(uiActions.setIsLoading({ isLoading: true }));
		dispatch(uiActions.setError({ error: null }));
		dispatch(uiActions.setWarning({ warning: null }));
		return glyphApi
			.getGlyphs(matchId)
			.then((response) => {
				if (response.status === HttpStatusCode.Accepted) {
					dispatch(
						uiActions.setWarning({
							warning: {
								message: `Match ${matchId} is still parsing! Try again later`,
								header: "Parsing",
							},
						})
					);
					return;
				}
				dispatch(glyphActions.setGlyphs({ newGlyphs: response.data }));
				dispatch(glyphActions.setMatchId({ matchId }));
				if (setUrlMatchId) {
					setUrlMatchId(matchId);
				}
			})
			.catch((error: AxiosError) => {
				let serverMessage = `Match '${matchId}' is not found`;
				if (!error.response || error.response.status === 502) {
					serverMessage = "Server is not responding :( Please try again later";
				} else if (error.response.data && typeof error.response.data === "object") {
					const data = error.response.data as { Message?: string };
					if (data.Message) {
						serverMessage = data.Message;
					}
				}

				dispatch(glyphActions.clearGlyphs());
				dispatch(glyphActions.setMatchId({ matchId: null }));
				dispatch(
					uiActions.setError({
						error: {
							message: serverMessage,
							header: "Not found",
						},
					})
				);
			})
			.finally(() => {
				dispatch(uiActions.setIsLoading({ isLoading: false }));
			});
	};
