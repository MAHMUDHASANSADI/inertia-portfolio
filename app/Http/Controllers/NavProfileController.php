<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class NavProfileController extends Controller
{
    public function profile (){
        return Inertia::render('Profile');
    }
    public function socialInvolvement (){
        return Inertia::render('SocialInvolvement');
    }
    public function vision (){
        return Inertia::render('Vision');
    }
}
