import App from "./App";

// Запуск приложения после загрузки DOM
document.addEventListener("DOMContentLoaded", async () => {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
  document.addEventListener("gesturestart", (e) => {
    e.preventDefault();
  });

  const app = new App();
  app.init();
});
