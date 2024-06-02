<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/biography/profile', function () {
    return Inertia::render('Profile');
});

Route::get('/biography/social-involvement', function () {
    return Inertia::render('Social Involvement');
});

Route::get('/biography/vision', function () {
    return Inertia::render('Vision');
});

Route::get('/businessActivity/bizzSolution', function () {
    return Inertia::render('Bizz Solution');
});

Route::get('/businessActivity/caFirm', function () {
    return Inertia::render('Firm');
});

Route::get('/businessActivity/training', function () {
    return Inertia::render('Firm');
});

Route::get('/businessActivity/caFirm', function () {
    return Inertia::render('Firm');
});

Route::get('/award/private', function () {
    return Inertia::render('Private');
});

Route::get('/award/govt', function () {
    return Inertia::render('Govt');
});

Route::get('/news/blog', function () {
    return Inertia::render('blog');
});

Route::get('/live', function () {
    return Inertia::render('Live');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
