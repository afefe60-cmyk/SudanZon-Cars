package com.sudanzon.cars;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.sudanzon.cars.api.ApiClient;

import org.json.JSONObject;

public class AddCarActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main); // fallback layout or form

        Toast.makeText(this, "شاشة إضافة إعلان سيارة جديدة", Toast.LENGTH_SHORT).show();
    }
}
