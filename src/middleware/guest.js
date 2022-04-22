// src/middleware/auth.js
export default function guest({ next }) {
  if (localStorage.getItem("token") == undefined) {
    this.$router.push({ name: "SignIn" });
  }

  return next();
}
