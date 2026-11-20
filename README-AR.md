# واجهة Fortress Mini App

هذا المجلد هو جذر مشروع Vercel المقترح (`Root Directory = frontend`).

- الصفحة: `miniapp/index.html`
- إعداد Proxy: `vercel.json`
- مسارات `/api/*` تُمرّر إلى Backend الخارجي المحدد في `vercel.json`.

لا تضع توكن البوت أو `ADSUN_SECRET` أو أي أسرار في هذا المجلد.
- لوحة الإدارة المستقلة: `admin/index.html` وتفتح عبر `/admin/`.
- لوحة الإدارة تدعم العربية والإنجليزية، وتستخدم نفس Proxy لمسارات `/api/web-admin/*`.
- حسابات الموظفين تُنشأ من حساب المالك الرئيسي داخل لوحة الإدارة بعد ضبط `ADMIN_WEB_USERNAME` و`ADMIN_WEB_PASSWORD` في Backend.
