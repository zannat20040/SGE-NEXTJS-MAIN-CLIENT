import AdminSidebar from "../../_components/Admin/AdminSidebar";
export default function AdminLayout({ children }) {
  return (
    <div className="admin-content flex ">
      <div>
        <AdminSidebar />
      </div>
      <div className="w-full p-10">{children}</div>
    </div>
  );
}
