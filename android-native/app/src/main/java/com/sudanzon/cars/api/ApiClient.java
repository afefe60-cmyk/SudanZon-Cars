package com.sudanzon.cars.api;

import android.os.Handler;
import android.os.Looper;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public final class ApiClient {
    // Official live production API for SudanZon digital ecosystem
    public static final String PROD_SERVER = "https://api.sudanzon.com";
    public static final String LOCAL_SERVER = "http://10.0.2.2:3001";

    private static String currentServer = PROD_SERVER;
    private static String authToken = null;

    private static final ExecutorService EXECUTOR = Executors.newCachedThreadPool();
    private static final Handler MAIN = new Handler(Looper.getMainLooper());

    public interface Callback {
        void onSuccess(JSONObject response);
        void onError(String message);
    }

    public static void setAuthToken(String token) {
        authToken = token;
    }

    public static void setUseLocal(boolean useLocal) {
        currentServer = useLocal ? LOCAL_SERVER : PROD_SERVER;
    }

    private static String resolveUrl(String endpoint) {
        if (endpoint == null || endpoint.isEmpty()) {
            return currentServer + "/api/cars";
        }
        if (endpoint.startsWith("http://") || endpoint.startsWith("https://")) {
            return endpoint;
        }
        if (endpoint.startsWith("/api/")) {
            return currentServer + endpoint;
        }
        if (endpoint.startsWith("/")) {
            return currentServer + "/api/cars" + endpoint;
        }
        return currentServer + "/api/cars/" + endpoint;
    }

    public static void get(final String endpoint, final Callback callback) {
        EXECUTOR.execute(new Runnable() {
            @Override
            public void run() {
                HttpURLConnection conn = null;
                try {
                    String fullUrl = resolveUrl(endpoint);
                    URL url = new URL(fullUrl);
                    conn = (HttpURLConnection) url.openConnection();
                    conn.setRequestMethod("GET");
                    conn.setConnectTimeout(8000);
                    conn.setReadTimeout(10000);
                    conn.setRequestProperty("Accept", "application/json");

                    if (authToken != null && !authToken.isEmpty()) {
                        conn.setRequestProperty("Authorization", "Bearer " + authToken);
                    }

                    int code = conn.getResponseCode();
                    InputStream is = (code >= 200 && code < 300) ? conn.getInputStream() : conn.getErrorStream();
                    BufferedReader reader = new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8));
                    StringBuilder sb = new StringBuilder();
                    String line;
                    while ((line = reader.readLine()) != null) {
                        sb.append(line);
                    }
                    reader.close();

                    final JSONObject json = new JSONObject(sb.toString());
                    MAIN.post(new Runnable() {
                        @Override
                        public void run() {
                            if (callback != null) callback.onSuccess(json);
                        }
                    });
                } catch (final Exception e) {
                    MAIN.post(new Runnable() {
                        @Override
                        public void run() {
                            if (callback != null) callback.onError(e != null ? e.getMessage() : "خطأ في الاتصال");
                        }
                    });
                } finally {
                    if (conn != null) conn.disconnect();
                }
            }
        });
    }

    public static void post(final String endpoint, final JSONObject body, final Callback callback) {
        EXECUTOR.execute(new Runnable() {
            @Override
            public void run() {
                HttpURLConnection conn = null;
                try {
                    String fullUrl = resolveUrl(endpoint);
                    URL url = new URL(fullUrl);
                    conn = (HttpURLConnection) url.openConnection();
                    conn.setRequestMethod("POST");
                    conn.setConnectTimeout(8000);
                    conn.setReadTimeout(12000);
                    conn.setDoOutput(true);
                    conn.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
                    conn.setRequestProperty("Accept", "application/json");

                    if (authToken != null && !authToken.isEmpty()) {
                        conn.setRequestProperty("Authorization", "Bearer " + authToken);
                    }

                    if (body != null) {
                        OutputStream os = conn.getOutputStream();
                        os.write(body.toString().getBytes(StandardCharsets.UTF_8));
                        os.flush();
                        os.close();
                    }

                    int code = conn.getResponseCode();
                    InputStream is = (code >= 200 && code < 300) ? conn.getInputStream() : conn.getErrorStream();
                    BufferedReader reader = new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8));
                    StringBuilder sb = new StringBuilder();
                    String line;
                    while ((line = reader.readLine()) != null) {
                        sb.append(line);
                    }
                    reader.close();

                    final JSONObject json = new JSONObject(sb.toString());
                    MAIN.post(new Runnable() {
                        @Override
                        public void run() {
                            if (callback != null) callback.onSuccess(json);
                        }
                    });
                } catch (final Exception e) {
                    MAIN.post(new Runnable() {
                        @Override
                        public void run() {
                            if (callback != null) callback.onError(e != null ? e.getMessage() : "خطأ في الاتصال");
                        }
                    });
                } finally {
                    if (conn != null) conn.disconnect();
                }
            }
        });
    }
}
