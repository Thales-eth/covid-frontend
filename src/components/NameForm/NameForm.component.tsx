import Button from "@/components/Button/Button.component";
import Input from "../Input/Input.component";

const NameForm = () => {
  return (
    <form className="flex items-center gap-2 md:w-[500px]">
      <Input name="name" value="" type="text" placeholder="Your name..." />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default NameForm;
