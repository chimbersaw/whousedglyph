import { createSearchParams, useSearchParams } from "react-router";

export const useUrlMatchId = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const urlMatchId = searchParams.get("replay");

  function setUrlMatchId(newUrlMatchId: string) {
    setSearchParams(createSearchParams({ replay: newUrlMatchId }));
  }

	return { urlMatchId, setUrlMatchId };
};
