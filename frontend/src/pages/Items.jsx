import React, { useState, useEffect } from "react";
import api from "../api/api";
import Navbar from "../components/Navbar";

export default function Items() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ nama: "", jumlah: "", deskripsi: "" });
  const [editId, setEditId] = useState(null);

  const getItems = async () => {
    try {
      const res = await api.get("/items");
      setItems(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await api.put(`/items/${editId}`, form);
      } else {
        await api.post("/items", form);
      }
      setForm({ nama: "", jumlah: "", deskripsi: "" });
      setEditId(null);
      getItems();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditId(item.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus data ini?")) return;
    await api.delete(`/items/${id}`);
    getItems();
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h3>Data Barang</h3>

        {/* Form Tambah/Edit */}
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="row">
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nama Barang"
                value={form.nama}
                onChange={(e) => setForm({ ...form, nama: e.target.value })}
                required
              />
            </div>
            <div className="col-md-2">
              <input
                type="number"
                className="form-control"
                placeholder="Jumlah"
                value={form.jumlah}
                onChange={(e) => setForm({ ...form, jumlah: e.target.value })}
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Deskripsi"
                value={form.deskripsi}
                onChange={(e) => setForm({ ...form, deskripsi: e.target.value })}
              />
            </div>
            <div className="col-md-3">
              <button className="btn btn-success w-100" type="submit">
                {editId ? "Update" : "Tambah"}
              </button>
            </div>
          </div>
        </form>

        {/* Tabel Data Barang */}
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Jumlah</th>
              <th>Deskripsi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nama}</td>
                <td>{item.jumlah}</td>
                <td>{item.deskripsi}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
