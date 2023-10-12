import { ModeToggle } from "@/components/Modetoggle";
import Link from "next/link";
import React from "react";

const NavTop = () => {
  return (
    <div className=" fixed top-0 w-full z-50 shadow-blue-900  bg-primary-foreground  ">
      <nav className="flex  flex-row  items-center justify-around pt-5">
        <div className=" mt-0  flex justify-even w-full items-center  gap-10  ">
          <div>
            <Link href={"/Textscroll"}>TextScrolls</Link>
          </div>
          <div>
            <Link href={"/TextMask"}>TextMask</Link>
          </div>
          <div>
            <Link href={"/StickyScroll"}>StikyScroll</Link>
          </div>
          <div>
            <Link href={"/Starg"}>Starg</Link>
          </div>
          <div>
            <Link href={"/Movies"}>Movies</Link>
          </div>
          <div>
            <Link href={"/Horizontal"}>Horizontal</Link>
          </div>
          <div>
            <Link href={"/SlidingMenu"}>SidingMenu</Link>
          </div>
          <div>
            <Link href={"/Notifications"}>Notifications</Link>
          </div>
        </div>
        <div className=" mx-10">Animations</div>
        <div className=" flex-1 mx-10">
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default NavTop;
