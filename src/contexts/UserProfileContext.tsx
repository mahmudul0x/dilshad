import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";
import UserNamePrompt from "@/components/UserNamePrompt";
import {
  USER_FULL_NAME_KEY,
  buildQuickOrderMessage,
  buildWhatsAppLink,
  normalizeFullName,
} from "@/lib/whatsapp";

type UserProfileContextType = {
  fullName: string;
  hasName: boolean;
  openPrompt: () => void;
  saveFullName: (name: string) => void;
  getQuickOrderLink: () => string;
};

const UserProfileContext = createContext<UserProfileContextType | null>(null);

export const useUserProfile = () => {
  const context = useContext(UserProfileContext);

  if (!context) {
    throw new Error("useUserProfile must be used within UserProfileProvider");
  }

  return context;
};

const getStoredName = () => {
  if (typeof window === "undefined") {
    return "";
  }

  return normalizeFullName(window.localStorage.getItem(USER_FULL_NAME_KEY) ?? "");
};

export const UserProfileProvider = ({ children }: { children: ReactNode }) => {
  const [fullName, setFullName] = useState(getStoredName);
  const [isPromptOpen, setIsPromptOpen] = useState(() => getStoredName().length === 0);

  useEffect(() => {
    document.body.style.overflow = isPromptOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isPromptOpen]);

  const saveFullName = (name: string) => {
    const normalizedName = normalizeFullName(name);

    setFullName(normalizedName);
    window.localStorage.setItem(USER_FULL_NAME_KEY, normalizedName);
    setIsPromptOpen(false);
  };

  const value = useMemo<UserProfileContextType>(
    () => ({
      fullName,
      hasName: fullName.length > 0,
      openPrompt: () => setIsPromptOpen(true),
      saveFullName,
      getQuickOrderLink: () => buildWhatsAppLink(buildQuickOrderMessage(fullName)),
    }),
    [fullName]
  );

  return (
    <UserProfileContext.Provider value={value}>
      {children}
      {isPromptOpen ? <UserNamePrompt initialName={fullName} onSave={saveFullName} /> : null}
    </UserProfileContext.Provider>
  );
};
