import VisitasTable from "./visitasTable";
import SearchForm from "./visitasSearchForm";
export default function VisitasDashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Visitas</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <SearchForm />
        </div>
      </div>

      <div className="mt-8">
        <VisitasTable />
      </div>
    </div>
  );
}
