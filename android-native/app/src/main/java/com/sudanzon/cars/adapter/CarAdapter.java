package com.sudanzon.cars.adapter;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.sudanzon.cars.CarDetailActivity;
import com.sudanzon.cars.R;
import com.sudanzon.cars.model.CarItem;
import com.sudanzon.cars.ui.ImageLoader;

import java.text.DecimalFormat;
import java.util.List;

public class CarAdapter extends RecyclerView.Adapter<CarAdapter.CarViewHolder> {

    private final Context context;
    private final List<CarItem> carList;
    private final DecimalFormat priceFormatter = new DecimalFormat("#,###");

    public CarAdapter(Context context, List<CarItem> carList) {
        this.context = context;
        this.carList = carList;
    }

    @NonNull
    @Override
    public CarViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.item_car_card, parent, false);
        return new CarViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull final CarViewHolder holder, int position) {
        final CarItem car = carList.get(position);

        holder.txtTitle.setText(car.getTitle());
        holder.txtPrice.setText(priceFormatter.format(car.getPriceSdg()) + " ج.س");
        holder.txtCity.setText("📍 " + car.getCity());
        holder.txtTransmission.setText(car.getTransmission());
        holder.txtRating.setText("★ " + car.getRating());

        holder.badgeFeatured.setVisibility(car.isFeatured() ? View.VISIBLE : View.GONE);

        // Load car photo
        ImageLoader.load(car.getMainImageUrl(), holder.imgCar);

        // Favorite toggle
        holder.btnFav.setOnClickListener(new View.OnClickListener() {
            private boolean isFav = false;
            @Override
            public void onClick(View v) {
                isFav = !isFav;
                holder.btnFav.setImageResource(isFav ? android.R.drawable.btn_star_big_on : android.R.drawable.btn_star_big_off);
                Toast.makeText(context, isFav ? "تمت الإضافة للمفضلة" : "تم الحذف من المفضلة", Toast.LENGTH_SHORT).show();
            }
        });

        // Click to view Car Detail Activity
        holder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(context, CarDetailActivity.class);
                intent.putExtra("car", car);
                context.startActivity(intent);
            }
        });
    }

    @Override
    public int getItemCount() {
        return carList != null ? carList.size() : 0;
    }

    static class CarViewHolder extends RecyclerView.ViewHolder {
        ImageView imgCar, btnFav;
        TextView txtTitle, txtPrice, txtCity, txtTransmission, txtRating, badgeFeatured;

        public CarViewHolder(@NonNull View itemView) {
            super(itemView);
            imgCar = itemView.findViewById(R.id.imgCar);
            btnFav = itemView.findViewById(R.id.btnFav);
            txtTitle = itemView.findViewById(R.id.txtCarTitle);
            txtPrice = itemView.findViewById(R.id.txtCarPrice);
            txtCity = itemView.findViewById(R.id.txtCity);
            txtTransmission = itemView.findViewById(R.id.txtTransmission);
            txtRating = itemView.findViewById(R.id.txtCarRating);
            badgeFeatured = itemView.findViewById(R.id.badgeFeatured);
        }
    }
}
