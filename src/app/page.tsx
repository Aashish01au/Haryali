import Image from "next/image";
import { Table } from "@/components/ui/table";
import { DataTableDemo } from "@/Datatable/DataTable";
export default function Home() {
  return (
<>
<main className=" md:ml-60 flex flex-1 mb-10 flex-col gap-4 p-4 lg:gap-6 lg:p-6 ">
          <div className="flex justify-center shadow-xl items-center px-10 py-5 mx-10">
          <DataTableDemo />
          </div>
        </main>
</>
  );
}
