package edu.washington.jyu98.habihero

import android.app.Activity
import android.content.Context
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.GridView
import android.widget.ImageView
import kotlinx.android.synthetic.main.single_pollutant.view.*


class ImageAdapter internal constructor(private val mContext: Context, private var num: Int) : BaseAdapter() {

    private val mThumbIds: MutableList<Int> = ArrayList()

    init {
        var count = 0
        while (count < num) {
            mThumbIds.add(R.drawable.fire)
            count++
        }
    }

    override fun getCount(): Int {
        return mThumbIds.size
    }

    override fun getItem(position: Int): Any? {
        return null
    }

    override fun getItemId(position: Int): Long {
        return 0
    }

    // Create a new ImageView for each item referenced by the Adapter
    override fun getView(position: Int, convertView: View?, parent: ViewGroup?): View {

        var myView = convertView
        var holder: ViewHolder

        if (myView == null) {

            val mInflater = (mContext as Activity).layoutInflater

            //Inflating our grid_item.
            myView = mInflater.inflate(R.layout.single_pollutant, null)
            holder = ViewHolder()

            holder.mImageView = myView!!.findViewById(R.id.icon) as ImageView

            myView.tag = holder

        } else {
            holder = myView.tag as ViewHolder
        }
        holder.mImageView!!.setImageResource(R.drawable.fire)
        return myView

    }

    class ViewHolder { var mImageView: ImageView? = null }
}