"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


const AppointmentTable = () => {
 
  return (
    <div className="mt-6">
      <Table>
        <TableCaption>No appointments found.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">INFO</TableHead>
            <TableHead>DATE</TableHead>
            <TableHead>TIME</TableHead>
            <TableHead>DOCTOR</TableHead>
            <TableHead>STATUS</TableHead>
            <TableHead className="text-right">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody></TableBody>
      </Table>
    </div>
  );
};

export default AppointmentTable;
