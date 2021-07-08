<?php

namespace App\Http\Controllers;

use App\Order;
use http\Env\Response;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Exception;


class ApiController extends Controller
{



    public function callback(Request $request)
    {
        $transaction = $request->get('transaction');
        $status = $request->get('status');
        if($status = 'succeed'){
            try{
                $order = new Order;
                $order::updateOrCreate(array('t_body' => json_encode($transaction), 'status' => 1));
            }catch(Exception $e){
                return response()->json($e->getMessage());
            }

        }else{
            try{
                $order = new Order;
                $order::updateOrCreate(array('t_body' => json_encode($transaction), 'status' => 0));
            }catch(Exception $e){
                return response()->json($e->getMessage());
            }
        }
    }
    public function failActionRedirect(){
        return view('sorry');
    }
    public function successActionRedirect(){
        return view('thankyou');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Api $api
     * @return \Illuminate\Http\Response
     */
    public function show(Api $api)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Api $api
     * @return \Illuminate\Http\Response
     */
    public function edit(Api $api)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Api $api
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Api $api)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Api $api
     * @return \Illuminate\Http\Response
     */
    public function destroy(Api $api)
    {
        //
    }
}
