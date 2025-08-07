import SearchForm from './asesoresSearchForm';
import ActionButtons from './asesoresButtonAction';
import AsesoresTable from './asesoresTable';

export default function AsesoresPage() {
  return (
    <div className="asesores-page">
      <h1>Asesores</h1>
      <SearchForm />
      <div className="actions-container">
        <ActionButtons />
      </div>
      <AsesoresTable />
    </div>
  );
}
