var products = [
  {
    id: 'nexuss1',
    name: 'Nexus Miner S1',
    tagline: 'Solo Mining ASIC — PSU Included',
    chip: '4×BM1373',
    hashrate: '10.3 TH/s',
    power: '103W ±10%',
    efficiency: '10 J/TH',
    noise: '<50dB',
    size: '170 × 160 × 105 mm',
    weight: '~900g',
    cooling: 'Cooling 2600RPM Fan',
    psu: 'PSU XT30 12VDC (Included)',
    price: '$780',
    featured: false,
    badge: null,
    img: 'images/nexuss1.png',
    algo: 'SHA-256 (BTC/BCH/BSV)',
    warranty: '6 months',
    gallery: ['images/nexuss1_1.png','images/nexuss1_2.png','images/nexuss1_3.png','images/nexuss1_4.png','images/nexuss1_5.png','images/nexuss1_6.png'],
    desc: 'Compact ASIC miner built for home and solo mining. Powered by four next-gen BM1373 chips, delivering ~10.3 TH/s at just ~103W — an outstanding ~10 J/TH efficiency. Supports BTC, BCH, and BSV on the SHA-256 algorithm.',
    shipping: 'Estimated shipping: end of May 2026.',
    highlights: [
      'Built-in ESP32-S3 WiFi for a quick, cable-free setup experience.',
      'Designed for the home: ultra-quiet cooling, low power draw, true plug-and-play.',
      'Fully open-source firmware — tweak, tune, and make it your own.',
      'Backed by a 6-month limited warranty for your peace of mind.'
    ]
  },
  {
    id: 'nexusl1',
    name: 'Nexus Miner L1',
    tagline: '320 MH/s Scrypt Miner',
    chip: '4×BM1491',
    hashrate: '320 MH/s',
    power: '70W ±10%',
    efficiency: '4.57 J/MH',
    noise: '<50 dB',
    size: '170 × 160 × 105 mm',
    weight: '~500g',
    cooling: 'Cooling 2600RPM Fan',
    psu: 'PSU XT30 12VDC (Included)',
    price: '$499',
    featured: false,
    badge: 'limited',
    img: 'images/nexusl1.png',
    algo: 'Scrypt (LTC/DOGE/BELLS)',
    warranty: '6 months',
    gallery: ['images/nexusl1_1.png','images/nexusl1_2.png','images/nexusl1_3.png','images/nexusl1_4.png','images/nexusl1_5.png','images/nexusl1_6.png','images/nexusl1_7.png'],
    desc: 'Compact Scrypt ASIC miner purpose-built for home solo mining. Four BM1491 chips push ~320 MH/s at a lean ~70W, delivering an exceptional ~4.57 J/MH efficiency. Compatible with LTC, DOGE, and Bells via the Scrypt algorithm.',
    shipping: 'Estimated shipping: end of May 2026.',
    highlights: [
      'Built-in ESP32-S3 WiFi for a quick, cable-free setup experience.',
      'Designed for the home: ultra-quiet cooling, low power draw, true plug-and-play.',
      'Fully open-source firmware — tweak, tune, and make it your own.',
      'Backed by a 6-month limited warranty for your peace of mind.'
    ]
  },
  {
    id: 'nerdqaxe48',
    name: 'NerdQaxe++',
    tagline: '4.8 TH/s Air-Cooled',
    chip: '4×BM1370',
    hashrate: '4.8 TH/s',
    power: '68W ±10%',
    efficiency: '15 J/TH',
    noise: '<30 dB',
    size: '200 × 150 × 180 mm',
    weight: '~600g',
    cooling: 'Cooling 1100RPM Ultra-Quiet Fan',
    psu: 'PSU XT60 12VDC (Included)',
    price: '$310',
    featured: false,
    badge: null,
    img: 'images/nerdqaxe48.png',
    algo: 'SHA-256 (BTC/BCH/BSV)',
    warranty: '6 months',
    gallery: ['images/nerdqaxe48_1.png','images/nerdqaxe48_2.png','images/nerdqaxe48_3.png'],
    desc: 'Ultra-quiet high-efficiency solo miner built around four BM1370 chips. Delivers ~4.8 TH/s at just ~68W — an impressive ~15 J/TH efficiency. The 1100RPM fan keeps noise under 30 dB, making it virtually silent and perfect for any room. Runs SHA-256 for BTC, BCH, and BSV.',
    shipping: 'Estimated shipping: end of May 2026.',
    highlights: [
      'Built-in display for real-time hashrate, temperature, and status monitoring.',
      'Ultra-quiet 1100RPM cooling — rated under 30 dB, ideal for home or office.',
      'Fully open-source hardware and firmware — customize every aspect.',
      'Backed by a 6-month limited warranty for your peace of mind.'
    ]
  },
  {
    id: 'nerdqaxe6',
    name: 'NerdQaxe++',
    tagline: 'Rev 6.1 — 6.0 TH/s',
    chip: '4×BM1370',
    hashrate: '6.0 TH/s',
    power: '123W ±10%',
    efficiency: '20.57 J/TH',
    noise: '<50 dB',
    size: '170 × 160 × 105 mm',
    weight: '~550g',
    cooling: 'Cooling 2600RPM Fan',
    psu: 'PSU XT30 12VDC (Included)',
    price: '$340',
    featured: false,
    badge: null,
    img: 'images/nerdqaxe6.png',
    algo: 'SHA-256 (BTC/BCH/BSV)',
    warranty: '6 months',
    gallery: ['images/nerdqaxe6_1.png','images/nerdqaxe6_2.png','images/nerdqaxe6_3.png'],
    desc: 'Compact solo mining workhorse powered by four BM1370 ASIC chips. Pushes ~6.0 TH/s at ~123W for a solid ~20.57 J/TH efficiency. A straightforward, no-fuss choice for SHA-256 mining across BTC, BCH, and BSV.',
    shipping: 'Estimated shipping: end of May 2026.',
    highlights: [
      'Built-in ESP32-S3 WiFi for a quick, cable-free setup experience.',
      'Space-saving design with efficient 2600RPM cooling, fits any workspace.',
      'Fully open-source firmware — tweak, tune, and make it your own.',
      'Backed by a 6-month limited warranty for your peace of mind.'
    ]
  },
  {
    id: 'nerdqx',
    name: 'NerdQX',
    tagline: '8.1 TH/s',
    chip: '4×BM1370',
    hashrate: '8.1 TH/s',
    power: '138W ±10%',
    efficiency: '17 J/TH',
    noise: '<40 dB',
    size: '220 × 150 × 120 mm',
    weight: '~700g',
    cooling: 'Cooling 2500RPM Fan',
    psu: 'PSU XT60 12VDC (Included)',
    price: '$500',
    featured: true,
    badge: 'hot',
    img: 'images/nerdqx.jpg',
    algo: 'SHA-256 (BTC/BCH/BSV)',
    warranty: '6 months',
    gallery: ['images/nerdqx_1.jpg','images/nerdqx_2.jpg','images/nerdqx_3.jpg','images/nerdqx_4.jpg','images/nerdqx_5.jpg','images/nerdqx_6.jpg'],
    desc: 'A sleek solo mining powerhouse running four BM1370 chips. Pushes ~8.1 TH/s while drawing only ~138W, achieving ~17 J/TH efficiency. Features an XT60 interface for reliable power delivery. Fully compatible with BTC, BCH, and BSV on SHA-256.',
    shipping: 'Estimated shipping: end of May 2026.',
    highlights: [
      'Built-in WiFi for fast, hassle-free setup right out of the box.',
      'XT60 power connector for stable, flexible power supply options.',
      'Quiet operation in a sleek, modern chassis that looks great anywhere.',
      'Backed by a 6-month limited warranty for your peace of mind.'
    ]
  },
  {
    id: 'nerdoctaxe12',
    hidden: true,
    name: 'NerdOCTAXE γ',
    tagline: 'Rev 3.1 — 12 TH/s',
    chip: '8×BM1370',
    hashrate: '12 TH/s',
    power: '240W ±10%',
    efficiency: '20 J/TH',
    noise: '<50 dB',
    size: '200 × 150 × 180 mm',
    weight: '~900g',
    cooling: 'Cooling 4×2500RPM Fans (Push-Pull)',
    psu: 'PSU XT60 12VDC (Included)',
    price: '$615',
    featured: false,
    badge: 'new',
    img: 'images/nerdoctaxe12.jpg',
    algo: 'SHA-256 (BTC/BCH/BSV)',
    warranty: '6 months',
    gallery: ['images/nerdoctaxe12_1.jpg','images/nerdoctaxe12_2.jpg','images/nerdoctaxe12_3.jpg','images/nerdoctaxe12_4.jpg','images/nerdoctaxe12_5.jpg','images/nerdoctaxe12_6.jpg'],
    desc: 'Dual-stack powerhouse featuring eight BM1370 chips across two boards. Delivers ~12 TH/s at ~240W for ~20 J/TH efficiency. A quad-fan push-pull cooling system (two front, two rear) keeps temperatures in check. Built for SHA-256 mining on BTC, BCH, and BSV.',
    shipping: 'Estimated shipping: end of May 2026.',
    highlights: [
      'Eight BM1370 chips on a dual-board stack for maximum hash density.',
      'Quad-fan push-pull cooling — two front, two rear — for optimal airflow.',
      'Built-in ESP32-S3 WiFi for a quick, cable-free setup experience.',
      'Backed by a 6-month limited warranty for your peace of mind.'
    ]
  },
  {
    id: 'nerdoctaxe15',
    hidden: true,
    name: 'NerdOCTAXE γ',
    tagline: 'Rev 3.1 — 15 TH/s',
    chip: '8×BM1370',
    hashrate: '15 TH/s',
    power: '250W ±10%',
    efficiency: '16.7 J/TH',
    noise: '<50 dB',
    size: '200 × 150 × 180 mm',
    weight: '~950g',
    cooling: 'Cooling 4×2500RPM Fans (Push-Pull)',
    psu: 'PSU XT60 12VDC (Included)',
    price: '$670',
    featured: false,
    badge: null,
    img: 'images/nerdoctaxe15.jpg',
    algo: 'SHA-256 (BTC/BCH/BSV)',
    warranty: '6 months',
    gallery: ['images/nerdoctaxe15_1.jpg','images/nerdoctaxe15_2.jpg','images/nerdoctaxe15_3.jpg','images/nerdoctaxe15_4.jpg','images/nerdoctaxe15_5.jpg','images/nerdoctaxe15_6.jpg'],
    desc: 'The flagship dual-stack miner, packing eight BM1370 chips across two boards. Pushes ~15 TH/s at ~250W for ~16.7 J/TH efficiency. Quad-fan push-pull cooling handles the thermal load with ease. Designed for SHA-256 mining on BTC, BCH, and BSV.',
    shipping: 'Estimated shipping: end of May 2026.',
    highlights: [
      'Eight BM1370 chips on a dual-board stack for top-tier hashrate output.',
      'Quad-fan push-pull cooling — two front, two rear — for maximum airflow.',
      'Built-in ESP32-S3 WiFi for a quick, cable-free setup experience.',
      'Backed by a 6-month limited warranty for your peace of mind.'
    ]
  }
];

