/** @format */

{
  // 🔴 Ejercicio 6 (pro)
  // Función rolUsuario(rol):
  // "admin" → "Acceso total"
  // "editor" → "Puede editar"
  // "viewer" → "Solo lectura"
  // default → "Rol desconocido"
  // 👉 Bonus:
  // Agrupa 2 roles si quieres (nivel pro)

  function rolUsuario(rol) {
    switch (rol) {
      case "admin":
        console.log("Acceso total");
        break;

      case "editor":
        console.log("Puede editar");
        break;

      case "viewer":
        console.log("Solo lectura");
        break;

      default:
        console.log("Rol desconocido");
    }
  }

  rolUsuario("editor");
  rolUsuario("admin");
  rolUsuario("viewer");
  rolUsuario("otro");
}
