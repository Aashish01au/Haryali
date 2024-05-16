
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
import { Button } from "@/components/ui/button"
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
import Link from "next/link"
import Image from "next/image"
import logo from "./logo.png"

export function HeaderPage() {
  return (
    <div className="grid  w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image src={logo} className="w-[80px] " priority alt="logo"/>
            </Link>
            <Button variant="ghost" size="icon" className="ml-auto h-8 w-8 hover:bg-green-600 shadow-lg  hover:text-white">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
        </div>
      </div>
      {/* respomsive */}
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        {/* menu */}
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
            {/* nav bar */}
            <SheetContent side="left" className="flex flex-col">
           
            <nav className="grid gap-2 text-lg font-medium">
                    <Link
                      href="/"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
         <Image src={logo}    className="w-[80px] " alt="smlogo"/>
                    </Link>
                    Main Menu
                    <Link
                      href="/Form"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground  hover:bg-green-600 hover:text-white active:bg-yellow-400"
                    >
                      <LayoutGrid className="h-5 w-5" />
                      Dashboard
                      <ChevronRight className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
                    </Link>
                    <Link
                      href="/Entrepreneur"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground  hover:bg-green-600 hover:text-white active:bg-yellow-400"
                    >
                      <GraduationCap className="h-5 w-5" />
                      Dashboard
                      <ChevronRight className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
                    </Link>
                    <Link
                      href="/Farmer"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground  hover:bg-green-600 hover:text-white active:bg-yellow-400"
                    >
                      <Clipboard className="h-5 w-5" />
                      Invoices
                      <ChevronRight className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
                    </Link>
                    Management
                    <Link
                      href="/Farmer-Form"
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
  <AvatarFallback>AU</AvatarFallback>
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
      </div>
    </div>
  )
}
