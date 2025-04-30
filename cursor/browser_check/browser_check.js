function detectBrowser() {
    const userAgent = navigator.userAgent;
    let browserName;

    if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "Chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
        browserName = "Firefox";
    } else if (userAgent.match(/safari/i)) {
        browserName = "Safari";
    } else if (userAgent.match(/opr\//i)) {
        browserName = "Opera";
    } else if (userAgent.match(/edg/i)) {
        browserName = "Edge";
    } else if (userAgent.match(/msie|trident/i)) {
        browserName = "Internet Explorer";
    } else {
        browserName = "Unknown browser";
    }

    return browserName;
}

function detectBrowserModern() {
    if (navigator.userAgentData) {
        // Современный способ
        return navigator.userAgentData.brands.map(brand => {
            return `${brand.brand} ${brand.version}`;
        }).join(', ');
    } else {
        // Запасной вариант для старых браузеров
        return detectBrowser(); // использует функцию из первого примера
    }
}

// Использование:
console.log("Ваш браузер: " + detectBrowser());
console.log("Информация о браузере: " + detectBrowserModern());
