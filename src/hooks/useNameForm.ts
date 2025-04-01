import { ChangeEvent, FormEvent, useState } from "react";

export const useNameForm = () => {
  const [name, setName] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return { value: name, handleChange, handleSubmit };
};
