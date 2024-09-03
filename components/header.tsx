import { Loader2 } from "lucide-react";
import HeaderLogo from "./header-logo";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import WelcomeMsg from "./welcome-msg";
import Navigation from "./navigation";
import { Filters } from "./filters";

const header = () => {
  return (
    <header className="bg-gradient-to-b from-purple-700 to-purple-500 px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex justify-between items-center mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-slate-400" />
          </ClerkLoading>
        </div>
        <WelcomeMsg />
        <Filters />
      </div>
    </header>
  );
};

export default header;
