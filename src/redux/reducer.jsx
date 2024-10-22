import { ACTIONS } from "./actions";

const initialState = {
  likedList: [],
  savedList: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.add_like:
      const isLiked = state.likedList.some(item => item.id === action.payload.id);
      if (isLiked) {
        return state; 
      }
      return {
        ...state,
        likedList: [...state.likedList, action.payload],
      }
    case ACTIONS.save:
      const isSaved = state.savedList.some(item => item.id === action.payload.id);
      if (isSaved) {
        return state; 
      }
      return {
        ...state,
        savedList: [...state.savedList, action.payload],
      }
    default:
      return state;
  }
};
