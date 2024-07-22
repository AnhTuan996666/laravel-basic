<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DepartMentController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('v1')->group(function() {
   Route::get('/user/{id}', [UserController::class, 'show']);
   Route::get('/users', [UserController::class, 'index']);
   Route::get('/department/list', [DepartMentController::class, 'index']);
   Route::post('/register', [UserController::class, 'register']);
   Route::post('/change/status/{id}', [AuthController::class, 'changeStatus']);
   Route::post('/login', [AuthController::class, 'login']);
   Route::post('/logout', [AuthController::class, 'logout']);
});

Route::middleware('auth:api')->group(function() {
   Route::Get('/auth/users', [AuthController::class, 'getToken']);
});
