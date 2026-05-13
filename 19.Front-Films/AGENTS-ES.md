# Directrices del Repositorio

## Estructura del Proyecto y Organización de Módulos

- `src/` contiene el código de la aplicación.
- Las carpetas de funcionalidades de nivel superior como `home/`, `about/` y `films/` exponen módulos de página como `home-page.ts`.
- El código compartido vive en `src/core/`:
    - `components/` para la UI reutilizable,
    - `router/` para la navegación,
    - `data/` para datos estáticos,
    - `entities/` para los modelos de dominio,
    - `repositories/` para el acceso a la API y la orquestación de datos.
- Los assets estáticos públicos viven en `public/`, mientras que los estilos globales se dividen entre `index.css` y `base.css` en el nivel raíz.

## Comandos de Construcción, Pruebas y Desarrollo

- Usa `npm run dev` para iniciar el servidor de desarrollo de Vite.
- Usa `npm run build` para verificar tipos con `tsc` y generar el bundle de producción.
- Usa `npm run preview` para servir la app construida localmente.
- Usa `npm run lint` para comprobar problemas de linting con ESLint.
- Aún no existe un script de `test`.

## Estilo de Código y Convenciones de Nomenclatura

- Escribe TypeScript teniendo en cuenta la compatibilidad con el modo estricto;
- `tsconfig.json` activa `strict`, `noUnusedLocals` y `noUnusedParameters`.
- Sigue el estilo existente:
    - Indentación de 4 espacios,
    - comillas simples,
    - punto y coma,
    - imports explícitos omitiendo `.ts`.
- Nombra los archivos de página como `*-page.ts` y usa la separación de componentes actual:
    - `*.ts` para custom elements y archivos `.css` pareados para los estilos del componente.
- Usa Custom Elements nativos sin Shadow DOM; renderiza el HTML de los componentes con template strings e `innerHTML`.
- Al registrar custom elements, comprueba `customElements.get(...)` antes de llamar a `customElements.define(...)`.

## Directrices de Pruebas

- Aún no hay ningún framework de pruebas automatizadas configurado en este repositorio.
- Vitest se introducirá en una etapa posterior del curso, no en la fase actual.
- Hasta que se añada uno, valida los cambios con `npm run build` y comprobaciones manuales en el navegador mediante `npm run dev`, especialmente el enrutamiento y el registro de custom elements.
- Si introduces tests, prefiere nombrarlos `*.test.ts` y mantenlos cerca de la funcionalidad que cubren.

## Notas de Implementación

- El router es intencionalmente básico: gestiona las páginas principales, usa la History API y no soporta rutas anidadas ni manejo avanzado de `query`/`hash`.
- La implementación del menú es intencionalmente educativa; una versión lista para producción debería gestionar los listeners mediante `connectedCallback`/`disconnectedCallback`.
- El estilo global está centralizado en `base.css` e `index.css`; los estilos específicos de cada componente deben importarse desde el archivo del componente.

## Directrices de Commits y Pull Requests

- Los commits usan sujetos imperativos cortos como `Update course info` y `Add view basic test`.
- Escribe siempre los mensajes de commit en inglés, aunque el código base esté en otro idioma.
- Mantén los títulos de commit concisos, en mayúscula inicial y centrados en un solo cambio.
- Los pull requests deben incluir un resumen breve, las pantallas o rutas afectadas, issues enlazados si los hay, y capturas de pantalla o grabaciones cortas para cambios de UI.

## Consejos de Configuración

- Guarda los secretos en `.env` y nunca hardcodees credenciales en `src/`.
- Al añadir nuevos assets, coloca los archivos accesibles desde el navegador en `public/` e importa los assets gestionados por el código desde `src/` para que Vite los procese correctamente.
