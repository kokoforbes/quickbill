import { CirclePlus } from "lucide-react";

import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function dashboard() {
  return (
    <main className='flex flex-col justify-center gap-6 h-full max-w-5xl mx-auto my-16'>
      <div className='flex justify-between'>
        <h1 className='text-5xl font-bold'>Invoices</h1>

        <Button variant='ghost' className='inline-flex gap-2' asChild>
          <Link href=''>
            <CirclePlus className='h-4 w-4' />
            Create Invoice
          </Link>
        </Button>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px] p-4'>Date</TableHead>
            <TableHead className='p-4'>Customer</TableHead>
            <TableHead className='p-4'>Email</TableHead>
            <TableHead className='text-center p-4'>Status</TableHead>
            <TableHead className='text-right p-4'>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='text-left p-4'>
              <span className='font-semibold'>03/10/2024</span>
            </TableCell>
            <TableCell className='text-left p-4'>
              <span className='font-semibold'>Vladimir Puttin</span>
            </TableCell>
            <TableCell className='text-left p-4'>Vputtin@gmail.com</TableCell>
            <TableCell className='text-center p-4'>
              <Badge className='rounded-full'>Open</Badge>
            </TableCell>
            <TableCell className='text-right p-4'>
              <span className='font-semibold'> $250.00</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
