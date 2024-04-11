import React from 'react'
import {
    Bell,
    CircleUser,
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    Search,
    ShoppingCart,
    Users,
    LayoutGrid ,
    Clipboard ,
    Shield ,
    File ,
    CarFront ,
    GraduationCap ,
    ChevronRight, 
  } from "lucide-react"
  
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
  
  import { Badge } from "@/components/ui/badge"
  import { Button } from "@/components/ui/button"
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Input } from "@/components/ui/input"
  import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
  import { DataTableDemo } from "@/Datatable/DataTable"
  import Link from "next/link"
const Dashboard = () => {
  return (
   <>
       <div className="grid fixed min-h-screen w-60  md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
           {/* Dashboard large Screen */}
      <div className="flex-1 hidden h-[90vh] overflow-auto md:block lg:block">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              Main Menu
              <Link
                href="/Form"
                className="flex items-center gap-3 shadow-lg active:shadow-lg   rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:bg-green-600 hover:text-white active:bg-yellow-400"
              >
                <LayoutGrid className="h-4 w-4 shadow-lg" />
                Dashboard{" "}
                <ChevronRight className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
              </Link>
              <Link
                href="/Entrepreneur"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-green-600 hover:text-white active:bg-yellow-400"
              >
                <GraduationCap className="h-4 w-4" />
                Dashboard
                <ChevronRight className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
              </Link>
              <Link
                href="/Farmer"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  hover:bg-green-600 hover:text-white active:bg-yellow-400"
              >
                <Clipboard className="h-4 w-4" />
                Invoices
                <ChevronRight className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
              </Link>
              Management
              <Link
                href="/Farmer-Form"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  hover:bg-green-600 hover:text-white active:bg-yellow-400"
              >
                <Users className="h-4 w-4" />
                Accounts
                <ChevronRight className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
              </Link>
              Pages
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary  hover:bg-green-600 hover:text-white active:bg-yellow-400"
              >
                <Shield className="h-4 w-4" />
                Authentications{" "}
                <ChevronRight className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary  hover:bg-green-600 hover:text-white active:bg-yellow-400"
              >
                <File className="h-4 w-4" />
                Blank Page{" "}
                <ChevronRight className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
              </Link>
              Others
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary  hover:bg-green-600 hover:text-white active:bg-yellow-400"
              >
                <CarFront className="h-4 w-4" />
                Transport{" "}
                <ChevronRight className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
              </Link>
            </nav>
          </div>
 {/* dashBoard end */}
      </div>
   </>
  )
}

export default Dashboard