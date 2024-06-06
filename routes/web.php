<?php

use App\Http\Controllers\NavProfileController;
use App\Http\Controllers\BusinessActivityController;
use App\Http\Controllers\AwardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/biography/profile', [NavProfileController::class, 'profile'])->name('biography.profile');
Route::get('/biography/social-involvement', [NavProfileController::class, 'socialInvolvement'])->name('biography.social-involvement');
Route::get('/biography/vision', [NavProfileController::class, 'vision'])->name('biography.vision');
Route::get('/businessActivity/bizzSolution', [BusinessActivityController::class, 'bizzSolution'])->name('bizzSolution');
Route::get('/businessActivity/firm', [BusinessActivityController::class, 'firm'])->name('firm');
Route::get('/businessActivity/training', [BusinessActivityController::class, 'training'])->name('training');
Route::get('/award/govt', [AwardController::class, 'govt'])->name('govt');
Route::get('/award/private', [AwardController::class, 'private'])->name('private');

Route::get('/biography/profile', [NavProfileController::class, 'show'])->name('biography.profile');
Route::get('/biography/profile', [NavProfileController::class, 'show'])->name('biography.profile');


// Route::get('/biography/profile', function () {
//     return Inertia::render('Profile');
// });

// Route::get('product', [ProductController::class, 'index'])->name('product.index');


// Route::get('/biography/social-involvement', function () {
//     return Inertia::render('SocialInvolvement');
// });

// Route::get('/biography/vision', function () {
//     return Inertia::render('Vision');
// });

// Route::get('', function () {
//     return Inertia::render('BizzSolutionPlc');
// });

// Route::get('/businessActivity/firm', function () {
//     return Inertia::render('Firm');
// });

// Route::get('/businessActivity/training', function () {
//     return Inertia::render('Taining');
// });

// Route::get('/award/private', function () {
//     return Inertia::render('Private');
// });

// Route::get('/award/govt', function () {
//     return Inertia::render('Govt');
// });

// Route::get('/news/blog', function () {
//     return Inertia::render('Blog');
// });

// Route::get('/live', function () {
//     return Inertia::render('Live');
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
