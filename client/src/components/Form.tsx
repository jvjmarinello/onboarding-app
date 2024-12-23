import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Loader from "./Loader";
import { getUser, registerUser, updateUser } from "@/services/user";
import { getFormFieldsFromStorage, initializeFormFields } from "@/utils/form-utils";
import { isFieldValidationOn, totalSteps } from "@/config/parameters";

interface FormData {
  email: string;
  password: string;
  aboutMe: string;
  birthdate: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  lastStepSubmitted: number;
  [key: string]: string | number;
};

const Form: React.FC = () => {
  
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    aboutMe: "",
    birthdate: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    lastStepSubmitted: 0,
  });

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();


  const [fields, setFields] = useState([]);

  useEffect(() => {
    const storedFields = getFormFieldsFromStorage();
    if (!storedFields || storedFields.length === 0) {
      initializeFormFields();
    } else {
      setFields(storedFields);
      console.log("Loaded form fields from local storage:", storedFields);
    }
    setIsLoading(false);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    for (const field of steps[currentStep]){
      console.log(field);
      if (!formData[field]?.toString().trim()) newErrors[field] = `${field} is required`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    if (isFieldValidationOn && !validate()) return

    setIsLoading(true);

    try {
      // 1. Try to "authenticate" user or create a new one
      // 2. Set the current step whether it's a new user (step 2) or existing user (step X, pulled from database)
      // 3. Handle subsequent steps as user progresses trough them

      console.log(`Current step: ${currentStep}`);
      if (currentStep === 1) {
        const existingUser = await getUser(formData.email, formData.password);

        if (existingUser) {
          if (existingUser.lastStepSubmitted === totalSteps) {
            navigate("/data");
          } else {
            setUser(existingUser);
            setFormData(existingUser);
            setCurrentStep(existingUser.lastStepSubmitted + 1);
            setIsLoading(false);
          }
        } else {
          const newUser = await registerUser(formData.email, formData.password);
          setUser(newUser);
          setCurrentStep(2);
        }
        
      } else {
        const updatedData = { ...formData, lastStepSubmitted: currentStep };
        const updatedUser = await updateUser(user?._id, updatedData);
        console.log(`updated user info: ${JSON.stringify(updatedData)}`);

        setUser(updatedUser);
        setFormData(updatedData);

        if (currentStep === totalSteps) {
          navigate("/data");
        } else {
          setCurrentStep((prev) => prev + 1);
        }
      }
      
    } catch (error) {
      console.error("Error during submission:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Step {currentStep}/{totalSteps}</CardTitle>
        <CardDescription>
          Click on Next/Finish when done
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="w-full">
          {fields
            .filter((field) => field.step === currentStep)
            .map((field, index) => (
              <div className="grid w-full gap-2 mb-4" key={index}>
                <Label htmlFor="message">{field.label}</Label>
                {field.type === 'textarea' ? (
                  <Textarea
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    rows={10}
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                ) : (
                  <Input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                )}
                {errors[field.name] && <p style={{ color: "red" }}>{errors[field.name]}</p>}
            </div>
            ))}

            <div className="flex justify-end">
              <Button type="submit">
                {currentStep < totalSteps ? "Next" : "Finish"}
              </Button>
            </div>
          </form>
      </CardContent>
    </Card>
  );


};

export default Form;