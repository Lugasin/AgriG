<?php

use Illuminate
Database
Migrations
Migration;
use Illuminate
Database
Schema
Blueprint;
use Illuminate
Support
Facades
Schema;

return new class extends Migration
{
    /**
     *
Run the migrations.
     */
    public function up(): void
    {
        Schema::create('order_items', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('order_id')->constrained()->onDelete('cascade');
            $table->foreignId('product_id')->constrained()->onDelete('cascade');
            $table->integer('qty');
            $table->decimal('unit_price', 10, 2); // Price at purchase time
            $table->timestamps();
        });
    }

    /**
     *
Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_items');
    }
};