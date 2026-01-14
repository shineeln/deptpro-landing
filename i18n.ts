
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
      automation: { title: 'Автоматжуулалт', desc: 'Процессыг 100% автоматжуулна' },
      analytics: { title: 'Аналитик', desc: 'Бодит хугацааны хяналтын самбар' },
      security: { title: 'Аюулгүй байдал', desc: 'Банкны түвшний хамгаалалт' }
    },
    hero: {
      tag: 'NPL УДИРДЛАГЫН ИРЭЭДҮЙ',
      title: 'Зээл төлүүлэлтийг нэг цэгээс удирдах cockpit',
      subtitle: 'DebtPro бол Банк, ББСБ болон төлүүлэлтийн багуудад зориулсан "Mission-Critical" үйлдлийн систем юм. Төлүүлэлтийн хурдаа 40% хүртэл нэмэгдүүл.',
      cta: 'Демо авах',
      secondary: 'Шууд турших',
      carousel: {
        dashboard: 'Ерөнхий хяналт',
        profile: 'Зээлдэгч 360°',
        legal: 'Шүүх / Шийдвэр',
        sms: 'SMS Омни-суваг',
        performance: 'Ажилтны KPI'
      }
    },
    excelSection: {
      tag: 'LEGACY VS MODERN',
      title: 'Спредшитээс салж, Сүүлийн үеийн OS-д шилж.',
      subtitle: 'Зээлийн төлүүлэлт бол секундээр хэмжигдэх өгөгдлийн урсгал. Эксель бол хурд сааруулагч, харин DebtPro бол хурдасгуур юм.',
      excel: {
        title: 'Уламжлалт арга (Excel)',
        description: 'Төлүүлэлтийн багийг "Хар хайрцаг" дотор ажиллуулж, дата алдагдах эрсдэлийг үүсгэдэг.',
        items: [
          'Дата алдагдах, хуулбарлагдах өндөр эрсдэл',
          'Агент бүрийн гүйцэтгэлийг хянах боломжгүй',
          'Процесс автоматжуулалт тэг (Manual process)',
          'Шүүхийн шатны дата холболтгүй'
        ]
      },
      debtpro: {
        title: 'DebtPro Intelligence OS',
        description: 'Бүх датаг нэгдсэн системд төвлөрүүлж, AI-д суурилсан оновчлол хийнэ.',
        items: [
          '100% Үүлэн технологи, AES-256 хамгаалалт',
          'Бодит цагийн аналитик ба KPI самбар',
          'Auto-dialer болон SMS автоматжуулалт',
          'Хууль, шүүхийн иж бүрэн процесс'
        ]
      },
      table: {
        features: ['Өгөгдлийн хамгаалалт', 'Автомат хуваарилалт', 'Бодит цагийн хяналт', 'AI оноожуулалт', 'Хуулийн модуль'],
        excelValues: ['Байхгүй', 'Гар ажиллагаа', 'Байхгүй', 'Байхгүй', 'Байхгүй'],
        debtproValues: ['Банкны түвшин', 'Автомат', 'Бодит цаг', 'Байгаа', 'Байгаа']
      }
    },
    showcase: {
      allocation: { title: 'Ухаалаг хуваарилалт', benefit: 'Зээлийн багцыг ажилтнуудад автоматаар оновчтой хуваарилна.', impact: '25% ӨСӨЛТ' },
      routing: { title: 'Динамик чиглүүлэлт', benefit: 'Харилцагч бүрт тохирсон харилцааны сувгийг AI ашиглан сонгоно.', impact: 'AI DRIVEN' },
      lockin: { title: 'Дата түгжих', benefit: 'Байгууллагын ноу-хау болон датаг аюулгүй хадгална.', impact: '100% SECURE' }
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
        org: 'Байгууллагын нэр',
        phone: '9911....',
        email: 'name@company.mn',
        message: 'Танд тулгарч буй асуудал эсвэл хэрэгцээгээ бичнэ үү...'
      }
    },
    stats: {
      npl: 'Нийт ХХ',
      today: 'Өнөөдөр төлөгдсөн',
      rate: 'Амжилтын хувь',
      risk: 'Эрсдэлийн төвшин'
    },
    faq: {
      title: 'Түгээмэл асуултууд',
      items: [
        { q: 'Систем хэрхэн ажилладаг вэ?', a: 'DebtPro нь таны зээлийн багцыг автоматаар шинжилж, хамгийн тохиромжтой төлүүлэлтийн сувгийг (Call, SMS, Field, Legal) сонгодог.' },
        { q: 'Аюулгүй байдал хэр найдвартай вэ?', a: 'Бид банкны түвшний AES-256 шифрлэлт болон ISO 27001 стандартын дагуу дата аюулгүй байдлыг хангадаг.' }
      ]
    },
    finalCta: {
      title: 'Эрсдэлээ орлого болго.',
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
      automation: { title: 'Automation', desc: '100% automated workflows' },
      analytics: { title: 'Analytics', desc: 'Real-time monitoring dashboards' },
      security: { title: 'Security', desc: 'Bank-grade data protection' }
    },
    hero: {
      tag: 'THE FUTURE OF NPL MANAGEMENT',
      title: 'The command cockpit for your recovery operation.',
      subtitle: 'DebtPro is the mission-critical operating system for Banks and NBFIs. Increase recovery efficiency by up to 40% using AI-driven logic.',
      cta: 'Request Demo',
      secondary: 'Live Preview',
      carousel: {
        dashboard: 'Command Center',
        profile: 'Borrower 360°',
        legal: 'Legal Pipeline',
        sms: 'Omni-channel SMS',
        performance: 'Performance KPI'
      }
    },
    excelSection: {
      tag: 'LEGACY VS MODERN',
      title: 'Stop using tools from 1985 for modern debt.',
      subtitle: 'Loan recovery is high-velocity data management. Excel is a bottleneck. DebtPro is the engine of operational efficiency.',
      excel: {
        title: 'Legacy Chaos (Excel)',
        description: 'Fragmented files lead to data leakage and operational blindness.',
        items: [
          'Critical risk of data theft and duplication',
          'Zero visibility into real-time agent activity',
          'Completely manual, error-prone workflows',
          'No integration with legal or phone systems'
        ]
      },
      debtpro: {
        title: 'DebtPro Intelligence OS',
        description: 'Centralized, audit-ready, and optimized by predictive algorithms.',
        items: [
          'Bank-grade cloud security with full audit logs',
          'Live KPI dashboards for every management level',
          'Automated call routing and multi-channel SMS',
          'End-to-end legal and field module integration'
        ]
      },
      table: {
        features: ['Data Security', 'Auto Assignment', 'Live Monitoring', 'AI Scoring', 'Legal Module'],
        excelValues: ['None', 'Manual', 'None', 'None', 'None'],
        debtproValues: ['AES-256', 'Automated', 'Real-time', 'Included', 'Included']
      }
    },
    showcase: {
      allocation: { title: 'Smart Allocation', benefit: 'Automatically distribute portfolios to agents based on performance.', impact: '25% GROWTH' },
      routing: { title: 'Dynamic Routing', benefit: 'Use AI to select the best communication channel for each debtor.', impact: 'AI DRIVEN' },
      lockin: { title: 'Data Lock-in', benefit: 'Secure your institutional knowledge and sensitive recovery data.', impact: '100% SECURE' }
    },
    contactSection: {
      title: 'Get Started',
      subtitle: 'Ready to modernize your loan recovery cycle? Fill out the form and our experts will reach out to you.',
      name: 'Your Name',
      org: 'Organization Name',
      phone: 'Phone Number',
      email: 'Email Address',
      message: 'Message',
      submit: 'Submit Request',
      success: 'Thank you! Your request has been received. We will contact you shortly.',
      placeholders: {
        name: 'Full Name',
        org: 'Bank or NBFI Name',
        phone: '+976 ....',
        email: 'name@company.com',
        message: 'Tell us about your recovery challenges...'
      }
    },
    stats: {
      npl: 'Total NPL',
      today: 'Collected Today',
      rate: 'Success Rate',
      risk: 'Risk Level'
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        { q: 'How does the system work?', a: 'DebtPro analyzes your portfolio and dynamically assigns cases to the best recovery channel (Call, SMS, Field, Legal) using AI scoring.' },
        { q: 'How secure is the data?', a: 'We employ bank-grade AES-256 encryption and follow strict ISO 27001 standards for total data protection.' }
      ]
    },
    finalCta: {
      title: 'Turn Risk into Recovered Revenue.',
      subtitle: 'Stop letting bad debt drain your capital. Deploy DebtPro and start managing recovery with surgical precision.',
      cta: 'Book a Demo'
    }
  }
};
