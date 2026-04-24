(function() {
    // المفتاح العام الخاص بك (ثابت)
    emailjs.init("rI-X_67czvTjPDZjh");
})();

// المعرفات الجديدة الخاصة بك
const myServiceId = "service_i0kgqwm"; // تم التحديث هنا
const myTemplateId = "template_r11up8c"; 

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
                status.style.color = "#27ae60"; // لون أخضر للنجاح
                form.reset();
            })
            .catch((error) => {
                status.innerText = "❌ فشل الإرسال، يرجى التأكد من وجود القالب في EmailJS.";
                status.className = "status-msg error";
                status.style.color = "#c0392b"; // لون أحمر للفشل
                console.error("EmailJS Error:", error);
            })
            .finally(() => {
                btn.disabled = false;
                btn.innerText = originalBtnText;
            });
    });
}

// تفعيل النماذج بالمعرف الجديد
handleFormSubmission("contact-form", "contact-btn", "contact-status", myServiceId, myTemplateId);
handleFormSubmission("request-form", "request-btn", "request-status", myServiceId, myTemplateId);
