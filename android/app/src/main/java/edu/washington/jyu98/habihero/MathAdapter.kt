package edu.washington.jyu98.habihero

import android.content.Context
import android.widget.ArrayAdapter

class MathAdapter(context: Context, objects: List<MathData>):
    ArrayAdapter<MathData>(context, R.layout.math_dialog, objects) {
}

// sould probably be a grid view
