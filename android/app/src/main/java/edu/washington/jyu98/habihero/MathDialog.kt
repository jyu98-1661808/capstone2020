package edu.washington.jyu98.habihero

import android.app.Activity
import android.app.Dialog
import android.content.Context
import android.content.Intent
import android.graphics.Color
import android.graphics.Typeface
import android.graphics.drawable.ColorDrawable
import android.util.DisplayMetrics
import android.util.Log
import android.view.View
import android.view.Window
import android.widget.LinearLayout
import androidx.core.content.res.ResourcesCompat.getDrawable
import com.myscript.iink.*
import kotlinx.android.synthetic.main.math_dialog.*
import java.io.File
import com.myscript.iink.uireferenceimplementation.EditorView
import com.myscript.iink.uireferenceimplementation.InputController
import kotlinx.android.synthetic.main.activity_environment.*
import kotlinx.android.synthetic.main.math_dialog.habicoins
import java.io.IOException
import java.util.Timer
import kotlin.concurrent.schedule


class MathDialog {
    private var engine: Engine? = getEngine()
    private var contentPackage: ContentPackage? = null
    private var contentPart: ContentPart? = null
    private var editorView: EditorView? = null
    private var renderer: Renderer? = null
    private val packageName = "habihero"
    private val TAG = "Dialog"


