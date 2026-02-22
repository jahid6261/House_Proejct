import { useEffect, useState, useCallback } from "react";
import apiClient from "../services/api-client";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false); 

  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    try {
      return token ? JSON.parse(token) : null;
    } catch (e) {
      return null;
    }
  };

  const [authTokens, setAuthTokens] = useState(getToken());

  // Error Handler
  const handleAPIError = (error, defaultMessage = "Something Went Wrong!") => {
    console.error("API Error:", error);
    let message = defaultMessage;

    if (error.response && error.response.data) {

      message = error.response.data.detail || Object.values(error.response.data).flat().join(", ");
    } else if (error.message) {
      message = error.message;
    }

    setErrorMsg(message);
    return { success: false, message };
  };

  const fetchUserProfile = useCallback(async (tokens = authTokens) => {
    if (!tokens?.access) return;
    try {
      const response = await apiClient.get("/auth/users/me", {
        headers: { Authorization: `JWT ${tokens.access}` }, 
      });
      setUser(response.data);
    } catch (error) {
      console.log("Error Fetching user", error);

      if (error.response?.status === 401) logoutUser();
    }
  }, [authTokens]);

  useEffect(() => {
    if (authTokens) fetchUserProfile();
  }, [authTokens, fetchUserProfile]);

  // Login User
  const loginUser = async (userData) => {
    setErrorMsg("");
    setLoading(true);
    try {
      const response = await apiClient.post("/auth/jwt/create/", userData);
      const data = response.data;
      setAuthTokens(data);
      localStorage.setItem("authTokens", JSON.stringify(data));
      
 
      await fetchUserProfile(data);
      return { success: true };
    } catch (error) {
      return handleAPIError(error, "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  // Register User
  const registerUser = async (userData) => {
    setErrorMsg("");
    try {
      await apiClient.post("/auth/users/", userData);
      return { success: true, message: "Registration successful! Please check your email." };
    } catch (error) {
      return handleAPIError(error, "Registration Failed!");
    }
  };

  // Update Profile
  const updateUserProfile = async (data) => {
    setErrorMsg("");
    try {
      const response = await apiClient.put("/auth/users/me/", data, {
        headers: { Authorization: `JWT ${authTokens?.access}` },
      });
      setUser(response.data); // Update local user state
      return { success: true };
    } catch (error) {
      return handleAPIError(error);
    }
  };

  // Logout User
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  };

  return {
    user,
    errorMsg,
    loading,
    loginUser,
    registerUser,
    logoutUser,
    updateUserProfile,
    authTokens
  };
};

export default useAuth;