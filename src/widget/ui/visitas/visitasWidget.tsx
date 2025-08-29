import VisitasTable from "./visitasTable";
import SearchForm from "./visitasSearchForm";
import ActionButtons from "./visitasButtonAction";
import ListVisitas from '@/features/visitas/list';


export default function VisitasDashboardPage() {
  return (
    <div className="p-6 h-9">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Visitas</h1>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <SearchForm />
            </div>
            <div className="flex flex-col gap-3">
              <ActionButtons />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <ListVisitas />
        </div>
      </div>
    </div>
  );
}