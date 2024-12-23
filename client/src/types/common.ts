export interface FormField {
  name: string;
  label: string;
  value?: string;
  type?: string;
  placeholder?: string;
  step?: number;
  alwaysDisplayed?: boolean;
  required?: boolean;
};

export interface DropdownProps {
  field: { name: string, value: string, step: number, alwaysDisplayed: boolean}
  onSelection: (name: string, value: string | number) => void; 
};

export interface FormData {
  email: string;
  password: string;
  aboutMe: string;
  birthdate: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  lastStepSubmitted: number;
  [key: string]: string | number | Date;
};

export interface User {
  _id: string;
  email: string;
  password: string;
  aboutMe?: string;
  birthdate?: string;
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  lastStepSubmitted?: number;
  creationDate?: Date;
};