import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import forgotPasswordReducer from "./slices/forgotResetPasswordSlice";
import messageReducer from "./slices/messageSlice";
import skillReducer from "./slices/skillSlice";
import timelineReducer from "./slices/timelineSlice";
import projectReducer from "./slices/projectSlice";
import softwareApplicationReducer from "./slices/softwareApplicationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    messages: messageReducer,
    skill: skillReducer,
    timeline: timelineReducer,
    project: projectReducer,
    softwareApplications: softwareApplicationReducer,
  },
});
