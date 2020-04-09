package edu.washington.jyu98.habihero

import android.app.Application
import com.myscript.iink.Engine


class EngineApp : Application() {
    companion object {
        private var engine: Engine? = null

        @Synchronized
        fun getEngine(): Engine {
            if (engine == null) {
                engine = Engine.create(MyCertificate.getBytes())
            }

            return engine!!
        }
    }
}
