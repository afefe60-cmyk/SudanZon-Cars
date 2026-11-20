package com.sudanzon.cars;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

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

public class SellerProfileActivity extends AppCompatActivity {

    private String sellerName = "معرض النخبة للسيارات";
    private String sellerPhone = "+249912345678";
    private String sellerWhatsapp = "249912345678";

    private TextView txtSellerName, txtSellerBadge, txtSellerMeta, txtSellerCarsCount;
    private RecyclerView rvSellerCars;
    private CarAdapter sellerCarsAdapter;
    private final List<CarItem> sellerCarsList = new ArrayList<>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_seller_profile);

        if (getIntent().hasExtra("sellerName") && getIntent().getStringExtra("sellerName") != null) {
            sellerName = getIntent().getStringExtra("sellerName");
        }
        if (getIntent().hasExtra("sellerPhone") && getIntent().getStringExtra("sellerPhone") != null) {
            sellerPhone = getIntent().getStringExtra("sellerPhone");
        }
        if (getIntent().hasExtra("sellerWhatsapp") && getIntent().getStringExtra("sellerWhatsapp") != null) {
            sellerWhatsapp = getIntent().getStringExtra("sellerWhatsapp");
        } else {
            sellerWhatsapp = sellerPhone.replace("+", "").replace(" ", "");
        }

        txtSellerName = findViewById(R.id.txtSellerName);
        txtSellerBadge = findViewById(R.id.txtSellerBadge);
        txtSellerMeta = findViewById(R.id.txtSellerMeta);
        txtSellerCarsCount = findViewById(R.id.txtSellerCarsCount);
        rvSellerCars = findViewById(R.id.rvSellerCars);

        txtSellerName.setText(sellerName);
        txtSellerMeta.setText("هاتف: " + sellerPhone + " • عضو موثق في سودان زون");

        rvSellerCars.setLayoutManager(new LinearLayoutManager(this));
        sellerCarsAdapter = new CarAdapter(this, sellerCarsList);
        rvSellerCars.setAdapter(sellerCarsAdapter);

        // Back button
        findViewById(R.id.btnSellerProfileBack).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });

        // Share Seller Profile
        findViewById(R.id.btnSellerProfileShare).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent shareIntent = new Intent(Intent.ACTION_SEND);
                shareIntent.setType("text/plain");
                shareIntent.putExtra(Intent.EXTRA_SUBJECT, sellerName);
                shareIntent.putExtra(Intent.EXTRA_TEXT, "شاهد معرض وإعلانات " + sellerName + " على منصة سودان زون للسيارات\nتواصل: " + sellerPhone);
                startActivity(Intent.createChooser(shareIntent, "مشاركة ملف المعلن"));
            }
        });

        // Call Seller
        findViewById(R.id.btnSellerCall).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(Intent.ACTION_DIAL, Uri.parse("tel:" + sellerPhone)));
            }
        });

        // WhatsApp Seller
        findViewById(R.id.btnSellerWhatsapp).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try {
                    String cleanPhone = sellerWhatsapp.replace("+", "").replace(" ", "");
                    String url = "https://api.whatsapp.com/send?phone=" + cleanPhone + "&text=" + Uri.encode("السلام عليكم " + sellerName + "، تواصلت معك عبر تطبيق سودان زون للسيارات.");
                    startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(url)));
                } catch (Exception e) {
                    Toast.makeText(SellerProfileActivity.this, "تطبيق واتساب غير مثبت على الجهاز", Toast.LENGTH_SHORT).show();
                }
            }
        });

        // In-App Chat
        findViewById(R.id.btnSellerChat).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent chatIntent = new Intent(SellerProfileActivity.this, ChatConversationActivity.class);
                chatIntent.putExtra("sellerName", sellerName);
                chatIntent.putExtra("sellerPhone", sellerPhone);
                chatIntent.putExtra("carTitle", "استفسار مباشر مع " + sellerName);
                startActivity(chatIntent);
            }
        });

        loadSellerCars();
    }

    @Override
    protected void onResume() {
        super.onResume();
        NavigationHelper.setupBottomNav(this, 0); // shows unified bottom nav
    }

    private void loadSellerCars() {
        ApiClient.get("", new ApiClient.Callback() {
            @Override
            public void onSuccess(JSONObject response) {
                sellerCarsList.clear();
                JSONArray data = response.optJSONArray("data");
                if (data != null) {
                    for (int i = 0; i < data.length(); i++) {
                        CarItem c = CarItem.fromJson(data.optJSONObject(i));
                        if (c != null) {
                            // Match by seller phone or seller name, or show if matches
                            if (c.getSellerName() != null && c.getSellerName().equalsIgnoreCase(sellerName)) {
                                sellerCarsList.add(c);
                            } else if (c.getSellerPhone() != null && c.getSellerPhone().equals(sellerPhone)) {
                                sellerCarsList.add(c);
                            }
                        }
                    }
                }

                // If no specific match found from server, fallback to all cars or sample
                if (sellerCarsList.isEmpty()) {
                    loadFallback();
                }

                sellerCarsAdapter.notifyDataSetChanged();
                txtSellerCarsCount.setText(sellerCarsList.size() + " سيارة معروضة");
            }

            @Override
            public void onError(String message) {
                loadFallback();
                sellerCarsAdapter.notifyDataSetChanged();
                txtSellerCarsCount.setText(sellerCarsList.size() + " سيارة معروضة");
            }
        });
    }

    private void loadFallback() {
        sellerCarsList.add(CarItem.create(
                "c1", "تويوتا لاندكروزر VXR 2023", 2023, 145000000L,
                "الخرطوم", sellerName, sellerPhone, sellerWhatsapp,
                "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?w=800&q=80"
        ));
        sellerCarsList.add(CarItem.create(
                "c2", "تويوتا برادو TXL 2022", 2022, 115000000L,
                "الخرطوم", sellerName, sellerPhone, sellerWhatsapp,
                "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80"
        ));
    }
}
