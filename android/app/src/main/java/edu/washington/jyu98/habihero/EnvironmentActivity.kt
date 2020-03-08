package edu.washington.jyu98.habihero

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.google.android.material.internal.ContextUtils.getActivity
import kotlinx.android.synthetic.main.activity_environment.*
//import edu.washington.jyu98.habihero.MyCertificate
import com.myscript.iink.*


class EnvironmentActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_environment)

        // Gets rid of title bar
        if (getSupportActionBar() != null) {
            getSupportActionBar()!!.hide()
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

    }

//    private var engine: Engine? = null
//
//    @Synchronized
//    fun getEngine(): Engine? {
//        if (engine == null) {
//            engine = Engine.create(MyCertificate.getBytes())
//        }
//
//        return engine
//    }


}