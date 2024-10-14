import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";

const AdminLayout = ({ children }) => (
  <div className=" bg-slate-800 text-white ">
    <AdminHeader />
    <AdminSidebar />
    {children}
  </div>
);

export default AdminLayout;
