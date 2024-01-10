<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Helpers\ResponseHelper;

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
        return $queryResult ? ResponseHelper::ResponseSuccess($queryResult, 'User successfully created') : ResponseHelper::ResponseError($queryResult, 'Cannot create user');
    }   
}
