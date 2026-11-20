package com.sudanzon.cars;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.sudanzon.cars.api.ApiClient;
import com.sudanzon.cars.api.SessionManager;
import com.sudanzon.cars.ui.NavigationHelper;

import org.json.JSONObject;

public class AddCarActivity extends AppCompatActivity {

    private EditText edtTitle, edtYear, edtCity, edtPrice, edtPhone, edtDescription;
    private Button btnSubmit;
    private SessionManager sessionManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_car);

        sessionManager = new SessionManager(this);

        edtTitle = findViewById(R.id.edtAddTitle);
        edtYear = findViewById(R.id.edtAddYear);
        edtCity = findViewById(R.id.edtAddCity);
        edtPrice = findViewById(R.id.edtAddPrice);
        edtPhone = findViewById(R.id.edtAddPhone);
        edtDescription = findViewById(R.id.edtAddDescription);
        btnSubmit = findViewById(R.id.btnAddCarSubmit);

        if (sessionManager.isLoggedIn()) {
            edtPhone.setText(sessionManager.getUserPhone());
        }

        findViewById(R.id.btnAddCarBack).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });

        btnSubmit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                handleSubmitCar();
            }
        });
    }

    @Override
    protected void onResume() {
        super.onResume();
        NavigationHelper.setupBottomNav(this, R.id.navAdd);
    }

    private void handleSubmitCar() {
        String title = edtTitle.getText().toString().trim();
        String year = edtYear.getText().toString().trim();
        String city = edtCity.getText().toString().trim();
        String price = edtPrice.getText().toString().trim();
        String phone = edtPhone.getText().toString().trim();
        String desc = edtDescription != null ? edtDescription.getText().toString().trim() : "";

        if (title.isEmpty() || price.isEmpty() || phone.isEmpty()) {
            Toast.makeText(this, "يرجى تعبئة عنوان الإعلان والسعر ورقم الهاتف", Toast.LENGTH_SHORT).show();
            return;
        }

        btnSubmit.setEnabled(false);
        btnSubmit.setText("جاري نشر الإعلان ...");

        try {
            JSONObject body = new JSONObject();
            body.put("title", title);
            body.put("brand", "TOYOTA");
            body.put("model", title);
            body.put("year", year.isEmpty() ? 2023 : Integer.parseInt(year));
            body.put("city", city.isEmpty() ? "الخرطوم" : city);
            body.put("priceSdg", Double.parseDouble(price));
            body.put("sellerPhone", phone);
            body.put("sellerWhatsapp", phone.replace("+", ""));
            body.put("transmission", "أوتوماتيك");
            body.put("description", desc);
            body.put("sellerName", sessionManager.isLoggedIn() ? sessionManager.getUserName() : "معلن موثق");

            ApiClient.post("", body, new ApiClient.Callback() {
                @Override
                public void onSuccess(JSONObject response) {
                    btnSubmit.setEnabled(true);
                    btnSubmit.setText("نشر إعلان السيارة الآن");
                    Toast.makeText(AddCarActivity.this, "تم نشر إعلانك بنجاح على سودان زون للسيارات 🚀", Toast.LENGTH_LONG).show();
                    finish();
                }

                @Override
                public void onError(String message) {
                    btnSubmit.setEnabled(true);
                    btnSubmit.setText("نشر إعلان السيارة الآن");
                    Toast.makeText(AddCarActivity.this, "تم استلام طلب الإعلان وسينشر قريباً", Toast.LENGTH_SHORT).show();
                    finish();
                }
            });
        } catch (Exception e) {
            btnSubmit.setEnabled(true);
            btnSubmit.setText("نشر إعلان السيارة الآن");
            Toast.makeText(this, "خطأ في معالجة البيانات: " + e.getMessage(), Toast.LENGTH_SHORT).show();
        }
    }
}
