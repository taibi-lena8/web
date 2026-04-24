(function() {
    // المفتاح العام الصحيح الخاص بك
    emailjs.init("rI-X_67czvTjPDZjh");
})();

function handleFormSubmission(formId, btnId, statusId, serviceId, templateId) {
    const form = document.getElementById(formId);
    const btn = document.getElementById(btnId);
    const status = document.getElementById(statusId);

    if (!form) return;

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        btn.disabled = true;
        const originalBtnText = btn.innerText;
        btn.innerText = "جارٍ الإرسال...";

        emailjs.sendForm(serviceId, templateId, this)
            .then(() => {
                status.innerText = "✅ تم الإرسال بنجاح! سنرد عليكم قريباً.";
                status.className = "status-msg success";
                form.reset();
            })
            .catch((error) => {
                status.innerText = "❌ فشل الإرسال، يرجى المحاولة لاحقاً.";
                status.className = "status-msg error";
                console.error("EmailJS Error:", error);
            })
            .finally(() => {
                btn.disabled = false;
                btn.innerText = originalBtnText;
            });
    });
}

// تفعيل النماذج باستخدام السيرفس أيدي الصحيح: service_dhfca8c
handleFormSubmission(
    "contact-form", 
    "contact-btn", 
    "contact-status", 
    "service_dhfca8c", 
    "template_r11up8c"
);

handleFormSubmission(
    "request-form", 
    "request-btn", 
    "request-status", 
    "service_dhfca8c", 
    "template_r11up8c"
);
