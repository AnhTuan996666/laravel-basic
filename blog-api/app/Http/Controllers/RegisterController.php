<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Response;

class RegisterController extends Controller
{
    //
    public function store(Request $request) {
        $data = $request->all();
        $queryResult = User::create([
            'name' => $data['name'],
            'username' => $data['username'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'department_id' => 1,
            'status_id' => 1,
        ]);
        return $queryResult 
        ? 
        response()->json([
            'status' => true,
            'message' => 'Registen Success',
            'data' => $data,
            'code' => 200,
        ], Response::HTTP_OK) 
        : 
        response()->json([
            'status' => false,
            'message' => 'Registen Failed',
            'data' => $data,
            'code' => 400,
        ], Response::HTTP_BAD_REQUEST);
    }   
}
