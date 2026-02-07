export type ProfileLinkSet = {
  telegram: string;
  github: string;
  email: string;
  phone: string;
  cvUrl: string;
};

export type ExperienceItem = {
  company: string;
  title: string;
  period: string;
  bullets: string[];
};

export type ProjectItem = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  stack: string[];
  highlights: string[];
  links: {
    demo?: string;
    bot?: string;
    github?: string;
  };
};

export type EducationItem = {
  title: string;
  place: string;
  period: string;
  note?: string;
};

export type CertificateItem = {
  title: string;
  issuer: string;
  year: string;
  url: string;
};

export type CommandPaletteItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type LocaleKey = "ru" | "en" | "uz";

export type LocalizedProfile = {
  role: string;
  summary: [string, string];
  status: string;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certificates: CertificateItem[];
  tools: string[];
  languages: string[];
  location: string;
  availability: string;
  commandPalette: CommandPaletteItem[];
  ui: {
    introTitle: string;
    stackTitle: string;
    experienceTitle: string;
    projectsTitle: string;
    projectCountLabel: string;
    educationTitle: string;
    certificatesTitle: string;
    toolsTitle: string;
    languagesTitle: string;
    detailsTitle: string;
    emailLabel: string;
    phoneLabel: string;
    telegramLabel: string;
    locationLabel: string;
    availabilityLabel: string;
    caseLabel: string;
    demoLabel: string;
    botLabel: string;
    githubLabel: string;
    cvLabel: string;
    backLabel: string;
    projectLabel: string;
    highlightsLabel: string;
    stackLabel: string;
    contactCta: string;
    avatarAlt: string;
    languageSwitchLabel: string;
    commandPalette: {
      placeholder: string;
      empty: string;
      closeLabel: string;
      dialogLabel: string;
      shortcutLabel: string;
    };
  };
};

export type Profile = {
  name: string;
  siteUrl: string;
  avatar: string;
  links: ProfileLinkSet;
  stack: string[];
  defaultLocale: LocaleKey;
  localeOptions: { key: LocaleKey; label: string }[];
  locales: Record<LocaleKey, LocalizedProfile>;
};

