import { useRef, useState } from "react";
import { useCreateAccount } from "../api/use-create-account";
import { useGetAccount } from "../api/use-get-account";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Select } from "@/components/select";
import { Button } from "@/components/ui/button";

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

  const handleConfirm = () => {
    promise?.resolve(selectValue.current);
    handleClose();
  };

  const handleCanCel = () => {
    promise?.resolve(undefined);
    handleClose();
  };

  const ConfirmationDialog = () => (
    <Dialog open={promise !== null}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select Account</DialogTitle>
          <DialogDescription>
            Please select an account to continue.
          </DialogDescription>
        </DialogHeader>
        <Select
          placeholder="Select Account"
          options={accountOptions}
          onCreate={onCreateAccount}
          onChange={(value) => (selectValue.current = value)}
          disabled={accountQuery.isLoading || accountMutaion.isPending}
        />
        <DialogFooter className="pt-2">
          <Button onClick={handleCanCel} variant="outline">
            Cancel
          </Button>
          <Button onClick={handleConfirm}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );

  return [ConfirmationDialog, confirm];
};
