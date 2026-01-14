
export type Language = 'mn' | 'en';

export const i18n = {
  mn: {
    nav: {
      product: 'Бүтээгдэхүүн',
      solutions: 'Шийдэл',
      why: 'Яагаад DebtPro',
      customers: 'Харилцагчид',
      pricing: 'Үнэ',
      resources: 'Нөөцүүд',
      faq: 'FAQ',
      demo: 'Демо авах',
    },
    megaMenu: {
      automation: { title: 'Автоматжуулалт', desc: 'Зээлийн авто хуваарилалт (Auto-Allocation)' },
      analytics: { title: 'Аналитик', desc: 'Зээлийн ангилал, шилжилтийн тайлан' },
      security: { title: 'Интеграц', desc: 'CallPro болон Polaris системтэй холбогдоно' }
    },
    hero: {
      tag: 'NPL УДИРДЛАГЫН ЦОГЦ СИСТЕМ',
      title: 'Зээл төлүүлэлтийг ухаалгаар удирдах Cockpit',
      subtitle: 'DebtPro бол Банк, ББСБ-ын зээлийн чанарыг сайжруулах "Mission-Critical" үйлдлийн систем юм. Polaris-аас дата импорт хийж, CallPro-оор автоматжуул.',
      cta: 'Демо захиалах',
      secondary: 'Шууд үзэх',
      carousel: {
        dashboard: 'Гүйцэтгэлийн самбар',
        profile: 'Харилцагчийн 360°',
        legal: 'Хууль, Шүүхийн процесс',
        sms: 'CallPro Интеграц',
        performance: 'Ажилтны KPI'
      }
    },
    workflow: {
      tag: 'COLLECTION PIPELINE',
      title: 'Төлүүлэлтийн нэгдсэн процесс',
      subtitle: 'Дуудлагаас эхлээд Шүүхийн шийдвэр гүйцэтгэх хүртэлх бүх шат дамжлагыг нэг дороос удирдах систем.',
      stages: {
        call: 'Дуудлага',
        sms: 'МСЖ',
        visit: 'Уулзалт',
        legal: 'Хууль',
        court: 'Шүүх',
        bailiff: 'ШШГ',
        recovery: 'Төлөлт'
      },
      status: {
        success: 'Амжилттай',
        pending: 'Хүлээгдэж буй',
        failed: 'Амжилтгүй',
        promised: 'Амлалт авсан'
      }
    },
    excelSection: {
      tag: 'LEGACY VS MODERN',
      title: 'Эксель файл бол "Хар хайрцаг". DebtPro бол Ил тод байдал.',
      subtitle: 'Зээл төлүүлэлт бол секундээр хэмжигдэх өгөгдлийн урсгал. Эксель бол хурд сааруулагч, харин DebtPro бол хурдасгуур юм.',
      excel: {
        title: 'Уламжлалт арга (Excel)',
        description: 'Төлүүлэлтийн багийг хяналтгүй ажиллуулж, дата алдагдах эрсдэлийг үүсгэдэг.',
        items: [
          'Polaris-аас датаг гараар зөөж алдаа гаргах',
          'Зээлийн ангиллыг гараар тооцоолох (5-100%)',
          'Агент бүрийн гүйцэтгэлийг хянах боломжгүй',
          'Барьцаа хөрөнгийн мэдээлэл салангид'
        ]
      },
      debtpro: {
        title: 'DebtPro Intelligence OS',
        description: 'Бүх датаг нэгдсэн системд төвлөрүүлж, AI-д суурилсан оновчлол хийнэ.',
        items: [
          'Auto-Allocation: Зээлийг тэнцүү хуваарилах',
          'Эрсдэлийн сангийн автомат тооцоолол',
          'CallPro: Системээс шууд залгах, МСЖ илгээх',
          'Барьцаа хөрөнгө, Хамаарал бүхий 360° мэдээлэл'
        ]
      },
      table: {
        features: ['Өгөгдлийн хамгаалалт', 'Автомат хуваарилалт', 'CallPro Интеграц', 'Шүүхийн процесс', 'Баримт бичиг үүсгэх'],
        excelValues: ['Байхгүй', 'Гар ажиллагаа', 'Байхгүй', 'Байхгүй', 'Байхгүй'],
        debtproValues: ['AES-256', 'Автомат', 'Байгаа', 'Байгаа', 'Байгаа']
      }
    },
    showcase: {
      allocation: { title: 'Ухаалаг хуваарилалт', benefit: 'Зээлийн багцыг ажилтнуудад дүн болон тоогоор оновчтой хуваарилна.', impact: 'AUTO-DISTRIBUTION' },
      sms: { title: 'МСЖ Автоматжуулалт', benefit: 'Масс болон автомат МСЖ илгээж, хүргэлтийн тайланг бодит хугацаанд хянана.', impact: '99.9% DELIVERY' },
      routing: { title: 'CallPro Интеграц', benefit: 'Системээс шууд залгаж, ярианы түүхийг харилцагчийн картад бүртгэнэ.', impact: 'ONE-CLICK CALL' },
      lockin: { title: 'Баримт бичиг', benefit: 'Нэхэмжлэх, мэдэгдэх хуудсыг системээс бэлэн загвараар хэвлэнэ.', impact: 'DOC AUTOMATION' }
    },
    contactSection: {
      title: 'Хамтран ажиллах хүсэлт илгээх',
      subtitle: 'Бидэнтэй нэгдэж, төлүүлэлтийн процессоо дараагийн шатанд гаргахад бэлэн үү? Мэдээллээ үлдээнэ үү.',
      name: 'Таны нэр',
      org: 'Байгууллагын нэр',
      phone: 'Утасны дугаар',
      email: 'И-мэйл хаяг',
      message: 'Зурвас',
      submit: 'Хүсэлт илгээх',
      success: 'Таны хүсэлтийг хүлээн авлаа. Бид тун удахгүй холбогдох болно.',
      placeholders: {
        name: 'Овог нэр',
        org: 'Банк, ББСБ-ын нэр',
        phone: '9911....',
        email: 'name@company.mn',
        message: 'Танд тулгарч буй асуудал эсвэл хэрэгцээгээ бичнэ үү...'
      }
    },
    stats: {
      npl: 'Нийт зээл',
      today: 'Төлүүлсэн',
      rate: 'Ангилал сайжралт',
      risk: 'Эрсдэлийн сан'
    },
    faq: {
      title: 'Түгээмэл асуултууд',
      items: [
        { q: 'Polaris системтэй хэрхэн холбогддог вэ?', a: 'DebtPro нь Polaris-аас экспортолсон эксель файлыг шууд уншиж, зээлийн ангилал болон хугацаа хэтрэлтийг автоматаар боддог.' },
        { q: 'CallPro интеграц ямар давуу талтай вэ?', a: 'Ажилтнууд системээс шууд залгах боломжтой бөгөөд ярианы бичлэг, түүх нь харилцагчийн "Action Tracking" хэсэгт автоматаар бүртгэгддэг.' }
      ]
    },
    finalCta: {
      title: 'Эрсдэлээ Орлого болго.',
      subtitle: 'Зээлийн багцаа эрүүлжүүлж, капиталын эргэлтээ сайжруул. Бид танд тусална.',
      cta: 'Демо захиалах'
    }
  },
  en: {
    nav: {
      product: 'Product',
      solutions: 'Solutions',
      why: 'Why DebtPro',
      customers: 'Customers',
      pricing: 'Pricing',
      resources: 'Resources',
      faq: 'FAQ',
      demo: 'Book a Demo',
    },
    megaMenu: {
      automation: { title: 'Automation', desc: 'Auto-Allocation by balance or count' },
      analytics: { title: 'Analytics', desc: 'Migration analysis and quality reports' },
      security: { title: 'Integrations', desc: 'CallPro and Polaris connectivity' }
    },
    hero: {
      tag: 'NPL MANAGEMENT OS',
      title: 'Smart Command Cockpit for Loan Recovery',
      subtitle: 'The mission-critical operating system for Banks and NBFIs. Import data from Polaris and automate recovery with CallPro.',
      cta: 'Book a Demo',
      secondary: 'Live Preview',
      carousel: {
        dashboard: 'Command Center',
        profile: '360° Borrower View',
        legal: 'Legal Process',
        sms: 'CallPro Integration',
        performance: 'Agent Performance'
      }
    },
    workflow: {
      tag: 'COLLECTION PIPELINE',
      title: 'End-to-End Collection Workflow',
      subtitle: 'From initial call to court enforcement—manage every phase of recovery within a single intelligent pipeline.',
      stages: {
        call: 'Call',
        sms: 'SMS',
        visit: 'Visit',
        legal: 'Legal',
        court: 'Court',
        bailiff: 'Bailiff',
        recovery: 'Recovery'
      },
      status: {
        success: 'Successful',
        pending: 'Pending',
        failed: 'Failed',
        promised: 'Promised'
      }
    },
    excelSection: {
      tag: 'LEGACY VS MODERN',
      title: 'Excel is a "Black Box". DebtPro is Transparency.',
      subtitle: 'Loan recovery is data flow measured in seconds. Excel is a bottleneck. DebtPro is the engine.',
      excel: {
        title: 'Legacy (Excel)',
        description: 'Unmonitored recovery teams leading to high data risk.',
        items: [
          'Manual data entry from core banking systems',
          'Manual risk fund calculation (5-100%)',
          'Zero visibility into agent activity',
          'Fragmented collateral information'
        ]
      },
      debtpro: {
        title: 'DebtPro Intelligence OS',
        description: 'Centralized intelligence optimized by predictive logic.',
        items: [
          'Auto-Allocation: Fair portfolio distribution',
          'Automatic Risk Fund & Category Calculation',
          'CallPro: Direct dialing & SMS automation',
          '360° Collateral & Family linkage view'
        ]
      },
      table: {
        features: ['Data Security', 'Auto Allocation', 'CallPro Integration', 'Legal Tracking', 'Doc Generation'],
        excelValues: ['None', 'Manual', 'None', 'None', 'None'],
        debtproValues: ['AES-256', 'Automated', 'Included', 'Included', 'Included']
      }
    },
    showcase: {
      allocation: { title: 'Smart Allocation', benefit: 'Distribute portfolios to agents automatically based on balance or count.', impact: 'AUTO-DISTRIBUTION' },
      sms: { title: 'SMS Automation', benefit: 'Trigger mass or automated SMS reminders and track delivery reports in real-time.', impact: '99.9% DELIVERY' },
      routing: { title: 'CallPro Integration', benefit: 'Call directly from the system and auto-log results into action tracking.', impact: 'ONE-CLICK CALL' },
      lockin: { title: 'Doc Automation', benefit: 'Generate legal notices and payment requests from templates instantly.', impact: 'DOC AUTOMATION' }
    },
    contactSection: {
      title: 'Modernize Your Recovery',
      subtitle: 'Ready to turn bad debt into recovered revenue? Fill out the form below.',
      name: 'Your Name',
      org: 'Organization Name',
      phone: 'Phone Number',
      email: 'Email Address',
      message: 'Message',
      submit: 'Request Access',
      success: 'Thank you! We will reach out to schedule your demo.',
      placeholders: {
        name: 'Full Name',
        org: 'Bank or NBFI Name',
        phone: 'Phone Number',
        email: 'name@company.com',
        message: 'Tell us about your recovery needs...'
      }
    },
    stats: {
      npl: 'Total Portfolio',
      today: 'Collected',
      rate: 'Migration Rate',
      risk: 'Risk Fund'
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        { q: 'How does Polaris integration work?', a: 'Simply upload the exported loan report; DebtPro parses categories, overdue days, and risk funds automatically.' },
        { q: 'What are the benefits of CallPro integration?', a: 'Agents click to call from the UI. Every recording and duration is linked to the borrower profile for audit.' }
      ]
    },
    finalCta: {
      title: 'Turn Risk into Revenue.',
      subtitle: 'Stop managing debt in spreadsheets. Deploy DebtPro and recover capital with surgical precision.',
      cta: 'Book a Demo'
    }
  }
};
