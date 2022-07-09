import { createSlice } from "@reduxjs/toolkit";

const filter = (array, type) => {
  const result = array.filter((x) => x.taskProgress === type);
  return [result.length, result];
};

const initialState = {
  profile: {},
  loggedInUser: {},
  currentTask: {},
  allTasks: 0,
  messages: [],
  pendingTask: { total: 0, tasks: [] },
  completedTask: { total: 0, tasks: [] },
  inProgressTask: { total: 0, tasks: [] },
  tasks: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggedUser: (state, action) => {
      state.loggedInUser = {...action.payload}
    },
    userDetails: (state, action) => {
      state.profile = action.payload;
    },
    addCurrentTask: (state, action) => {
      state.currentTask = action.payload;
    },
    allMyTasks: (state, action) => {
      state.tasks = action.payload;
    },
    allMyMessages: (state, action) => {
      state.messages = action.payload;
    },
    filterTasks: (state, action) => {
      console.log(filter(action.payload, "pending"), "filter");
      state.allTasks = action.payload.length;
      state.pendingTask = {
        total: filter(action.payload, "pending")[0],
        tasks: [...filter(action.payload, "pending")[1]],
      };
      state.inProgressTask = {
        total: filter(action.payload, "inProgress")[0],
        tasks: [...filter(action.payload, "inProgress")[1]],
      };
      state.completedTask = {
        total: filter(action.payload, "done")[0],
        tasks: [...filter(action.payload, "done")[1]],
      };
    },
  },
});

export const { userDetails, addCurrentTask, filterTasks, allMyTasks, loggedUser, allMyMessages } = userSlice.actions;

export default userSlice.reducer;
