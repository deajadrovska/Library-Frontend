// src/repository/countryRepository.js
import axiosInstance from "../axios/axios.js";

const countryRepository = {
    findAll: async () => {
        return await axiosInstance.get("/countries");
    },
    findById: async (id) => {
        return await axiosInstance.get(`/countries/${id}`);
    },
    add: async (data) => {
        console.log("In countryRepository.add, data:", JSON.stringify(data, null, 2));
        return await axiosInstance.post("/countries/add", data);
    },
    edit: async (id, data) => {
        return await axiosInstance.put(`/countries/edit/${id}`, data);
    },
    delete: async (id) => {
        return await axiosInstance.delete(`/countries/delete/${id}`);
    },
};

export default countryRepository;