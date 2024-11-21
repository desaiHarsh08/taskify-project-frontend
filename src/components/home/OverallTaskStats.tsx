import { Box, Building2, CircleAlert, PackageCheck, UsersRound } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function OverallTaskStats() {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Card className="min-h-[170px] w-full sm:w-1/5 border-slate-400">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">
            <Box className="text-3xl" />
            <p>Total Tasks</p>
          </CardTitle>
          <CardDescription>From November 8, 2024</CardDescription>
        </CardHeader>
        <CardContent className="text-3xl">38</CardContent>
      </Card>
      <Card className="min-h-[170px] w-full sm:w-1/5 border-slate-400">
        <CardHeader>
          <CardTitle className="text-red-600 flex gap-2 items-center">
            <CircleAlert className="text-3xl" />
            <p>Overdue Tasks</p>
          </CardTitle>
          <CardDescription>From November 8, 2024</CardDescription>
        </CardHeader>
        <CardContent className="text-3xl">38</CardContent>
      </Card>
      <Card className="min-h-[170px] w-full sm:w-1/5 border-slate-400">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">
            <PackageCheck className="text-3xl" />
            <p>Completed Tasks</p>
          </CardTitle>
          <CardDescription>From November 8, 2024</CardDescription>
        </CardHeader>
        <CardContent className="text-3xl">38</CardContent>
      </Card>
      <Card className="min-h-[170px] w-full  sm:w-1/5 border-slate-400">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">
            <UsersRound className="text-3xl" />
            <p>Customers</p>
          </CardTitle>
          <CardDescription>From November 8, 2024</CardDescription>
        </CardHeader>
        <CardContent className="text-3xl">39</CardContent>
      </Card>
      <Card className="min-h-[170px] w-full sm:w-1/5 border-slate-400">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">
            <Building2 className="text-3xl" />
            <p>Parent Companies</p>
          </CardTitle>
          <CardDescription>From November 8, 2024</CardDescription>
        </CardHeader>
        <CardContent className="text-3xl">34</CardContent>
      </Card>
    </div>
  );
}
