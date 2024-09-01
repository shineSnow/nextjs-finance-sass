import { insertAccountSchema } from "@/db/schema";
import { z } from "zod";
import { useNewAccount } from "../../account/hooks/use-new-accounts";

const formSchema = insertAccountSchema.pick({ name: true });

type FormValues = z.input<typeof formSchema>;

const NewCategorySheet = () => {
  const {} = useNewAccount();
  return <div>Enter</div>;
};

export default NewCategorySheet;
