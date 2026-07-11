function celebrate() {
    // 1. تشغيل الموسيقى
    var audio = document.getElementById("birthday-audio");
    audio.play().catch(function(error) {
        console.log("المتصفح حجب التشغيل التلقائي حتى يتفاعل المستخدم:", error);
    });

    // 2. تشغيل تأثير الألوان المتساقطة
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
    });
}

// عند فتح الصفحة لأول مرة (تأثير ألوان بدون صوت عشان قيود المتصفح)
window.onload = function() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
};
