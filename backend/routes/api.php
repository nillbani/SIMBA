<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BarangController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Di sini tempat kamu mendaftarkan semua route untuk API.
| Route ini otomatis akan diawali dengan prefix "/api".
|
*/

// Route default untuk user login (bawaan Laravel)
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// ✅ Tambahkan route untuk CRUD Barang
Route::get('/barangs', [BarangController::class, 'index']);
