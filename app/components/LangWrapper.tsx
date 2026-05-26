"use client";

import { useLang } from "../context/LanguageContext";

export default function LangWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isChanging } = useLang();

  return (
    <div
      className={isChanging ? "opacity-0" : "opacity-100"}
      style={{ transition: "opacity 320ms ease-in-out" }}
    >
      {children}
    </div>
  );
}
