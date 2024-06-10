<?php

use App\Http\Controllers\NavProfileController;
use App\Http\Controllers\BusinessActivityController;
use App\Http\Controllers\AwardController;
use App\Http\Controllers\LiveController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\admin\CategoryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\AuthController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/',[HomeController::class,'home'])->name('home');

Route::get('/biography/profile', [NavProfileController::class, 'profile'])->name('biography.profile');
Route::get('/biography/social-involvement', [NavProfileController::class, 'socialInvolvement'])->name('biography.social-involvement');
Route::get('/biography/vision', [NavProfileController::class, 'vision'])->name('biography.vision');
Route::get('/businessActivity/bizzSolution', [BusinessActivityController::class, 'bizzSolution'])->name('bizzSolution');
Route::get('/businessActivity/firm', [BusinessActivityController::class, 'firm'])->name('firm');
Route::get('/businessActivity/training', [BusinessActivityController::class, 'training'])->name('training');
Route::get('/award/govt', [AwardController::class, 'govt'])->name('govt');
Route::get('/award/private', [AwardController::class, 'private'])->name('private');
Route::get('/news/blog', [NewsController::class, 'blog'])->name('blog');
Route::get('/live/news24', [LiveController::class, 'news'])->name('news');
Route::get('/live/independence', [LiveController::class, 'independence'])->name('independence');
Route::get('/live/gtv', [LiveController::class, 'gtv'])->name('gtv');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

//admin dashboard

Route::get('admin',[AuthController::class,'admin_login']);
Route::post('admin',[AuthController::class,'auth_admin_login']);
Route::get('admin/logout',[AuthController::class,'admin_logout']);



Route::group(['middleware' => 'admin'],function(){
    Route::get('admin/dashboard',[DashboardController::class,'dashboard']);
    Route::get('admin/admin/list',[AdminController::class,'list']);
    Route::get('admin/admin/add',[AdminController::class,'add']);
    Route::post('admin/admin/add',[AdminController::class,'insert']);
    Route::get('admin/admin/edit/{id}',[AdminController::class,'edit']);
    Route::post('admin/admin/edit/{id}',[AdminController::class,'update']);
    Route::get('admin/admin/delete/{id}',[AdminController::class,'delete']);

    Route::get('admin/category/list',[CategoryController::class,'list']);
    Route::get('admin/category/add',[CategoryController::class,'add']);
    Route::post('admin/category/add',[CategoryController::class,'insert']);
    Route::get('admin/category/edit/{id}',[CategoryController::class,'edit']);
    Route::post('admin/category/edit/{id}',[CategoryController::class,'update']);
    Route::get('admin/category/delete/{id}',[CategoryController::class,'delete']);

    Route::get('admin/slider/list',[HomeController::class,'list']);
    Route::get('admin/slider/add',[HomeController::class,'add']);
    Route::post('admin/slider/add',[HomeController::class,'insert']);
    Route::get('admin/slider/edit/{id}',[HomeController::class,'edit']);
    Route::post('admin/slider/edit/{id}',[HomeController::class,'update']);
    Route::get('admin/slider/delete/{id}',[HomeController::class,'delete']);
});
