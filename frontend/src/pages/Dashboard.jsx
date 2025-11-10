import React from "react";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h3>Dashboard SIMBA</h3>
        <p>Selamat datang di Sistem Manajemen Barang.</p>
        <p>Gunakan menu di atas untuk mengelola data barang.</p>
      </div>
    </>
  );
}
