import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

const monthlyRevenue = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 600 },
  { name: 'Mar', value: 700 },
  { name: 'Apr', value: 650 },
  { name: 'Mei', value: 850 },
  { name: 'Juni', value: 700 },
  { name: 'Juli', value: 600 },
  { name: 'Agst', value: 620 },
  { name: 'Sep', value: 750 },
];

const packageDistribution = [
  { name: 'Reguler', value: 70 },
  { name: 'Plus', value: 30 },
];

const activePackages = [
  { name: 'Jan', value: 25 },
  { name: 'Feb', value: 30 },
  { name: 'Mar', value: 60 },
  { name: 'Apr', value: 43 },
  { name: 'Mei', value: 52 },
  { name: 'Juni', value: 67 },
  { name: 'Juli', value: 55 },
  { name: 'Agst', value: 61 },
  { name: 'Sep', value: 70 },
  { name: 'Okt', value: 56 },
  { name: 'Nov', value: 65 },
  { name: 'Des', value: 48 },
];

const COLORS = ['#2196F3', '#0A1D56'];

export default function Dashboard() {
  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Stats Header */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 col-span-2">
        {[
          ['Jemaah Terdaftar', '490'],
          ['Jumlah Paket', '80'],
          ['Paket Aktif', '60'],
          ['Pendapatan Bulan Ini', 'Rp96.000.000'],
        ].map(([title, value], i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-4 shadow flex flex-col items-start justify-center"
          >
            <span className="text-sm text-gray-500">{title}</span>
            <span className="text-xl font-semibold">{value}</span>
          </div>
        ))}
      </div>

      {/* Monthly Revenue */}
      <div className="bg-white rounded-xl p-4 shadow">
        <h3 className="font-semibold mb-2">Pendapatan Bulanan</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={monthlyRevenue}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#2196F3" fill="#2196F3" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Paket Distribution */}
      <div className="bg-white rounded-xl p-4 shadow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold">Distribusi Paket</h3>
          <span className="text-sm text-blue-500">Hasanah Hana</span>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={packageDistribution}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {packageDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Active Packages */}
      <div className="bg-white rounded-xl p-4 shadow col-span-2">
        <h3 className="font-semibold mb-2">Paket Aktif</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart layout="vertical" data={activePackages}>
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Bar dataKey="value" fill="#2196F3" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
