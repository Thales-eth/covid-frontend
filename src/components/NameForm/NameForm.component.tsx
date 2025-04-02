import Button from "@/components/Button/Button.component";
import Input from "@/components/Input/Input.component";
import { ChangeEvent, FormEvent } from "react";

interface INameFormProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const NameForm = ({ value, onChange, onSubmit }: INameFormProps) => {
  return (
    <form className="flex items-center gap-2 w-full md:w-[450px]" onSubmit={onSubmit}>
      <Input name="name" value={value} type="text" placeholder="Your name..." onChange={onChange} />
      <Button disabled={!value} type="submit">
        Search
      </Button>
    </form>
  );
};

export default NameForm;
