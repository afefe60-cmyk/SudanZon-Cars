package com.sudanzon.cars.model;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class CarItem implements Serializable {
    private String id;
    private String title;
    private String brand;
    private String model;
    private int year;
    private double priceSdg;
    private double priceUsd;
    private int mileage;
    private String transmission;
    private String engineSize;
    private String customsStatus;
    private String licenseStatus;
    private String city;
    private String description;
    private String mainImageUrl;
    private List<String> images = new ArrayList<>();
    private boolean isFeatured;
    private double rating;
    private int reviewsCount;
    private String sellerName;
    private String sellerPhone;
    private String sellerWhatsapp;
    private boolean isVerifiedSeller;

    public CarItem() {}

    public static CarItem fromJson(JSONObject obj) {
        if (obj == null) return null;
        CarItem item = new CarItem();
        item.id = obj.optString("id", "");
        item.title = obj.optString("title", "سيارة");
        item.brand = obj.optString("brand", "تويوتا");
        item.model = obj.optString("model", "");
        item.year = obj.optInt("year", 2022);
        item.priceSdg = obj.optDouble("priceSdg", 0);
        item.priceUsd = obj.optDouble("priceUsd", 0);
        item.mileage = obj.optInt("mileage", 0);
        item.transmission = obj.optString("transmission", "أوتوماتيك");
        item.engineSize = obj.optString("engineSize", "4 سلندر");
        item.customsStatus = obj.optString("customsStatus", "مجمرك");
        item.licenseStatus = obj.optString("licenseStatus", "مرخص ساري");
        item.city = obj.optString("city", "الخرطوم");
        item.description = obj.optString("description", "");
        item.mainImageUrl = obj.optString("mainImage", "");
        item.isFeatured = obj.optBoolean("isFeatured", false);
        item.rating = obj.optDouble("rating", 4.8);
        item.reviewsCount = obj.optInt("reviewsCount", 124);
        item.sellerName = obj.optString("sellerName", "معرض النخبة للسيارات");
        item.sellerPhone = obj.optString("sellerPhone", "+249912345678");
        item.sellerWhatsapp = obj.optString("sellerWhatsapp", "249912345678");
        item.isVerifiedSeller = obj.optBoolean("isVerifiedSeller", true);

        // Images array
        Object rawImages = obj.opt("images");
        if (rawImages instanceof JSONArray) {
            JSONArray arr = (JSONArray) rawImages;
            for (int i = 0; i < arr.length(); i++) {
                item.images.add(arr.optString(i));
            }
        } else if (rawImages instanceof String) {
            try {
                JSONArray arr = new JSONArray((String) rawImages);
                for (int i = 0; i < arr.length(); i++) {
                    item.images.add(arr.optString(i));
                }
            } catch (Exception ignored) {}
        }

        if (item.images.isEmpty() && !item.mainImageUrl.isEmpty()) {
            item.images.add(item.mainImageUrl);
        }

        return item;
    }

    public String getId() { return id; }
    public String getTitle() { return title; }
    public String getBrand() { return brand; }
    public String getModel() { return model; }
    public int getYear() { return year; }
    public double getPriceSdg() { return priceSdg; }
    public double getPriceUsd() { return priceUsd; }
    public int getMileage() { return mileage; }
    public String getTransmission() { return transmission; }
    public String getEngineSize() { return engineSize; }
    public String getCustomsStatus() { return customsStatus; }
    public String getLicenseStatus() { return licenseStatus; }
    public String getCity() { return city; }
    public String getDescription() { return description; }
    public String getMainImageUrl() { return mainImageUrl; }
    public List<String> getImages() { return images; }
    public boolean isFeatured() { return isFeatured; }
    public double getRating() { return rating; }
    public int getReviewsCount() { return reviewsCount; }
    public String getSellerName() { return sellerName; }
    public String getSellerPhone() { return sellerPhone; }
    public String getSellerWhatsapp() { return sellerWhatsapp; }
    public boolean isVerifiedSeller() { return isVerifiedSeller; }
}
