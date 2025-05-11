"use client";

import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/slice/userSlice";
import Image from "next/image";
import React from "react";
import { Mail } from "lucide-react";
import FadeInWrapper from "@/components/common/FadeInWrapper";

export default function UserPage() {
  const user = useAppSelector(selectUser)?.user;

  if (!user) return null;

  return (
    <FadeInWrapper>
      <div className="max-w-3xl container  py-8">
        <div className="bg-muted rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-x-6 mb-8">
          <Image
            src={`https://d1wh1xji6f82aw.cloudfront.net/${user.Avatar}`}
            alt="avatar"
            width={96}
            height={96}
            className="rounded-full border-2 border-primary shadow"
          />
          <div>
            <h2 className="text-2xl font-semibold text-foreground">
              {user.FullName}
            </h2>
            <p className="text-muted-foreground flex items-center gap-1 mt-1">
              <Mail className="w-4 h-4" />
              {user.Email}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <div className="bg-muted rounded-md px-4 py-2 text-sm">
            🌍 Country:{" "}
            <strong>{user.GiftingCountry?.Name || "Unknown"}</strong>
          </div>
          <div className="bg-muted rounded-md px-4 py-2 text-sm">
            🛡️ Role: <strong>{user.Role?.Title}</strong>
          </div>
          <div className="bg-muted rounded-md px-4 py-2 text-sm">
            ✅ Email Confirmed:{" "}
            <strong>{user.EmailConfirmed ? "Yes" : "No"}</strong>
          </div>
        </div>

        <div className="mb-8">
          <label className="text-sm text-muted-foreground mb-1 block">
            Profile Completion
          </label>
          <div className="w-full h-3 bg-muted rounded-full">
            <div
              className="h-3 bg-primary rounded-full transition-all duration-300"
              style={{ width: `${user.ProfileCompletePercent}%` }}
            ></div>
          </div>
          <p className="text-xs mt-1 text-muted-foreground">
            {user.ProfileCompletePercent}% completed
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-muted-foreground">Username</p>
            <p>{user.Username}</p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-muted-foreground">Phone Number</p>
            <p>{user.PhoneNumber || "Not provided"}</p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-muted-foreground">Birthday</p>
            <p>{user.Birthday || "Not provided"}</p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-muted-foreground">Pronouns</p>
            <p>{user.PronounId || "Not provided"}</p>
          </div>
        </div>
      </div>
    </FadeInWrapper>
  );
}
