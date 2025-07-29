<?php

namespace App
Http
Controllers
Api;

use App
Http
Controllers
Controller;
use Illuminate
Http
Request;
use App
Models
Category;

class CategoryController extends Controller
{
    public function index()
    {
        // TODO: Implement logic to fetch a list of categories
        // Example: $categories = Category::all();
        return response()->json(['message' => 'Category list endpoint - TODO'], 501);
    }
}