var features = [
  { icon: 'fa-code', titleKey: 'feature1Title', descKey: 'feature1Desc' },
  { icon: 'fa-volume-off', titleKey: 'feature2Title', descKey: 'feature2Desc' },
  { icon: 'fa-plug', titleKey: 'feature3Title', descKey: 'feature3Desc' },
  { icon: 'fa-microchip', titleKey: 'feature4Title', descKey: 'feature4Desc' }
];

var specKeys = [
  { key: 'hashrate', labelKey: 'compareHashrate' },
  { key: 'algo', labelKey: 'compareAlgo' },
  { key: 'chip', labelKey: 'compareChip' },
  { key: 'power', labelKey: 'comparePower' },
  { key: 'efficiency', labelKey: 'compareEfficiency' },
  { key: 'noise', labelKey: 'compareNoise' },
  { key: 'size', labelKey: 'compareSize' },
  { key: 'weight', labelKey: 'compareWeight' },
  { key: 'cooling', labelKey: 'compareCooling' },
  { key: 'psu', labelKey: 'comparePSU' },
  { key: 'warranty', labelKey: 'compareWarranty' },
  { key: 'price', labelKey: 'comparePrice' }
];

var badges = {
  hot: { cls: 'bg-amber-400 text-amber-900' },
  'new': { cls: 'bg-blue-400 text-blue-900' },
  limited: { cls: 'bg-purple-400 text-purple-900' }
};

