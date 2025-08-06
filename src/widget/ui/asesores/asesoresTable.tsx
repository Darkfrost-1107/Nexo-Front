
export default function AsesoresTable() {
  const asesores = [
    { nombre: 'Pepito Perez', contacto: 'Cultivo A' },
    { nombre: 'Pepito Perez', contacto: 'Cultivo A' },
    { nombre: 'Pepito Perez', contacto: 'Cultivo A' },
    { nombre: 'Pepito Perez', contacto: 'Cultivo A' },
  ];

  return (
    <table className="asesores-table">
      <thead>
        <tr>
          <th></th>
          <th>Nombre</th>
          <th>Contacto</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  );
}
