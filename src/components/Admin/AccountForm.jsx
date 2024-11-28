"use client";

import React from "react";
import { Button } from "../ui/button";

export default function AccountForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="flex flex-col px-20 min-w-[240px] w-[851px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[707px]">
        <h2 className="text-xl font-semibold leading-relaxed text-black">
          Account Details
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mt-6 w-full max-w-[707px] max-md:max-w-full">
            <label className="text-xs font-bold leading-none uppercase text-zinc-500" htmlFor="firstName">
              First name *
            </label>
            <input
              type="text"
              id="firstName"
              className="flex overflow-hidden gap-2 items-center px-4 mt-3 w-full text-base leading-loose bg-white rounded-md border border-solid border-stone-300 min-h-[40px] text-zinc-500 max-md:max-w-full focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col mt-6 w-full max-w-[707px] max-md:max-w-full">
            <label className="text-xs font-bold leading-none uppercase text-zinc-500" htmlFor="lastName">
              Last name *
            </label>
            <input
              type="text"
              id="lastName"
              className="flex overflow-hidden gap-2 items-center px-4 mt-3 w-full text-base leading-loose bg-white rounded-md border border-solid border-stone-300 min-h-[40px] text-zinc-500 max-md:max-w-full focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col mt-6 w-full max-w-[707px] max-md:max-w-full">
            <label className="text-xs font-bold leading-none uppercase text-zinc-500" htmlFor="displayName">
              Display name *
            </label>
            <input
              type="text"
              id="displayName"
              className="flex overflow-hidden gap-2 items-center px-4 mt-3 w-full text-base leading-loose bg-white rounded-md border border-solid border-stone-300 min-h-[40px] text-zinc-500 max-md:max-w-full focus:border-blue-500 focus:outline-none"
              required
            />
            <p className="mt-3 italic leading-loose text-xs text-zinc-500">
              This will be how your name will be displayed in the account section and in reviews
            </p>
          </div>

          <div className="flex flex-col mt-6 w-full max-w-[707px] max-md:max-w-full">
            <label className="text-xs font-bold leading-none uppercase text-zinc-500" htmlFor="email">
              Email *
            </label>
            <input
              type="email"
              id="email"
              className="flex overflow-hidden gap-2 items-center px-4 mt-3 w-full text-base leading-loose bg-white rounded-md border border-solid border-stone-300 min-h-[40px] text-zinc-500 max-md:max-w-full focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <Button className="my-4">Submit</Button>
        </form>
      </div>
    </section>
  );
}