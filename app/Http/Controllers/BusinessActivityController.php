<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Inertia\Inertia;

class BusinessActivityController extends Controller
{
    public function bizzSolution(){
return inertia::render('BizzSolutionPlc');
    }

    public function firm(){
        return inertia::render('Firm');
            }

public function training(){
        return inertia::render('Training');
            }
}
