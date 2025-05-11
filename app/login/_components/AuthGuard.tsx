"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useAppSelector } from "@/redux/hooks"
import { selectUser } from "@/redux/slice/userSlice"

interface AuthGuardProps {
  children: React.ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
  const user = useAppSelector(selectUser)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!user?.user && pathname !== "/login") {
      router.push("/login")
    }
  }, [user, router, pathname])

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  //     </div>
  //   )
  // }

  // if (!user && pathname !== "/dashboard") {
  //   return null
  // }

  return <>{children}</>
}
