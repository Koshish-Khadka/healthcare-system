import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AppointmentTable = () => {
  return (
    <div className="mt-6">
      <Table>
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
        <TableBody>
          <p className="text-center">No data found</p>
        </TableBody>
      </Table>
    </div>
  );
};

export default AppointmentTable;
