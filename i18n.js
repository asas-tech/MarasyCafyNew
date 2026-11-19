(function () {
    const LANG_STORAGE_KEY = 'marasy_lang_v1';

    const dictionary = {
        ar: {
            hero_main_title: 'مراسي كافيه',
            hero_location_btn: 'موقع الكافيه',
            brand_name: 'مراسي كافيه',
            home_btn: 'الرئيسية',
            lang_switch_btn: 'English',
            digital_menu_fab: 'المنيو الرقمي',
            complete_booking_fab: 'إتمام الحجز',

            index_title: 'مراسي كافيه | Marasy Cafe',
            nav_menu: 'المنيو الرقمي',
            nav_vibes: 'أجواء الكافيه',
            nav_reviews: 'آراء العملاء',
            nav_bookings: 'الحجوزات',
            nav_contact: 'اتصل بنا',
            hero_title_ar: 'مراسي كافيه',
            hero_subtitle_en: 'Marasy Cafe',
            hero_desc: 'التجمع الخامس - القاهرة الجديدة • جلسات خارجية ورووف توب، بلايستيشن، أشهى المأكولات والمشروبات الطازجة يومياً.',
            hero_hours: 'يومياً: 8:00 ص - 3:00 ص',
            hero_wifi: 'Wi-Fi مجاني',
            hero_ps: 'PlayStation',
            hero_book_btn: 'الحجوزات',
            hero_tour_btn: 'جولة في الكافي',
            scroll_down_aria: 'انزل للأسفل',
            footer_whatsapp_btn: 'حجز واتساب',
            footer_whatsapp_aria: 'تواصل عبر واتساب',
            footer_address: 'التجمع الخامس، قسم أول القاهرة الجديدة • هاتف وواتساب:',
            footer_maps_link: 'رابط الموقع على خرائط جوجل',
            footer_booking_link: 'نموذج الحجز',
            footer_copyright: '© 2026 مراسي كافيه. جميع الحقوق محفوظة.',

            bookings_title: 'الحجوزات | مراسي كافيه - Marasy Cafe',
            booking_badge: 'حجز سريع ومباشر',
            booking_heading: 'احجز طاولتك في مراسي كافيه',
            booking_subtext: 'املأ البيانات التالية وسيتم توجيهك مباشرة إلى واتساب إدارة الكافيه لتأكيد الحجز',
            label_name: 'الاسم بالكامل *',
            placeholder_name: 'مثال: أحمد محمود',
            label_guests: 'عدد الأفراد *',
            guests_2: 'فردين (2)',
            guests_3: '3 أفراد',
            guests_4: '4 أفراد',
            guests_5_7: '5 - 7 أفراد',
            guests_8_plus: 'مجموعة كبيرة (+8 أفراد)',
            label_date: 'تاريخ الحجز *',
            label_time: 'الوقت المفضل *',
            label_my_orders: 'طلباتي',
            add_from_menu: 'إضافة من المنيو',
            no_orders_selected: 'لا توجد طلبات مختارة من المنيو حالياً.',
            remove_item_aria: 'حذف',
            label_notes: 'مكان الجلسة / ملاحظات إضافية',
            placeholder_notes: 'مثال: جلسة خارجية (Outdoor)، أو رووف توب، أو حجز بلايستيشن...',
            submit_whatsapp_btn: 'إرسال طلب الحجز عبر الواتساب',
            wa_header: '*طلب حجز طاولة جديد - مراسي كافيه* ☕',
            wa_name: 'الاسم',
            wa_guests: 'عدد الأفراد',
            wa_date: 'التاريخ',
            wa_time: 'الوقت',
            wa_orders: 'طلباتي',
            wa_notes: 'ملاحظات',
            wa_footer: 'يرجى تأكيد توفر الطاولة، شكراً لكم.',

            menu_title: 'المنيو الرقمي | مراسي كافيه - Marasy Cafe',
            menu_badge: 'مراسي كافيه | Marasy Cafe',
            menu_heading: 'المنيو الرقمي',
            menu_subtext: 'الأقسام مرتبة أسفل بعضها — كل صنف بصورته واسمه بخلفية بيضاء',
            menu_disclaimer: 'ملاحظة هامة: الأسعار قابلة للتغيير، الرجاء الرجوع لإدارة الكافيه للتأكيد.',
            cat_all: 'الكل',
            cat_hot: '☕ المشروبات الساخنة',
            cat_cold: '🥤 الباردة والميلك شيك',
            cat_juices: '🍹 العصائر والسموزي',
            cat_crepes: '🌯 الكريب',
            cat_pasta: '🍝 الباستا',
            cat_pizza: '🍕 البيتزا',
            cat_desserts: '🍰 الحلويات',
            items_count_suffix: 'صنف',
            price_label: 'السعر',
            currency: 'ج.م',
            recommended_badge: 'مُوصى به',
            size_m: 'وسط (M)',
            size_l: 'كبير (L)',
            size_xl: 'عائلي (XL)',
            qty_inc_aria: 'زيادة الكمية',
            qty_dec_aria: 'تقليل الكمية',

            reviews_title: 'آراء العملاء | مراسي كافيه - Marasy Cafe',
            reviews_badge: 'آراء زبايننا الغاليين',
            reviews_heading: 'إيه بيقولوا عن مراسي كافيه؟',
            reviews_subtext: 'تجربة حقيقية من ناس نورونا وقضوا أحلى الأوقات معانا',
            verified_visit: 'زيارة موثقة',

            tour_title: 'جولة في الكافي | مراسي كافيه - Marasy Cafe',
            vibes_title: 'أجواء الكافيه | مراسي كافيه - Marasy Cafe'
        },
        en: {
            hero_main_title: 'Marasy Cafe',
            hero_location_btn: 'Cafe Location',hero_main_title: 'Marasy Cafe',
            hero_location_btn: 'Cafe Location',
            brand_name: 'Marasy Cafe',
            home_btn: 'Home',
            lang_switch_btn: 'العربية',
            digital_menu_fab: 'Digital Menu',
            complete_booking_fab: 'Complete Booking',

            index_title: 'Marasy Cafe | مراسي كافيه',
            nav_menu: 'Digital Menu',
            nav_vibes: 'Cafe Vibes',
            nav_reviews: 'Reviews',
            nav_bookings: 'Bookings',
            nav_contact: 'Contact Us',
            hero_title_ar: 'مراسي كافيه',
            hero_subtitle_en: 'Marasy Cafe',
            hero_desc: 'Fifth Settlement - New Cairo • Outdoor & rooftop seating, PlayStation, fresh food & beverages daily.',
            hero_hours: 'Daily: 8:00 AM - 3:00 AM',
            hero_wifi: 'Free Wi-Fi',
            hero_ps: 'PlayStation',
            hero_book_btn: 'Bookings',
            hero_tour_btn: 'Cafe Tour',
            scroll_down_aria: 'Scroll down',
            footer_whatsapp_btn: 'WhatsApp Booking',
            footer_whatsapp_aria: 'Contact via WhatsApp',
            footer_address: 'Fifth Settlement, 1st New Cairo • Phone & WhatsApp:',
            footer_maps_link: 'View on Google Maps',
            footer_booking_link: 'Booking Form',
            footer_copyright: '© 2026 Marasy Cafe. All rights reserved.',

            bookings_title: 'Bookings | Marasy Cafe',
            booking_badge: 'Quick & Direct Booking',
            booking_heading: 'Book Your Table at Marasy Cafe',
            booking_subtext: 'Fill in your details below and you will be redirected to Marasy Cafe WhatsApp to confirm',
            label_name: 'Full Name *',
            placeholder_name: 'Example: Ahmed Mahmoud',
            label_guests: 'Number of Guests *',
            guests_2: '2 Guests',
            guests_3: '3 Guests',
            guests_4: '4 Guests',
            guests_5_7: '5 - 7 Guests',
            guests_8_plus: 'Large Group (8+ Guests)',
            label_date: 'Booking Date *',
            label_time: 'Preferred Time *',
            label_my_orders: 'My Orders',
            add_from_menu: 'Add from Menu',
            no_orders_selected: 'No menu items selected yet.',
            remove_item_aria: 'Remove',
            label_notes: 'Seating Area / Additional Notes',
            placeholder_notes: 'Example: Outdoor seating, rooftop, or PlayStation booking...',
            submit_whatsapp_btn: 'Send Booking Request via WhatsApp',
            wa_header: '*New Table Booking Request - Marasy Cafe* ☕',
            wa_name: 'Name',
            wa_guests: 'Guests',
            wa_date: 'Date',
            wa_time: 'Time',
            wa_orders: 'My Orders',
            wa_notes: 'Notes',
            wa_footer: 'Please confirm table availability. Thank you.',

            menu_title: 'Digital Menu | Marasy Cafe',
            menu_badge: 'Marasy Cafe | مراسي كافيه',
            menu_heading: 'Digital Menu',
            menu_subtext: 'Categories stacked cleanly — every item with its photo and name on a clean white card',
            menu_disclaimer: 'Note: Prices are subject to change; please check with cafe management to confirm.',
            cat_all: 'All',
            cat_hot: '☕ Hot Drinks',
            cat_cold: '🥤 Cold Drinks & Milkshakes',
            cat_juices: '🍹 Fresh Juices & Smoothies',
            cat_crepes: '🌯 Crepes',
            cat_pasta: '🍝 Pasta',
            cat_pizza: '🍕 Pizza',
            cat_desserts: '🍰 Desserts',
            items_count_suffix: 'items',
            price_label: 'Price',
            currency: 'EGP',
            recommended_badge: 'Recommended',
            size_m: 'Medium (M)',
            size_l: 'Large (L)',
            size_xl: 'Family (XL)',
            qty_inc_aria: 'Increase quantity',
            qty_dec_aria: 'Decrease quantity',

            reviews_title: 'Customer Reviews | Marasy Cafe',
            reviews_badge: 'What Our Guests Say',
            reviews_heading: 'What Do People Say About Marasy Cafe?',
            reviews_subtext: 'Real experiences from guests who visited and enjoyed their time with us',
            verified_visit: 'Verified Visit',

            tour_title: 'Cafe Tour | Marasy Cafe',
            vibes_title: 'Cafe Vibes | Marasy Cafe'
        }
    };

    const listeners = new Set();

    function getLang() {
        try {
            const saved = localStorage.getItem(LANG_STORAGE_KEY);
            return saved === 'en' ? 'en' : 'ar';
        } catch (e) {
            return 'ar';
        }
    }

    function applyDocumentDirection(lang) {
        const html = document.documentElement;
        html.lang = lang;
        html.dir = lang === 'en' ? 'ltr' : 'rtl';

        document.querySelectorAll('[data-i18n-align]').forEach(el => {
            if (lang === 'en') {
                el.classList.remove('text-right');
                el.classList.add('text-start');
            } else {
                el.classList.remove('text-start');
                el.classList.add('text-right');
            }
        });
    }

    function applyBilingualVisibility(lang) {
        const isEn = lang === 'en';
        document.querySelectorAll('.lang-ar').forEach(el => el.classList.toggle('hidden', isEn));
        document.querySelectorAll('.lang-en').forEach(el => el.classList.toggle('hidden', !isEn));
    }

    function applyTranslations(lang) {
        const pack = dictionary[lang] || dictionary.ar;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (pack[key] !== undefined) {
                el.textContent = pack[key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (pack[key] !== undefined) {
                el.setAttribute('placeholder', pack[key]);
            }
        });

        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            if (pack[key] !== undefined) {
                el.setAttribute('aria-label', pack[key]);
            }
        });

        applyBilingualVisibility(lang);

        const titleKey = document.body && document.body.getAttribute('data-i18n-title');
        if (titleKey && pack[titleKey]) {
            document.title = pack[titleKey];
        }
    }

    function setLang(lang) {
        const normalized = lang === 'en' ? 'en' : 'ar';
        try {
            localStorage.setItem(LANG_STORAGE_KEY, normalized);
        } catch (e) {}

        applyDocumentDirection(normalized);
        applyTranslations(normalized);
        listeners.forEach(fn => {
            try { fn(normalized); } catch (e) {}
        });
    }

    function toggleLang() {
        const next = getLang() === 'ar' ? 'en' : 'ar';
        setLang(next);
    }

    function t(key, fallback = '') {
        const lang = getLang();
        const pack = dictionary[lang] || dictionary.ar;
        return pack[key] !== undefined ? pack[key] : fallback;
    }

    function onChange(cb) {
        listeners.add(cb);
    }

    const initialLang = getLang();
    applyDocumentDirection(initialLang);
    applyTranslations(initialLang);

    document.addEventListener('DOMContentLoaded', () => {
        const current = getLang();
        applyDocumentDirection(current);
        applyTranslations(current);
        listeners.forEach(fn => {
            try { fn(current); } catch (e) {}
        });
    });

    window.MarasyI18n = {
        getLang,
        setLang,
        toggleLang,
        t,
        onChange
    };
})();