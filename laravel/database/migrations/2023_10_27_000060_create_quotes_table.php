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
        Schema::create('quotes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('status')->default('pending');
            $table->decimal('total_est', 10, 2)->nullable(); // Estimated total
            $table->timestamps();
        });
    }

    /**
     *
Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quotes');
    }
};