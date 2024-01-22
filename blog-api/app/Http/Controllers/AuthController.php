<?php
namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Department;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserLogin;
use App\Http\Requests\UserRegister;

class AuthController extends Controller
{
    public function register(UserRegister $request) {
        $department = Department::find(1);
        $request = request()->only(['avatar','name','username', 'email', 'password', 'status', 'department_id']);
        $request["password"] = Hash::make($request["password"]);
        $request["department_id"] = $department->department_id;
        $queryResult = User::create($request);
        return $queryResult ? Controller::ResponseSuccess($queryResult, 'User successfully created') : Controller::ResponseError($queryResult, 'Cannot create user');
    }

    public function login(UserLogin $request) {
        $param= $request->validated();
        if(Auth::attempt($param, true)) {
            $user = auth()->user();
            $token = $user->createToken('blog.vn')->accessToken;
            return parent::ResponseSuccess($user, $token ,'Login success');
        }else {
            return parent::ResponseError([], 'Login Failed');
        }
    }
}
