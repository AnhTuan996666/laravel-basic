<?php

namespace App\Http\Controllers;
use App\Models\User;
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
}
