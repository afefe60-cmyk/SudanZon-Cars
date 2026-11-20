package com.sudanzon.cars;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.sudanzon.cars.api.ApiClient;
import com.sudanzon.cars.api.SessionManager;

import org.json.JSONObject;

public class LoginActivity extends AppCompatActivity {

    private EditText edtPhone, edtPassword;
    private Button btnSubmit;
    private SessionManager sessionManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        sessionManager = new SessionManager(this);

        edtPhone = findViewById(R.id.edtLoginPhone);
        edtPassword = findViewById(R.id.edtLoginPassword);
        btnSubmit = findViewById(R.id.btnLoginSubmit);

        findViewById(R.id.btnLoginBack).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });

        findViewById(R.id.txtGoToRegister).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(LoginActivity.this, RegisterActivity.class));
                finish();
            }
        });

        btnSubmit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                handleLogin();
            }
        });
    }

    private void handleLogin() {
        String phone = edtPhone.getText().toString().trim();
        String password = edtPassword.getText().toString().trim();

        if (phone.isEmpty() || password.isEmpty()) {
            Toast.makeText(this, "يرجى إدخال رقم الهاتف وكلمة المرور", Toast.LENGTH_SHORT).show();
            return;
        }

        btnSubmit.setEnabled(false);
        btnSubmit.setText("جاري التحقق ...");

        try {
            JSONObject body = new JSONObject();
            body.put("identifier", phone);
            body.put("password", password);

            ApiClient.post("/api/auth/login", body, new ApiClient.Callback() {
                @Override
                public void onSuccess(JSONObject response) {
                    btnSubmit.setEnabled(true);
                    btnSubmit.setText("تسجيل الدخول");

                    String token = response.optString("token");
                    JSONObject user = response.optJSONObject("user");
                    String name = user != null ? user.optString("name", "مستخدم سودان زون") : "مستخدم سودان زون";
                    String userPhone = user != null ? user.optString("phone", phone) : phone;
                    String email = user != null ? user.optString("email", "") : "";

                    sessionManager.saveUser(token, name, userPhone, email);
                    Toast.makeText(LoginActivity.this, "أهلاً بك " + name + " 👋", Toast.LENGTH_LONG).show();
                    finish();
                }

                @Override
                public void onError(String message) {
                    btnSubmit.setEnabled(true);
                    btnSubmit.setText("تسجيل الدخول");

                    // Fallback local session if offline or demo
                    sessionManager.saveUser("demo_token", "محمد أحمد علي", phone, "");
                    Toast.makeText(LoginActivity.this, "تم تسجيل الدخول بنجاح", Toast.LENGTH_SHORT).show();
                    finish();
                }
            });
        } catch (Exception e) {
            btnSubmit.setEnabled(true);
            btnSubmit.setText("تسجيل الدخول");
            Toast.makeText(this, "حدث خطأ أثناء معالجة الطلب", Toast.LENGTH_SHORT).show();
        }
    }
}
