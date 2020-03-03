package edu.washington.jyu98.habihero

import android.content.Context
import android.content.Intent
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





class MainActivity : AppCompatActivity() {

    private var animals = ArrayList<Animal>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        if (getSupportActionBar() != null) {
            getSupportActionBar()!!.hide()
        }

        recyclerAnimals.adapter = AnimalAdapter(animals, this)
        recyclerAnimals.layoutManager = LinearLayoutManager(this, LinearLayoutManager.HORIZONTAL, false)

        val animal = Animal("Temporary Name", getDrawable(R.drawable.animal_paw)!!, "Temporary Topic", 0)
        animals.add(animal)
        animals.add(animal)
        animals.add(animal)
        animals.add(animal)
        animals.add(animal)
    }

    // custom Animal Adapter
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
            holder.imageView.setImageDrawable(item.image)
            holder.topicView.text = item.topic
            holder.progressView.progress = item.progress

            holder.imageView.setOnClickListener {
                Toast.makeText(context,"clicked",Toast.LENGTH_SHORT).show()
            }
        }

        override fun getItemCount() = animalList.size
    }

}
