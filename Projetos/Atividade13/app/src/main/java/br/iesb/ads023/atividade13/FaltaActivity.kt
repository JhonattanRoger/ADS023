package br.iesb.ads023.atividade13

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

class FaltaActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_falta)
        this.title = "Faltas"
    }//end on Create
}//end Class