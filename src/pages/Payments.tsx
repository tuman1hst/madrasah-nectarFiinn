import { useEffect, useState } from "react";
import { getPaymentHistory, processPayment, type Payment } from "@/lib/payments";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Payments = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

  const loadPayments = async () => {
    setLoading(true);
    try {
      const data = await getPaymentHistory();
      setPayments(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPayments();
  }, []);

  const handleSimulate = async () => {
    await processPayment("demo-invoice", 10000);
    await loadPayments();
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Payment History</h1>
        <Button onClick={handleSimulate}>Simulate Payment</Button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.invoice_id}</TableCell>
                <TableCell>{p.amount}</TableCell>
                <TableCell>{p.status}</TableCell>
                <TableCell>{new Date(p.created_at).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default Payments;
