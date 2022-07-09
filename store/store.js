import { combineReducers, configureStore } from "@reduxjs/toolkit";
import users from "../store/slice/userSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const combineReducer = combineReducers({
  users,
});

const masterReducer = (state, action) => {
  // console.log("@@@@@@@@@", action.payload);
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      users: {
        profile: action.payload?.users?.profile,
        loggedInUser: action.payload?.users?.loggedInUser,
        currentTask: action.payload?.users?.currentTask,
        allTasks: action.payload?.users?.allTasks,
        messages: action.payload?.users?.messages,
        pendingTask: action.payload?.users?.pendingTask,
        inProgressTask: action.payload?.users?.inProgressTask,
        completedTask: action.payload?.users?.completedTask,
      },
    };
    return nextState;
  } else {
    return combineReducer(state, action);
  }
};

export const makeStore = () => configureStore({ reducer: masterReducer });

export const wrapper = createWrapper(makeStore, { debug: true });
