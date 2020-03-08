package edu.washington.jyu98.habihero

import android.R.drawable.btn_dialog
import android.app.Activity
import android.app.Dialog
import android.content.Context
import android.content.Intent
import android.util.Log
import android.view.View
import android.view.Window
import android.view.Window.FEATURE_NO_TITLE
import android.widget.Button
import android.widget.GridView
import android.widget.TextView
import kotlinx.android.synthetic.main.math_dialog.*
import androidx.core.content.ContextCompat.startActivity


class MathDialog() {

    fun showDialog(context: Context, activity: Activity) {
        val dialog = Dialog(activity)
        dialog.requestWindowFeature(Window.FEATURE_NO_TITLE)
        dialog.setCancelable(false)
        dialog.setContentView(R.layout.math_dialog)


        val num1 = dialog.findViewById<TextView>(R.id.num1)
        val num2 = dialog.findViewById<TextView>(R.id.num2)

        num1.text = "4"
        num2.text = "3"

        val grid1 = dialog.findViewById<GridView>(R.id.grid1)
        val grid2 = dialog.findViewById<GridView>(R.id.grid2)

        grid1.adapter = ImageAdapter(context,4)
        //grid2.adapter = ImageAdapter(context,3)

        val dialogButton = dialog.findViewById<Button>(R.id.btn_dialog)
        dialogButton.setOnClickListener{
            dialog.dismiss()
        }

        dialog.show()
    }
}