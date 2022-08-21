/* eslint-disable no-unreachable */
export const GET_DATA = "GET_DATA";

const API_URL = "https://covidnigeria.herokuapp.com/api";

export const getCovidData = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_DATA,
                    payload: json
                });
            } else {
                console.log("Unable to fetch information");
            }
        }
    } catch (error) {
        console.log(error);
    }
};
