import AdminDashboard from "./Dashboard"
import AdminSidebar from "./Sidebar"

const AdminHome = () => {
  return (
   <div className=" grid grid-cols-[18%_82%]">
    <AdminSidebar />
    <div>
      <AdminDashboard />
    </div>
   </div>
  )
}

export default AdminHome