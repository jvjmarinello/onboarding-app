import { useEffect, useState } from "react";
import { getFormFieldsFromStorage, initializeFormFields } from "@/utils/form-utils";

interface DropdownProps {
  field: { name: string, value: string, step: number, alwaysDisplayed: boolean}
  onSelection: (name: string, value: string | number) => void; 
}

const Dropdown: React.FC<DropdownProps> = ({ field, onSelection }) => {
  const [selected, setSelected] = useState<string | number>(field.step);

  const options = [
    { value: '', label: 'Disabled' },
    // { value: 1, label: 'Step 1' },
    { value: 2, label: 'Step 2' },
    { value: 3, label: 'Step 3' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const parsedValue = value === '' ? '' : Number(value);
    setSelected(parsedValue);
    onSelection(name, parsedValue);
  };

  return (
    <div>
      <select
        id={field.name}
        name={field.name}
        value={selected}
        onChange={handleChange}
        style={{ width: '100%' }}
        disabled={field.alwaysDisplayed}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const AdminConfiguration = () => {

  const [fields, setFields] = useState([]);

  useEffect(() => {
    const storedFields = getFormFieldsFromStorage();
    if (!storedFields || storedFields.length === 0) {
      initializeFormFields();
    } else {
      setFields(storedFields);
      console.log("Loaded form fields from local storage:", storedFields);
    }
  }, []);

  const handleSelection = (name, newStep) => {
    setFields((prevFields) => {
      const updatedFields = prevFields.map((field) =>
        field.name === name ? { ...field, step: newStep } : field
      );
      localStorage.setItem("formFields", JSON.stringify(updatedFields));
      console.log(`Updated local storage with new form steps: ${JSON.stringify(updatedFields)}`);
      return updatedFields;
    });
  };
  

  return (
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">Field</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Step</th>
        </tr>
      </thead>
      <tbody>
        {fields.filter(field => !field.alwaysDisplayed).map((field, index) => (
          <tr key={index} className="bg-white">
            <td className="border border-gray-300 px-4 py-2">{field.label}</td>
            <td className="border border-gray-300 px-4 py-2">
              <Dropdown field={field} onSelection={handleSelection} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>

  )
};

export default AdminConfiguration;