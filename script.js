function startCelebration() {
    // 1. إخفاء المشهد الأول (صورة الولد والزر)
    var firstScene = document.getElementById("first-scene");
    if (firstScene) {
        firstScene.classList.add("hidden");
    }

    // 2. إظهار المشهد الثاني (الكعكة والتهنئة)
    var secondScene = document.getElementById("second-scene");
    if (secondScene) {
        secondScene.classList.remove("hidden");
    }

    // 3. تشغيل الموسيقى المرفوعة
    var audio = document.getElementById("birthday-audio");
    if (audio) {
        audio.play().catch(function(error) {
            console.log("المتصفح حجب التشغيل التلقائي حتى يتفاعل المستخدم:", error);
        });
    }

    // 4. تشغيل تأثير الألوان المتساقطة الفخم
    confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 }
    });
}
