import UserTable from "@/components/UserTable";

const Data = () => {
  return (
    <div className="page-container">
      <div className="text-3xl font-bold mb-1">
        Registered Users
      </div>
      <div className="text-sm text-gray-500 mb-10">
        List of registered users and their information.
      </div>
      <UserTable />
    </div>
  );
};

export default Data;