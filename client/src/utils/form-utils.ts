import defaultFormFields from "@/config/formFields";

export const resetLocalStorage = () => {
  try {
    localStorage.removeItem('formFields');
  } catch (error) {
    console.error("Error resetting local storage:", error);
  }
};

export const getFormFieldsFromStorage = () => {
  const storedFields = localStorage.getItem("formFields");
  return storedFields ? JSON.parse(storedFields) : null;
};

export const initializeFormFields = () => {
  console.log("Initializing form fields from default values...");
  localStorage.setItem("formFields", JSON.stringify(defaultFormFields));
  console.log(`Initialized local storage with form fields: ${JSON.stringify(defaultFormFields)}`);
};