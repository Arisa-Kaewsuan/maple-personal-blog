import { use } from "react";
import api from "./axios";


// Register a new user
export const register = async (userData) => {
    try {
        const response = await api.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Login a user
export const login = async (userData) => {
    if(userData.email != "maple@gmail.com" || userData.password != "123456") {
        throw new Error("Please fill in all fields.");
    }
    return true;

    // try {
    //     const response = await axios.post(`${API_URL}/login`, credentials);
    //     return response.data;
    // } catch (error) {
    //     throw error.response.data;
    // }
};

// Logout a user
export const logout = async () => {
    try {
        const response = await axios.post(`${API_URL}/logout`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Get current user
export const getCurrentUser = async () => {
    try {
        const response = await axios.get(`${API_URL}/me`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};