function renderProducts() {
  var grid = document.getElementById('productGrid');
  if (!grid) return;
  var html = '';
  products.forEach(function (p) {
    if (p.hidden) return;
    var badgeHtml = '';
    if (p.badge && badges[p.badge]) {
      var b = badges[p.badge];
      badgeHtml = '<span class="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ' + b.cls + ' z-10">' + __('badge' + p.badge.charAt(0).toUpperCase() + p.badge.slice(1)) + '</span>';
    }
    html +=
      '<a href="product.html?id=' + p.id + '" class="product-card bg-white rounded-2xl border border-gray-200 overflow-hidden relative flex flex-col group cursor-pointer">' +
        badgeHtml +
        '<div class="relative overflow-hidden bg-gray-100 h-52 flex items-center justify-center">' +
          '<img src="' + p.img + '" alt="' + p.name + '" class="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500" />' +
        '</div>' +
        '<div class="p-5 flex-1">' +
          '<div class="flex items-center justify-between mb-3">' +
            '<div>' +
              '<h3 class="text-lg font-bold text-gray-900">' + p.name + '</h3>' +
              '<p class="text-xs text-gray-400 mt-0.5">' + p.tagline + '</p>' +
            '</div>' +
            '<div class="flex items-center gap-1.5">' +
              '<span class="glow-dot"></span>' +
              '<span class="text-xs text-green-600 font-medium">' + __('inStock') + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="text-2xl font-extrabold text-gray-900 mb-1">' + p.hashrate + '</div>' +
          '<p class="text-sm text-gray-500 mb-4">' + p.power + ' · ' + p.efficiency + ' · ' + p.algo + '</p>' +
          '<div class="space-y-2 text-sm text-gray-600">' +
            '<div class="flex justify-between"><span class="text-gray-400">' + __('chip') + '</span><span class="font-medium">' + p.chip + '</span></div>' +
            '<div class="flex justify-between"><span class="text-gray-400">' + __('noise') + '</span><span class="font-medium">' + p.noise + '</span></div>' +
            '<div class="flex justify-between"><span class="text-gray-400">' + __('size') + '</span><span class="font-medium">' + p.size + '</span></div>' +
          '</div>' +
        '</div>' +
        '<div class="px-5 pb-5 pt-0">' +
          '<div class="flex items-baseline gap-1 mb-3">' +
            '<span class="text-2xl font-extrabold text-brand-600">' + p.price + '</span>' +
            '<span class="text-xs text-gray-400">' + __('starting') + '</span>' +
          '</div>' +
          '<span class="block text-center bg-gray-900 group-hover:bg-brand-600 text-white py-2.5 rounded-xl text-sm font-semibold transition-colors">' +
            __('buyNow') +
          '</span>' +
        '</div>' +
      '</a>';
  });
  grid.innerHTML = html;
}

