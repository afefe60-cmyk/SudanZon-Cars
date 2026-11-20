package com.sudanzon.cars;

import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.sudanzon.cars.adapter.CarAdapter;
import com.sudanzon.cars.api.ApiClient;
import com.sudanzon.cars.model.CarItem;
import com.sudanzon.cars.ui.NavigationHelper;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class SearchActivity extends AppCompatActivity {

    private EditText edtSearchQuery;
    private ImageView btnClearSearch;
    private TextView txtResultsCount;
    private View layoutEmpty;
    private RecyclerView rvSearchResults;
    private CarAdapter searchAdapter;

    private final List<CarItem> allCars = new ArrayList<>();
    private final List<CarItem> displayCars = new ArrayList<>();
    private String initialCategory = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_search);

        initialCategory = getIntent().getStringExtra("category");
        if (initialCategory == null) initialCategory = "";

        edtSearchQuery = findViewById(R.id.edtSearchQuery);
        btnClearSearch = findViewById(R.id.btnClearSearch);
        txtResultsCount = findViewById(R.id.txtResultsCount);
        layoutEmpty = findViewById(R.id.layoutEmpty);
        rvSearchResults = findViewById(R.id.rvSearchResults);

        rvSearchResults.setLayoutManager(new LinearLayoutManager(this));
        searchAdapter = new CarAdapter(this, displayCars);
        rvSearchResults.setAdapter(searchAdapter);

        findViewById(R.id.btnSearchBack).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });

        btnClearSearch.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                edtSearchQuery.setText("");
            }
        });

        edtSearchQuery.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                String query = s.toString().trim();
                btnClearSearch.setVisibility(query.isEmpty() ? View.GONE : View.VISIBLE);
                filterCars(query);
            }

            @Override
            public void afterTextChanged(Editable s) {}
        });

        loadAllCars();
    }

    @Override
    protected void onResume() {
        super.onResume();
        NavigationHelper.setupBottomNav(this, R.id.navSearch);
    }

    private void filterCars(String query) {
        displayCars.clear();
        String lower = query.toLowerCase();

        for (CarItem car : allCars) {
            boolean matches = true;

            // Category filter if present
            if ("NEW".equalsIgnoreCase(initialCategory) && !"NEW".equalsIgnoreCase(car.getCondition())) {
                matches = false;
            } else if ("USED".equalsIgnoreCase(initialCategory) && !"USED".equalsIgnoreCase(car.getCondition())) {
                matches = false;
            }

            // Text search
            if (matches && !lower.isEmpty()) {
                String title = (car.getTitle() != null ? car.getTitle() : "").toLowerCase();
                String desc = (car.getDescription() != null ? car.getDescription() : "").toLowerCase();
                String city = (car.getCity() != null ? car.getCity() : "").toLowerCase();
                String seller = (car.getSellerName() != null ? car.getSellerName() : "").toLowerCase();

                if (!title.contains(lower) && !desc.contains(lower) && !city.contains(lower) && !seller.contains(lower)) {
                    matches = false;
                }
            }

            if (matches) {
                displayCars.add(car);
            }
        }

        searchAdapter.notifyDataSetChanged();
        txtResultsCount.setText(displayCars.size() + " سيارة مطابقة");
        layoutEmpty.setVisibility(displayCars.isEmpty() ? View.VISIBLE : View.GONE);
    }

    private void loadAllCars() {
        ApiClient.get("", new ApiClient.Callback() {
            @Override
            public void onSuccess(JSONObject response) {
                allCars.clear();
                JSONArray data = response.optJSONArray("data");
                if (data != null) {
                    for (int i = 0; i < data.length(); i++) {
                        CarItem c = CarItem.fromJson(data.optJSONObject(i));
                        if (c != null) {
                            allCars.add(c);
                        }
                    }
                }
                if (allCars.isEmpty()) {
                    loadFallback();
                }
                filterCars(edtSearchQuery.getText().toString());
            }

            @Override
            public void onError(String message) {
                loadFallback();
                filterCars(edtSearchQuery.getText().toString());
            }
        });
    }

    private void loadFallback() {
        allCars.add(CarItem.create("c1", "تويوتا لاندكروزر VXR 2023", 2023, 145000000L, "الخرطوم", "معرض النخبة للسيارات", "+249912345678", "249912345678", "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?w=800&q=80"));
        allCars.add(CarItem.create("c2", "مرسيدس بنز E-Class E200 2022", 2022, 120000000L, "الخرطوم", "شركة الأفق للسيارات الفاخرة", "+249923456789", "249923456789", "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80"));
        allCars.add(CarItem.create("c3", "هيونداي توسان هايبرد 2024", 2024, 68000000L, "بورتسودان", "معرض البحر الأحمر موتورز", "+249934567890", "249934567890", "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"));
    }
}
