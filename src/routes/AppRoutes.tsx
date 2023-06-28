import { Route, Routes } from "react-router-dom";
import { SignInPage } from "../pages/SignIn";
import { SignUpPage } from "@/pages/SignUp";
import { WithdrawalMoneyPage } from "@/pages/WithdrawalMoney";
import { AuthRoute } from "./AuthRoute";
import { ApplicationLayout } from "@/components/layout/ApplicationLayout";
import { ExtractPage } from "@/pages/Extract";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route element={<ApplicationLayout />}>
        <Route
          path="/withdrawal-money"
          element={
            <AuthRoute>
              <WithdrawalMoneyPage />
            </AuthRoute>
          }
        />
        <Route
          path="/extracts"
          element={
            <AuthRoute>
              <ExtractPage />
            </AuthRoute>
          }
        />
      </Route>
    </Routes>
  );
};
