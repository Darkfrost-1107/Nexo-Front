export default function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-row">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" placeholder="Buscar por nombre" />
        <button type="button">🔍</button>
      </div>

      <div className="search-row">
        <label htmlFor="codigo">Código</label>
        <input type="text" id="codigo" placeholder="Código" />

        <label htmlFor="dni">DNI</label>
        <input type="text" id="dni" placeholder="DNI" />
        <button type="button">▶</button>
      </div>
    </div>
  );
}
