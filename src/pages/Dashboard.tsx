
import PaidInvoicesChart from "@/components/dashboard/PaidInvoicesChart";
import OpenInvoicesChart from "@/components/dashboard/OpenInvoicesChart";
import IncomeExpensesChart from "@/components/dashboard/IncomeExpensesChart";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      <div className="grid gap-6">
        <PaidInvoicesChart />
        <OpenInvoicesChart />
        <IncomeExpensesChart />
      </div>
    </div>
  );
}
