"use client";

import EditAccountSheet from "@/features/account/components/edit-account-sheet";
import NewAccountSheet from "@/features/account/components/new-account-sheet";
import { useMountedState } from "react-use";

const SheetProvider = () => {
  const isMounted = useMountedState();

  if (!isMounted) return null;

  return (
    <>
      <NewAccountSheet />
      <EditAccountSheet />

      {/* <NewCategorySheet /> */}
      {/* <EditCategorySheet /> */}
    </>
  );
};

export default SheetProvider;
