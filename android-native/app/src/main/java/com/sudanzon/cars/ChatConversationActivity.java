package com.sudanzon.cars;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

public class ChatConversationActivity extends AppCompatActivity {

    private String sellerName = "المعلن";
    private String carTitle = "السيارة المعروضة";
    private String sellerPhone = "+249912345678";

    private LinearLayout layoutMessagesList;
    private EditText edtChatMessage;
    private ScrollView scrollMessages;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_chat_conversation);

        if (getIntent().hasExtra("sellerName")) {
            sellerName = getIntent().getStringExtra("sellerName");
        }
        if (getIntent().hasExtra("carTitle")) {
            carTitle = getIntent().getStringExtra("carTitle");
        }
        if (getIntent().hasExtra("sellerPhone")) {
            sellerPhone = getIntent().getStringExtra("sellerPhone");
        }

        TextView txtSeller = findViewById(R.id.txtChatSellerName);
        TextView txtCarRef = findViewById(R.id.txtRefCarTitle);
        txtSeller.setText(sellerName);
        txtCarRef.setText(carTitle);

        layoutMessagesList = findViewById(R.id.layoutMessagesList);
        edtChatMessage = findViewById(R.id.edtChatMessage);
        scrollMessages = findViewById(R.id.scrollMessages);

        findViewById(R.id.btnChatBack).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });

        // Click seller header to open their profile
        findViewById(R.id.headerSellerInfo).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent pIntent = new Intent(ChatConversationActivity.this, SellerProfileActivity.class);
                pIntent.putExtra("sellerName", sellerName);
                pIntent.putExtra("sellerPhone", sellerPhone);
                startActivity(pIntent);
            }
        });

        // Direct Call
        findViewById(R.id.btnChatCallDirect).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(Intent.ACTION_DIAL, Uri.parse("tel:" + sellerPhone)));
            }
        });

        findViewById(R.id.btnSendMessage).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                sendMessage();
            }
        });
    }

    private void sendMessage() {
        String msg = edtChatMessage.getText().toString().trim();
        if (msg.isEmpty()) return;

        // Add user bubble (Green/Blue, end aligned)
        LinearLayout bubble = new LinearLayout(this);
        bubble.setOrientation(LinearLayout.VERTICAL);
        bubble.setBackground(ContextCompat.getDrawable(this, R.drawable.btn_whatsapp));
        bubble.setPadding(28, 20, 28, 20);

        LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.WRAP_CONTENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
        );
        params.gravity = Gravity.END;
        params.setMargins(0, 0, 0, 16);
        bubble.setLayoutParams(params);

        TextView txtContent = new TextView(this);
        txtContent.setText(msg);
        txtContent.setTextColor(ContextCompat.getColor(this, R.color.cars_white));
        txtContent.setTextSize(13);

        TextView txtTime = new TextView(this);
        txtTime.setText("الآن ✔✔");
        txtTime.setTextColor(ContextCompat.getColor(this, R.color.cars_white));
        txtTime.setTextSize(10);
        txtTime.setGravity(Gravity.START);

        bubble.addView(txtContent);
        bubble.addView(txtTime);

        layoutMessagesList.addView(bubble);
        edtChatMessage.setText("");

        scrollMessages.post(new Runnable() {
            @Override
            public void run() {
                scrollMessages.fullScroll(View.FOCUS_DOWN);
            }
        });

        Toast.makeText(this, "تم إرسال الرسالة إلى " + sellerName, Toast.LENGTH_SHORT).show();
    }
}
