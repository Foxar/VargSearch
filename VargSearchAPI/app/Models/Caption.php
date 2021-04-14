<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Caption extends Model
{
    use HasFactory;

    protected $table = "captions";
    protected $id = "id";
    protected $timestamps = false;
    protected $connection = 'pgsql';


}
