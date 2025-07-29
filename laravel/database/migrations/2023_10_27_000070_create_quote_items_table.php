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
        Schema::create('quote_items', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('quote_id')->constrained()->onDelete('cascade');
            $table->foreignId('product_id')->constrained()->onDelete('cascade');
            $table->integer('qty');
            $table->decimal('price_est', 10, 2)->nullable(); // Snapshot of price
            $table->timestamps();
        });
    }

    /**
     *
Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quote_items');
    }
};