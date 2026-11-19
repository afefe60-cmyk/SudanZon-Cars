package com.sudanzon.cars;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.sudanzon.cars.model.CarItem;
import com.sudanzon.cars.ui.ImageLoader;

import java.text.DecimalFormat;

public class CarDetailActivity extends AppCompatActivity {

    private CarItem car;
    private final DecimalFormat priceFormatter = new DecimalFormat("#,###");

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_car_detail);

        car = (CarItem) getIntent().getSerializableExtra("car");
        if (car == null) {
            Toast.makeText(this, "تعذر تحميل بيانات السيارة", Toast.LENGTH_SHORT).show();
            finish();
            return;
        }

        bindCarData();
        setupActions();
    }

    private void bindCarData() {
        ImageView imgCarDetail = findViewById(R.id.imgCarDetail);
        ImageLoader.load(car.getMainImageUrl(), imgCarDetail);

        TextView txtTitle = findViewById(R.id.txtTitle);
        txtTitle.setText(car.getTitle());

        TextView txtRating = findViewById(R.id.txtRating);
        txtRating.setText("★ " + car.getRating() + " (" + car.getReviewsCount() + " تقييم)");

        TextView txtPrice = findViewById(R.id.txtPrice);
        txtPrice.setText(priceFormatter.format(car.getPriceSdg()) + " ج.س");

        TextView txtSpecYear = findViewById(R.id.txtSpecYear);
        txtSpecYear.setText(String.valueOf(car.getYear()));

        TextView txtSpecMileage = findViewById(R.id.txtSpecMileage);
        txtSpecMileage.setText(priceFormatter.format(car.getMileage()) + " كم");

        TextView txtSpecTrans = findViewById(R.id.txtSpecTrans);
        txtSpecTrans.setText(car.getTransmission());

        TextView txtSpecEngine = findViewById(R.id.txtSpecEngine);
        txtSpecEngine.setText(car.getEngineSize());

        TextView txtDescription = findViewById(R.id.txtDescription);
        txtDescription.setText(car.getDescription().isEmpty() 
            ? "سيارة بحالة ممتازة، صيانة دورية، مواصفات عالية." 
            : car.getDescription());

        TextView txtSellerName = findViewById(R.id.txtSellerName);
        txtSellerName.setText(car.getSellerName());
    }

    private void setupActions() {
        // Back Button
        findViewById(R.id.btnBack).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });

        // Share Button
        findViewById(R.id.btnShare).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent shareIntent = new Intent(Intent.ACTION_SEND);
                shareIntent.setType("text/plain");
                shareIntent.putExtra(Intent.EXTRA_SUBJECT, car.getTitle());
                shareIntent.putExtra(Intent.EXTRA_TEXT, "شاهد سيارة " + car.getTitle() + " بسعر " + priceFormatter.format(car.getPriceSdg()) + " ج.س على تطبيق SudanZon Cars");
                startActivity(Intent.createChooser(shareIntent, "مشاركة الإعلان"));
            }
        });

        // Favorite Button
        final ImageView btnFavDetail = findViewById(R.id.btnFavDetail);
        btnFavDetail.setOnClickListener(new View.OnClickListener() {
            private boolean isFav = false;
            @Override
            public void onClick(View v) {
                isFav = !isFav;
                btnFavDetail.setImageResource(isFav ? android.R.drawable.btn_star_big_on : android.R.drawable.btn_star_big_off);
                Toast.makeText(CarDetailActivity.this, isFav ? "تم حفظ السيارة في المفضلة" : "تم الحذف من المفضلة", Toast.LENGTH_SHORT).show();
            }
        });

        // Call Button (Native Dialer Intent)
        findViewById(R.id.btnCall).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String phone = car.getSellerPhone();
                if (phone == null || phone.isEmpty()) phone = "+249912345678";
                Intent dialIntent = new Intent(Intent.ACTION_DIAL, Uri.parse("tel:" + phone));
                startActivity(dialIntent);
            }
        });

        // WhatsApp Button (Native WhatsApp Intent)
        findViewById(R.id.btnWhatsapp).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String whatsapp = car.getSellerWhatsapp();
                if (whatsapp == null || whatsapp.isEmpty()) whatsapp = "249912345678";
                whatsapp = whatsapp.replace("+", "").replace(" ", "");

                String message = "السلام عليكم، أنا مهتم بسيارة (" + car.getTitle() + ") المعروضة على SudanZon Cars بسعر " + priceFormatter.format(car.getPriceSdg()) + " ج.س. هل هي متوفرة؟";
                try {
                    String url = "https://api.whatsapp.com/send?phone=" + whatsapp + "&text=" + Uri.encode(message);
                    Intent waIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                    startActivity(waIntent);
                } catch (Exception e) {
                    Toast.makeText(CarDetailActivity.this, "تطبيق واتساب غير مثبت على الجهاز", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }
}
