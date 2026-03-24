// import { Counter } from "./core/components/counter/counter2"
// import { Footer } from "./core/components/footer-wc/footer"

// Trae (importa) la clase/objeto App desde otro archivo.
import { App } from "./core/components/apps/apps-WC";

// Muestra un mensaje en la consola (para debug).
console.log("Load main");

// Footer.render()
// Counter.render()

// Llama al método render de App
// Normalmente sirve para mostrar la interfaz en pantalla (HTML)
App.render();

// Para qué sirve
// Arrancar la aplicación

// Carga el componente principal (App)
// Y lo renderiza (lo pinta en la web)
