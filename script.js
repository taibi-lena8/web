(function() {
    emailjs.init("rI-X_67czvTjPDZjh");
})();

// المعرفات النهائية المحدثة
const myServiceId = "service_i0kgqwm"; 
const myTemplateId = "template_9ylx4wo"; 

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
                status.style.color = "#27ae60";
                form.reset();
            })
            .catch((error) => {
                status.innerText = "❌ فشل الإرسال، تحقق من إعدادات القالب.";
                status.style.color = "#c0392b";
                console.error("EmailJS Error:", error);
            })
            .finally(() => {
                btn.disabled = false;
                btn.innerText = originalBtnText;
            });
    });
}

// تفعيل النماذج
handleFormSubmission("contact-form", "contact-btn", "contact-status", myServiceId, myTemplateId);
handleFormSubmission("request-form", "request-btn", "request-status", myServiceId, myTemplateId);