    fun showDialog(context: Context, activity: Activity) {
        val dialog = Dialog(activity)
        dialog.requestWindowFeature(Window.FEATURE_NO_TITLE)
        dialog.setCancelable(false)
        dialog.setContentView(R.layout.math_dialog)

        val v = dialog.window?.decorView
        val d = ColorDrawable(Color.TRANSPARENT)
        dialog.window?.setBackgroundDrawable(d)

        val displayMetrics = context.resources.displayMetrics
        fun dpToPx(dp: Int): Int {
            return Math.round(dp * (displayMetrics.xdpi / DisplayMetrics.DENSITY_DEFAULT))
        }

        val typeface = Typeface.createFromAsset(context.assets, "franxurter.ttf")

        dialog.num1.typeface = typeface
        dialog.num2.typeface = typeface
        dialog.question.typeface = typeface

        dialog.num1.text = "4"
        dialog.num2.text = "4"
        dialog.question.text = "What is the sum of " + dialog.num1.text + " and " + dialog.num2.text + "?"

        dialog.grid1.adapter = ImageAdapter(context,4)
        dialog.grid2.adapter = ImageAdapter(context,4)

        dialog.btn_dialog.setOnClickListener{
            dialog.dismiss()

            editorView!!.setOnTouchListener(null)
            editorView!!.close()

            if (contentPart != null) {
                contentPart!!.close()
                contentPart = null
            }
            if (contentPackage != null) {
                contentPackage!!.close()
                contentPackage = null
            }
            engine = null
        }

        // Create ink engine for handwriting support
        val conf = engine!!.configuration
        val confDir = "zip://${activity.packageCodePath}!/assets/conf"
        conf.setStringArray("configuration-manager.search-path", arrayOf(confDir))
        val tempDir = activity.filesDir.path + File.separator + "tmp"
        conf.setString("content-package.temp-folder", tempDir)

        editorView = dialog.findViewById(R.id.editor_view)

        editorView!!.setEngine(engine!!)

        val editor = editorView!!.editor
        editorView!!.inputMode = InputController.INPUT_MODE_FORCE_PEN

        val packageName = "habihero"
        val file = File(activity.filesDir, packageName)
        try {
            contentPackage = engine!!.createPackage(file)
            contentPart = contentPackage!!.createPart("Math")
        } catch (e: IOException) {
            Log.e(TAG, "Failed to open package \"$packageName\"", e)
        } catch (e: IllegalArgumentException) {
            Log.e(TAG, "Failed to open package \"$packageName\"", e)
        }

        editorView!!.post {
            editorView!!.renderer!!.setViewOffset(0f, 0f)
            editorView!!.renderer!!.viewScale = 1f
            editorView!!.visibility = View.VISIBLE
            editor?.part = contentPart
        }

        editor?.setPenStyle("color: #87bba3; -myscript-pen-width: 3")

        var count = 3

        // Save results
        dialog.clear_button.setOnClickListener { editorView!!.editor!!.clear() }
        dialog.confirm_button.setOnClickListener {
            val answer = editor?.export_(editor?.rootBlock, MimeType.LATEX)
            editorView!!.editor!!.clear()
            dialog.input.visibility = View.GONE
            dialog.question.visibility = View.GONE
            dialog.result.typeface = typeface
            dialog.correct.typeface = typeface
            dialog.incorrect.typeface = typeface
            dialog.habicoins.typeface = typeface
            dialog.redo_button.typeface = typeface
            dialog.tiger.visibility = View.GONE
            dialog.hero.visibility = View.GONE
            dialog.help.visibility = View.GONE
            dialog.result.text = answer
            if (answer.equals("8")) {
                dialog.correct.text = "Correct!"
                dialog.result.visibility = View.VISIBLE
                dialog.correct.visibility = View.VISIBLE
                Timer("displayHabiCoins", false).schedule(3000) {
                    activity.runOnUiThread(object: Runnable {
                        override fun run() {
                            val param1 = dialog.correct.layoutParams as LinearLayout.LayoutParams
                            param1.setMargins(0,0,0,20)
                            dialog.correct.layoutParams = param1
                            dialog.question_layout.visibility = View.GONE
                            dialog.habicoins.visibility = View.VISIBLE
                            val param2 = dialog.btn_dialog.layoutParams as LinearLayout.LayoutParams
                            param2.setMargins(0,dpToPx(40), dpToPx(-30),0)
                            dialog.btn_dialog.layoutParams = param2
                        }
                    })
                }
                activity.habicoins_counter.text = "50"
                activity.progress.progress = 20
                activity.water_icon.setBackgroundResource(R.drawable.water_icon)
            } else {
                dialog.equals.text = "≠"
                dialog.incorrect.text = "The sum is not " + answer + "."
                dialog.result.visibility = View.VISIBLE
                dialog.incorrect.visibility = View.VISIBLE
                dialog.redo_button.visibility = View.VISIBLE

                dialog.redo_button.setOnClickListener {
                    dialog.input.visibility = View.VISIBLE
                    dialog.question.visibility = View.VISIBLE
                    dialog.tiger.visibility = View.VISIBLE
                    dialog.hero.visibility = View.VISIBLE
                    dialog.help.visibility = View.VISIBLE
                    dialog.result.visibility = View.GONE
                    dialog.incorrect.visibility = View.GONE
                    dialog.redo_button.visibility = View.GONE
                    dialog.equals.text = "="
                    val param = dialog.help.layoutParams as LinearLayout.LayoutParams
                    param.setMargins(dpToPx(750),0,0,dpToPx(-40))
                    dialog.help.layoutParams = param
                    dialog.help.setBackgroundResource(R.drawable.help1)
                    dialog.help.layoutParams.height = dpToPx(220)
                    dialog.help.layoutParams.width = dpToPx(300)
                    count = 0
                }
            }
        }

        // logic for help button
        dialog.help.setOnClickListener {
            if (count == 0) {
                dialog.help.setBackgroundResource(R.drawable.help2)
                count = 1
            } else if (count == 1) {
                dialog.help.setBackgroundResource(R.drawable.help3)
                count = 2
            } else {
                dialog.help.visibility = View.VISIBLE
                val param = dialog.help.layoutParams as LinearLayout.LayoutParams
                param.setMargins(dpToPx(750),0,0,dpToPx(-40))
                dialog.help.layoutParams = param
                dialog.help.setBackgroundResource(R.drawable.help1)
                dialog.help.layoutParams.height = dpToPx(220)
                dialog.help.layoutParams.width = dpToPx(300)
                count = 0
            }
        }

        dialog.hero.setOnClickListener {
            if (count == 0) {
                dialog.help.setBackgroundResource(R.drawable.help2)
                count = 1
            } else if (count == 1) {
                dialog.help.setBackgroundResource(R.drawable.help3)
                count = 2
            } else {
                dialog.help.visibility = View.VISIBLE
                val param = dialog.help.layoutParams as LinearLayout.LayoutParams
                param.setMargins(dpToPx(750),0,0,dpToPx(-40))
                dialog.help.layoutParams = param
                dialog.help.setBackgroundResource(R.drawable.help1)
                dialog.help.layoutParams.height = dpToPx(220)
                dialog.help.layoutParams.width = dpToPx(300)
                count = 0
            }
        }

        // Counting mechanism

        var gridCount = 1

        dialog.grid1.setOnItemClickListener { parent, view, position, id ->
            if (gridCount == 1) {
                val param = dialog.help.layoutParams as LinearLayout.LayoutParams
                param.setMargins(dpToPx(800),dpToPx(25),0,dpToPx(20))
                dialog.help.layoutParams = param
                dialog.help.setBackgroundResource(R.drawable.one)
                dialog.help.layoutParams.height = dpToPx(150)
                dialog.help.layoutParams.width = dpToPx(125)
                gridCount = 2
            } else if (gridCount == 2) {
                dialog.help.setBackgroundResource(R.drawable.two)
                gridCount = 3
            } else if (gridCount == 3) {
                dialog.help.setBackgroundResource(R.drawable.three)
                gridCount = 4
            } else if (gridCount == 4) {
                dialog.help.setBackgroundResource(R.drawable.four)
                gridCount = 5
            } else if (gridCount == 5) {
                dialog.help.setBackgroundResource(R.drawable.five)
                gridCount = 6
            } else if (gridCount == 6) {
                dialog.help.setBackgroundResource(R.drawable.six)
                gridCount = 7
            } else if (gridCount == 7) {
                dialog.help.setBackgroundResource(R.drawable.seven)
                gridCount = 8
            } else {
                dialog.help.setBackgroundResource(R.drawable.eight)
                gridCount = 1
            }
        }

        dialog.grid2.setOnItemClickListener { parent, view, position, id ->
            if (gridCount == 1) {
                val param = dialog.help.layoutParams as LinearLayout.LayoutParams
                param.setMargins(dpToPx(800),dpToPx(25),0,dpToPx(20))
                dialog.help.layoutParams = param
                dialog.help.setBackgroundResource(R.drawable.one)
                dialog.help.layoutParams.height = dpToPx(150)
                dialog.help.layoutParams.width = dpToPx(125)
                gridCount = 2
            } else if (gridCount == 2) {
                dialog.help.setBackgroundResource(R.drawable.two)
                gridCount = 3
            } else if (gridCount == 3) {
                dialog.help.setBackgroundResource(R.drawable.three)
                gridCount = 4
            } else if (gridCount == 4) {
                dialog.help.setBackgroundResource(R.drawable.four)
                gridCount = 5
            } else if (gridCount == 5) {
                dialog.help.setBackgroundResource(R.drawable.five)
                gridCount = 6
            } else if (gridCount == 6) {
                dialog.help.setBackgroundResource(R.drawable.six)
                gridCount = 7
            } else if (gridCount == 7) {
                dialog.help.setBackgroundResource(R.drawable.seven)
                gridCount = 8
            } else {
                dialog.help.setBackgroundResource(R.drawable.eight)
                gridCount = 1
            }
        }

        dialog.show()
    }

    @Synchronized
    fun getEngine(): Engine? {
        if (engine == null) {
            engine = Engine.create(MyCertificate.getBytes())
        }
        return engine
    }
}