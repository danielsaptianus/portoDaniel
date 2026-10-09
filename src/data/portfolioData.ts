export interface Project {
  id: string;
  title: string;
  category: "backend" | "fullstack" | "enterprise";
  description: string;
  icon: string;
  badge?: string;
  theme?: "cyan" | "purple" | "default";
  tags: string[];
  link?: string;
  linkText?: string;
  internalOnly?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  techStack: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; tag: string }[];
}

export const portfolioData = {
  profile: {
    name: "Daniel Hulio Saptianus",
    role: "Junior Backend Engineer",
    titleLead:
      "Spesialis dalam merancang arsitektur backend yang tangguh, modular, dan terukur. Berpengalaman membangun RESTful API & sistem perpesanan real-time bertenaga NestJS, PostgreSQL, Prisma ORM, Socket.io, dan Laravel dengan penerapan prinsip Clean Architecture.",
    status: "Open for Backend & Software Engineering Roles",
    email: "huliosaptianusdaniel@gmail.com",
    linkedin: "https://www.linkedin.com/in/daniel-hulio-saptianus-73a764294/",
    github: "https://github.com/danielsaptianus",
    domains: {
      primary: "danielsaptianus.my.id",
      pos: "https://pos.danielsaptianus.my.id",
      chat: "https://chat.danielsaptianus.my.id",
    },
  },

  metrics: [
    { number: "NestJS & SQL", label: "Primary Stack Focus" },
    { number: "WebSockets", label: "Real-Time Messaging" },
    { number: "2 Live Apps", label: "Subdomains Active" },
  ],

  terminalTabs: [
    {
      id: "tab-profile",
      filename: "engineer.ts",
      language: "typescript",
      code: `export interface BackendEngineer {
  name: "Daniel Hulio Saptianus";
  role: "Junior Backend Engineer";
  education: "Universitas Pendidikan Indonesia";
  domains: {
    primary: "danielsaptianus.my.id";
    subdomains: {
      pos: "pos.danielsaptianus.my.id";  // Point of Sales
      chat: "chat.danielsaptianus.my.id"; // ChatSphere Realtime
    };
  };
  contact: {
    email: "huliosaptianusdaniel@gmail.com";
    status: "Ready for high-impact backend engineering";
  };
  corePrinciples: [
    "Clean Architecture & DDD",
    "Modular RESTful APIs & WebSockets",
    "Strict Typing & DTO Validation",
    "E2E Automated Testing"
  ];
}`,
    },
    {
      id: "tab-stack",
      filename: "stack.config.json",
      language: "json",
      code: `{
  "backend": {
    "frameworks": ["NestJS 11", "Express.js", "Laravel 12"],
    "realtime": ["Socket.io", "WebSockets"],
    "databases": ["PostgreSQL 16+", "MySQL", "Apache Doris"],
    "orms": ["Prisma 7", "Sequelize", "Eloquent"]
  },
  "subdomains": [
    "pos.danielsaptianus.my.id",
    "chat.danielsaptianus.my.id"
  ]
}`,
    },
    {
      id: "tab-pos",
      filename: "pos-service.ts",
      language: "typescript",
      code: `// pos.danielsaptianus.my.id backend core
@Injectable()
export class PosTransactionService {
  constructor(private prisma: PrismaService) {}

  async checkout(dto: CreateOrderDto) {
    return await this.prisma.$transaction(async (tx) => {
      const order = await tx.order.create({ data: dto });
      await this.decrementStock(tx, dto.items);
      return { status: 201, orderId: order.id };
    });
  }
}`,
    },
    {
      id: "tab-chat",
      filename: "chat-gateway.ts",
      language: "typescript",
      code: `// chat.danielsaptianus.my.id WebSocket Gateway
@WebSocketGateway({ cors: { origin: '*' } })
export class ChatGateway {
  constructor(private chatService: ChatService) {}

  @SubscribeMessage('pc_message')
  async handleDirectMessage(
    @ConnectedSocket() socket: Socket,
    @MessageBody() dto: SendMessageDto
  ) {
    const msg = await this.chatService.saveMessage(dto);
    socket.to(dto.receiverId).emit('pc_message', msg);
    return { status: 200, messageId: msg.id };
  }
}`,
    },
  ],

  projects: [
    {
      id: "pos-system",
      title: "Point of Sales (POS) System",
      category: "fullstack",
      theme: "cyan",
      badge: "Subdomain: pos.",
      icon: "🛒",
      description:
        "Sistem kasir end-to-end dengan pemisahan arsitektur antara NestJS (Prisma + PostgreSQL) dan Vue 3 (Vite + Pinia). Dilengkapi E2E tests dan Swagger API docs.",
      tags: ["NestJS", "Vue 3", "PostgreSQL", "Prisma ORM", "TypeScript", "Jest E2E"],
      link: "https://pos.danielsaptianus.my.id",
      linkText: "Live App (pos.danielsaptianus.my.id)",
    },
    {
      id: "chatsphere",
      title: "ChatSphere - Real-Time Chat App",
      category: "fullstack",
      theme: "purple",
      badge: "Subdomain: chat.",
      icon: "💬",
      description:
        "Aplikasi perpesanan instan real-time dengan NestJS 11, Prisma 7, PostgreSQL, dan Socket.io. Dilengkapi Direct Message, WhatsApp-style group approval, dan notifikasi instan.",
      tags: ["NestJS 11", "Socket.io", "PostgreSQL", "Prisma 7", "JWT RBAC"],
      link: "https://chat.danielsaptianus.my.id",
      linkText: "Live App (chat.danielsaptianus.my.id)",
    },
    {
      id: "campus-bigdata",
      title: "Campus Big Data & Analytics Warehouse",
      category: "enterprise",
      theme: "default",
      badge: "Enterprise DSTI",
      icon: "📊",
      description:
        "Penyusunan arsitektur data warehouse institusi memanfaatkan Apache Doris untuk analitik performa tinggi, dashboard visualisasi terintegrasi Apache Superset, dan backend Laravel.",
      tags: ["Laravel", "Apache Doris", "Apache Superset", "PostgreSQL", "Data Warehouse"],
      internalOnly: true,
      linkText: "Internal Enterprise System",
    },
    {
      id: "marketing-pipeline",
      title: "Marketing Monitoring & Data Pipeline",
      category: "backend",
      theme: "default",
      badge: "Analytics Tool",
      icon: "📈",
      description:
        "Sistem pemantauan indikator kinerja pemasaran secara berkala dengan penarikan data terautomasi, agregasi metrik penjualan, dan pelaporan terstruktur.",
      tags: ["Node.js", "MySQL", "Cron Scheduler", "REST API"],
      link: "#contact",
      linkText: "Inquire Architecture",
    },
    {
      id: "pdf-csv-extractor",
      title: "PDF to CSV Data Extractor",
      category: "backend",
      theme: "default",
      badge: "Automation Tool",
      icon: "📄",
      description:
        "Tool utilitas untuk mengekstraksi data tabel terstruktur dari dokumen PDF secara presisi dan mengekspornya menjadi format CSV atau database relational.",
      tags: ["Python", "JavaScript", "Data Parsing", "Automation"],
      link: "#contact",
      linkText: "Source & Details",
    },
    {
      id: "chess-engine",
      title: "Deep Learning Chess Engine",
      category: "enterprise",
      theme: "default",
      badge: "AI & Algorithms",
      icon: "♟️",
      description:
        "Eksperimen komputasi kecerdasan buatan dalam evaluasi langkah catur dan pemodelan status papan menggunakan jaringan saraf tiruan (deep learning) dan algoritma minimax.",
      tags: ["Python", "Machine Learning", "Minimax Algorithm", "Game Trees"],
      link: "#contact",
      linkText: "Explore Research",
    },
  ] as Project[],

  experiences: [
    {
      id: "urbansolv",
      role: "Backend Engineer Intern",
      company: "UrbanSolv",
      period: "Internship",
      description: [
        "Mengembangkan dan mengoptimalkan backend sistem Point of Sale (POS) menggunakan NestJS.",
        "Merancang skema relasional dan migrasi database menggunakan Prisma ORM dan Sequelize dengan PostgreSQL.",
        "Memformulasikan struktur kode yang bersih, modular, dan terisolasi untuk memastikan stabilitas dan performa API kasir.",
      ],
      techStack: ["NestJS", "PostgreSQL", "Prisma ORM", "Sequelize", "REST API"],
    },
    {
      id: "dsti-upi",
      role: "Full Stack Developer Intern",
      company: "Direktorat Sistem & Teknologi Informasi (DSTI) Universitas Pendidikan Indonesia",
      period: "Internship",
      description: [
        "Membangun modul aplikasi institusi kampus skala besar menggunakan Laravel 12 dan Laravel 8.",
        "Mengimplementasikan strategi optimasi query SQL dan konfigurasi skema relasional PostgreSQL.",
        "Mengintegrasikan pipeline penyimpanan analitik data besar menggunakan Apache Doris dan visualisasi dashboard pada Apache Superset.",
      ],
      techStack: ["Laravel 12 / 8", "PostgreSQL", "Apache Doris", "Apache Superset", "PHP"],
    },
    {
      id: "upi-academic",
      role: "Undergraduate Computer Science",
      company: "Universitas Pendidikan Indonesia (UPI)",
      period: "Academic Track",
      description: [
        "Core Computer Science: Data Structures & Algorithms, Distributed Application Development, Operating Systems, Computer Networks.",
        "Database & Data: Database Systems, Advanced Database Technology, Data Mining & Warehousing.",
        "Software Quality: Software Requirements Engineering, Software Construction, Software Quality Assurance, Verification & Validation.",
      ],
      techStack: ["Algorithms", "Distributed Systems", "Database Engineering", "Software QA"],
    },
  ] as ExperienceItem[],

  skillCategories: [
    {
      title: "Backend Engineering",
      icon: "⚙️",
      skills: [
        { name: "NestJS (11 / 10)", tag: "Core Focus" },
        { name: "Socket.io / WebSockets", tag: "Real-time" },
        { name: "Express.js", tag: "Advanced" },
        { name: "Laravel (12 / 8)", tag: "Proficient" },
        { name: "Clean Architecture", tag: "Pattern" },
      ],
    },
    {
      title: "Databases & ORM",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL 16+", tag: "Primary DB" },
        { name: "MySQL", tag: "Relational" },
        { name: "Prisma ORM (v7)", tag: "Type-safe" },
        { name: "Sequelize", tag: "ORM" },
        { name: "Apache Doris", tag: "OLAP DW" },
      ],
    },
    {
      title: "Languages & Web",
      icon: "💻",
      skills: [
        { name: "TypeScript", tag: "Core" },
        { name: "JavaScript (ES6+)", tag: "Expert" },
        { name: "PHP", tag: "Backend" },
        { name: "Python", tag: "Automation" },
        { name: "Vue 3 & Vite", tag: "Frontend" },
      ],
    },
    {
      title: "Testing & DevOps",
      icon: "🔧",
      skills: [
        { name: "Jest E2E & Unit Tests", tag: "QA" },
        { name: "Swagger / OpenAPI", tag: "Docs" },
        { name: "Postman", tag: "API Testing" },
        { name: "Git & GitHub", tag: "VCS" },
        { name: "Apache Superset", tag: "BI Dashboard" },
      ],
    },
  ] as SkillCategory[],
};
