import UserTable from "@/components/UserTable";

const Data = () => {
  return (
    <div className="flex flex-col pt-24 px-4 overflow-hidden w-full max-w-[calc(100vw-2rem)] box-border">
      <div className="text-3xl font-bold mb-1">
        Registered Users
      </div>
      <div className="text-sm text-gray-500 mb-10">
        List of registered users and their information.
      </div>
      {/* Add a wrapper for the table to make it responsive */}
      <div className="overflow-x-auto w-full">
        <UserTable />
      </div>
    </div>
  );
};

export default Data;
