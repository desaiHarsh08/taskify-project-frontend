import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@/App.tsx";
import {
  ActivityLogsPage,
  AddCustomerPage,
  CreateTaskPage,
  CustomersPage,
  DropdownsPage,
  HomePage,
  LoginPage,
  ParentCompaniesPage,
  ReportsPage,
  RootPage,
  TemplatesPage,
  UserSettingsPage,
} from "@/pages";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import "@/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <RootPage /> },
      { path: "login", element: <LoginPage /> },
      {
        path: "home",
        element: <DashboardLayout />,
        children: [
          { path: "", element: <HomePage /> },
          { path: "create-task", element: <CreateTaskPage /> },
          { path: "add-customer", element: <AddCustomerPage /> },
          { path: "activity-logs", element: <ActivityLogsPage /> },
          { path: "reports", element: <ReportsPage /> },
          { path: "customers", element: <CustomersPage /> },
          { path: "parent-companies", element: <ParentCompaniesPage /> },
          { path: "dropdowns", element: <DropdownsPage /> },
          { path: "user-settings", element: <UserSettingsPage /> },
          { path: "templates", element: <TemplatesPage /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
