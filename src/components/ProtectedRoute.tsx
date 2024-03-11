import { useLocation, Navigate, Outlet } from "react-router-dom";
// import type { To } from "react-router-dom";

export const enum Role {
  ADMIN = 1, //Read, Update and Delete
  EDIDOR = 2, // Read and Update
  USER = 3, // Read Only
}

const someUser = (): { auth: boolean; role: Role } => {
  return {
    auth: true,
    role: Role.EDIDOR,
  };
};

interface ProtectedRouteProps {
  //   condition: boolean;
  //   fallbackRoute: To;
  roles: Role[];
}

const ProtectedRoute = ({ roles }: ProtectedRouteProps) => {
  const location = useLocation();
  const { auth, role } = someUser();

  return auth ? (
    role === Role.ADMIN || roles.includes(role) ? (
      <Outlet />
    ) : (
      <Navigate to={"/unauthorized"} state={{ from: location }} replace />
    )
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
