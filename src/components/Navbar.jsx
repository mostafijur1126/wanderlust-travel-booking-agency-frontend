import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const { data: session } = await authClient.getSession();
  console.log(session);

  return (
    <nav className="flex justify-between items-center bg-white p-5">
      <ul className="flex gap-3">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/destination"}>Destination</Link>
        </li>
        <li>
          <Link href={"/my-bookings"}>My Bookings</Link>
        </li>
        <li>
          <Link href={"/add-destination"}>Add Destination</Link>
        </li>
      </ul>

      <div>
        <Image
          src={"/assets/Wanderlast.png"}
          alt=""
          width={100}
          height={100}
        ></Image>
      </div>
      <ul className="flex gap-3">
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
        <li>
          <Link href={"/signin"}>Signin</Link>
        </li>
        <li>
          <Link href={"/signup"}>SignUp</Link>
        </li>
        <Button variant="outline">
          <Link href={""}>SignOut</Link>
        </Button>
      </ul>
    </nav>
  );
};

export default Navbar;
