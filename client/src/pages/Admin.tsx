import SetupForm from "@/components/SetupForm";

const Admin = () => {
  return (
    <div className="flex flex-col pt-24 px-4 overflow-hidden w-full max-w-[calc(100vw-2rem)] box-border">
      <div className="text-3xl font-bold mb-1">
        Administration
      </div>
      <div className="text-sm text-gray-500 mb-10">
        Use the form below to manage how data fields appear on each step of the onboarding process.
      </div>
      <SetupForm />
    </div>
  );
};

export default Admin;