package com.sudanzon.cars;

import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.sudanzon.cars.adapter.CarAdapter;
import com.sudanzon.cars.api.ApiClient;
import com.sudanzon.cars.model.CarItem;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class SearchActivity extends AppCompatActivity {

    private EditText edtSearch;
    private RecyclerView rvSearchResults;
    private CarAdapter searchAdapter;
    private final List<CarItem> allCars = new ArrayList<>();
    private final List<CarItem> filteredCars = new ArrayList<>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main); // reuse clean layout or search layout

        rvSearchResults = findViewById(R.id.rvCars);
        rvSearchResults.setLayoutManager(new LinearLayoutManager(this));
        searchAdapter = new CarAdapter(this, filteredCars);
        rvSearchResults.setAdapter(searchAdapter);

        // Hide banner in search view
        View hero = findViewById(R.id.txtHeroTitle);
        if (hero != null && hero.getParent() != null && hero.getParent().getParent() != null) {
            ((View) hero.getParent().getParent()).setVisibility(View.GONE);
        }

        loadAllCars();
    }

    private void loadAllCars() {
        ApiClient.get("", new ApiClient.Callback() {
            @Override
            public void onSuccess(JSONObject response) {
                allCars.clear();
                filteredCars.clear();
                JSONArray data = response.optJSONArray("data");
                if (data != null) {
                    for (int i = 0; i < data.length(); i++) {
                        CarItem c = CarItem.fromJson(data.optJSONObject(i));
                        if (c != null) {
                            allCars.add(c);
                            filteredCars.add(c);
                        }
                    }
                }
                searchAdapter.notifyDataSetChanged();
            }

            @Override
            public void onError(String message) {
                Toast.makeText(SearchActivity.this, "وضع البحث المحلي", Toast.LENGTH_SHORT).show();
            }
        });
    }
}
