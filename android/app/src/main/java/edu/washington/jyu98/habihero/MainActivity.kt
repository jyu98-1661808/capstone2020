package edu.washington.jyu98.habihero

import android.content.Context
import android.content.Intent
import android.graphics.Typeface
import android.graphics.drawable.Drawable
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import android.view.*
import android.widget.ImageView
import android.widget.ProgressBar
import android.widget.TextView
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.animal_list.view.*
import java.util.*
import kotlin.collections.ArrayList
import android.graphics.Typeface.createFromAsset




class MainActivity : AppCompatActivity() {

    private var animals = ArrayList<Animal>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Gets rid of title bar
        if (getSupportActionBar() != null) {
            getSupportActionBar()!!.hide()
        }

        // Attaches adapter & layout manager
        recyclerAnimals.adapter = AnimalAdapter(animals, this)
        recyclerAnimals.layoutManager = LinearLayoutManager(this, LinearLayoutManager.HORIZONTAL, false)

        // Creates test animals for the recycler view
        val animal1 = Animal("Tim Tiger", getDrawable(R.drawable.home_tiger)!!, "Addition", 30)
        val animal2 = Animal("Locked", getDrawable(R.drawable.lock)!!, "Temporary Topic", 0)
        animals.add(animal1)
        animals.add(animal2)
        animals.add(animal2)
        animals.add(animal2)
    }

    // Custom Animal Adapter
    class AnimalAdapter(private val animalList: ArrayList<Animal>, val context: Context) :
        RecyclerView.Adapter<AnimalAdapter.ViewHolder>() {
        class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
            val nameView: TextView = view.name
            val imageView: ImageView = view.image
            val topicView: TextView = view.topic
            val progressView: ProgressBar = view.progress
        }

        override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
            val view = LayoutInflater.from(parent.context).inflate(R.layout.animal_list, parent, false)

            return ViewHolder(view)
        }

        override fun onBindViewHolder(holder: ViewHolder, position: Int) {
            val item = animalList[position]
            holder.nameView.text = item.name
            val typeface = createFromAsset(context.assets,"franxurter.ttf")

            holder.nameView.typeface = typeface
            holder.imageView.setImageDrawable(item.image)
            holder.topicView.text = item.topic
            holder.topicView.typeface = typeface
            holder.progressView.progress = item.progress

            if (position > 0) {
                holder.imageView.setPadding(0,140,0,0)
            }

            // Click animal to go to environment
            holder.imageView.setOnClickListener {
                val intent = Intent(context, EnvironmentActivity::class.java).apply {
                    putExtra("key", position)
                }
                context.startActivity(intent)
            }
        }

        override fun getItemCount() = animalList.size
    }

}
