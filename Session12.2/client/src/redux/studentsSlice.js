import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/students";

export const fetchStudents = createAsyncThunk(
    "students/fetchStudents",
    async () => {
        const response = await axios.get(API_URL);
        return response.data;
    }
);

export const addStudent = createAsyncThunk(
    "students/addStudent",
    async (student) => {
        const response = await axios.post(API_URL, student);
        return response.data;
    }
);

export const updateStudent = createAsyncThunk(
    "students/updateStudent",
    async (student) => {
        const response = await axios.put(`${API_URL}/${student.id}`, student);
        return response.data;
    }
);

export const deleteStudent = createAsyncThunk(
    "students/deleteStudent",
    async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        return id;
    }
);

const studentsSlice = createSlice({
    name: "students",
    initialState: {
        list: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch
            .addCase(fetchStudents.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchStudents.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.list = action.payload;
                state.error = null;
            })
            .addCase(fetchStudents.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(addStudent.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })
            .addCase(addStudent.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(updateStudent.fulfilled, (state, action) => {
                const index = state.list.findIndex(
                    (student) => student.id === action.payload.id
                );
                if (index !== -1) {
                    state.list[index] = action.payload;
                }
            })
            .addCase(updateStudent.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(deleteStudent.fulfilled, (state, action) => {
                state.list = state.list.filter(
                    (student) => student.id !== action.payload
                );
            })
            .addCase(deleteStudent.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default studentsSlice.reducer;
