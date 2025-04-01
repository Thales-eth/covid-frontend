import Button from "@/components/Button/Button.component";
import Input from "../Input/Input.component";
import { ChangeEvent } from "react";
import { FormEvent } from "react";

interface INameFormProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const NameForm = ({ value, onChange, onSubmit }: INameFormProps) => {
  return (
    <form className="flex items-center gap-2 md:w-[500px]" onSubmit={onSubmit}>
      <Input name="name" value={value} type="text" placeholder="Your name..." onChange={onChange} />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default NameForm;
