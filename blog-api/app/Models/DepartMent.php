<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DepartMent extends Model
{
    protected $fillable = [
        'name',
    ];
    
    protected $table = 'departments';
}
