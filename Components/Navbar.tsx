"use client"

import Link from "next/link"

import { ChefHat, Plus, User, Heart } from "lucide-react"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"

export default function Navbar() {
  return (
    <nav
      className="
        sticky top-0 z-50 backdrop-blur-xl
        bg-gradient-to-r from-[#3D405B]/90 via-[#E07A5F]/80 to-[#3D405B]/90
        shadow-lg border-b border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div
            className="
              p-1.5 rounded-lg bg-white/20 shadow-md
              group-hover:bg-white/30 group-hover:shadow-[#E07A5F]/50
              transition-all duration-300
            "
          >
            <ChefHat className="w-6 h-6 text-white group-hover:scale-110 transition" />
          </div>
          <span className="text-xl font-extrabold text-white drop-shadow-sm tracking-wide">
            RecipeFlow
          </span>
        </Link>

        {/* NAVIGATION */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-4">

            <NavigationMenuItem>
              <Link
                href="/"
                className={navigationMenuTriggerStyle({
                  className:
                    "text-white hover:text-[#FFE8D6] font-medium bg-transparent text-base",
                })}
              >
                Discover
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="/recipie/userall"
                className={navigationMenuTriggerStyle({
                  className:
                    "text-white hover:text-[#FFE8D6] font-medium bg-transparent text-base",
                })}
              >
                My Recipes
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="/"
                className={navigationMenuTriggerStyle({
                  className:
                    "text-white hover:text-[#FFE8D6] font-medium flex gap-1 items-center bg-transparent text-base",
                })}
              >
                <Heart className="w-4 h-4" /> Favorites
              </Link>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">

          {/* CREATE BUTTON */}
          <Button
            asChild
            className="
              bg-[#E07A5F]/70 text-white font-medium
              hover:bg-[#E07A5F] shadow-md hover:shadow-lg
              rounded-lg px-3 py-1.5 text-sm
            "
          >
            <Link href="/recipie/new" className="flex items-center gap-1.5">
              <Plus className="w-4 h-4" /> Create
            </Link>
          </Button>

          {/* PROFILE AVATAR */}
          <Link href="/profile">
            <Avatar className="w-8 h-8 border border-white/20 hover:shadow-md hover:scale-105 transition-all bg-[#3D405B]/40">
              <AvatarImage src="/profile.png" />
              <AvatarFallback>
                <User className="text-white w-4 h-4" />
              </AvatarFallback>
            </Avatar>
          </Link>

        </div>
      </div>
    </nav>
  )
}
