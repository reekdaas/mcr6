import { cuisineData, restaurantsData } from "../data/data";

export const initialState = {
  cusineDataArray: cuisineData,
  resturantList: restaurantsData,
  filteredResturant: [],
};
// console.log(cuisineData);
export function restaurantReducer(state, { type, payload }) {
  switch (type) {
    case "FILTER_RESTURANT_LIST": {
      const filterRes = state?.resturantList.filter(
        (res) => res?.cuisine_id === +payload
      );
      return { ...state, filteredResturant: filterRes };
      // console.log(filterRes);
    }

    case "UPDATE_REVIEW": {
      // const findRes = state?.resturantList.find(
      //   (res) => res?.id === payload.resId
      // );
      const newResArray = state?.resturantList.map((res) =>
        res.id === payload.resId
          ? { ...res, ratings: [payload.review, ...res.ratings] }
          : res
      );
      return { ...state, resturantList: newResArray };
    }
    default:
      return state;
  }
}
