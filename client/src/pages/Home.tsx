import Form from "@/components/Form";

const Home = () => {
  return (
    <div className="page-container">
      <div className="text-3xl font-bold mb-1">
        Onboarding
      </div>
      <div className="text-sm text-gray-500 mb-10">
        Use the form below to log into your account or register as a new user
      </div>
      <Form />
    </div>
  );
};

export default Home;