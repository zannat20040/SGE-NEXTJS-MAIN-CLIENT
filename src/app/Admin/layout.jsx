import { ToastContainer } from "react-toastify";
import AdminSidebar from "../../_components/Admin/AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-content flex relative">
      <ToastContainer />
      <div className="right-10 bottom-10 fixed lg:static">
        <AdminSidebar />
      </div>
      <div className="w-full p-4">{children}</div>
    </div>
  );
}
