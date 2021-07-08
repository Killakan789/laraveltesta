<?php

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
Route::middleware('auth:api')->group(function () {
    Route::post('/api/pay', 'ApiController@callback');
});
Route::middleware(['web'])->group(function () {
    Route::get('/','HomeController@getHome');
    Route::get('/thank-you', 'ApiController@successActionRedirect');
    Route::get('/sorry', 'ApiController@failActionRedirect');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


