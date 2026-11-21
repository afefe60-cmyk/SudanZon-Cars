package com.sudanzon.cars.ui;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Typeface;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.core.content.ContextCompat;

import com.sudanzon.cars.AccountActivity;
import com.sudanzon.cars.AddCarActivity;
import com.sudanzon.cars.ChatsActivity;
import com.sudanzon.cars.MainActivity;
import com.sudanzon.cars.R;
import com.sudanzon.cars.SearchActivity;

public class NavigationHelper {

    public static void setupBottomNav(final Activity activity, final int currentTabId) {
        View bottomNav = activity.findViewById(R.id.bottomNav);
        if (bottomNav == null) return;

        // Bring bottom nav to front so no other scroll/recycler view overlays it
        bottomNav.bringToFront();

        // Reset all tabs to muted style
        setTabStyle(activity, R.id.navHomeIcon, R.id.navHomeText, false);
        setTabStyle(activity, R.id.navSearchIcon, R.id.navSearchText, false);
        setTabStyle(activity, R.id.navChatsIcon, R.id.navChatsText, false);
        setTabStyle(activity, R.id.navAccountIcon, R.id.navAccountText, false);

        // Highlight active tab
        if (currentTabId == R.id.navHome) {
            setTabStyle(activity, R.id.navHomeIcon, R.id.navHomeText, true);
        } else if (currentTabId == R.id.navSearch) {
            setTabStyle(activity, R.id.navSearchIcon, R.id.navSearchText, true);
        } else if (currentTabId == R.id.navChats) {
            setTabStyle(activity, R.id.navChatsIcon, R.id.navChatsText, true);
        } else if (currentTabId == R.id.navAccount) {
            setTabStyle(activity, R.id.navAccountIcon, R.id.navAccountText, true);
        }

        // 1. Home
        View btnHome = activity.findViewById(R.id.navHome);
        if (btnHome != null) {
            btnHome.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    if (activity instanceof MainActivity) {
                        ((MainActivity) activity).scrollToTop();
                    } else {
                        navigateTo(activity, MainActivity.class);
                    }
                }
            });
        }

        // 2. Search
        View btnSearch = activity.findViewById(R.id.navSearch);
        if (btnSearch != null) {
            btnSearch.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    if (!(activity instanceof SearchActivity)) {
                        navigateTo(activity, SearchActivity.class);
                    }
                }
            });
        }

        // 3. Add Car (Center CTA)
        View btnAdd = activity.findViewById(R.id.navAdd);
        if (btnAdd != null) {
            btnAdd.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    if (!(activity instanceof AddCarActivity)) {
                        navigateTo(activity, AddCarActivity.class);
                    }
                }
            });
        }

        // 4. Chats
        View btnChats = activity.findViewById(R.id.navChats);
        if (btnChats != null) {
            btnChats.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    if (!(activity instanceof ChatsActivity)) {
                        navigateTo(activity, ChatsActivity.class);
                    }
                }
            });
        }

        // 5. Account
        View btnAccount = activity.findViewById(R.id.navAccount);
        if (btnAccount != null) {
            btnAccount.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    if (!(activity instanceof AccountActivity)) {
                        navigateTo(activity, AccountActivity.class);
                    }
                }
            });
        }
    }

    private static void navigateTo(Activity current, Class<?> targetClass) {
        if (current.getClass().equals(targetClass)) return;

        Intent intent = new Intent(current, targetClass);
        intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        current.startActivity(intent);
        current.overridePendingTransition(0, 0);

        if (!(current instanceof MainActivity)) {
            current.finish();
        }
    }

    private static void setTabStyle(Activity activity, int iconId, int textId, boolean isActive) {
        ImageView icon = activity.findViewById(iconId);
        TextView text = activity.findViewById(textId);
        int color = ContextCompat.getColor(activity, isActive ? R.color.cars_primary : R.color.cars_text_muted);
        if (icon != null) {
            icon.setColorFilter(color);
        }
        if (text != null) {
            text.setTextColor(color);
            text.setTypeface(null, isActive ? Typeface.BOLD : Typeface.NORMAL);
        }
    }
}
