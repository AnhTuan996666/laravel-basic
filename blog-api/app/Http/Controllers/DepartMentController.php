<?php

namespace App\Http\Controllers;

use App\Models\DepartMent;
use App\Http\Requests\StoreDepartMentRequest;
use App\Http\Requests\UpdateDepartMentRequest;

class DepartMentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $department = Department::all();
        return  $department ? parent::ResponseSuccess($department, 'User successfully created') : parent::ResponseError([], 'Cannot create user');
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
     * @param  \App\Http\Requests\StoreDepartMentRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDepartMentRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DepartMent  $departMent
     * @return \Illuminate\Http\Response
     */
    public function show(DepartMent $departMent)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DepartMent  $departMent
     * @return \Illuminate\Http\Response
     */
    public function edit(DepartMent $departMent)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDepartMentRequest  $request
     * @param  \App\Models\DepartMent  $departMent
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDepartMentRequest $request, DepartMent $departMent)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DepartMent  $departMent
     * @return \Illuminate\Http\Response
     */
    public function destroy(DepartMent $departMent)
    {
        //
    }
}
