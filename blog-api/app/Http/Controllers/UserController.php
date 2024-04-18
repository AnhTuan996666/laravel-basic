<?php

namespace App\Http\Controllers;
use App\Http\Requests\UserRegister;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function show($id)
    {
        return User::findOrFail($id);
    }

    public function index() {
        $users = User::
            join('departments', 'users.department_id', '=', 'departments.id')
            ->select('users.*', 'departments.name as departments')
            ->get();
            return response()->json($users);
    }

    public function register(UserRegister $request) {
        $request = request()->only(['avatar','name','username', 'email', 'password', 'status', 'department_id']);
        $request["status"] = "1";
        $request["password"] = Hash::make($request["password"]);
        $queryResult = User::create($request);
        return $queryResult ? parent::ResponseSuccess($queryResult, 'User successfully created') : parent::ResponseError([], 'Cannot create user');
      }
}
