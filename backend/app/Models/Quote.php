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
Eloquent
Model;

class Quote extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'status',
        'total_est',
    ];

    // Define relationships here
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function items()
    {
        return $this->hasMany(QuoteItem::class);
    }

    public function order()
    {
        return $this->hasOne(Order::class);
    }
}
