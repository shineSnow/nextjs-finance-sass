import { useRef, useState } from "react";
import { useCreateAccount } from "../api/use-create-account";
import { useGetAccount } from "../api/use-get-account";
import { resolve } from "path";

export const useSelectAccount = (): [
  () => JSX.Element,
  () => Promise<unknown>
] => {
  const accountQuery = useGetAccount();
  const accountMutaion = useCreateAccount();

  const onCreateAccount = (name: string) => {
    accountMutaion.mutate({ name });
  };

  const accountOptions = Array.isArray(accountQuery.data)
    ? accountQuery.data.map((account: { name: any; id: any }) => ({
        label: account.name,
        value: account.id,
      }))
    : [];

  const [promise, setPromise] = useState<{
    resolve: (value: string | undefined) => void;
  } | null>(null);

  const selectValue = useRef<string>();

  const confirm = () =>
    new Promise((resolve) => {
      setPromise({ resolve });
    });

  const handleClose = () => {
    setPromise(null);
  };

  return [() => <></>, async () => {}];
};
