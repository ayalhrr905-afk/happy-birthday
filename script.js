function celebrate() {
    // تشغيل تأثير الألوان المتساقطة
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
    });
}

// تشغيل التأثير تلقائياً أول ما يفتح الموقع كمان!
window.onload = function() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
};