function renderCompareTable() {
  var table = document.getElementById('compareTable');
  if (!table) return;
  var html = '<thead><tr class="border-b border-gray-200 bg-gray-50">';
  html += '<th class="px-5 py-4 text-sm font-semibold text-gray-500 sticky left-0 bg-gray-50">' + __('compareParam') + '</th>';
  products.forEach(function (p) {
    if (p.hidden) return;
    html += '<th class="px-5 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">' + p.name + '<br><span class="text-xs font-normal text-gray-400">' + p.tagline + '</span></th>';
  });
  html += '</tr></thead><tbody>';

  specKeys.forEach(function (sk, idx) {
    var rowClass = idx % 2 === 0 ? 'spec-row' : '';
    html += '<tr class="border-b border-gray-100 ' + rowClass + '">';
    html += '<td class="px-5 py-3.5 text-sm font-medium text-gray-500 sticky left-0 ' + (idx % 2 === 0 ? 'bg-white' : 'bg-gray-50') + '">' + __(sk.labelKey) + '</td>';
    products.forEach(function (p) {
      if (p.hidden) return;
      var val = p[sk.key];
      if (sk.key === 'cooling' || sk.key === 'psu') {
        val = __(val) || val;
      }
      html += '<td class="px-5 py-3.5 text-sm font-semibold text-gray-900 whitespace-nowrap">' + val + '</td>';
    });
    html += '</tr>';
  });

  html += '</tbody>';
  table.innerHTML = html;
}

