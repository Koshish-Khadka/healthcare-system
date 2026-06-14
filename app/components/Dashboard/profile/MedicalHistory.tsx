"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const MedicalHistory = () => {
  return (
    <div className="mt-6">
      <Table>
        <TableCaption>No appointments found.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">NO</TableHead>
            <TableHead>DATE & TIME</TableHead>
            <TableHead>DOCTOR</TableHead>
            <TableHead>DIAGNOSIS</TableHead>
            <TableHead>LAB TEST</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody></TableBody>
      </Table>
    </div>
  );
};

export default MedicalHistory;
