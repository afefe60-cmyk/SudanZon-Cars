package com.sudanzon.cars;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.sudanzon.cars.ui.NavigationHelper;

public class ChatsActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_chats);

        View item1 = findViewById(R.id.chatItem1);
        if (item1 != null) {
            item1.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    openChat("معرض النخبة للسيارات", "تويوتا لاندكروزر VXR 2023", "+249912345678");
                }
            });
        }

        View item2 = findViewById(R.id.chatItem2);
        if (item2 != null) {
            item2.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    openChat("شركة الأفق للسيارات", "مرسيدس بنز E200", "+249923456789");
                }
            });
        }

        View btnRefresh = findViewById(R.id.btnChatsRefresh);
        if (btnRefresh != null) {
            btnRefresh.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    Toast.makeText(ChatsActivity.this, "تم تحديث صندوق المحادثات", Toast.LENGTH_SHORT).show();
                }
            });
        }

        NavigationHelper.setupBottomNav(this, R.id.navChats);
    }

    @Override
    protected void onResume() {
        super.onResume();
        NavigationHelper.setupBottomNav(this, R.id.navChats);
    }

    private void openChat(String sellerName, String carTitle, String sellerPhone) {
        Intent intent = new Intent(this, ChatConversationActivity.class);
        intent.putExtra("sellerName", sellerName);
        intent.putExtra("carTitle", carTitle);
        intent.putExtra("sellerPhone", sellerPhone);
        startActivity(intent);
    }
}
