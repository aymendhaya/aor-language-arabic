module.exports = {
    aor: {
        action: {
            delete: 'حذف',
            show: 'إِظهار',
            list: 'القائمة',
            save: 'حِفظ',
            create: 'إِنشاء',
            edit: 'تعديل',
            cancel: 'إِلغاء',
            refresh: 'تحديث',
            add_filter: 'إِضافة فلتر',
            remove_filter: 'حذف فلتر',
            back: 'رجوع'
        },
        boolean: {
            true: 'نعم',
            false: 'لا',
        },
        page: {
            list: '%{name}قائمة الـ',
            edit: '%{name} #%{id} تعديل',
            show: '%{name} #%{id} إِظهار',
            create: '%{name} إِنشاء',
            delete: '%{name} #%{id} حذف',
            dashboard: 'الصفحة الرئيسية',
            not_found: 'الصفحة غير موجودة'
        },
        input: {
            image: {
                upload_several: 'أودع الملفات المراد تحميلها، أو إضغط للإختيار الملفات',
                upload_single: 'أودع الملف المراد تحميله، أو إضغط للإختيار الملف',
            },
        },
        message: {
            yes: 'نعم',
            no: 'لا',
            are_you_sure: 'هل أنت متأكد ؟',
            about: 'في ما يخص',
            not_found: 'هذا الرابط غير صالح، أو إنك لم تتبع الرابط المناسب',
        },
        navigation: {
            no_results: 'لا توجد نتيجة',
            page_out_of_boundaries: 'الصفحة %{page} خارج الحدود',
            page_out_from_end: 'نهاية التصفّح',
            page_out_from_begin: 'الصفحة يجب أن تكون أكبر من 1',
            page_range_info: '%{total} من %{offsetEnd}-%{offsetBegin}',
            next: 'التالي',
            prev: 'السابق',
        },
        auth: {
            username: 'المعرّف',
            password: 'كلمة السر',
            sign_in: 'دخول',
            sign_in_error: 'لم يتم الربط.. الرجاء إعادة العملية',
            logout: 'خروج',
        },
        notification: {
            updated: 'تم التحديث',
            created: 'تم الإنشاء',
            deleted: 'تم الحذف',
            item_doesnt_exist: 'غير موجود',
            http_error: 'خطأ في الربط مع  السيرفر',
        },
        validation: {
            required: 'هذه الخانة إلزامية',
            minLength: 'رموز على الأقل %{min}',
            maxLength: 'رموز على الأكثر %{max}',
            minValue: '%{min} على الأقل',
            maxValue: '%{max} رموز على الأكثر',
            number: 'يجب أن يكون رقمًا',
            email: 'يجب أن يكون بريدًا إلكترونيّا',
        },
    },
};