function renderFeatures() {
  var grid = document.getElementById('featuresGrid');
  if (!grid) return;
  var html = '';
  features.forEach(function (f) {
    html +=
      '<div class="feature-card text-center">' +
        '<div class="feature-icon-wrap w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-4">' +
          '<i class="fa-solid ' + f.icon + ' text-brand-600 text-xl"></i>' +
        '</div>' +
        '<h4 class="font-semibold text-gray-900 mb-2">' + __(f.titleKey) + '</h4>' +
        '<p class="text-sm text-gray-500 leading-relaxed">' + __(f.descKey) + '</p>' +
      '</div>';
  });
  grid.innerHTML = html;
}

function populateModelSelect() {
  var selects = document.querySelectorAll('select[name="model"]');
  selects.forEach(function (sel) {
    var html = '<option value="">' + __('formModelPlaceholder') + '</option>';
    products.forEach(function (p) {
      if (p.hidden) return;
      html += '<option value="' + p.name + '">' + p.name + ' (' + p.tagline + ') — ' + p.price + '</option>';
    });
    sel.innerHTML = html;
  });
}

function renderI18nText() {
  document.title = __('siteTitle');
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', __('siteDesc'));

  var elems = document.querySelectorAll('[data-i18n]');
  elems.forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    var placeholder = el.getAttribute('data-i18n-placeholder');
    if (placeholder) {
      el.setAttribute('placeholder', __(placeholder));
    }
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') return;
    el.innerHTML = __(key);
  });

  var attrs = document.querySelectorAll('[data-i18n-attr]');
  attrs.forEach(function (el) {
    var parts = el.getAttribute('data-i18n-attr').split(':');
    if (parts.length === 2) {
      el.setAttribute(parts[0], __(parts[1]));
    }
  });
}

function updateLangSwitcher() {
  var lang = getLang();
  var btns = document.querySelectorAll('[data-lang-switch]');
  btns.forEach(function (btn) {
    btn.innerHTML = lang === 'en' ? '中文' : 'EN';
    btn.setAttribute('title', lang === 'en' ? '切换到中文' : 'Switch to English');
  });
}

function initNavbar() {
  var navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
      navbar.classList.add('nav-scrolled');
    } else {
      navbar.classList.remove('nav-scrolled');
    }
  });
}

function initMobileMenu() {
  var btn = document.getElementById('mobileMenuBtn');
  var menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;
  btn.addEventListener('click', function () {
    menu.classList.toggle('hidden');
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.add('hidden');
    });
  });
}

function initLangSwitcher() {
  var btns = document.querySelectorAll('[data-lang-switch]');
  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var newLang = getLang() === 'en' ? 'zh' : 'en';
      setLang(newLang);
      renderAll();
    });
  });
}

function initForm() {
  var form = document.getElementById('contactForm');
  var success = document.getElementById('formSuccess');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = {
      name: form.name.value.trim(),
      contact: form.contact.value.trim(),
      model: form.model.value,
      message: form.message.value.trim()
    };
    if (!data.name || !data.contact) {
      alert(__('formError'));
      return;
    }
    console.log('Form submitted:', data);
    form.reset();
    if (success) {
      success.innerHTML = '<i class="fa-solid fa-circle-check mr-2"></i>' + __('formSuccess');
      success.classList.remove('hidden');
      setTimeout(function () {
        success.classList.add('hidden');
      }, 5000);
    }
  });
}

function initScrollReveal() {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.product-card, .feature-card').forEach(function (el) {
    observer.observe(el);
  });
}

function renderAll() {
  renderI18nText();
  renderProducts();
  renderCompareTable();
  renderFeatures();
  populateModelSelect();
  updateLangSwitcher();
}

window.addEventListener('xclangchange', renderAll);

renderAll();
initNavbar();
initMobileMenu();
initLangSwitcher();
initForm();
initScrollReveal();
