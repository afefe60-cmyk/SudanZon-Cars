package com.sudanzon.cars.api;

import android.content.Context;
import android.content.SharedPreferences;

public class SessionManager {
    private static final String PREF_NAME = "SudanZonCarsSession";
    private static final String KEY_TOKEN = "jwt_token";
    private static final String KEY_USER_NAME = "user_name";
    private static final String KEY_USER_PHONE = "user_phone";
    private static final String KEY_USER_EMAIL = "user_email";
    private static final String KEY_IS_LOGGED_IN = "is_logged_in";

    private final SharedPreferences prefs;

    public SessionManager(Context context) {
        prefs = context.getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
    }

    public void saveUser(String token, String name, String phone, String email) {
        prefs.edit()
            .putString(KEY_TOKEN, token)
            .putString(KEY_USER_NAME, name)
            .putString(KEY_USER_PHONE, phone)
            .putString(KEY_USER_EMAIL, email)
            .putBoolean(KEY_IS_LOGGED_IN, true)
            .apply();
        ApiClient.setAuthToken(token);
    }

    public boolean isLoggedIn() {
        return prefs.getBoolean(KEY_IS_LOGGED_IN, false);
    }

    public String getToken() {
        return prefs.getString(KEY_TOKEN, "");
    }

    public String getUserName() {
        return prefs.getString(KEY_USER_NAME, "محمد أحمد علي");
    }

    public String getUserPhone() {
        return prefs.getString(KEY_USER_PHONE, "0912345678");
    }

    public String getUserEmail() {
        return prefs.getString(KEY_USER_EMAIL, "");
    }

    public void logout() {
        prefs.edit().clear().apply();
        ApiClient.setAuthToken(null);
    }
}
