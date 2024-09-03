import { insertAccountSchema } from "@/db/schema";
import { z } from "zod";
import { useNewAccount } from "../../accounts/hooks/use-new-account";

const formSchema = insertAccountSchema.pick({ name: true });

type FormValues = z.input<typeof formSchema>;

const NewCategorySheet = () => {
  const {} = useNewAccount();
  return <div>Enter</div>;
};

export default NewCategorySheet;
