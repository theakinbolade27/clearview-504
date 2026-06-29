(function () {
    function applyAccessibilitySettings() {
        const fontSize = parseInt(localStorage.getItem('fontSize') || '18', 10);
        const lineSpacing = parseFloat(localStorage.getItem('lineSpacing') || '1.6');
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        const isHighContrast = localStorage.getItem('highContrast') === 'true';

        document.documentElement.style.setProperty('--base-font-size', fontSize + 'px');
        document.documentElement.style.setProperty('--line-spacing', lineSpacing.toString());

        const bgColor = isHighContrast ? '#eaf7ea' : (isDarkMode ? '#0b2d17' : '#ffffff');
        const textColor = isHighContrast ? '#145214' : (isDarkMode ? '#eaf7ea' : '#032B44');
        const primaryColor = isHighContrast ? '#000000' : (isDarkMode ? '#eaf7ea' : '#145214');
        const borderColor = '#145214';
        const panelBg = isHighContrast ? '#eaf7ea' : (isDarkMode ? '#0b2d17' : '#ffffff');
        const cardBg = isHighContrast ? '#ffffff' : (isDarkMode ? '#145214' : '#eaf7ea');
        const cardText = isHighContrast ? '#145214' : (isDarkMode ? '#ffffff' : '#145214');
        const buttonText = '#ffffff';

        document.documentElement.style.setProperty('--bg-color', bgColor);
        document.documentElement.style.setProperty('--text-color', textColor);
        document.documentElement.style.setProperty('--primary-color', primaryColor);
        document.documentElement.style.setProperty('--border-color', borderColor);
        document.documentElement.style.setProperty('--panel-bg', panelBg);
        document.documentElement.style.setProperty('--card-bg', cardBg);
        document.documentElement.style.setProperty('--card-text', cardText);
        document.documentElement.style.setProperty('--button-text', buttonText);

        document.body.classList.toggle('dark-mode', isDarkMode);
        document.body.classList.toggle('high-contrast', isHighContrast);
    }

    window.applyAccessibilitySettings = applyAccessibilitySettings;
    document.addEventListener('DOMContentLoaded', applyAccessibilitySettings);
    window.addEventListener('storage', applyAccessibilitySettings);
    window.addEventListener('accessibility-settings-changed', applyAccessibilitySettings);
})();
