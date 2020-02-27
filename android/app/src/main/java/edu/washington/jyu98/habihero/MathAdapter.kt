package edu.washington.jyu98.habihero

import android.content.Context
import android.widget.ArrayAdapter

class MathAdapter(context: Context, objects: List<MathData>):
    ArrayAdapter<MathData>(context, R.layout.single_problem, objects) {

}