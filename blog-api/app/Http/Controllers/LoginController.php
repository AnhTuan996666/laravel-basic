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
        $p = $request->only([
            'email', 'password'
        ]);
        $attemp = Auth::attempt($p, true);
        if (!$attemp) return ResponseHelper::ResponseError([], 'Login Failed');
        JWTAuth::from(auth()->user());
        
        return ResponseHelper::ResponseSuccess(Auth::user(), 'Login success');
    }
}
