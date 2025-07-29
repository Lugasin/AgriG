<?php

namespace App
Models;

use Illuminate
Database
Eloquent
Factories
HasFactory;
use Illuminate
Database
EloquentModel;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'vendor_id',
        'name',
        'slug',
        'description',
        'price',
        'stock_qty',
        'specs',
    ];

    protected $casts = [
        'specs' => 'json',
    ];

    // Define relationships here
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function vendor()
    {
        return $this->belongsTo(User::class, 'vendor_id');
    }

    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function quoteItems()
    {
        return $this->hasMany(QuoteItem::class);
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }
}
