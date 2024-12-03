"use client";

import React, { useState } from "react";
import ProfileSidebar from "@/components/Admin/ProfileSidebar";
import AccountForm from "@/components/Admin/AccountForm";
import ListBusiness from "@/components/Admin/ListBusiness";
import Request from "@/components/Admin/Request";

export default function AdminDashboardPage() {
  const [activePage, setActivePage] = useState("Account");

  const renderContent = () => {
    switch (activePage) {
      case "Account":
        return <AccountForm />;
      case "List Business":
        return <ListBusiness />;
      case "Request":
        return <Request />;
      default:
        return <AccountForm />;
    }
  };

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <main className="flex flex-col px-40 pb-20 bg-white max-md:px-5 max-md:max-w-full pt-[80px]">
        <h1 className="py-10 max-w-full text-6xl font-bold tracking-tighter leading-none text-center text-black min-h-[137px] w-[640px] max-md:max-w-full max-md:text-4xl">
          Admin Dashboard
        </h1>
        <div className="flex gap-8 items-start max-md:flex-col max-md:max-w-full">
          <div className="w-1/4 max-md:w-full">
            <ProfileSidebar setActivePage={setActivePage} />
          </div>
          <div className="w-3/4 max-md:w-full">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}