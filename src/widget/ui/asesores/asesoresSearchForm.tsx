
export default function SearchForm() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <label className="w-24 font-semibold">Nombre</label>
        <input
          type="text"
          className="flex-1 border border-gray-300 px-3 py-2 rounded-md"
        />
      </div>

      <div className="flex items-center gap-2">
        <label className="w-24 font-semibold">Código</label>
        <input
          type="text"
          className="flex-1 border border-gray-300 px-3 py-2 rounded-md"
        />
        
        <label className="w-16 font-semibold">DNI</label>
        <input
          type="text"
          className="flex-1 border border-gray-300 px-3 py-2 rounded-md"
        />
      </div>
    </div>
  );
}
