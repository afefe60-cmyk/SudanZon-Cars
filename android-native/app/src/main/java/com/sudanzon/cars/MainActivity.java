package com.sudanzon.cars;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

import com.sudanzon.cars.adapter.CarAdapter;
import com.sudanzon.cars.api.ApiClient;
import com.sudanzon.cars.model.CarItem;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    private RecyclerView rvCars;
    private CarAdapter carAdapter;
    private final List<CarItem> carList = new ArrayList<>();
    private SwipeRefreshLayout swipeRefresh;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        initViews();
        setupBottomNav();
        setupServiceButtons();
        loadCars();
    }

    private void initViews() {
        rvCars = findViewById(R.id.rvCars);
        rvCars.setLayoutManager(new LinearLayoutManager(this));
        carAdapter = new CarAdapter(this, carList);
        rvCars.setAdapter(carAdapter);

        swipeRefresh = findViewById(R.id.swipeRefresh);
        if (swipeRefresh != null) {
            swipeRefresh.setColorSchemeResources(R.color.cars_primary, R.color.cars_green);
            swipeRefresh.setOnRefreshListener(new SwipeRefreshLayout.OnRefreshListener() {
                @Override
                public void onRefresh() {
                    loadCars();
                }
            });
        }

        View btnNotifications = findViewById(R.id.btnNotifications);
        if (btnNotifications != null) {
            btnNotifications.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    startActivity(new Intent(MainActivity.this, NotificationsActivity.class));
                }
            });
        }

        View btnMenu = findViewById(R.id.btnMenu);
        if (btnMenu != null) {
            btnMenu.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    startActivity(new Intent(MainActivity.this, AccountActivity.class));
                }
            });
        }

        View btnHeroExplore = findViewById(R.id.btnHeroExplore);
        if (btnHeroExplore != null) {
            btnHeroExplore.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    startActivity(new Intent(MainActivity.this, SearchActivity.class));
                }
            });
        }

        View btnViewAllCars = findViewById(R.id.btnViewAllCars);
        if (btnViewAllCars != null) {
            btnViewAllCars.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    startActivity(new Intent(MainActivity.this, SearchActivity.class));
                }
            });
        }
    }

    private void setupServiceButtons() {
        // 1. سيارات مستعملة
        findViewById(R.id.btnCatUsed).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openSearchCategory("USED");
            }
        });

        // 2. سيارات جديدة
        findViewById(R.id.btnCatNew).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openSearchCategory("NEW");
            }
        });

        // 3. قطع غيار
        findViewById(R.id.btnCatParts).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(MainActivity.this, "قسم قطع الغيار والإكسسوارات قريباً", Toast.LENGTH_SHORT).show();
            }
        });

        // 4. معارض السيارات
        findViewById(R.id.btnCatShowrooms).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openSearchCategory("SHOWROOMS");
            }
        });

        // 5. الموردين والتجار
        findViewById(R.id.btnCatDealers).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(MainActivity.this, "قائمة الموردين والتجار المعتمدين", Toast.LENGTH_SHORT).show();
            }
        });

        // 6. عروض خاصة
        findViewById(R.id.btnCatOffers).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openSearchCategory("OFFERS");
            }
        });
    }

    private void openSearchCategory(String cat) {
        Intent intent = new Intent(this, SearchActivity.class);
        intent.putExtra("category", cat);
        startActivity(intent);
    }

    private void setupBottomNav() {
        findViewById(R.id.navHome).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                rvCars.smoothScrollToPosition(0);
            }
        });

        findViewById(R.id.navSearch).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(MainActivity.this, SearchActivity.class));
            }
        });

        findViewById(R.id.navAdd).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(MainActivity.this, AddCarActivity.class));
            }
        });

        findViewById(R.id.navChats).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(MainActivity.this, "المحادثات المباشرة مع البائعين", Toast.LENGTH_SHORT).show();
            }
        });

        findViewById(R.id.navAccount).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(MainActivity.this, AccountActivity.class));
            }
        });
    }

    private void loadCars() {
        if (swipeRefresh != null) swipeRefresh.setRefreshing(true);

        ApiClient.get("", new ApiClient.Callback() {
            @Override
            public void onSuccess(JSONObject response) {
                if (swipeRefresh != null) swipeRefresh.setRefreshing(false);
                carList.clear();
                JSONArray data = response.optJSONArray("data");
                if (data != null) {
                    for (int i = 0; i < data.length(); i++) {
                        CarItem item = CarItem.fromJson(data.optJSONObject(i));
                        if (item != null) carList.add(item);
                    }
                }
                if (carList.isEmpty()) {
                    loadOfflineFallback();
                }
                carAdapter.notifyDataSetChanged();
            }

            @Override
            public void onError(String message) {
                if (swipeRefresh != null) swipeRefresh.setRefreshing(false);
                if (carList.isEmpty()) {
                    loadOfflineFallback();
                }
            }
        });
    }

    private void loadOfflineFallback() {
        carList.clear();
        try {
            JSONObject c1 = new JSONObject();
            c1.put("id", "c1");
            c1.put("title", "تويوتا لاندكروزر 2022");
            c1.put("priceSdg", 125000000);
            c1.put("city", "الخرطوم");
            c1.put("transmission", "أوتوماتيك");
            c1.put("isFeatured", true);
            c1.put("mainImage", "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=800&q=80");
            carList.add(CarItem.fromJson(c1));

            JSONObject c2 = new JSONObject();
            c2.put("id", "c2");
            c2.put("title", "تويوتا كامري 2020");
            c2.put("priceSdg", 85000000);
            c2.put("city", "بورتسودان");
            c2.put("transmission", "أوتوماتيك");
            c2.put("isFeatured", true);
            c2.put("mainImage", "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80");
            carList.add(CarItem.fromJson(c2));

            JSONObject c3 = new JSONObject();
            c3.put("id", "c3");
            c3.put("title", "هيونداي توسان 2021");
            c3.put("priceSdg", 75000000);
            c3.put("city", "عطبرة");
            c3.put("transmission", "أوتوماتيك");
            c3.put("isFeatured", false);
            c3.put("mainImage", "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80");
            carList.add(CarItem.fromJson(c3));
        } catch (Exception ignored) {}
        carAdapter.notifyDataSetChanged();
    }
}
