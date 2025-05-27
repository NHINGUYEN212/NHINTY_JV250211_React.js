import axiosInstance from "../utils/http";

const searchAndPagingLibraries = async (
    searchValue,
    currentPage,
    pageSize,
    statusFilter
) => {
    let url = `libraries?&_page=${currentPage}&_limit=${pageSize}&bookName_like=${searchValue}`;

    if (
        statusFilter !== null &&
        statusFilter !== undefined &&
        statusFilter !== "all"
    ) {
        url += `&status=${statusFilter}`;
    }

    const response = await axiosInstance.get(url);
    return response;
};

const deleteLibrary = async (id) => {
    const response = await axiosInstance.delete(`libraries/${id}`);
    return response;
};

const createLibrary = async (library) => {
    const response = await axiosInstance.post("libraries", library);
    return response;
};

const updateLibrary = async (id, newLibrary) => {
    const response = await axiosInstance.patch(`libraries/${id}`, newLibrary);
    return response;
};

export {
    searchAndPagingLibraries,
    deleteLibrary,
    createLibrary,
    updateLibrary,
};
