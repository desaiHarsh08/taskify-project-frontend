import { Box, PackageCheck } from "lucide-react";
import { FcHighPriority } from "react-icons/fc";

export default function MonthlyStats() {
  return (
    <div className="flex flex-col gap-4 sm:flex-col w-full h-full border">
      <div className="flex gap-4 sm:flex-col h-1/2 w-full">
        <div className="sm:h-1/2 w-1/2 sm:w-full border py-2 border-slate-400 flex flex-col gap-3 justify-center items-center border-r">
          <p>All Task</p>
          <div className="font-bold flex gap-2 items-center">
            <Box className="text-2xl" />
            <p className="text-xl">12</p>
          </div>
        </div>
        <div className="sm:h-1/2 w-1/2 sm:w-full border py-2 border-slate-400 flex flex-col gap-3 justify-center items-center border-r">
          <p>Completed</p>
          <div className="font-bold flex gap-2 items-center">
            <PackageCheck className="text-2xl" />
            <p className="text-xl">12</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 sm:flex-col h-1/2">
        <div className="sm:h-1/2 w-1/2 sm:w-full border py-2 border-slate-400 flex flex-col gap-3 justify-center items-center border-r">
          <p>High Priority</p>
          <div className="font-bold flex gap-2 items-center">
            <FcHighPriority className="text-2xl" />
            <p className="text-xl">12</p>
          </div>
        </div>
        <div className="sm:h-1/2 w-1/2 sm:w-full border py-2 border-slate-400 flex flex-col gap-3 justify-center items-center">
          <p>Pending</p>
          <div className="font-bold flex gap-2 items-center">
            <PackageCheck className="text-2xl" />
            <p className="text-xl">12</p>
          </div>
        </div>
      </div>
    </div>
  );
}
