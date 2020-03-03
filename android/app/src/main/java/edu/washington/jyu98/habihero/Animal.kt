package edu.washington.jyu98.habihero

import android.graphics.drawable.Drawable

// Animal class to keep track of name of the animal, image of the animal,
// the math topic and the progress level
data class Animal(
    val name: String,
    val image: Drawable,
    val topic: String,
    val progress: Int
)