<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Response;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public static function ResponseSuccess($data, $token = null)
    {
        $response = [
          'status' => true,
          'message' => 'Request Success',
          'data' => $data,
          'code' => 200,
      ];

      if ($token !== null) {
          $response['token'] = $token;
      }

      return response()->json($response, Response::HTTP_OK);
    }
  
    public static function ResponseError($data, $message)
    {
      return response()->json([
        'status' => false,
        'message' => $message,
        'data' => $data,
        'code' => 400,
      ], Response::HTTP_BAD_REQUEST);
    }
}
