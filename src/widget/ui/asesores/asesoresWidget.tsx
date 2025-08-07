import SearchForm from './asesoresSearchForm';
import ActionButtons from './asesoresButtonAction';
import AsesoresTable from './asesoresTable';

export default function AsesoresPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Asesores</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <SearchForm />
        </div>
        <div className="flex flex-col justify-start items-end gap-4">
          <ActionButtons />
        </div>
      </div>

      <div className="mt-8">
        <AsesoresTable />
      </div>
    </div>
  );
}
