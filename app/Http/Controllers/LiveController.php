<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LiveController extends Controller
{
    Public function news(){
return Inertia::render('Live');
    }

    
    Public function independence(){
        return Inertia::render('Live');

    }
    
    Public function gtv(){
        return Inertia::render('Live');

    }
}
