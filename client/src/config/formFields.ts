export interface FormField {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  step?: number;
  alwaysDisplayed?: boolean;
}

const defaultFormFields: FormField[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Email",
    step: 1,
    alwaysDisplayed: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Password",
    step: 1,
    alwaysDisplayed: true,
  },
  {
    name: "aboutMe",
    label: "About Me",
    type: "textarea",
    placeholder: "Tell us about who you are and what you love!",
    step: 2,
  },
  {
    name: "street",
    label: "Street",
    type: "text",
    placeholder: "Union Square",
    step: 3,
  },
  {
    name: "city",
    label: "City",
    type: "text",
    placeholder: "New York",
  },
  {
    name: "state",
    label: "State",
    type: "text",
    placeholder: "NY",
  },
  {
    name: "zip",
    label: "Zip",
    type: "number",
    placeholder: "10003",
  },
  {
    name: "birthdate",
    label: "Birth Date",
    type: "date",
  },
];

export default defaultFormFields;
