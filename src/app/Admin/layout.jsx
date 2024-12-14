import { ToastContainer } from "react-toastify";
import AdminSidebar from "../../_components/Admin/AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-content flex ">
      <ToastContainer />
      <div>
        <AdminSidebar />
      </div>
      <div className="w-full p-10">{children}</div>
    </div>
  );
}
