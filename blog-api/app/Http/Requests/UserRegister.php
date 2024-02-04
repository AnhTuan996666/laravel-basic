<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class UserRegister extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            "name"=> "nullable",
            "username" => "required|string",
            "email" => "required|string|unique:users,email",
            "password" => "required|string|confirmed",
            "avatar" => "nullable"
        ];
    }

    public function failedValidate(Validator $validator) {
        throw new HttpResponseException(response()->json([$validator->errors()], 422));
    }
}
