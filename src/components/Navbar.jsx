"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log(session);

  const handerSingOut = async () => {
    await authClient.signOut({});
  };

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
      {user ? (
        <ul className="flex gap-3 items-center">
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
          <li>
            <Avatar>
              <Avatar.Image
                referrerPolicy="no-referrer"
                alt={user.name}
                src={user.image}
              />
              <Avatar.Fallback>{user.name}</Avatar.Fallback>
            </Avatar>
          </li>
          <Button onClick={handerSingOut} variant="outline">
            SignOut
          </Button>
        </ul>
      ) : (
        <ul className="flex gap-3 items-center">
          <li>
            <Link href={"/signin"}>Signin</Link>
          </li>
          <li>
            <Link href={"/signup"}>SignUp</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
