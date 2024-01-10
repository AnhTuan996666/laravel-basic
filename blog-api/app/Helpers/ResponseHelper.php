<?php

namespace App\Helpers;

use Illuminate\Http\Response;

class ResponseHelper
{
  public static function ResponseSuccess($data)
  {
    return response()->json([
      'status' => true,
      'message' => 'Request Success',
      'data' => $data,
      'code' => 200,
    ], Response::HTTP_OK);
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