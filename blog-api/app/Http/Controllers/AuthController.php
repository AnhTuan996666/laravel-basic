<?php
namespace App\Http\Controllers;
use App\Models\User;    
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserLogin;
use App\Http\Requests\UserRegister;

class AuthController extends Controller
{
    public function register(UserRegister $request) {
        $validated = $request->validated();
        $validated["password"] = Hash::make($validated["password"]);
        $validated["department_id"] = 1;
        $validated["status_id"] = 1 ;
        $queryResult = User::create($validated);
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
