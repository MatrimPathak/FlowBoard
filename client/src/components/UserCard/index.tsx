import { Project, User } from "@/state/api";
import Image from "next/image";
import React from "react";

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <div className="rounded border p-4 shadow">
      {user.profilePictureUrl && (
        <Image
          src={`/p1.jpeg`}
          alt="Profile Picture"
          width={32}
          height={32}
          className="rounded-full"
        />
      )}
      <div className="">
        <h3>{user.username}</h3>
        <h3>{user.email}</h3>
      </div>
    </div>
  );
};

export default UserCard;
