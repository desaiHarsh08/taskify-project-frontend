import { Badge } from "@/components/ui/badge";
import Department from "@/types/department";
import Priority from "@/types/priority";
import { ColumnDef } from "@tanstack/react-table";

export type Task = {
  abbreviation: string;
  customerName: string;
  jobNumber: string;
  department: Department;
  onGoingFn: string;
  priority: Priority;
  updatedAt: Date | string | null;
};

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "abbreviation",
    header: "Task",
    cell: ({ row }) => {
      return <span>{`#${row.getValue("abbreviation")}`}</span>;
    },
  },
  {
    accessorKey: "customerName",
    header: "Customer",
  },
  {
    accessorKey: "jobNumber",
    header: "Job No.",
  },
  {
    accessorKey: "department",
    header: "Department",
    cell: ({ row }) => {
      let bgColor = "";
      switch (row.getValue("department")) {
        case "ACCOUNTS":
          bgColor = "bg-green-600";
          break;
        case "QUOTATION":
          bgColor = "bg-blue-400";
          break;
        case "ACCOUNTS":
        case "DISPATCH":
        case "SERVICE":
        case "CUSTOMER":
        case "WORKSHOP":
          bgColor = "bg-slate-400";
          break;
        default:
          bgColor = "bg-red-400";
      }
      return <Badge className={`${bgColor} hover:${bgColor}`}>{row.getValue("department")}</Badge>;
    },
  },
  {
    accessorKey: "onGoingFn",
    header: "On Going Function",
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      type VariantType = "default" | "secondary" | "destructive" | "outline" | null | undefined;
      let variant: VariantType = "default";
      switch (row.getValue("priority")) {
        case "HIGH":
          variant = "destructive";
          break;
        case "MEDIUM":
          variant = "secondary";
          break;
        case "LOW":
          variant = "outline";
          break;
        default:
          variant = "default";
      }
      return <Badge variant={variant as VariantType}>{row.getValue("priority")}</Badge>;
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Last Edited",
  },
];
