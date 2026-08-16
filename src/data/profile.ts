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
    phone: "+998-93-222-40-99",
    cvUrl: "/Abdujamil.pdf",
  },
  stack: ["HTML", "CSS", "React", "JavaScript", "TypeScript", "TailwindCSS", "Leaflet GIS", "Vue", "Vite", "Figma", "SQL", "Godot", "Aseprite", "Python", "C"],
  defaultLocale: "ru",
  localeOptions: [
    { key: "ru", label: "RU" },
    { key: "en", label: "EN" },
    { key: "uz", label: "UZ" },
  ],
  locales: {
    ru: {
      role: "Junior Business / System Analyst | Frontend Developer",
      summary: [
        "Начинающий системный и бизнес-аналитик в активном поиске роли Junior System / Business Analyst. Обучаюсь в School 21 (проект Сбера) по направлению BSA — проектирую БД, работаю с SQL, моделирую бизнес-процессы, создаю UML-диаграммы.",
        "Совмещаю аналитику с frontend-разработкой: прошёл обучение в Astrum IT Academy (React.js) и ProWeb. Имею лидерский трек в School 21: Volunteer → Tribe Master → Volunteer Lead. Финалист хакатона NEXUS30 (GovTech) и участник 3 GameDev-хакатонов.",
      ],
      status: "Студент School 21 | В поиске стажировки",
      experience: [
        {
          company: "Хакатон NEXUS30 — GovTech Track",
          title: "Frontend & BSA Lead | React, GIS & AI",
          period: "08.2026",
          bullets: [
            "Разработал цифровую платформу «Ёшлар Бандлиги» для Хокимията и 8 махаллей Мирзо-Улугбекского района: сквозной учёт молодёжи, предиктивный NEET-триаж и маршрутизация мер господдержки.",
            "Спроектировал интерактивную GIS-карту v2.0 (Leaflet) с каноническими GPS-полигонами махаллей, тепловыми зонами риска NEET и маршрутизацией к POI центрам занятости.",
            "Интегрировал real-time WebSocket синхронизацию с Telegram-ботом (@Eshlar_bandligi_bot) для подомовых обходов и суверенного AI-Советника Хокимията (RAG & NLP).",
            "Построил дашборд с методологией Zero Inbox, генерацией Excel-отчётов и 100% двуязычной локализацией (RU / O‘Z Latin).",
          ],
        },
        {
          company: "School 21 — Uzbekistan",
          title: "Volunteer Lead",
          period: "02.2026 — 06.2026",
          bullets: [
            "Возглавлял волонтёрский корпус: отбирал волонтёров на интенсивы, распределял смены по кластерам, составлял графики дежурств.",
            "Оцифровал внутренние процессы корпуса на базе Excel: сквозной учёт смен, отработанных часов и расчёт внутренней валюты (коинов).",
            "Проводил брифинги, мотивировал команду, разрешал внутренние споры между волонтёрами и пирами интенсива.",
            "Прокачал навыки управления людьми: организация процессов с нуля, координация больших команд, порядок в данных.",
          ],
        },
        {
          company: "School 21 — Uzbekistan",
          title: "Tribe Master",
          period: "09.2025 — 02.2026",
          bullets: [
            "4 раза поочерёдно возглавлял все четыре трайба кампуса (Ayid, Laylak, Qolpon, Jayron).",
            "Мотивировал студентов, вёл рейтинги, организовывал внутренние ивенты.",
            "Проводил рефлексии после экзаменов: собирал команды, помогал анализировать ошибки, координировал дальнейшие шаги.",
            "Выступал ментором: направлял студентов и помогал справляться со стрессом во время учёбы.",
          ],
        },
        {
          company: "School 21 — Uzbekistan",
          title: "Volunteer",
          period: "08.2025 — 06.2026",
          bullets: [
            "Помогал пирам (студентам) в адаптации: направлял учащихся, консультировал по организационным вопросам, разъяснял работу платформы School 21.",
            "Контролировал порядок на кампусе: следил за соблюдением внутренних правил, фиксировал нарушения и выдавал пенальти.",
            "Участвовал в организации мероприятий: помогал команде организаторов проводить внутренние ивенты и крупные события на кампусе.",
          ],
        },
        {
          company: "Launch Lab 21",
          title: "Frontend | BSA | QA",
          period: "10.2025 — 01.2026",
          bullets: [
            "Разрабатывал локальную платформу по поиску работы и фриланса с системой безопасной сделки (платформа выступает гарантом).",
            "BSA: проектировал логику работы сервиса, описывал требования, продумывал функционал безопасной сделки.",
            "Frontend: отвечал за визуальную часть сайта, верстал интерфейс и переносил логику в работающий код.",
            "QA: проверял качество платформы, искал баги и тестировал сценарии взаимодействия заказчиков и исполнителей.",
          ],
        },
        {
          company: "Хакатон GameDev 21 #1",
          title: "Godot Разработчик | QA",
          period: "01.2026 — 07.2026",
          bullets: [
            "Разрабатывал 2D-игру с видом сверху (Top-Down) на движке Godot.",
            "Писал логику игры, настраивал поведение персонажей, механики перемещения и взаимодействие объектов.",
          ],
        },
        {
          company: "Хакатон GameFast.Uz #2",
          title: "Godot Developer | QA | Pixel Artist 2D",
          period: "05.2026 — 07.2026",
          bullets: [
            "За 3 дня разработал 2D-игру с видом сверху: спроектировал и реализовал основные игровые механики на движке Godot.",
            "Создавал спрайты и текстуры в Aseprite, совмещал роли разработчика и QA.",
            "Команда заняла 21-е место среди всех участников GameFast.Uz.",
          ],
        },
        {
          company: "Хакатон Turkic Game Jam 2026 #3",
          title: "Godot Developer | QA | Pixel Artist 2D",
          period: "06.2026 — 06.2026",
          bullets: [
            "Разработал визуальный стиль в духе Kingdom: Two Crowns: в Aseprite создал детализированный атмосферный пиксель-арт с проработкой окружения, света и анимаций.",
            "Реализовал игровую логику на Godot в условиях жёстких дедлайнов хакатона (3 дня).",
            "Отвечал за контроль качества (QA): регулярное тестирование геймплея, отлов багов, подготовка стабильной сборки к финалу.",
          ],
        },
      ],
      projects: [
        {
          slug: "yoshlar-bandligi",
          title: "Yoshlar Bandligi — GovTech 2.0",
          description:
            "Флагманский проект хакатона NEXUS30: цифровая экосистема мониторинга занятости, предиктивного NEET-триажа и умной маршрутизации молодёжи для Хокимията и 8 махаллей Мирзо-Улугбекского района.",
          tags: ["GovTech", "GIS Map", "Telegram Bot", "AI Copilot", "Hackathon Finalist"],
          stack: ["React 18", "TypeScript", "TailwindCSS", "Leaflet GIS", "WebSockets", "Node.js", "Express", "Grammy"],
          highlights: [
            "Интерактивная GIS-карта v2.0 с GPS-полигонами 8 махаллей, тепловыми зонами риска NEET и инфраструктурой POI.",
            "Омниканальность: мобильный Telegram-бот @Eshlar_bandligi_bot для подомовых обходов с real-time синхронизацией.",
            "Zero Inbox & AI-Советник: предиктивный алгоритм выявления безработных и автогенерация служебных записок для Хокима.",
          ],
          links: {
            demo: "https://yoshlar-bandligi-govtech.vercel.app",
            bot: "https://t.me/Eshlar_bandligi_bot",
            github: "https://github.com/fluxo159/NEVERLOSE-Memesense",
          },
        },
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
          period: "2025 — настоящее время",
          note:
            "Направление BSA: проектирование БД, SQL, моделирование бизнес-процессов, UML-диаграммы. Peer-to-peer обучение: самостоятельный поиск решений, командная работа, защита аналитических решений.",
        },
        {
          title: "Astrum IT Academy",
          place: "Ташкент",
          period: "2024 — 2025",
          note:
            "Прошёл отборочный интенсив Pre-Season (алгоритмика на C/JavaScript). Основное направление: React.js Frontend Developer — HTML5, CSS3, глубокий JavaScript, React.js. Peer-to-peer обучение на платформе Qwasar.",
        },
        {
          title: "ProWeb",
          place: "улица Айбека, 16",
          period: "2024 — 2025",
          note:
            "Адаптивная вёрстка (HTML5, CSS3), перенос макетов из Figma. JavaScript, React, Vue, Vite. Опыт создания поддерживаемого кода и работы с Git.",
        },
        {
          title: "Gennis",
          place: "Bo'stonliq ko'chasi, G'azalkent, Toshkent Viloyati",
          period: "2023 — 2024",
          note: "Первые шаги в IT: HTML, CSS, JavaScript, Git, GitHub.",
        },
      ],
      certificates: [
        {
          title: "NEXUS30 Hackathon — GovTech Track Finalist",
          issuer: "NEXUS30 / Startup Garage",
          year: "2026",
          url: "/nexus30-certificate.pdf",
        },
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
        "Leaflet GIS",
        "Godot Engine",
        "Aseprite",
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
      role: "Junior Business / System Analyst | Frontend Developer",
      summary: [
        "Motivated School 21 (Sber project) student specializing in Business & System Analysis (BSA) — designing relational databases, working with SQL, business process modeling, and UML architecture.",
        "Combining systems analysis with modern frontend engineering (React.js, TypeScript, Leaflet GIS). NEXUS30 GovTech Hackathon Finalist and Tribe Master / Volunteer Lead at School 21.",
      ],
      status: "Open to internships & junior roles",
      experience: [
        {
          company: "NEXUS30 Hackathon — GovTech Track",
          title: "Frontend & BSA Lead | React, GIS & AI",
          period: "08.2026",
          bullets: [
            "Built 'Yoshlar Bandligi GovTech 2.0' — an omnichannel digital platform for municipal district authorities and youth inspectors across 8 mahallas of Mirzo-Ulugbek district.",
            "Designed Interactive GIS Map v2.0 (Leaflet) with canonical GPS polygons, NEET risk heatmaps, and automated routing to career infrastructure POIs.",
            "Integrated real-time WebSocket sync with Telegram Bot (@Eshlar_bandligi_bot) and in-memory Sovereign AI Copilot (RAG & NLP) for executive memo generation.",
            "Architected Zero Inbox workflow and full bilingual localization (English / Russian / Uzbek Latin).",
          ],
        },
        {
          company: "School 21 - Uzbekistan",
          title: "Volunteer Lead",
          period: "02.2026 — 06.2026",
          bullets: [
            "Led the campus volunteer corps: recruited volunteers, distributed cluster shifts, and scheduled duty rosters.",
            "Digitized internal corps workflows using Excel: automated shift tracking, logged hours, and internal coin currency accounting.",
            "Conducted briefings, mentored team members, and resolved conflicts between volunteers and intensive participants.",
          ],
        },
        {
          company: "School 21 - Uzbekistan",
          title: "Tribe Master",
          period: "09.2025 — 02.2026",
          bullets: [
            "Led all four campus tribes consecutively (Ayid, Laylak, Qolpon, Jayron).",
            "Coordinated team activities, tracked rankings, and organized internal community events.",
            "Facilitated post-exam reflections and mentored students through high-stress academic milestones.",
          ],
        },
      ],
      projects: [
        {
          slug: "yoshlar-bandligi",
          title: "Yoshlar Bandligi — GovTech 2.0",
          description:
            "Flagship project of the NEXUS30 Hackathon: an omnichannel digital ecosystem for youth employment monitoring, predictive NEET triage, and smart support routing for municipal government.",
          tags: ["GovTech", "GIS Map", "Telegram Bot", "AI Copilot", "Hackathon Finalist"],
          stack: ["React 18", "TypeScript", "TailwindCSS", "Leaflet GIS", "WebSockets", "Node.js", "Express", "Grammy"],
          highlights: [
            "Interactive GIS Map v2.0 with canonical mahalla GPS boundaries, NEET risk heatmaps, and POI career routing.",
            "Omnichannel companion: field Telegram bot @Eshlar_bandligi_bot with real-time two-way WebSocket sync.",
            "Zero Inbox & Sovereign AI Copilot: automated visit quotas and instant executive memo generation for the District Hokim.",
          ],
          links: {
            demo: "https://yoshlar-bandligi-govtech.vercel.app",
            bot: "https://t.me/Eshlar_bandligi_bot",
            github: "https://github.com/fluxo159/NEVERLOSE-Memesense",
          },
        },
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
            "BSA track: database modeling, SQL, business process analysis, UML diagrams. Peer-to-peer methodology.",
        },
        {
          title: "Astrum IT Academy",
          place: "Tashkent",
          period: "2024 - 2025",
          note:
            "Pre-Season intensive & React.js Frontend Developer track: HTML5, CSS3, JavaScript ES6+, React.js.",
        },
        {
          title: "ProWeb",
          place: "Aybek Street 16",
          period: "2024 - 2025",
          note:
            "Responsive Web Design, Figma layout implementation, React, Vue, Vite, TypeScript.",
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
          title: "NEXUS30 Hackathon — GovTech Track Finalist",
          issuer: "NEXUS30 / Startup Garage",
          year: "2026",
          url: "/nexus30-certificate.pdf",
        },
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
        "Leaflet GIS",
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
      role: "Junior Business / System Analyst | Frontend Developer",
      summary: [
        "School 21da BSA (Biznes va tizimli tahlil) yo‘nalishida o‘qiyotgan talabaman: ma’lumotlar bazalarini loyihalash, SQL, biznes jarayonlarni modellashtirish va UML diagrammalar.",
        "Tizimli tahlilni zamonaviy frontend dasturlash (React.js, TypeScript, Leaflet GIS) bilan uyg‘unlashtiraman. NEXUS30 GovTech xakatoni finalchisi hamda School 21da Tribe Master / Volunteer Lead tajribasiga egaman.",
      ],
      status: "Stajirovka va junior lavozimlar uchun ochiq",
      experience: [
        {
          company: "NEXUS30 Xakatoni — GovTech yo‘nalishi",
          title: "Frontend & BSA Lead | React, GIS & AI",
          period: "08.2026",
          bullets: [
            "Mirzo Ulug‘bek tuman hokimiyati va 8 ta mahalla yoshlar yetakchilari uchun «Yoshlar Bandligi» raqamli platformasini ishlab chiqdim: yoshlar hisobi, NEET triaji va davlat yordami dasturlariga yo‘naltirish.",
            "8 ta mahalla GPS ko‘pburchaklari, NEET xavf qatlamlari va bandlik markazlari (POI) bilan interaktiv GIS xaritasini (Leaflet v2.0) yaratdim.",
            "Xonadonbay o‘rganish uchun Telegram-bot (@Eshlar_bandligi_bot) bilan real-vaqtdagi WebSocket sinxronizatsiyasi va Hokim uchun AI-Maslahatchini (RAG & NLP) joriy qildim.",
            "Zero Inbox metodologiyasi, Excel hisobotlar eksporti va 100% ikki tilli interfeysni (Lotin alifbosi / Rus tili) shakllantirdim.",
          ],
        },
        {
          company: "School 21 - Uzbekistan",
          title: "Volunteer Lead",
          period: "02.2026 — 06.2026",
          bullets: [
            "Volontyorlar korpusini boshqardim: intensivlarga volontyorlarni saralash, smenalarni taqsimlash va navbatchilik jadvallarini tuzish.",
            "Excel asosida ichki jarayonlarni raqamlashtirdim: smenalar hisobi, ishlangan soatlar va ichki valyuta hisob-kitobi.",
            "Brifinglar o‘tkazdim, jamoani rag‘batlantirdim va yuzaga kelgan masalalarni hal qildim.",
          ],
        },
        {
          company: "School 21 - Uzbekistan",
          title: "Tribe Master",
          period: "09.2025 — 02.2026",
          bullets: [
            "Kampusdagi barcha 4 ta traybni navbatma-navbat boshqardim (Ayid, Laylak, Qolpon, Jayron).",
            "Jamoaviy faoliyatni muvofiqlashtirdim, reytinglarni yuritdim va tadbirlarni tashkil qildim.",
            "Talabalarni imtihonlardan so‘ng tahlil qilishga va qiyin o‘quv jarayonlarida stressni yengishga yo‘naltirdim.",
          ],
        },
      ],
      projects: [
        {
          slug: "yoshlar-bandligi",
          title: "Yoshlar Bandligi — GovTech 2.0",
          description:
            "NEXUS30 xakatoni flagman loyihasi: tuman hokimiyati va mahalla yetakchilari uchun yoshlar bandligi monitoringi, NEET triaji va davlat dasturlariga yo‘naltirish raqamli ekotizimi.",
          tags: ["GovTech", "GIS Map", "Telegram Bot", "AI Copilot", "Hackathon Finalist"],
          stack: ["React 18", "TypeScript", "TailwindCSS", "Leaflet GIS", "WebSockets", "Node.js", "Express", "Grammy"],
          highlights: [
            "8 ta mahalla GPS chegaralari, NEET xavf qatlamlari va infratuzilma obyektlari bilan interaktiv GIS xaritasi v2.0.",
            "Xonadonbay o‘rganish uchun @Eshlar_bandligi_bot mobil Telegram-boti bilan real-vaqtdagi WebSocket sinxronizatsiyasi.",
            "Zero Inbox va AI-Maslahatchi: xonadonbay ko‘riklar kvotasi va Hokim uchun bildirishnomalarni avtomatik shakllantirish.",
          ],
          links: {
            demo: "https://yoshlar-bandligi-govtech.vercel.app",
            bot: "https://t.me/Eshlar_bandligi_bot",
            github: "https://github.com/fluxo159/NEVERLOSE-Memesense",
          },
        },
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
            "BSA yo‘nalishi: ma’lumotlar bazalarini loyihalash, SQL, biznes jarayonlar tahlili, UML diagrammalar.",
        },
        {
          title: "Astrum IT Academy",
          place: "Toshkent",
          period: "2024 - 2025",
          note:
            "Pre-Season va React.js Frontend Developer yo‘nalishi: HTML5, CSS3, chuqur JavaScript, React.js.",
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
          title: "NEXUS30 Xakatoni — GovTech yo‘nalishi finalchisi",
          issuer: "NEXUS30 / Startup Garage",
          year: "2026",
          url: "/nexus30-certificate.pdf",
        },
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
        "Leaflet GIS",
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
