import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const skillSlice = createSlice({
  name: "skill",
  initialState: {
    loading: false,
    skills: [],
    error: null,
    message: null,
  },

  reducers: {
    getAllSkillsRequest(state, action) {
      state.skills = [];
      state.error = null;
      state.loading = true;
    },
    getAllSkillsSuccess(state, action) {
      state.skills = action.payload;
      state.error = null;
      state.loading = false;
    },
    getAllSkillsFailed(state, action) {
      state.skills = state.skills;
      state.error = action.payload;
      state.loading = false;
    },

    addNewSkillsRequest(state, action) {
      state.message = null;
      state.error = null;
      state.loading = true;
    },
    addNewSkillsSuccess(state, action) {
      state.message = action.payload;
      state.error = null;
      state.loading = false;
    },
    addNewSkillsFailed(state, action) {
      state.message = null;
      state.error = action.payload;
      state.loading = false;
    },

    deleteSkillsRequest(state, action) {
      state.message = null;
      state.error = null;
      state.loading = true;
    },
    deleteSkillsSuccess(state, action) {
      state.message = action.payload;
      state.error = null;
      state.loading = false;
    },
    deleteSkillsFailed(state, action) {
      state.message = null;
      state.error = action.payload;
      state.loading = false;
    },

    updateSkillsRequest(state, action) {
      state.message = null;
      state.error = null;
      state.loading = true;
    },
    updateSkillsSuccess(state, action) {
      state.message = action.payload;
      state.error = null;
      state.loading = false;
    },
    updateSkillsFailed(state, action) {
      state.message = null;
      state.error = action.payload;
      state.loading = false;
    },

    resetSkillSlice(state, action) {
      state.message = null;
      state.skills = state.skills;
      state.loading = false;
      state.error = null;
    },

    clearAllErrors(state, action) {
      state.skills = state.skills;
      state.error = null;
    },
  },
});

export const getAllSkills = () => async (dispatch) => {
  dispatch(skillSlice.actions.getAllSkillsRequest());
  try {
    const response = await axios.get(
      "http://localhost:4000/api/v1/skill/getall",
      { withCredentials: true }
    );
    dispatch(skillSlice.actions.getAllSkillsSuccess(response.data.skills));
    dispatch(skillSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(
      skillSlice.actions.getAllSkillsFailed(error.response.data.message)
    );
  }
};

export const addNewSkills = (data) => async (dispatch) => {
  dispatch(skillSlice.actions.addNewSkillsRequest());
  try {
    const response = await axios.post(
      "http://localhost:4000/api/v1/skill/add",
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    dispatch(skillSlice.actions.addNewSkillsRequest(response.data.message));
    dispatch(skillSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(
      skillSlice.actions.addNewSkillsFailed(error.response.data.message)
    );
  }
};

export const updateSkill = (id, proficiency) => async (dispatch) => {
  dispatch(skillSlice.actions.updateSkillsRequest());
  try {
    const response = await axios.post(
      `http://localhost:4000/api/v1/skill/update/${id}`,
      { proficiency },
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch(skillSlice.actions.updateSkillsSuccess(response.data.message));
    dispatch(skillSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(
      skillSlice.actions.updateSkillsFailed(error.response.data.message)
    );
  }
};

export const deleteSkill = (id) => async (dispatch) => {
  dispatch(skillSlice.actions.deleteSkillsRequest());
  try {
    const response = await axios.delete(
      `http://localhost:4000/api/v1/skill/delete/${id}`,
      { withCredentials: true }
    );
    dispatch(skillSlice.actions.deleteSkillsSuccess(response.data.message));
    dispatch(skillSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(
      skillSlice.actions.deleteSkillsFailed(error.response.data.message)
    );
  }
};

export const clearAllSkillErrors = () => (dispatch) => {
  dispatch(skillSlice.actions.clearAllErrors());
};

export const resetSkillSlice = () => (dispatch) => {
  dispatch(skillSlice.actions.resetSkillSlice());
};

export default skillSlice.reducer;
