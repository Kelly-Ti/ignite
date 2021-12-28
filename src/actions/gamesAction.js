import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

//use thunk, thunk is a middleware for async in redux(redux does not have async)
//add another arrow function, add dispatch, add async
//Action Creator
export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcommingData = await axios.get(upcomingGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcommingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
