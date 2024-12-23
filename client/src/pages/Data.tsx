import UserTable from "@/components/UserTable";

const Data = () => {
  return (
    <div className="page-container">
      <div className="text-3xl font-bold mb-10">
        Registered Users
      </div>
      <UserTable />
    </div>
  );
};

export default Data;