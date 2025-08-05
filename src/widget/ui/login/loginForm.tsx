import React from 'react';

export default function LoginForm() {
  return (
    <>
      <div className="form-group">
        <label htmlFor="username">Usuario</label>
        <input type="text" id="username" name="username" placeholder="Usuario" />
      </div>

      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" placeholder="Contraseña" />
      </div>
    </>
  );
}
