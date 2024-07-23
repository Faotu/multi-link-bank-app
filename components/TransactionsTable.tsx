import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  formatAmount,
  formatDateTime,
  getTransactionStatus,
  removeSpecialCharacters,
} from "@/lib/utils";

const TransactionsTable = ({ transactions }: TransactionTableProps) => {
  return (
    <Table>
      <TableHeader className="bg-[#f9fafb]">
        <TableRow>
          <TableHead className="px-2">Transactions</TableHead>
          <TableHead className="px-2">Amount</TableHead>
          <TableHead className="px-2">Status</TableHead>
          <TableHead className="px-2">Date</TableHead>
          <TableHead className="px-2 max-md:hidden">Channel</TableHead>
          <TableHead className="px-2 max-md:hidde">Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((t: Transaction) => {
          const status = getTransactionStatus(new Date(t.date));
          const amount = formatAmount(t.amount);

          const isDebit = t.type === "debit";
          const isCrebit = t.type === "crebit";

          return (
            <TableRow key={t.id}>
              <TableCell>
                <div>
                  <h1>{removeSpecialCharacters(t.name)}</h1>
                </div>
              </TableCell>
              <TableCell>
                {isDebit ? `-${amount}` : isCrebit ? amount : amount}
              </TableCell>

              <TableCell>{status}</TableCell>
              <TableCell>{formatDateTime(new Date(t.date)).dateTime}</TableCell>
              <TableCell>{t.paymentChannel}</TableCell>
              <TableCell>{t.category}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TransactionsTable;