export const profile: Profile = {
  name: "Abdujamil Aydarbekov Bakhtovich",
  siteUrl: "https://example.com",
  avatar: "/Gemini_Generated_Image_r441l4r441l4r441.png",
  links: {
    telegram: "https://t.me/Jamilf1",
    github: "https://github.com/fluxo159",
    email: "aydarkurbanbaev1406@gmail.com",
    phone: "+998-90-870-50-11",
    cvUrl: "/Abdujamil.pdf",
  },
  stack: ["HTML", "CSS", "React", "JavaScript", "Vue", "Vite", "Figma"],
  defaultLocale: "ru",
  localeOptions: [
    { key: "ru", label: "RU" },
    { key: "en", label: "EN" },
    { key: "uz", label: "UZ" },
  ],
  locales: {
    ru: {
      role: "Студент Business System Analysis (BSA)",
      summary: [
        "Студент School 21 и Business System Analysis. Занимаюсь фронтенд-разработкой, UI/UX и созданием Telegram-ботов, а также автоматизацией процессов.",
        "Имею опыт работы Tribe Master: управление командами, помощь в адаптации и организации процессов.",
      ],
      status: "Студент School 21",
      experience: [
        {
          company: "School 21 - Uzbekistan",
          title: "Tribe Master",
          period: "2026",
          bullets: [
            "Руководил участниками бассейна и помогал адаптироваться к заданиям.",
            "Координировал командные активности и взаимодействие участников.",
            "Поддерживал новичков и помогал решать возникающие проблемы.",
            "Участвовал в организации учебных мероприятий и проектов.",
            "Развивал лидерство, коммуникацию и командную работу.",
          ],
        },
      ],
      projects: [
        {
          slug: "telegram-bots",
          title: "S21 Rooms",
          description:
            "School 21 Room Booking — Telegram Mini App для бронирования учебных комнат.",
          tags: ["Telegram", "Automation", "Learning"],
          stack: ["JavaScript", "Node.js", "Telegram API"],
          highlights: [
            "Реальное время: свободные переговорки и скайпницы.",
            "Бронирование комнат на нужный интервал.",
            "Уменьшение хаоса и дублирующих бронирований.",
          ],
          links: {
            bot: "https://t.me/jamilTestBotNum1_bot",
            github: "https://github.com/fluxo159/school21-bot",
          },
        },
        {
          slug: "furnicatalog",
          title: "FurniCatalog",
          description:
            "Онлайн-платформа с витриной мебели для просмотра моделей и оформления заказа.",
          tags: ["E-commerce", "Catalog", "UI"],
          stack: ["HTML", "CSS", "JavaScript"],
          highlights: [
            "Наглядный каталог с типами и моделями мебели.",
            "Удобная навигация и быстрый поиск по категориям.",
            "Простой процесс оформления заказа.",
          ],
          links: {
            bot: "https://t.me/JamiltestBot",
          },
        },
        {
          slug: "bsa-case",
          title: "BSA Study Case",
          description:
            "Учебный кейс по анализу бизнес-процессов и описанию требований.",
          tags: ["BSA", "Analysis", "Documentation"],
          stack: ["Excel", "Documentation", "Diagrams"],
          highlights: [
            "Сбор требований и моделирование процессов.",
            "Структурированные таблицы и схемы.",
            "Презентация результатов команде.",
          ],
          links: {
          },
        },
      ],
      education: [
        {
          title: "School 21",
          place: "Ташкент, ул. Зиёлилар, 13",
          period: "2025 - настоящее время",
          note:
            "Учебные проекты, мини-приложения и Telegram-боты; навыки BSA и работы с данными.",
        },
        {
          title: "ProWeb",
          place: "улица Айбека, 16",
          period: "2024 - 2025",
          note:
            "HTML, CSS, JavaScript, Vue, Vite, React, TypeScript, C, Python; учебные проекты.",
        },
        {
          title: "Gennis",
          place: "Bo'stonliq ko'chasi, G‘azalkent, Toshkent Viloyati",
          period: "2023 - 2024",
          note: "Изучение HTML, CSS, JavaScript.",
        },
      ],
      certificates: [
        {
          title: "Game Jam Certificate",
          issuer: "Game Jam",
          year: "2026",
          url: "/game-jam-certificate.pdf",
        },
        {
          title: "ProWeb Certificate",
          issuer: "ProWeb",
          year: "2025",
          url: "/proweb-certificate.pdf",
        },
      ],
      tools: [
        "Microsoft Word / Google Docs",
        "Microsoft Excel / Google Sheets",
        "Confluence / Notion",
        "Telegram Bots",
        "Figma",
        "VS Code",
        "Cursor",
        "Antigravity",
      ],
      languages: [
        "Узбекский",
        "Русский",
        "Казахский",
        "Жестовый язык СНГ",
      ],
      location: "Ташкент, Бустонлик",
      availability: "Стажировка / стартовые позиции",
      commandPalette: [
        { label: "Проекты", href: "#projects" },
        { label: "Обо мне", href: "#about" },
        { label: "Сертификаты", href: "#certificates" },
        { label: "Контакты", href: "#contact" },
        { label: "GitHub", href: "https://github.com/fluxo159", external: true },
        { label: "CV", href: "/cv.pdf", external: true },
      ],
      ui: {
        introTitle: "О себе",
        stackTitle: "Навыки",
        experienceTitle: "Опыт",
        projectsTitle: "Проекты",
        projectCountLabel: "{count} проекта",
        educationTitle: "Образование",
        certificatesTitle: "Сертификаты",
        toolsTitle: "Инструменты",
        languagesTitle: "Языки",
        detailsTitle: "Контакты",
        emailLabel: "Email",
        phoneLabel: "Телефон",
        telegramLabel: "Telegram",
        locationLabel: "Локация",
        availabilityLabel: "Доступность",
        caseLabel: "Кейс",
        demoLabel: "Demo",
        botLabel: "Telegram Bot",
        githubLabel: "GitHub",
        cvLabel: "CV",
        backLabel: "Назад",
        projectLabel: "Проект",
        highlightsLabel: "Основное",
        stackLabel: "Стек",
        contactCta: "Написать",
        avatarAlt: "Аватар",
        languageSwitchLabel: "Язык",
        commandPalette: {
          placeholder: "Введите команду...",
          empty: "Ничего не найдено",
          closeLabel: "Закрыть командную палитру",
          dialogLabel: "Командная палитра",
          shortcutLabel: "K",
        },
      },
    },
    en: {
      role: "Business System Analysis (BSA) Student",
      summary: [
        "Motivated School 21 student with solid knowledge of PCs and IT systems.",
        "Tribe Master experience: lead teams, learn fast, detail-oriented, confident with Excel and Telegram bots.",
      ],
      status: "Open to internships",
      experience: [
        {
          company: "School 21 - Uzbekistan",
          title: "Tribe Master",
          period: "2026",
          bullets: [
            "Led pool participants and helped them adapt to tasks.",
            "Coordinated team activities and collaboration.",
            "Supported newcomers and resolved questions quickly.",
            "Contributed to organizing learning events and projects.",
            "Strengthened leadership, communication, and teamwork skills.",
          ],
        },
      ],
      projects: [
        {
          slug: "telegram-bots",
          title: "S21 Rooms",
          description:
            "School 21 Room Booking — a Telegram Mini App for reserving study rooms.",
          tags: ["Telegram", "Automation", "Learning"],
          stack: ["JavaScript", "Node.js", "Telegram API"],
          highlights: [
            "Realtime availability for rooms and Skype booths.",
            "Book rooms for the exact time slot needed.",
            "Reduced chaos and double bookings.",
          ],
          links: {
            bot: "https://t.me/jamilTestBotNum1_bot",
            github: "https://github.com/fluxo159/school21-bot",
          },
        },
        {
          slug: "furnicatalog",
          title: "FurniCatalog",
          description:
            "An online furniture showcase for browsing models and placing orders.",
          tags: ["E-commerce", "Catalog", "UI"],
          stack: ["HTML", "CSS", "JavaScript"],
          highlights: [
            "Clear catalog of furniture types and models.",
            "Smooth navigation with category discovery.",
            "Straightforward ordering flow.",
          ],
          links: {
            bot: "https://t.me/JamiltestBot",
          },
        },
        {
          slug: "bsa-case",
          title: "BSA Study Case",
          description:
            "Business process analysis with requirements and documentation.",
          tags: ["BSA", "Analysis", "Documentation"],
          stack: ["Excel", "Documentation", "Diagrams"],
          highlights: [
            "Requirements gathering and process mapping.",
            "Structured tables and diagrams.",
            "Presented findings to a team.",
          ],
          links: {
          },
        },
      ],
      education: [
        {
          title: "School 21",
          place: "Tashkent, Ziyolilar 13",
          period: "2025 - Present",
          note:
            "Learning projects, mini apps, and Telegram bots; BSA and data skills.",
        },
        {
          title: "ProWeb",
          place: "Aybek Street 16",
          period: "2024 - 2025",
          note:
            "HTML, CSS, JavaScript, Vue, Vite, React, TypeScript, C, Python.",
        },
        {
          title: "Gennis",
          place: "Bo'stonliq ko'chasi, G‘azalkent, Toshkent Viloyati",
          period: "2023 - 2024",
          note: "HTML, CSS, JavaScript fundamentals.",
        },
      ],
      certificates: [
        {
          title: "Game Jam Certificate",
          issuer: "Game Jam",
          year: "2026",
          url: "/game-jam-certificate.pdf",
        },
        {
          title: "ProWeb Certificate",
          issuer: "ProWeb",
          year: "2025",
          url: "/proweb-certificate.pdf",
        },
      ],
      tools: [
        "Microsoft Word / Google Docs",
        "Microsoft Excel / Google Sheets",
        "Confluence / Notion",
        "Telegram Bots",
        "Figma",
        "VS Code",
        "Cursor",
        "Antigravity",
      ],
      languages: [
        "Uzbek",
        "Russian",
        "Kazakh",
        "CIS Sign Language",
      ],
      location: "Tashkent, Bustonlik",
      availability: "Internship / entry-level roles",
      commandPalette: [
        { label: "Projects", href: "#projects" },
        { label: "About", href: "#about" },
        { label: "Certificates", href: "#certificates" },
        { label: "Contact", href: "#contact" },
        { label: "GitHub", href: "https://github.com/fluxo159", external: true },
        { label: "CV", href: "/cv.pdf", external: true },
      ],
      ui: {
        introTitle: "About",
        stackTitle: "Stack",
        experienceTitle: "Experience",
        projectsTitle: "Projects",
        projectCountLabel: "{count} case studies",
        educationTitle: "Education",
        certificatesTitle: "Certificates",
        toolsTitle: "Tools",
        languagesTitle: "Languages",
        detailsTitle: "Contact",
        emailLabel: "Email",
        phoneLabel: "Phone",
        telegramLabel: "Telegram",
        locationLabel: "Location",
        availabilityLabel: "Availability",
        caseLabel: "Case",
        demoLabel: "Demo",
        botLabel: "Telegram Bot",
        githubLabel: "GitHub",
        cvLabel: "CV",
        backLabel: "Back",
        projectLabel: "Project",
        highlightsLabel: "Highlights",
        stackLabel: "Stack",
        contactCta: "Send a message",
        avatarAlt: "Avatar",
        languageSwitchLabel: "Language",
        commandPalette: {
          placeholder: "Type a command...",
          empty: "No results",
          closeLabel: "Close command palette",
          dialogLabel: "Command palette",
          shortcutLabel: "K",
        },
      },
    },
    uz: {
      role: "Business System Analysis (BSA) talaba",
      summary: [
        "School 21da BSA yo‘nalishida o‘qiyotgan motivatsiyali talabaman.",
        "Tribe Master tajribam bor: jamoa yetaklayman, tez o‘rganaman, Excel va Telegram botlar bilan ishonchli ishlayman.",
      ],
      status: "Stajirovka uchun ochiq",
      experience: [
        {
          company: "School 21 - Uzbekistan",
          title: "Tribe Master",
          period: "2026",
          bullets: [
            "Pool ishtirokchilarini yo‘naltirdim va topshiriqlarga moslashtirdim.",
            "Jamoaviy faoliyat va hamkorlikni muvofiqlashtirdim.",
            "Yangi ishtirokchilarga yordam berdim va savollarga javob berdim.",
            "O‘quv tadbirlari va loyihalarini tashkil etishda qatnashdim.",
            "Liderlik, muloqot va jamoada ishlash ko‘nikmalarini rivojlantirdim.",
          ],
        },
      ],
      projects: [
        {
          slug: "telegram-bots",
          title: "S21 Rooms",
          description:
            "School 21 Room Booking — o‘quv xonalarini band qilish uchun Telegram Mini App.",
          tags: ["Telegram", "Automation", "Learning"],
          stack: ["JavaScript", "Node.js", "Telegram API"],
          highlights: [
            "Xonalar va Skype xonalari uchun realtime mavjudlik.",
            "Kerakli vaqt oralig‘iga bron qilish.",
            "Tartibsizlik va takroriy bronlar kamayadi.",
          ],
          links: {
            bot: "https://t.me/jamilTestBotNum1_bot",
            github: "https://github.com/fluxo159/school21-bot",
          },
        },
        {
          slug: "furnicatalog",
          title: "FurniCatalog",
          description:
            "Mebel vitrinasi va buyurtma qilish uchun onlayn platforma.",
          tags: ["E-commerce", "Catalog", "UI"],
          stack: ["HTML", "CSS", "JavaScript"],
          highlights: [
            "Mebel turlari va modellari uchun aniq katalog.",
            "Kategoriya bo‘yicha qulay navigatsiya.",
            "Oddiy va tushunarli buyurtma jarayoni.",
          ],
          links: {
            bot: "https://t.me/JamiltestBot",
          },
        },
        {
          slug: "bsa-case",
          title: "BSA Study Case",
          description:
            "Biznes jarayonlarni tahlil qilish va talablarni hujjatlashtirish.",
          tags: ["BSA", "Analysis", "Documentation"],
          stack: ["Excel", "Documentation", "Diagrams"],
          highlights: [
            "Talablarni yig‘ish va jarayon xaritalari.",
            "Strukturalangan jadval va diagrammalar.",
            "Natijalarni jamoaga taqdim etish.",
          ],
          links: {
          },
        },
      ],
      education: [
        {
          title: "School 21",
          place: "Toshkent, Ziyolilar 13",
          period: "2025 - hozirgacha",
          note:
            "Mini ilovalar va Telegram botlar, BSA va data ko‘nikmalari.",
        },
        {
          title: "ProWeb",
          place: "Aybek ko‘chasi 16",
          period: "2024 - 2025",
          note:
            "HTML, CSS, JavaScript, Vue, Vite, React, TypeScript, C, Python.",
        },
        {
          title: "Gennis",
          place: "Bo'stonliq ko'chasi, G‘azalkent, Toshkent Viloyati",
          period: "2023 - 2024",
          note: "HTML, CSS, JavaScript asoslari.",
        },
      ],
      certificates: [
        {
          title: "Game Jam Certificate",
          issuer: "Game Jam",
          year: "2026",
          url: "/game-jam-certificate.pdf",
        },
        {
          title: "ProWeb Certificate",
          issuer: "ProWeb",
          year: "2025",
          url: "/proweb-certificate.pdf",
        },
      ],
      tools: [
        "Microsoft Word / Google Docs",
        "Microsoft Excel / Google Sheets",
        "Confluence / Notion",
        "Telegram Bots",
        "Figma",
        "VS Code",
        "Cursor",
        "Antigravity",
      ],
      languages: [
        "O‘zbek",
        "Rus",
        "Qozog‘",
        "MDH imo-ishora tili",
      ],
      location: "Toshkent, Bo‘stonliq",
      availability: "Stajirovka / junior rollar",
      commandPalette: [
        { label: "Loyihalar", href: "#projects" },
        { label: "Men haqimda", href: "#about" },
        { label: "Sertifikatlar", href: "#certificates" },
        { label: "Kontaktlar", href: "#contact" },
        { label: "GitHub", href: "https://github.com/fluxo159", external: true },
        { label: "CV", href: "/cv.pdf", external: true },
      ],
      ui: {
        introTitle: "Men haqimda",
        stackTitle: "Ko'nikmalar",
        experienceTitle: "Tajriba",
        projectsTitle: "Loyihalar",
        projectCountLabel: "{count} loyiha",
        educationTitle: "Ta'lim",
        certificatesTitle: "Sertifikatlar",
        toolsTitle: "Asboblar",
        languagesTitle: "Tillar",
        detailsTitle: "Kontaktlar",
        emailLabel: "Email",
        phoneLabel: "Telefon",
        telegramLabel: "Telegram",
        locationLabel: "Manzil",
        availabilityLabel: "Mavjudlik",
        caseLabel: "Case",
        demoLabel: "Demo",
        botLabel: "Telegram Bot",
        githubLabel: "GitHub",
        cvLabel: "CV",
        backLabel: "Orqaga",
        projectLabel: "Loyiha",
        highlightsLabel: "Asosiylar",
        stackLabel: "Stack",
        contactCta: "Yozish",
        avatarAlt: "Avatar",
        languageSwitchLabel: "Til",
        commandPalette: {
          placeholder: "Buyruq kiriting...",
          empty: "Natija yo‘q",
          closeLabel: "Command palette yopish",
          dialogLabel: "Command palette",
          shortcutLabel: "K",
        },
      },
    },
  },
};
