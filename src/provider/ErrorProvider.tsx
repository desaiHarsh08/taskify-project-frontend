import axiosInstance from "@/utils/api";
import React, { createContext, useState, ReactNode, useCallback, useEffect } from "react";
import { toast, Toaster } from "sonner";
export interface ErrorContextType {
  showError: (error: CustomError) => void;
}

interface CustomError {
  status: number;
  httpStatus: string;
  message?: string;
}

export const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const ErrorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [, setErrors] = useState<string[]>([]);

  const getDefaultMessage = (status: number) => {
    switch (status) {
      case 400:
        return "Bad Request. Please check your input.";
      case 401:
        return "Unauthorized. Please log in.";
      case 403:
        return "Forbidden. You do not have access.";
      case 404:
        return "Resource not found.";
      case 500:
        return "Server error. Please try again later.";
      default:
        return "An error occurred. Please try again.";
    }
  };

  const showError = useCallback((error: CustomError) => {
    const message = error.message || getDefaultMessage(error.status);

    setErrors((prevErrors) => [...prevErrors, message]);
    toast("Uh oh! Something went wrong.!", {
      description: message,
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });

    setTimeout(() => {
      setErrors((prevErrors) => prevErrors.filter((e) => e !== message));
    }, 5000);
  }, []);

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response) {
          const customError = {
            status: error.response.status,
            httpStatus: error.response.statusText,
            message: error.response.data?.message || "There was a problem with your request.",
          };
          showError(customError);
        } else {
          showError({ status: 0, httpStatus: "Network Error", message: error.message });
        }

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const response = await axiosInstance.get("/auth/refresh");
            const newAccessToken = response.data.accessToken;
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return axiosInstance(originalRequest);
          } catch (refreshError) {
            showError({ status: 401, httpStatus: "Unauthorized", message: "Session expired, please log in again." });
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return (
    <ErrorContext.Provider value={{ showError }}>
      {children}
      <Toaster />
    </ErrorContext.Provider>
  );
};
