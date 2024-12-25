"use client";

import { LogOut, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { signOut } from "@/app/auth/login/actions";
import { useState } from "react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

export const UserButton = ({ user }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState(user.email);
  const [avatarUrl, setAvatarUrl] = useState(user.user_metadata.avatar_url);
  const [fullName, setFullName] = useState(user.user_metadata.full_name);
  const firstTwoLetters = email.slice(0, 2).toUpperCase();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="focus:outline-none">
            <Avatar className="rounded-full">
              <AvatarImage src={avatarUrl} />
              <AvatarFallback>{firstTwoLetters}</AvatarFallback>
            </Avatar>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="bottom"
          align="end"
          className="flex w-80 flex-col gap-2 px-2 py-4"
        >
          <DropdownMenuLabel>
            <div className="flex items-center gap-2">
              <Avatar className="">
                <AvatarImage src={avatarUrl} />
                <AvatarFallback>{firstTwoLetters}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-bold">{fullName}</span>
                <span className="text-xs">{email}</span>
              </div>
            </div>
          </DropdownMenuLabel>
          <div className="flex items-center gap-1">
            <DropdownMenuItem className="w-full">
              <Button
                variant="outline"
                className="w-full text-xs"
                onClick={() => {
                  setIsDialogOpen(true);
                }}
              >
                <Settings />
                Settings
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem className="w-full">
              <Button
                variant="outline"
                className="w-full text-xs"
                onClick={() => {
                  signOut();
                }}
              >
                <LogOut />
                Sign out
              </Button>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Profile Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogTitle></DialogTitle>
          <div>
            <h1 className="pb-4 text-2xl font-bold">Profile details</h1>
            <hr />
            <section className="flex items-center justify-between py-4 text-sm">
              <div className="w-1/2">profile</div>
              <div className="flex w-1/2 items-center gap-2">
                <Avatar className="h-8 w-8 rounded-full">
                  <AvatarImage src={avatarUrl} />
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-bold">{fullName}</span>
                </div>
              </div>
            </section>
            <hr />
            <section className="flex items-center justify-between py-4 text-sm">
              <div className="w-1/2">email</div>
              <div className="w-1/2">{email}</div>
            </section>
            <hr />
            <section className="flex items-center justify-between py-4 text-sm">
              <div className="w-1/2">Delete account</div>
              <div className="w-1/2">
                <Button variant="destructive" className="px-8 text-sm">
                  Delete
                </Button>
              </div>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
