package com.sudanzon.cars.ui;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Handler;
import android.os.Looper;
import android.util.LruCache;
import android.widget.ImageView;

import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public final class ImageLoader {
    private static final ExecutorService EXECUTOR = Executors.newFixedThreadPool(4);
    private static final Handler MAIN = new Handler(Looper.getMainLooper());

    private static final LruCache<String, Bitmap> CACHE = new LruCache<String, Bitmap>(32 * 1024 * 1024) {
        @Override
        protected int sizeOf(String key, Bitmap bitmap) {
            return bitmap.getByteCount();
        }
    };

    private ImageLoader() {}

    public static void load(final String urlString, final ImageView imageView) {
        if (imageView == null) return;
        if (urlString == null || urlString.trim().isEmpty()) {
            return;
        }

        final String url = urlString.trim();

        // Check memory cache
        Bitmap cached = CACHE.get(url);
        if (cached != null) {
            imageView.setImageBitmap(cached);
            return;
        }

        imageView.setTag(url);

        EXECUTOR.execute(new Runnable() {
            @Override
            public void run() {
                Bitmap bitmap = null;
                HttpURLConnection conn = null;
                try {
                    URL u = new URL(url);
                    conn = (HttpURLConnection) u.openConnection();
                    conn.setConnectTimeout(8000);
                    conn.setReadTimeout(10000);
                    conn.setDoInput(true);
                    conn.connect();

                    if (conn.getResponseCode() == 200) {
                        InputStream input = conn.getInputStream();
                        bitmap = BitmapFactory.decodeStream(input);
                        input.close();
                    }
                } catch (Exception ignored) {
                } finally {
                    if (conn != null) conn.disconnect();
                }

                final Bitmap result = bitmap;
                if (result != null) {
                    CACHE.put(url, result);
                    MAIN.post(new Runnable() {
                        @Override
                        public void run() {
                            if (url.equals(imageView.getTag())) {
                                imageView.setImageBitmap(result);
                            }
                        }
                    });
                }
            }
        });
    }
}
