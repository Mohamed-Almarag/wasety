// src/middleware/auth.js
export default function auth({ next, router }) {
  if (localStorage.getItem("token") == null) {
    return router.push({ name: "Registeration" });
  }

  return next();
}
