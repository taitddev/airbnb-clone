"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";

const UserMenu = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block">
          Airbnb your home
        </div>

        {/* Toggle user menu button */}
        <div
          onClick={toggleOpen}
          className="flex cursor-pointer items-center gap-3 rounded-full border-[1px] border-neutral-200 p-4 transition hover:shadow-md md:px-2 md:py-1"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>

      {/* User menu */}
      {isOpen && (
        <div className="top-12w-[40vw]overflow-hidden absolute right-0 rounded-xl bg-white text-sm shadow-md md:w-3/4">
          <div className="flex cursor-pointer flex-col">
            <>
              <MenuItem
                label="My trips"
                onClick={() => router.push("/trips")}
              />
              <MenuItem
                label="My favorites"
                onClick={() => router.push("/favorites")}
              />
              <MenuItem
                label="My reservations"
                onClick={() => router.push("/reservations")}
              />
              <MenuItem
                label="My properties"
                onClick={() => router.push("/properties")}
              />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
