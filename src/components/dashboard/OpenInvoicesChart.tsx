
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Sample data for open invoices
const data = [
  { name: 'Überfällig', value: 400 },
  { name: 'Fällig', value: 300 },
  { name: 'Diesen Monat', value: 500 },
  { name: 'Nächster Monat', value: 200 },
];

const COLORS = ['#EF4444', '#F59E0B', '#3B82F6', '#10B981'];

export default function OpenInvoicesChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Offene Rechnungen</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
