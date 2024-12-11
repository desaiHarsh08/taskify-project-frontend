import MonthlyStats from "@/components/home/MonthlyStats";
import OverallTaskStats from "@/components/home/OverallTaskStats";
import { columns, Task } from "@/components/tables/task/columns";
import { DataTable } from "@/components/ui/data-table";
import styles from "@/styles/HomePage.module.css";

const data: Task[] = [
  {
    abbreviation: "S2411001",
    customerName: "Customer 1",
    department: "ACCOUNTS",
    jobNumber: "111/4N",
    onGoingFn: "Follow-Up With Customer",
    priority: "HIGH",
    updatedAt: "22/11/2024",
  },
  {
    abbreviation: "S2411001",
    customerName: "Customer 1",
    department: "WORKSHOP",
    jobNumber: "111/4N",
    onGoingFn: "Follow-Up With Customer",
    priority: "MEDIUM",
    updatedAt: "22/11/2024",
  },
  {
    abbreviation: "S2411001",
    customerName: "Customer 1",
    department: "QUOTATION",
    jobNumber: "111/4N",
    onGoingFn: "Follow-Up With Customer",
    priority: "HIGH",
    updatedAt: "22/11/2024",
  },
  {
    abbreviation: "S2411001",
    customerName: "Customer 1",
    department: "ACCOUNTS",
    jobNumber: "111/4N",
    onGoingFn: "Follow-Up With Customer",
    priority: "HIGH",
    updatedAt: "22/11/2024",
  },
  {
    abbreviation: "S2411001",
    customerName: "Customer 1",
    department: "ACCOUNTS",
    jobNumber: "111/4N",
    onGoingFn: "Follow-Up With Customer",
    priority: "NORMAL",
    updatedAt: "22/11/2024",
  },
];

export default function HomePage() {
  return (
    <div className="p-4 px-6 h-full flex flex-col gap-3">
      <div id="row-1">
        <OverallTaskStats />
      </div>
      <div id={styles["row-2"]} className="flex flex-col sm:flex-row h-full gap-2 my-1">
        <div className="sm:w-[10%]">
          <MonthlyStats />
        </div>
        <div className="sm:w-[90%] border">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}
