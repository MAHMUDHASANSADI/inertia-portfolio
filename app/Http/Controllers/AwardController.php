<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;

class AwardController extends Controller
{
    public function govt(){
        return inertia::render('Govt');
            }
            
            public function private(){
                return inertia::render('Private');
                    }          
}
