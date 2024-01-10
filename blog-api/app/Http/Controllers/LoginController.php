<?php

namespace App\Http\Controllers;


use App\Models\User;
use App\Helpers\ResponseHelper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class LoginController extends Controller
{
    //
    public function show(Request $request) {
        $show = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        
        $auth = Auth::attempt($show);
        
        return $auth ? ResponseHelper::ResponseSuccess(Auth::user(), 'Login success') : ResponseHelper::ResponseError(Auth::user(), 'Login Failed');
    }
}
