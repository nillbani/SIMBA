<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Illuminate\Http\Request;

class BarangController extends Controller
{
    // 🟢 Tampilkan semua data barang
    public function index()
    {
        return response()->json(Barang::all());
    }

    // 🟡 Tambahkan barang baru
    public function store(Request $request)
    {
        $request->validate([
            'nama_barang' => 'required|string|max:255',
            'kategori' => 'required|string|max:255',
            'stok' => 'required|integer',
            'satuan' => 'required|string|max:50',
            'harga' => 'required|numeric'
        ]);

        $barang = Barang::create($request->all());
        return response()->json($barang, 201);
    }

    // 🟠 Tampilkan 1 barang berdasarkan ID
    public function show($id)
    {
        $barang = Barang::find($id);
        if (!$barang) {
            return response()->json(['message' => 'Barang tidak ditemukan'], 404);
        }
        return response()->json($barang);
    }

    // 🔵 Update barang
    public function update(Request $request, $id)
    {
        $barang = Barang::find($id);
        if (!$barang) {
            return response()->json(['message' => 'Barang tidak ditemukan'], 404);
        }

        $barang->update($request->all());
        return response()->json($barang);
    }

    // 🔴 Hapus barang
    public function destroy($id)
    {
        $barang = Barang::find($id);
        if (!$barang) {
            return response()->json(['message' => 'Barang tidak ditemukan'], 404);
        }

        $barang->delete();
        return response()->json(['message' => 'Barang berhasil dihapus']);
    }
}
