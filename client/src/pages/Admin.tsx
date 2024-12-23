import AdminConfiguration from "@/components/AdminConfiguration";

const Admin = () => {
  return (
    <div className="page-container">
      <div className="text-3xl font-bold mb-1">
        Administration
      </div>
      <div className="text-sm text-gray-500 mb-10">
        Use the form below to manage how data fields appear on each step of the onboarding process
      </div>
      <AdminConfiguration />
    </div>
  );
};

export default Admin;