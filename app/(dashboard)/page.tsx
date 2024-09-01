"use client";

import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/features/account/hooks/use-new-accounts";

export default function Home() {
  const { onOpen } = useNewAccount();
  return (
    <div className="">
      <Button onClick={onOpen}>Add a account</Button>
    </div>
  );
}
