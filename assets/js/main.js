
// Simple bridge between custom language selector and Google Translate
(function() {
  function applyLanguage(langCode) {
    var gtCombo = document.querySelector('select.goog-te-combo');
    if (!gtCombo) return;
    gtCombo.value = langCode;
    gtCombo.dispatchEvent(new Event('change'));
  }

  document.addEventListener('DOMContentLoaded', function() {
    var select = document.getElementById('lang-select-global');
    if (select) {
      select.addEventListener('change', function() {
        var lang = this.value;
        if (!lang || lang === 'auto') return;
        applyLanguage(lang);
      });
    }
  });
})();
