<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// === TEST ROUTE ===
Route::get('/test', function () {
    return response()->json(['message' => 'API route berhasil!']);
});
