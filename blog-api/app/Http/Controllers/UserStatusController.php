<?php

namespace App\Http\Controllers;

use App\Models\UserStatus;
use App\Http\Requests\StoreUserStatusRequest;
use App\Http\Requests\UpdateUserStatusRequest;

class UserStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreUserStatusRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserStatusRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserStatus  $userStatus
     * @return \Illuminate\Http\Response
     */
    public function show(UserStatus $userStatus)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserStatus  $userStatus
     * @return \Illuminate\Http\Response
     */
    public function edit(UserStatus $userStatus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUserStatusRequest  $request
     * @param  \App\Models\UserStatus  $userStatus
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserStatusRequest $request, UserStatus $userStatus)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserStatus  $userStatus
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserStatus $userStatus)
    {
        //
    }
}
