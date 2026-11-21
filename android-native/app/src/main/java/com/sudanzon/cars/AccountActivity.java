package com.sudanzon.cars;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.sudanzon.cars.api.SessionManager;
import com.sudanzon.cars.ui.NavigationHelper;

public class AccountActivity extends AppCompatActivity {

    private SessionManager sessionManager;
    private TextView txtName, txtBadge, txtLogoutLabel;
    private Button btnAction;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_account);

        sessionManager = new SessionManager(this);

        txtName = findViewById(R.id.txtAccountName);
        txtBadge = findViewById(R.id.txtAccountBadge);
        txtLogoutLabel = findViewById(R.id.txtLogoutLabel);
        btnAction = findViewById(R.id.btnAccountAction);

        findViewById(R.id.btnAccountBack).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });

        findViewById(R.id.btnAccountSettings).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(AccountActivity.this, "إعدادات الحساب والإشعارات", Toast.LENGTH_SHORT).show();
            }
        });

        findViewById(R.id.menuMyCars).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(AccountActivity.this, SearchActivity.class));
            }
        });

        findViewById(R.id.menuChats).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(AccountActivity.this, ChatsActivity.class));
            }
        });

        findViewById(R.id.menuFavorites).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(AccountActivity.this, "قائمة السيارات المفضلة", Toast.LENGTH_SHORT).show();
            }
        });

        findViewById(R.id.menuNotifications).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(AccountActivity.this, NotificationsActivity.class));
            }
        });

        findViewById(R.id.menuPrivacyPolicy).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(AccountActivity.this, PrivacyPolicyActivity.class));
            }
        });

        findViewById(R.id.menuLogout).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (sessionManager.isLoggedIn()) {
                    sessionManager.logout();
                    Toast.makeText(AccountActivity.this, "تم تسجيل الخروج بنجاح", Toast.LENGTH_SHORT).show();
                    refreshState();
                } else {
                    startActivity(new Intent(AccountActivity.this, LoginActivity.class));
                }
            }
        });

        btnAction.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (sessionManager.isLoggedIn()) {
                    Toast.makeText(AccountActivity.this, "تم تحديث الملف الشخصي", Toast.LENGTH_SHORT).show();
                } else {
                    startActivity(new Intent(AccountActivity.this, LoginActivity.class));
                }
            }
        });

        NavigationHelper.setupBottomNav(this, R.id.navAccount);
    }

    @Override
    protected void onResume() {
        super.onResume();
        NavigationHelper.setupBottomNav(this, R.id.navAccount);
        refreshState();
    }

    private void refreshState() {
        if (sessionManager.isLoggedIn()) {
            txtName.setText(sessionManager.getUserName());
            txtBadge.setText("✔ عضو موثق (" + sessionManager.getUserPhone() + ")");
            btnAction.setText("إدارة بياناتي");
            txtLogoutLabel.setText("🚪  تسجيل الخروج");
        } else {
            txtName.setText("زائر كريم");
            txtBadge.setText("انضم إلى سودان زون للسيارات");
            btnAction.setText("تسجيل الدخول / فتح حساب");
            txtLogoutLabel.setText("🔑  تسجيل الدخول");
        }
    }
}
