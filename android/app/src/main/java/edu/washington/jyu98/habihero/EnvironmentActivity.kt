package edu.washington.jyu98.habihero

import android.content.Intent
import android.graphics.Typeface
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.google.android.material.internal.ContextUtils.getActivity
import kotlinx.android.synthetic.main.activity_environment.*

class EnvironmentActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_environment)

        val typeface = Typeface.createFromAsset(this.assets, "franxurter.ttf")
        home_button.typeface = typeface
        habicoins_counter.typeface = typeface
        habicoins_text.typeface = typeface
        level.typeface = typeface

        // Gets rid of title bar
        if (supportActionBar != null) {
            supportActionBar!!.hide()
        }

        //val key = intent.getStringExtra("key")

        // When mission button is clicked, inflate problem modal
        mission_button.setOnClickListener {
            val alert = MathDialog()
            alert.showDialog(this, this@EnvironmentActivity)
        }

        home_button.setOnClickListener {
            val intent = Intent(this, MainActivity::class.java)
            this.startActivity(intent)
            finish()
        }

        water_icon.setOnClickListener {
            tree_fire.setOnClickListener{
                tree_fire.visibility = View.GONE
                tree.visibility = View.VISIBLE
            }
            water_icon.setBackgroundResource(R.drawable.dim_water_icon)
        }

    }
}