<?php

namespace App\Http\Controllers;

use app\boat;

class BoatController extends Controller
{
    function index ()
    {
        $result = boat::all();
        return $result;
    }
}
