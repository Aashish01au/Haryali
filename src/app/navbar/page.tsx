import Link from "next/link"
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

export function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
             <img  src={"./images/logo.png"} alt="Logo" />
            </Link>
            <Button variant="ghost" size="icon" className="ml-auto h-8 w-8 hover:bg-green-600 shadow-lg  hover:text-white">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          {/* Dashboard large Screen */}
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              Main Menu
              <Link
                href=""
                className="flex items-center gap-3 shadow-lg active:shadow-lg   rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:bg-green-600 hover:text-white active:bg-yellow-400"
              >
                <LayoutGrid className="h-4 w-4 shadow-lg" />
                Dashboard{" "}
                <ChevronRight className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-green-600 hover:text-white active:bg-yellow-400"
              >
                <GraduationCap className="h-4 w-4" />
                Dashboard
                <ChevronRight className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  hover:bg-green-600 hover:text-white active:bg-yellow-400"
              >
                <Clipboard className="h-4 w-4" />
                Invoices
                <ChevronRight className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
              </Link>
              Management
              <Link
                href="#"
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
          {/* Dashboard large screen end */}
          {/* Upgrade to pro Section start */}
          {/* <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div> */}
          {/* Update to pro Section end */}
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              {/* Responsive of dashBoard start */}
            <nav className="grid gap-2 text-lg font-medium">
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <img
                        width={80}
                        height={100}
                        src="http://127.0.0.1:5501/hariyali-abhiyan-logo-1.png"
                        alt="Logo"
                      />
                      {/* <LayoutGrid className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span> */}
                    </Link>
                    Main Menu
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground  hover:bg-green-600 hover:text-white active:bg-yellow-400"
                    >
                      <LayoutGrid className="h-5 w-5" />
                      Dashboard
                      <ChevronRight className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground  hover:bg-green-600 hover:text-white active:bg-yellow-400"
                    >
                      <GraduationCap className="h-5 w-5" />
                      Dashboard
                      <ChevronRight className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground  hover:bg-green-600 hover:text-white active:bg-yellow-400"
                    >
                      <Clipboard className="h-5 w-5" />
                      Invoices
                      <ChevronRight className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
                    </Link>
                    Management
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground  hover:bg-green-600 hover:text-white active:bg-yellow-400"
                    >
                      <Users className="h-5 w-5" />
                      Accounts
                      <ChevronRight className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
                    </Link>
                    Pages
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground  hover:bg-green-600 hover:text-white active:bg-yellow-400"
                    >
                      <Shield className="h-5 w-5" />
                      Authentications
                      <ChevronRight className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground  hover:bg-green-600 hover:text-white active:bg-yellow-400"
                    >
                      <File className="h-5 w-5" />
                      Blank Page
                      <ChevronRight className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
                    </Link>
                    Others
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground  hover:bg-green-600 hover:text-white active:bg-yellow-400"
                    >
                      <CarFront className="h-5 w-5" />
                      Transport
                      <ChevronRight className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
                    </Link>
                  </nav>
                  {/* end of responsive */}
                  {/* Upgrade Section start */}
              {/* <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div> */}
              {/* Upgrade Section end */}
            </SheetContent>
          </Sheet>
          {/* Search Sectiopn Start */}
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground " />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 focus-none shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          {/* Search Section end */}
         {/* avtar */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full gap-3">
              <Avatar className="shadow-lg">
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* avtar end */}
        </header>
        {/* View page Start */}
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
        
          </div>
        </main>
        {/* View Page end */}
      </div>
    </div>
  )
}
