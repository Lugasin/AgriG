<?php

namespace App
Models;

use Illuminate
Database
Eloquent
Factories
HasFactory;
use Illuminate
Foundation
Auth
User as Authenticatable;
use Illuminate
Notifications
Notifiable;
use Laravel
SanctumHasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens,
        HasFactory,
        Notifiable;

    /**
     *
The attributes that are mass assignable.
     *

     * @var array<int,
string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'address',
    ];

    /**
     *
The attributes that should be hidden for serialization.
     *

     * @var array<int,
string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     *
The attributes that should be cast.
     *

     * @var array<string,
string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Define relationships here if any (e.g., hasMany orders, hasMany quotes)
    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function quotes()
    {
        return $this->hasMany(Quote::class);
    }

    public function products() // If a user can be a vendor
    {
        return $this->hasMany(Product::class, 'vendor_id');
    }

    public function notifications()
    {
        return $this->hasMany(Notification::class);
    }
}
