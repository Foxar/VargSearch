<?php

namespace App\Http\Controllers;

use App\Models\Caption;
use Illuminate\Http\Request;

class CaptionController
{
 
    //Return captions that match the search parameters.
    public function show(Request $request)
    {
        $query = $request->input('query');
        $captions = Caption::where('text', 'like', '%'.$query.'%')->get();
        return $captions;
    }


}
