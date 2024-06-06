<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function blog(){
        return Inertia::render ('Blog');
    }
}
