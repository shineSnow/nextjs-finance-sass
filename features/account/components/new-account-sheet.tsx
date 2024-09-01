import { insertAccountSchema } from "@/db/schema";
import { z } from "zod";
import { useNewAccount } from "../hooks/use-new-accounts";

const formSchema = insertAccountSchema.pick({ name: true });

type FormValues = z.input<typeof formSchema>;

const NewAccountSheet = () => {
  const { isOpen, onClose } = useNewAccount();

  const mutation = useCreateAccount();
  return <div>Enter</div>;
};

export default NewAccountSheet;
