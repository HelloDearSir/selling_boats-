<?php

namespace App\Http\Controllers\Api;
use App\boat;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Boat as GlobalBoat;

class BoatController extends Controller
{
    public function Index()
    {
        $result = boat::all();
        return $result;
    }
}
