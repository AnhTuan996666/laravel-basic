<?php
namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserLogin;

class AuthController extends Controller
{

  public function login(UserLogin $request) {
    $param= $request->validated();
    if(Auth::attempt($param, true)) {
        $user = auth()->user();
        $token = $user->createToken('blog.vn')->accessToken;
        return parent::ResponseSuccess($user, $token ,'Login success');
    }else return parent::ResponseError([], 'Login Failed');
  }

  public function logout() {
    $user = auth()->user();
    $user->token()->revoke();
    return parent::ResponseSuccess($user, 'Logout success');
  }

  public function getToken() {
    $user = auth()->user();
    return parent::ResponseSuccess($user ,'Token success');
  }

  public function changeStatus($id) {
    $user = User::find($id);
    $user->status = $user->status == 1 ? 0 : 1;
    $user->save();
    return parent::ResponseSuccess($user, 'Status changed');
  }
}
