package com.jnj.components;

import android.content.Context;
import android.graphics.Typeface;
import androidx.appcompat.widget.AppCompatTextView;

import android.util.AttributeSet;

public class FontAdd extends AppCompatTextView {

    public FontAdd(Context context, AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
        init();
    }

    public FontAdd(Context context, AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    public FontAdd(Context context) {
        super(context);
        init();
    }

    public void init() {
        Typeface tf = Typeface.createFromAsset(getContext().getAssets(), "fonts/Grenadine/Grenadine-MVB-Regular.otf");
        setTypeface(tf ,Typeface.NORMAL);

    }
}