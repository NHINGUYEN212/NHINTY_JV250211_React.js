import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    searchAndPagingLibraries,
    deleteLibrary as apiDeleteLibrary,
    createLibrary as apiCreateLibrary,
    updateLibrary as apiUpdateLibrary,
} from "../../apis/library.api";

// --- Async Thunks ---

export const fetchLibraries = createAsyncThunk(
    "library/fetchLibraries",
    async (args, { rejectWithValue }) => {
        const searchValue = args.searchValue;
        const currentPage = args.currentPage;
        const pageSize = args.pageSize;
        const statusFilter = args.filterStatus;

        try {
            const response = await searchAndPagingLibraries(
                searchValue,
                currentPage,
                pageSize,
                statusFilter
            );
            return {
                data: Array.isArray(response.data) ? response.data : [],
                totalCount: +response.headers["x-total-count"] || 0,
            };
        } catch (error) {
            return rejectWithValue(
                error.response?.data || "Lỗi khi tải dữ liệu"
            );
        }
    }
);

export const deleteLibrary = createAsyncThunk(
    "library/deleteLibrary",
    async (id, { rejectWithValue }) => {
        try {
            await apiDeleteLibrary(id);
            return id;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Lỗi khi xóa");
        }
    }
);

export const createLibrary = createAsyncThunk(
    "library/createLibrary",
    async (libraryData, { rejectWithValue }) => {
        try {
            const response = await apiCreateLibrary(libraryData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Lỗi khi thêm mới");
        }
    }
);

export const updateLibrary = createAsyncThunk(
    "library/updateLibrary",
    async ({ id, libraryData }, { rejectWithValue }) => {
        try {
            const response = await apiUpdateLibrary(id, libraryData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Lỗi khi cập nhật");
        }
    }
);

// --- Initial State ---
const initialState = {
    items: [],
    status: "idle",
    error: null,
    currentPage: 1,
    pageSize: 10,
    totalRecord: 0,
    searchTerm: "",
    filterStatus: "all",
};

// --- Slice ---
const librarySlice = createSlice({
    name: "library",
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
            state.currentPage = 1;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setPageSize: (state, action) => {
            state.pageSize = action.payload;
            state.currentPage = 1;
        },
        setFilterStatus: (state, action) => {
            state.filterStatus = action.payload;
            state.currentPage = 1;
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch
            .addCase(fetchLibraries.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchLibraries.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload.data;
                state.totalRecord = action.payload.totalCount;
            })
            .addCase(fetchLibraries.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(deleteLibrary.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    (item) => item.id !== action.payload
                );
                state.totalRecord -= 1;
            })

            .addCase(createLibrary.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.totalRecord += 1;
            })

            .addCase(updateLibrary.fulfilled, (state, action) => {
                const index = state.items.findIndex(
                    (item) => item.id === action.payload.id
                );
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            });
    },
});

export const { setSearchTerm, setCurrentPage, setPageSize, setFilterStatus } =
    librarySlice.actions;
export default librarySlice.reducer;
