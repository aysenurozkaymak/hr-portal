import React from "react";

export default function LoginForm() {
  return (
    <form style={{ padding: 20 }}>
      <h3>Giriş Yap</h3>
      <input type="email" placeholder="Email" /><br /><br />
      <input type="password" placeholder="Şifre" /><br /><br />
      <button>Giriş</button>
    </form>
  );
}
