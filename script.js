const routes = [
  "home",
  "about",
  "solutions",
  "products",
  "books",
  "tests",
  "partners",
  "customers",
  "projects",
  "gallery",
  "news",
  "resources",
  "contact",
  "privacy",
  "terms",
];

const img = {
  meeting: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=82",
  workshop: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=82",
  classroom: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=82",
  digital: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=82",
  students: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=82",
  partner: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=82",
  school: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=82",
  campus: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=82",
};

const services = [
  {
    icon: "BK",
    title: "Educational Books & Materials",
    desc: "Textbooks, workbooks, readers, teacher guides, flashcards, and learning resources selected for classroom quality.",
    items: ["Textbooks", "Workbooks", "Readers", "Teacher guides", "Flashcards"],
  },
  {
    icon: "DL",
    title: "Digital Learning Solutions",
    desc: "Digital accounts and classroom tools that help schools manage reading, practice, and student progress.",
    items: ["E-library", "Online learning accounts", "Teacher dashboards", "Student progress tools"],
  },
  {
    icon: "AT",
    title: "Assessment & Testing",
    desc: "Placement, benchmark, and English level testing options with clear implementation support.",
    items: ["Placement tests", "Benchmark tests", "English level testing", "Certification support"],
  },
  {
    icon: "SC",
    title: "School Consultation",
    desc: "Practical guidance for choosing resources and building a workable implementation plan.",
    items: ["Product recommendation", "Curriculum support", "Implementation planning"],
  },
  {
    icon: "TR",
    title: "Training & Support",
    desc: "Teacher orientation, product training, and responsive assistance after launch.",
    items: ["Teacher orientation", "Product training", "Ongoing support"],
  },
  {
    icon: "BO",
    title: "Bulk Orders & Distribution",
    desc: "Coordinated supply support for schools, bookstores, publishers, and institutional partners.",
    items: ["School orders", "Delivery coordination", "Partner supply support"],
  },
];

const productCategories = {
  Books: ["All", "Course Book", "Phonics", "Listening", "Student Book", "Workbook", "Kindergarten", "Primary", "Secondary"],
  Tests: ["All", "Placement Tests", "Benchmark Tests", "English Level Testing", "Certification Support", "Mock Exams", "Progress Tests"],
};

const coverRoot = "assets/book-covers/final_book_covers_all_titles";

const products = [
  {
    title: "Fast Phonics Student Book",
    series: "Fast Phonics",
    type: "Books",
    category: "Phonics",
    format: "Student Book",
    publisher: "Compass Publishing",
    level: "Kindergarten",
    desc: "Kindergarten phonics student book for early sounds, letters, and decoding practice.",
    cover: `${coverRoot}/Compass Publishing/Kindergarten/Phonics/Fast Phonics/Fast Phonics Student Book.jpg`,
  },
  {
    title: "Fast Phonics Workbook",
    series: "Fast Phonics",
    type: "Books",
    category: "Phonics",
    format: "Workbook",
    publisher: "Compass Publishing",
    level: "Kindergarten",
    desc: "Kindergarten phonics workbook with extra practice for the Fast Phonics course.",
    cover: `${coverRoot}/Compass Publishing/Kindergarten/Phonics/Fast Phonics/Fast Phonics Workbook.jpg`,
  },
  ...[1, 2, 3, 4, 5, 6].map((level) => ({
    title: `Sounds Great 2nd Edition ${level} Student Book`,
    series: "Sounds Great 2nd Edition",
    type: "Books",
    category: "Phonics",
    format: "Student Book",
    publisher: "Compass Publishing",
    level: "Kindergarten",
    desc: `Kindergarten phonics student book level ${level} from Sounds Great 2nd Edition.`,
    cover: `${coverRoot}/Compass Publishing/Kindergarten/Phonics/Sounds Great 2nd Edition/Student Book/Sounds Great 2nd Edition ${level} Student Book.jpg`,
  })),
  ...[1, 2, 3, 4, 5, 6].map((level) => ({
    title: `Sounds Great 2nd Edition ${level} Workbook`,
    series: "Sounds Great 2nd Edition",
    type: "Books",
    category: "Phonics",
    format: "Workbook",
    publisher: "Compass Publishing",
    level: "Kindergarten",
    desc: `Kindergarten phonics workbook level ${level} from Sounds Great 2nd Edition.`,
    cover: `${coverRoot}/Compass Publishing/Kindergarten/Phonics/Sounds Great 2nd Edition/Workbook/Sounds Great 2nd Edition ${level} Workbook.jpg`,
  })),
  ...[1, 2].map((level) => ({
    title: `Hang Out Plus ${level} Student Book`,
    series: "Hang Out Plus",
    type: "Books",
    category: "Course Book",
    format: "Student Book",
    publisher: "Compass Publishing",
    level: "Primary",
    desc: `Primary course book level ${level} for classroom English learning and skills practice.`,
    cover: `${coverRoot}/Compass Publishing/Primary/Course Book/Hang Out Plus/Hang Out Plus ${level} Student Book.jpg`,
  })),
  ...["Basic", "Elementary", "Intermediate", "Pre-advanced"].map((levelName) => ({
    title: `Listening Framework ${levelName} 1`,
    series: "Listening Framework",
    type: "Books",
    category: "Listening",
    format: "Student Book",
    publisher: "Compass Publishing",
    level: "Primary",
    desc: `Primary listening skills book for ${levelName.toLowerCase()} learners.`,
    cover: `${coverRoot}/Compass Publishing/Primary/Listening/Listening Framework/Listening Framework ${levelName} 1.${["Basic", "Elementary"].includes(levelName) ? "png" : "jpg"}`,
  })),
  ...[1, 2, 5].map((level) => ({
    title: `Hand in Hand 2nd Edition ${level} Student Book`,
    series: "Hand in Hand 2nd Edition",
    type: "Books",
    category: "Course Book",
    format: "Student Book",
    publisher: "E-Future",
    level: "Primary",
    desc: `Primary course book level ${level} from Hand in Hand 2nd Edition.`,
    cover: `${coverRoot}/E-Future/Primary/Course Book/Hand in Hand 2nd Edition/Hand in Hand 2nd Edition ${level} Student Book.jpg`,
  })),
  {
    title: "Hand in Hand 2nd Edition Starter Student Book",
    series: "Hand in Hand 2nd Edition",
    type: "Books",
    category: "Course Book",
    format: "Student Book",
    publisher: "E-Future",
    level: "Primary",
    desc: "Starter-level primary course book from Hand in Hand 2nd Edition.",
    cover: `${coverRoot}/E-Future/Primary/Course Book/Hand in Hand 2nd Edition/Hand in Hand 2nd Edition Starter Student Book.jpg`,
  },
  ...["Starter", 1, 2, 3, 4, 5, 6].map((level) => ({
    title: `Smart English ${level} Student Book`,
    series: "Smart English 2nd Edition",
    type: "Books",
    category: "Course Book",
    format: "Student Book",
    publisher: "E-Future",
    level: "Primary",
    desc: `${level === "Starter" ? "Starter-level" : `Level ${level}`} primary course book from Smart English 2nd Edition.`,
    cover: `${coverRoot}/E-Future/Primary/Course Book/Smart English 2nd Edition/Smart English ${level} Student Book.jpg`,
  })),
  ...[1, 2, 3, 4, 5, 6].map((level) => ({
    title: `English Wave ${level} Student Book`,
    series: "English Wave",
    type: "Books",
    category: "Course Book",
    format: "Student Book",
    publisher: "E-Future",
    level: "Secondary",
    desc: `Secondary course book level ${level} from the English Wave series.`,
    cover: `${coverRoot}/E-Future/Secondary/Course Book/English Wave/English Wave ${level} Student Book.jpg`,
  })),
  ...[1, 2, 3, 4, 5].map((level) => ({
    title: `Phonics Code ${level} Student Book`,
    series: "Phonics Code",
    type: "Books",
    category: "Phonics",
    format: "Student Book",
    publisher: "NE Build and Grow",
    level: "Kindergarten",
    desc: `Kindergarten phonics student book level ${level} from the Phonics Code series.`,
    cover: `${coverRoot}/NE Build and Grow/Kindergarten/Phonics/Phonics Code/Phonics Code ${level} Student Book.jpeg`,
  })),
];

const testProducts = [
  {
    title: "English Placement Test Package",
    category: "Placement Tests",
    level: "School Intake",
    provider: "S4S Assessment Support",
    desc: "Placement testing support for schools and language centers grouping learners by practical English level.",
  },
  {
    title: "Benchmark Progress Testing",
    category: "Benchmark Tests",
    level: "Term Review",
    provider: "S4S Assessment Support",
    desc: "Benchmark testing resources that help institutions monitor learner development across the academic year.",
  },
  {
    title: "English Level Testing",
    category: "English Level Testing",
    level: "CEFR Alignment",
    provider: "S4S Assessment Support",
    desc: "English level testing options for schools that need clearer learner grouping and progress reporting.",
  },
  {
    title: "Certification Support Practice",
    category: "Certification Support",
    level: "Exam Readiness",
    provider: "S4S Assessment Support",
    desc: "Practice and support resources for learners preparing for recognized English certification pathways.",
  },
  {
    title: "Mock Exam Preparation Pack",
    category: "Mock Exams",
    level: "Exam Simulation",
    provider: "S4S Assessment Support",
    desc: "Mock exam materials for institutions preparing learners for timed test conditions and review cycles.",
  },
  {
    title: "Progress Test Review Pack",
    category: "Progress Tests",
    level: "Classroom Review",
    provider: "S4S Assessment Support",
    desc: "Progress test support for teachers checking student understanding during the academic term.",
  },
];

const bannerSlides = [
  {
    eyebrow: "New learning series",
    title: "Hand in Hand",
    subtitle: "2nd Edition English Course for Young Learners",
    partner: "assets/logos/Partners/Efuture.png",
    tone: "blue-yellow",
    books: ["1", "2", "3", "4", "5", "6"],
    cta: "Explore Products",
    href: "#products",
  },
  {
    eyebrow: "Pearson Languages",
    title: "Speak with Confidence",
    subtitle: "Course books, readers, digital learning and school support",
    partner: "assets/logos/Partners/Pearson.png",
    tone: "yellow-white",
    books: ["A1", "A2", "B1", "B2"],
    cta: "View Partners",
    href: "#partners",
  },
  {
    eyebrow: "Top classroom resources",
    title: "Macmillan Education",
    subtitle: "Trusted English learning materials for schools and learning centers",
    partner: "assets/logos/Partners/Macmillan.jpg",
    tone: "red-soft",
    books: ["Starter", "Level 1", "Level 2", "Level 3"],
    cta: "Request Details",
    href: "#contact",
  },
  {
    eyebrow: "Assessment support",
    title: "Cambridge English",
    subtitle: "Practice, placement and benchmark testing for institutions",
    partner: "assets/logos/Partners/Cambridge.png",
    tone: "navy-gold",
    books: ["Test", "Prep", "Skills", "Exam"],
    cta: "Contact Us",
    href: "#contact",
  },
];

const quickActions = [
  {
    title: "Find learning products",
    text: "Browse books, tests and classroom resources by category.",
    href: "#products",
    icon: "01",
  },
  {
    title: "Plan school implementation",
    text: "Get support choosing materials, levels and rollout plans.",
    href: "#contact",
    icon: "02",
  },
  {
    title: "Explore partner brands",
    text: "See the publishers and education providers we represent.",
    href: "#partners",
    icon: "03",
  },
  {
    title: "Request quotation support",
    text: "Send your school list or inquiry for coordinated follow-up.",
    href: "#contact",
    icon: "04",
  },
];

const audiencePathways = [
  {
    title: "For Schools",
    text: "Course books, readers, assessments, teacher orientation and local supply support.",
    href: "#customers",
    image: img.school,
  },
  {
    title: "For Learning Centers",
    text: "Flexible English programs, placement tests and level-based learning pathways.",
    href: "#products",
    image: img.students,
  },
  {
    title: "For Institutions",
    text: "Assessment planning, benchmark testing, proposal documents and implementation support.",
    href: "#contact",
    image: img.campus,
  },
  {
    title: "For Partners",
    text: "Professional market support, school communication and distribution coordination.",
    href: "#partners",
    image: img.partner,
  },
];

const partners = [
  {
    name: "Pearson",
    category: "Publishers",
    desc: "International learning resources, English textbooks, and school support materials.",
    website: "https://www.pearson.com/languages",
    logo: "assets/logos/Partners/Pearson.png",
  },
  {
    name: "Macmillan Education",
    category: "Publishers",
    desc: "English language learning programs and teacher-friendly resources for schools and learning centers.",
    website: "https://www.macmillaneducation.com/",
    logo: "assets/logos/Partners/Macmillan.jpg",
  },
  {
    name: "National Geographic Learning",
    category: "Publishers",
    desc: "Global content, language learning resources, classroom media, and academic skill development.",
    website: "https://www.eltngl.com/",
    logo: "assets/logos/Partners/National Geographic.png",
    logoSize: "featured-wide",
  },
  {
    name: "MM Publications",
    category: "Publishers",
    desc: "English language teaching materials, course books, and supplementary classroom resources.",
    website: "https://www.mmpublications.com/",
    logo: "assets/logos/Partners/MM publications.png",
  },
  {
    name: "Vector Maths & Science",
    category: "STEM",
    desc: "Maths and science learning resources supporting structured classroom practice.",
    website: "https://www.vector.com/",
    logo: "assets/logos/Partners/Vector.png",
    nameText: "Vector Maths & Science",
  },
  {
    name: "Binary Logic",
    category: "Digital Learning",
    desc: "Technology and computing education resources for digital skills and modern classrooms.",
    website: "https://www.binarylogic.net/",
    logo: "assets/logos/Partners/Binary.png",
    nameText: "Binary Logic",
  },
  {
    name: "Compass Publishing",
    category: "Publishers",
    desc: "English education publishing with course books, readers, and skills-based learning materials.",
    website: "https://www.compasspub.com/",
    logo: "assets/logos/Partners/compass.png",
  },
  {
    name: "NE Build & Grow",
    category: "Publishers",
    desc: "English learning materials and children-focused education resources for schools.",
    website: "https://www.ibuildandgrow.com/",
    logo: "assets/logos/Partners/NE.png",
  },
  {
    name: "Cambridge University Press",
    category: "Publishers",
    desc: "Academic and English learning resources from a globally respected university press.",
    website: "https://www.cambridge.org/",
    logo: "assets/logos/Partners/Cambridge.png",
  },
  {
    name: "eFuture",
    category: "Publishers",
    desc: "Structured English learning programs for young learners and schools.",
    website: "https://www.efuture-elt.com/",
    logo: "assets/logos/Partners/Efuture.png",
  },
  {
    name: "Collins",
    category: "Publishers",
    desc: "Education publishing, English resources, dictionaries, and classroom support materials.",
    website: "https://collins.co.uk/",
    logo: "assets/logos/Partners/Collins.jpg",
    logoSize: "featured-square",
  },
  {
    name: "McGraw Hill Education",
    category: "Publishers",
    desc: "Education materials and academic learning solutions for schools and institutions.",
    website: "https://www.mheducation.com/",
    logo: "assets/logos/Partners/McGraw.png",
    nameText: "McGraw Hill Education",
  },
  {
    name: "Hodder Education",
    category: "Digital Learning",
    desc: "Learning resources, digital tools, and assessment preparation for schools.",
    website: "https://www.hoddereducation.com/",
    logo: "assets/logos/Partners/Hachette.png",
    nameText: "Hodder Education",
  },
];

const customerLogo = (domain) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

const customers = [
  ["The Westline School", "Private Schools", "Cambodia", "Educational materials support", "assets/customer-logos/westline-school.png"],
  ["Sovannaphumi School", "Private Schools", "Cambodia", "Educational materials support", customerLogo("sovannaphumi.edu.kh")],
  ["Modern Learning Center", "Language Centers", "Phnom Penh", "Learning materials support", "assets/customer-logos/modern-learning-center.png"],
  ["ICS International School", "International Schools", "Phnom Penh", "Educational materials support", customerLogo("ics.edu.kh")],
  ["Spring Education Center", "Language Centers", "Cambodia", "Educational materials support", "assets/customer-logos/spring-education-center.png"],
  ["AUPP Liger Leadership Academy", "International Schools", "Phnom Penh", "Educational materials support", "assets/customer-logos/aupp-liger.png"],
  ["IDEA", "Language Centers", "Cambodia", "Educational materials support", "assets/customer-logos/idea.png"],
].map(([name, type, location, service, logo]) => ({ name, type, location, service, logo }));

const projects = [
  {
    title: "Supporting a School with a Structured Phonics Program",
    type: "Private School",
    challenge: "Teachers needed a consistent early literacy sequence for mixed-level young learners.",
    solution: "We recommended leveled phonics materials, teacher guides, flashcards, and orientation sessions.",
    result: "The school launched a clearer reading pathway and improved weekly classroom planning.",
    image: img.classroom,
  },
  {
    title: "Introducing Digital Reading Resources to Classrooms",
    type: "International School",
    challenge: "The school wanted more flexible reading practice with measurable student progress.",
    solution: "We supplied digital reading accounts, teacher dashboards, and setup support.",
    result: "Teachers gained better visibility into reading activity and students accessed books from home.",
    image: img.digital,
  },
  {
    title: "Helping an Institution Choose English Assessment Tools",
    type: "Institution",
    challenge: "The institution needed reliable placement and benchmark testing for multiple learner groups.",
    solution: "We reviewed program goals, recommended assessment options, and supported test workflow planning.",
    result: "Placement decisions became more consistent and reporting was easier for administrators.",
    image: img.workshop,
  },
  {
    title: "Providing Bulk Learning Materials for a New Academic Year",
    type: "School Network",
    challenge: "A partner required coordinated supply for several campuses before term opening.",
    solution: "We prepared order lists, confirmed quantities, and coordinated delivery planning.",
    result: "Materials arrived on schedule and campus teams received organized product handover.",
    image: img.partner,
  },
];

const gallery = [
  ["School Visits", "School Visit and Resource Consultation", "2026-03-12", "Meeting academic leaders to review curriculum resource needs.", img.school],
  ["Training Sessions", "Teacher Orientation Workshop", "2026-02-26", "Hands-on introduction for teachers using new classroom materials.", img.workshop],
  ["Partner Meetings", "International Partner Planning Session", "2026-01-18", "Reviewing product roadmaps and school implementation priorities.", img.partner],
  ["Product Showcases", "Learning Materials Showcase", "2025-12-05", "Presenting book series, readers, and digital tools to school teams.", img.meeting],
  ["Education Events", "Education Fair Participation", "2025-11-21", "Connecting with schools, parents, and education professionals.", img.campus],
  ["School Visits", "Classroom Observation and Support", "2025-10-08", "Understanding teacher needs before recommending classroom solutions.", img.classroom],
].map(([category, title, date, desc, image], id) => ({ id, category, title, date, desc, image }));

const news = [
  ["Company News", "S4S CAMBODIA Expands School Support Services", "2026-05-14", "Our team is strengthening consultation, training, and implementation services for partner schools.", img.meeting],
  ["Partnerships", "New Digital Learning Collaboration Announced", "2026-04-28", "A new digital learning partnership will help schools access reading and progress tracking tools.", img.digital],
  ["Product Updates", "Updated English Readers Available for Schools", "2026-03-16", "New reader selections are now available for primary and lower secondary classrooms.", img.students],
  ["Events", "Teacher Training Session Completed in Phnom Penh", "2026-02-08", "Teachers joined a practical workshop focused on classroom use and lesson planning.", img.workshop],
  ["School Support", "Academic Year Ordering Guide Released", "2026-01-23", "Schools can now request support for new term material planning and order coordination.", img.classroom],
  ["Product Updates", "Assessment Support Packages Prepared", "2025-12-14", "Placement and benchmark testing options are available for institutions and language centers.", img.campus],
].map(([category, title, date, excerpt, image]) => ({ category, title, date, excerpt, image }));

const resources = [
  ["Company Profile", "S4S CAMBODIA Company Profile", "Overview of company background, services, and partner support capabilities.", "PDF", "3.2 MB"],
  ["Product Catalogs", "Educational Books Catalog", "Sample catalog for textbooks, readers, workbooks, and teacher resources.", "PDF", "8.5 MB"],
  ["Product Catalogs", "Digital Learning Solutions Guide", "Summary of digital platform features, classroom use, and account options.", "PDF", "4.1 MB"],
  ["Brochures", "School Support Services Brochure", "A concise introduction to consultation, training, and implementation services.", "PDF", "2.4 MB"],
  ["Forms", "School Inquiry Form", "Template for schools requesting product recommendations or quotation support.", "DOCX", "180 KB"],
  ["Certificates / Authorization Documents", "Partner Authorization Sample", "Placeholder document for supplier or publisher authorization records.", "PDF", "1.7 MB"],
  ["School Proposal Documents", "School Proposal Template", "Professional proposal structure for school resource planning discussions.", "PPTX", "5.6 MB"],
];

const app = document.getElementById("app");
let bannerIndex = 0;
let bannerTimer = null;
const state = {
  partners: { category: "All", search: "" },
  customers: { category: "All", search: "" },
  gallery: { category: "All" },
  news: { category: "All", search: "" },
  books: { category: "All", search: "" },
  tests: { category: "All", search: "" },
};

function pageHero(title, text) {
  return `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">S4S CAMBODIA</p>
        <h1>${title}</h1>
        <p>${text}</p>
      </div>
    </section>
  `;
}

function sectionHead(title, text, action = "") {
  return `
    <div class="section-head">
      <div>
        <p class="eyebrow">Professional Education Support</p>
        <h2>${title}</h2>
        <p>${text}</p>
      </div>
      ${action}
    </div>
  `;
}

function cardGrid(items, className = "three") {
  return `<div class="grid ${className}">${items.join("")}</div>`;
}

function serviceCard(service) {
  return `
    <article class="card clickable-card" data-card-href="#products" tabindex="0" role="link">
      <div class="icon">${service.icon}</div>
      <h3>${service.title}</h3>
      <p>${service.desc}</p>
      <ul class="list">${service.items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `;
}

function bookCard(book) {
  return `
    <article class="card book-card clickable-card" data-card-href="#contact" tabindex="0" role="link">
      <div class="book-cover">
        <img src="${book.cover}" alt="${book.title} cover" loading="lazy">
      </div>
      <div>
        <div class="meta"><span class="pill">${book.category}</span><span>${book.format}</span><span>${book.level}</span></div>
        <h3>${book.title}</h3>
        <p><strong>${book.publisher}</strong> &middot; ${book.series}</p>
        <p>${book.desc}</p>
        <a class="button small outline" href="#contact">Request Details</a>
      </div>
    </article>
  `;
}

function renderBannerCarousel() {
  return `
    <section class="banner-stage" aria-label="Featured product banners">
      <div class="banner-viewport" id="bannerViewport">
        <div class="banner-track" id="bannerTrack">
          ${bannerSlides.map(bannerSlide).join("")}
        </div>
        <button class="banner-arrow prev" type="button" data-banner-prev aria-label="Previous banner"><span></span></button>
        <button class="banner-arrow next" type="button" data-banner-next aria-label="Next banner"><span></span></button>
        <div class="banner-dots" aria-label="Banner slides">
          ${bannerSlides.map((_, index) => `<button class="banner-dot ${index === 0 ? "active" : ""}" type="button" data-banner-dot="${index}" aria-label="Go to banner ${index + 1}"></button>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function bannerSlide(slide, index) {
  return `
    <article class="banner-slide ${slide.tone}" data-banner-slide="${index}">
      <div class="banner-copy">
        <img class="banner-partner-logo" src="${slide.partner}" alt="" loading="eager" />
        <p>${slide.eyebrow}</p>
        <h1>${slide.title}</h1>
        <h2>${slide.subtitle}</h2>
        <a class="button gold" href="${slide.href}">${slide.cta}</a>
      </div>
      <div class="banner-products" aria-hidden="true">
        ${slide.books.map((book, bookIndex) => `<span class="banner-book b${bookIndex + 1}"><strong>${slide.title.split(" ")[0]}</strong><em>${book}</em></span>`).join("")}
      </div>
    </article>
  `;
}

function renderQuickActions() {
  return `
    <section class="section action-section">
      <div class="container">
        <div class="action-panel">
          <div class="action-title">
            <p class="eyebrow">Start here</p>
            <h2>What would you like to do today?</h2>
          </div>
          <div class="action-grid">
            ${quickActions
              .map(
                (item) => `
                  <a class="action-card" href="${item.href}">
                    <span>${item.icon}</span>
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                  </a>
                `,
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderAudiencePathways() {
  return `
    <section class="section audience-section">
      <div class="container">
        ${sectionHead("Learning and Assessment Pathways", "Clear routes for the people we support most: schools, learners, institutions and education partners.")}
        <div class="audience-grid">
          ${audiencePathways
            .map(
              (item) => `
                <a class="audience-card" href="${item.href}">
                  <img src="${item.image}" alt="" loading="lazy" />
                  <div>
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                    <span>Explore</span>
                  </div>
                </a>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function filterBar(type, categories, includeSearch = true, placeholder = "Search") {
  return `
    <div class="toolbar" data-filter-type="${type}">
      ${includeSearch ? `<label class="search"><span class="sr-only">${placeholder}</span><input type="search" value="${state[type].search || ""}" placeholder="${placeholder}" data-search="${type}" /></label>` : ""}
      <div class="filters" role="list" aria-label="${type} filters">
        ${categories
          .map(
            (cat) =>
              `<button class="filter ${state[type].category === cat ? "active" : ""}" type="button" data-filter="${type}" data-category="${cat}">${cat}</button>`,
          )
          .join("")}
      </div>
    </div>
  `;
}

function logoText(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 4)
    .toUpperCase();
}

function logoMarkup(item, className) {
  const fallback = `<span class="logo-fallback ${item.logoText ? `logo-wordmark ${item.logoClass || ""}` : ""}">${item.logoText || logoText(item.name)}</span>`;
  if (!item.logo && item.logoText) {
    return `
      <img
        class="logo-image ${className} generated-wordmark"
        src="${wordmarkDataUrl(item)}"
        alt="${item.name} logo"
        loading="eager"
      />
    `;
  }
  if (!item.logo) return fallback;
  if (item.nameText) {
    return `
      <span class="logo-combo">
      <img
        class="logo-image ${className} ${item.logoSize ? `logo-${item.logoSize}` : ""} logo-combo-image"
          src="${item.logo}"
          alt="${item.name} logo"
          loading="eager"
          onerror="this.remove();"
        />
        <span class="logo-combo-name">${item.nameText}</span>
      </span>
    `;
  }
  return `
    <img
      class="logo-image ${className}"
      ${item.logoSize ? `data-logo-size="${item.logoSize}"` : ""}
      src="${item.logo}"
      alt="${item.name} logo"
      loading="eager"
      onerror="this.remove();"
    />
    ${fallback}
  `;
}

function wordmarkDataUrl(item) {
  const theme = wordmarkTheme(item.logoClass);
  const text = escapeSvg(item.logoText);
  const fontSize = item.logoText.length > 22 ? 36 : item.logoText.length > 14 ? 42 : 54;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 150">
      <rect x="0" y="0" width="560" height="150" rx="10" fill="${theme.bg}"/>
      ${theme.accent ? `<rect x="26" y="37" width="26" height="76" rx="6" fill="${theme.accent}"/>` : ""}
      <text x="${theme.accent ? 70 : 280}" y="86" text-anchor="${theme.accent ? "start" : "middle"}" fill="${theme.fg}" font-family="${theme.font}" font-size="${fontSize}" font-weight="800">${text}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function wordmarkTheme(logoClass = "") {
  const themes = {
    "logo-vector": { bg: "#77c64a", fg: "#ffffff", accent: "#ffffff", font: "Arial, sans-serif" },
    "logo-collins": { bg: "#d9232e", fg: "#ffffff", accent: "", font: "Arial, sans-serif" },
    "logo-mcgraw": { bg: "#d9232e", fg: "#ffffff", accent: "", font: "Arial, sans-serif" },
    "logo-seed": { bg: "#d9232e", fg: "#ffffff", accent: "", font: "Arial, sans-serif" },
    "logo-cambridge": { bg: "transparent", fg: "#7f1d2d", accent: "#7f1d2d", font: "Georgia, serif" },
    "logo-cengage": { bg: "transparent", fg: "#6b8bb6", accent: "#6b8bb6", font: "Arial, sans-serif" },
    "logo-hodder": { bg: "transparent", fg: "#2e73b8", accent: "#2e73b8", font: "Arial, sans-serif" },
  };
  return themes[logoClass] || { bg: "transparent", fg: "#202124", accent: "", font: "Arial, sans-serif" };
}

function escapeSvg(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[char]);
}

function renderHome() {
  return `
    <div class="page">
      ${renderBannerCarousel()}
      ${renderQuickActions()}

      <section class="section home-intro-section">
        <div class="container split">
          <div class="split-copy">
            <p class="eyebrow">Company Profile</p>
            <h2>Reliable local support for international education solutions.</h2>
            <p>We are a Cambodia-based company focused on providing trusted educational resources, learning platforms, and support services to schools, institutions, and education partners. Our goal is to connect schools with reliable products and professional local support.</p>
            <div class="stats">
              <div class="stat"><strong>8+</strong><span>Partner categories</span></div>
              <div class="stat"><strong>40+</strong><span>Schools supported</span></div>
              <div class="stat"><strong>6</strong><span>Core services</span></div>
            </div>
          </div>
          <div class="media-card"><img src="${img.meeting}" alt="Professional school meeting" /></div>
        </div>
      </section>

      ${renderAudiencePathways()}

      <section class="section soft offer-section">
        <div class="container">
          ${sectionHead("What We Offer", "A focused service portfolio for schools, institutions, publishers, and customers.", `<a class="button outline" href="#contact">Talk to Us</a>`)}
          ${cardGrid(services.slice(0, 4).map(serviceCard), "four")}
        </div>
      </section>

      <section class="section product-showcase-section">
        <div class="container">
          ${sectionHead("Top Selling Products", "Popular books, tests, and classroom resources requested by schools, learning centers, and education partners.", `<a class="button outline" href="#products">View Products</a>`)}
          <div class="book-grid">
            ${products.slice(0, 6).map(bookCard).join("")}
          </div>
        </div>
      </section>

      <section class="section soft gallery-showcase-section">
        <div class="container">
          ${sectionHead("Activities and Gallery", "A preview of school visits, training sessions, partner meetings, and product showcases.", `<a class="button outline" href="#gallery">View Gallery</a>`)}
          <div class="image-grid">${gallery.slice(0, 6).map(galleryCard).join("")}</div>
        </div>
      </section>

      <section class="section partner-logo-showcase">
        <div class="container">
          <div class="partner-showcase-head">
            <p class="eyebrow">Partner ecosystem</p>
            <h2>Supported by trusted education partners</h2>
          </div>
          <div class="logo-train-wrap logo-only-train" aria-label="Partner logo carousel">
            <div class="logo-train">
              <div class="logo-track">
                ${[...partners, ...partners].map((partner) => `<a class="train-logo logo-only" href="#partners" aria-label="${partner.name} partner profile">${logoMarkup(partner, "train-logo-image")}</a>`).join("")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderAbout() {
  return `
    <div class="page">
      ${pageHero("About Us", "We connect schools with reliable educational products, learning platforms, assessments, and professional local support.")}
      <section class="section">
        <div class="container split">
          <div>
            <p class="eyebrow">Company Overview</p>
            <h2>Built for schools, institutions, and trusted education partners.</h2>
            <p>We are a Cambodia-based company focused on providing trusted educational resources learning platforms and support services to schools institutions and education partners. Our goal is to connect schools with reliable products and professional local support.</p>
            <p>Our team supports product recommendation, school planning, order coordination, teacher orientation, and ongoing communication so partners and customers can work with confidence.</p>
          </div>
          <div class="media-card"><img src="${img.partner}" alt="Education business partnership meeting" /></div>
        </div>
      </section>

      <section class="section soft">
        <div class="container">
          ${sectionHead("Mission, Vision and Values", "Clear principles guide how we work with customers, partners, and schools.")}
          <div class="grid two">
            <article class="card"><div class="icon">M</div><h3>Mission</h3><p>To provide schools and institutions with trusted learning solutions, practical guidance, and responsive local support.</p></article>
            <article class="card"><div class="icon">V</div><h3>Vision</h3><p>To become a respected education solutions partner known for quality, reliability, and long-term school success.</p></article>
          </div>
          <div class="grid three" style="margin-top:22px;">
            ${["Trust", "Quality", "Partnership", "Innovation", "Student Success", "Professional Service"]
              .map((value) => `<article class="card"><h3>${value}</h3><p>${value} shapes how we recommend products, communicate with schools, and support every implementation.</p></article>`)
              .join("")}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderSolutions() {
  return `
    <div class="page">
      ${pageHero("Solutions and Services", "Practical education and business solutions for schools, institutions, publishers, bookstores, and partners.")}
      <section class="section">
        <div class="container">
          ${sectionHead("Complete School Support Portfolio", "Each service is designed to be easy for school teams to understand, implement, and scale.")}
          ${cardGrid(services.map(serviceCard), "three")}
        </div>
      </section>
      <section class="section soft">
        <div class="container split">
          <div class="media-card"><img src="${img.workshop}" alt="Teacher training workshop" /></div>
          <div>
            <p class="eyebrow">Implementation Support</p>
            <h2>From recommendation to classroom use.</h2>
            <p>We help schools review needs, select suitable materials, prepare orders, orient teachers, and communicate clearly with decision makers throughout the process.</p>
            <div class="actions"><a class="button" href="#contact">Request Consultation</a><a class="button outline" href="#resources">Download Documents</a></div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function productCategoryButton(label, group, activeValue, route) {
  return `<button class="product-chip ${activeValue === label ? "active" : ""}" type="button" data-product-category="${label}" data-product-group="${group}" data-product-route="${route}">${label}</button>`;
}

function productChoiceCard(item) {
  return `
    <article class="card product-choice-card clickable-card" data-card-href="${item.href}" tabindex="0" role="link">
      <div class="product-choice-icon">${item.icon}</div>
      <div>
        <p class="eyebrow">${item.eyebrow}</p>
        <h2>${item.title}</h2>
        <p>${item.desc}</p>
        <div class="meta">${item.meta.map((value) => `<span>${value}</span>`).join("")}</div>
        <a class="button" href="${item.href}">${item.cta}</a>
      </div>
    </article>
  `;
}

function renderProducts() {
  const choices = [
    {
      icon: "BK",
      eyebrow: "Official Covers",
      title: "Books",
      desc: "Browse student books and workbooks by course book, phonics, listening, format, and school level.",
      meta: [`${products.length} titles`, "Official covers", "Book catalog"],
      cta: "View Books",
      href: "#books",
    },
    {
      icon: "EX",
      eyebrow: "Assessments",
      title: "Exams and Tests",
      desc: "Explore placement tests, benchmark tests, English level testing, mock exams, and progress test support.",
      meta: [`${testProducts.length} options`, "School support", "Exam planning"],
      cta: "View Tests",
      href: "#tests",
    },
  ];

  return `
    <div class="page">
      ${pageHero("Products", "Choose the product area you want to browse.")}
      <section class="section">
        <div class="container">
          <div class="product-choice-grid">
            ${choices.map(productChoiceCard).join("")}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderBooks() {
  return `
    <div class="page">
      ${pageHero("Books", "Browse official book covers by category, format, level, publisher, and series.")}
      <section class="section">
        <div class="container">
          <div class="product-toolbar">
            <label class="search">
              <span class="sr-only">Search book titles</span>
              <input type="search" value="${state.books.search}" placeholder="Search book titles" data-product-search="books" />
            </label>
            <a class="button outline" href="#products">All Products</a>
          </div>

          <div class="product-category-panel">
            <h2>Category</h2>
            <div class="product-category-group">
              <h3>Books</h3>
              <div class="product-chips">
                ${productCategories.Books.map((category) => productCategoryButton(category, "Books", state.books.category, "books")).join("")}
              </div>
            </div>
          </div>

          <div class="book-grid" id="booksGrid"></div>
        </div>
      </section>
    </div>
  `;
}

function testCard(item) {
  return `
    <article class="card test-card clickable-card" data-card-href="#contact" tabindex="0" role="link">
      <div class="test-card-icon">EX</div>
      <div class="meta"><span class="pill">${item.category}</span><span>${item.level}</span></div>
      <h3>${item.title}</h3>
      <p><strong>${item.provider}</strong></p>
      <p>${item.desc}</p>
      <a class="button small outline" href="#contact">Request Details</a>
    </article>
  `;
}

function renderTests() {
  return `
    <div class="page">
      ${pageHero("Exams and Tests", "Browse assessment and exam support products for placement, benchmarking, progress checks, and exam preparation.")}
      <section class="section">
        <div class="container">
          <div class="product-toolbar">
            <label class="search">
              <span class="sr-only">Search test titles</span>
              <input type="search" value="${state.tests.search}" placeholder="Search test titles" data-product-search="tests" />
            </label>
            <a class="button outline" href="#products">All Products</a>
          </div>

          <div class="product-category-panel">
            <h2>Category</h2>
            <div class="product-category-group">
              <h3>Tests</h3>
              <div class="product-chips">
                ${productCategories.Tests.map((category) => productCategoryButton(category, "Tests", state.tests.category, "tests")).join("")}
              </div>
            </div>
          </div>

          <div class="grid three" id="testsGrid"></div>
        </div>
      </section>
    </div>
  `;
}

function partnerCard(partner) {
  return `
    <article class="card partner-card clickable-card ${partner.logoSize ? `partner-card-${partner.logoSize}` : ""}" aria-label="${partner.name}" data-card-href="${partner.website}" tabindex="0" role="link">
      <div class="partner-logo">${logoMarkup(partner, "logo-image")}</div>
    </article>
  `;
}

function renderPartners() {
  return `
    <div class="page">
      ${pageHero("Our Trusted Partners", "We collaborate with respected local and international partners to provide high-quality educational products and services.")}
      <section class="section">
        <div class="container">
          ${sectionHead("Partner Network", "All trusted publishing, digital learning, STEM, and education supply partners in one place.")}
          <div class="grid four" id="partnersGrid"></div>
        </div>
      </section>
    </div>
  `;
}

function customerCard(customer) {
  return `
    <article class="card customer-card clickable-card" data-card-href="#contact" tabindex="0" role="link">
      <div class="partner-logo">${logoMarkup(customer, "logo-image customer-logo-image")}</div>
      <span class="pill">${customer.type}</span>
      <h3>${customer.name}</h3>
      <p><strong>Location:</strong> ${customer.location}</p>
      <p><strong>Service provided:</strong> ${customer.service}</p>
    </article>
  `;
}

function renderCustomers() {
  return `
    <div class="page">
      ${pageHero("Schools and Institutions We Serve", "We are proud to support schools learning centers and institutions across Cambodia.")}
      <section class="section">
        <div class="container">
          ${filterBar("customers", ["All", "International Schools", "Private Schools", "Language Centers"], true, "Search customers")}
          <div class="grid four" id="customersGrid"></div>
        </div>
      </section>
    </div>
  `;
}

function renderProjects() {
  return `
    <div class="page">
      ${pageHero("Projects and Case Studies", "Representative examples of how our team supports schools, institutions, and partner organizations.")}
      <section class="section">
        <div class="container grid two">
          ${projects
            .map(
              (project) => `
                <article class="card project-card clickable-card" data-card-href="#contact" tabindex="0" role="link">
                  <img src="${project.image}" alt="${project.title}" />
                  <div>
                    <span class="pill">${project.type}</span>
                    <h3>${project.title}</h3>
                    <div class="case-lines">
                      <p><b>Challenge:</b> ${project.challenge}</p>
                      <p><b>Solution:</b> ${project.solution}</p>
                      <p><b>Result:</b> ${project.result}</p>
                    </div>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function galleryCard(item) {
  return `
    <article class="image-card" data-gallery-id="${item.id}" tabindex="0" role="button" aria-label="Open ${item.title}">
      <img src="${item.image}" alt="${item.title}" />
      <div class="body">
        <div class="meta"><span class="pill">${item.category}</span><span>${formatDate(item.date)}</span></div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    </article>
  `;
}

function renderGallery() {
  return `
    <div class="page">
      ${pageHero("Gallery and Activities", "School visits, training sessions, partner meetings, product showcases, and education events.")}
      <section class="section">
        <div class="container">
          ${filterBar("gallery", ["All", "School Visits", "Training Sessions", "Partner Meetings", "Product Showcases", "Education Events"], false)}
          <div class="image-grid" id="galleryGrid"></div>
        </div>
      </section>
    </div>
  `;
}

function newsCard(item) {
  return `
    <article class="image-card clickable-card" data-card-href="#news" tabindex="0" role="link">
      <img src="${item.image}" alt="${item.title}" />
      <div class="body">
        <div class="meta"><span class="pill">${item.category}</span><span>${formatDate(item.date)}</span></div>
        <h3>${item.title}</h3>
        <p>${item.excerpt}</p>
        <a class="button small outline" href="#news">Read More</a>
      </div>
    </article>
  `;
}

function renderNews() {
  const latest = news[0];
  return `
    <div class="page">
      ${pageHero("News and Updates", "Company news, partnership updates, product announcements, events, and school support insights.")}
      <section class="section">
        <div class="container">
          <article class="card news-feature clickable-card" data-card-href="#contact" tabindex="0" role="link">
            <img src="${latest.image}" alt="${latest.title}" />
            <div class="body">
              <div class="meta"><span class="pill">${latest.category}</span><span>${formatDate(latest.date)}</span></div>
              <h2>${latest.title}</h2>
              <p>${latest.excerpt}</p>
              <a class="button" href="#contact">Ask About This Update</a>
            </div>
          </article>
        </div>
      </section>
      <section class="section soft">
        <div class="container">
          ${filterBar("news", ["All", "Company News", "Partnerships", "Product Updates", "Events", "School Support"], true, "Search news")}
          <div class="image-grid" id="newsGrid"></div>
        </div>
      </section>
    </div>
  `;
}

function renderResources() {
  const groups = [...new Set(resources.map(([group]) => group))];
  return `
    <div class="page">
      ${pageHero("Resources and Downloads", "Download company documents, product catalogs, brochures, forms, certificates, and school proposal materials.")}
      <section class="section">
        <div class="container">
          ${groups
            .map(
              (group) => `
                <div style="margin-bottom:34px;">
                  <h2>${group}</h2>
                  <div class="grid two">
                    ${resources
                      .filter(([resourceGroup]) => resourceGroup === group)
                      .map(
                        ([, title, desc, type, size]) => `
                          <article class="card resource-card clickable-card" data-card-href="#resources" tabindex="0" role="link">
                            <div class="file-icon">${type}</div>
                            <div>
                              <h3>${title}</h3>
                              <p>${desc}</p>
                              <div class="meta"><span>${type}</span><span>${size}</span></div>
                            </div>
                            <button class="button small outline" type="button" data-download="${title}">Download</button>
                          </article>
                        `,
                      )
                      .join("")}
                  </div>
                </div>
              `,
            )
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderContact() {
  return `
    <div class="page">
      ${pageHero("Contact Us", "Talk with our team about products, partnerships, school support, quotations, or general education solution questions.")}
      <section class="section">
        <div class="container contact-layout">
          <article class="card">
            <h2>Send an Inquiry</h2>
            <form class="contact-form" id="contactForm">
              <div class="form-row">
                <label>Name<input required name="name" autocomplete="name" /></label>
                <label>Organization / School<input required name="organization" autocomplete="organization" /></label>
              </div>
              <div class="form-row">
                <label>Email<input required type="email" name="email" autocomplete="email" /></label>
                <label>Phone<input name="phone" autocomplete="tel" /></label>
              </div>
              <label>Inquiry Type
                <select name="type" required>
                  <option value="">Select an inquiry type</option>
                  <option>Product Inquiry</option>
                  <option>Partnership</option>
                  <option>School Support</option>
                  <option>Quotation Request</option>
                  <option>General Question</option>
                </select>
              </label>
              <label>Message<textarea required name="message"></textarea></label>
              <button class="button" type="submit">Submit Inquiry</button>
              <p id="formStatus" role="status" aria-live="polite"></p>
            </form>
          </article>

          <aside class="contact-info">
            <article class="card">
              <h2>Company Information</h2>
              ${[
                ["AD", "Address", "Street 123, Phnom Penh, Cambodia"],
                ["PH", "Phone", "+855 12 345 678"],
                ["EM", "Email", "info@s4scambodia.com"],
                ["TG", "Telegram", "@s4scambodia"],
                ["FB", "Facebook", "facebook.com/s4scambodia"],
                ["HR", "Working Hours", "Monday - Friday, 8:00 AM - 5:30 PM"],
              ]
                .map(([icon, title, text]) => `<div class="info-line"><div class="icon">${icon}</div><div><h3>${title}</h3><p>${text}</p></div></div>`)
                .join("")}
              <div class="actions">
                <a class="button small" href="tel:+85512345678">Call Now</a>
                <a class="button small outline" href="mailto:info@s4scambodia.com">Email Us</a>
              </div>
              <div class="map">Google Maps Placeholder<br />Phnom Penh, Cambodia</div>
            </article>
          </aside>
        </div>
      </section>
    </div>
  `;
}

function renderSimpleLegal(title) {
  return `
    <div class="page">
      ${pageHero(title, "Placeholder company policy content for a complete business website presentation.")}
      <section class="section"><div class="container"><article class="card"><h2>${title}</h2><p>This page is a professional placeholder. Replace this content with your approved company legal policy before public launch.</p></article></div></section>
    </div>
  `;
}

function updateFilteredGrid(type) {
  const config = state[type];
  const search = (config.search || "").toLowerCase();
  const matchCategory = (itemCategory) => config.category === "All" || itemCategory === config.category;
  const matchText = (text) => !search || text.toLowerCase().includes(search);
  let html = "";
  let target = null;

  if (type === "partners") {
    target = document.getElementById("partnersGrid");
    const filtered = partners.filter((item) => matchText(`${item.name} ${item.category} ${item.desc}`));
    html = filtered.map(partnerCard).join("") || emptyState("No partners match your search.");
  }

  if (type === "customers") {
    target = document.getElementById("customersGrid");
    const filtered = customers.filter((item) => matchCategory(item.type) && matchText(`${item.name} ${item.type} ${item.location} ${item.service}`));
    html = filtered.map(customerCard).join("") || emptyState("No customers match your search.");
  }

  if (type === "gallery") {
    target = document.getElementById("galleryGrid");
    const filtered = gallery.filter((item) => matchCategory(item.category));
    html = filtered.map(galleryCard).join("") || emptyState("No activities available for this category.");
  }

  if (type === "news") {
    target = document.getElementById("newsGrid");
    const filtered = news.filter((item) => matchCategory(item.category) && matchText(`${item.title} ${item.category} ${item.excerpt}`));
    html = filtered.map(newsCard).join("") || emptyState("No news updates match your search.");
  }

  if (type === "books") {
    target = document.getElementById("booksGrid");
    const categoryFilter = state.books.category;
    const productSearch = (state.books.search || "").toLowerCase();
    const filtered = products.filter((item) => {
      const categoryMatches = categoryFilter === "All" || [item.category, item.format, item.level].includes(categoryFilter);
      const searchMatches =
        !productSearch ||
        item.title.toLowerCase().includes(productSearch);
      return categoryMatches && searchMatches;
    });
    html = filtered.map(bookCard).join("") || emptyState("No books match this selection.");
  }

  if (type === "tests") {
    target = document.getElementById("testsGrid");
    const categoryFilter = state.tests.category;
    const testSearch = (state.tests.search || "").toLowerCase();
    const filtered = testProducts.filter((item) => {
      const categoryMatches = categoryFilter === "All" || item.category === categoryFilter;
      const searchMatches = !testSearch || item.title.toLowerCase().includes(testSearch);
      return categoryMatches && searchMatches;
    });
    html = filtered.map(testCard).join("") || emptyState("No tests match this selection.");
  }

  if (target) target.innerHTML = html;
}

function emptyState(message) {
  return `<div class="empty">${message}</div>`;
}

function setupBannerCarousel() {
  clearInterval(bannerTimer);
  bannerTimer = null;
  const track = document.getElementById("bannerTrack");
  if (!track) return;
  bannerIndex = Math.min(bannerIndex, bannerSlides.length - 1);
  updateBannerCarousel();
  bannerTimer = setInterval(() => moveBanner(1), 3000);
}

function updateBannerCarousel() {
  const viewport = document.getElementById("bannerViewport");
  const track = document.getElementById("bannerTrack");
  const firstSlide = document.querySelector(".banner-slide");
  if (!viewport || !track || !firstSlide) return;
  const gap = Number.parseFloat(getComputedStyle(track).gap) || 0;
  const slideWidth = firstSlide.getBoundingClientRect().width;
  const offset = (viewport.clientWidth - slideWidth) / 2 - bannerIndex * (slideWidth + gap);
  track.style.transform = `translateX(${offset}px)`;
  document.querySelectorAll("[data-banner-slide]").forEach((slide, index) => {
    slide.classList.toggle("active", index === bannerIndex);
  });
  document.querySelectorAll("[data-banner-dot]").forEach((dot, index) => {
    dot.classList.toggle("active", index === bannerIndex);
  });
}

function moveBanner(direction) {
  bannerIndex = (bannerIndex + direction + bannerSlides.length) % bannerSlides.length;
  updateBannerCarousel();
}

function restartBannerTimer() {
  if (!document.getElementById("bannerTrack")) return;
  clearInterval(bannerTimer);
  bannerTimer = setInterval(() => moveBanner(1), 3000);
}

function renderRoute() {
  const route = getRoute();
  const views = {
    home: renderHome,
    about: renderAbout,
    solutions: renderSolutions,
    products: renderProducts,
    books: renderBooks,
    tests: renderTests,
    partners: renderPartners,
    customers: renderCustomers,
    projects: renderProjects,
    gallery: renderGallery,
    news: renderNews,
    resources: renderResources,
    contact: renderContact,
    privacy: () => renderSimpleLegal("Privacy Policy"),
    terms: () => renderSimpleLegal("Terms of Service"),
  };

  app.innerHTML = (views[route] || views.home)();
  app.focus({ preventScroll: true });
  document.querySelectorAll("[data-route]").forEach((link) => {
    const isProductChild = link.dataset.route === "products" && ["books", "tests"].includes(route);
    link.classList.toggle("active", link.dataset.route === route || isProductChild);
  });
  closeMenu();
  ["partners", "customers", "gallery", "news", "books", "tests"].forEach(updateFilteredGrid);
  setupBannerCarousel();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getRoute() {
  const raw = window.location.hash.replace("#", "") || "home";
  return routes.includes(raw) ? raw : "home";
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "numeric" }).format(new Date(value));
}

function closeMenu() {
  document.getElementById("navMenu").classList.remove("open");
  document.getElementById("navToggle").setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

document.addEventListener("click", (event) => {
  const clickableCard = event.target.closest("[data-card-href]");
  if (clickableCard && !event.target.closest("a, button, input, select, textarea, [data-gallery-id]")) {
    const href = clickableCard.dataset.cardHref;
    if (href?.startsWith("http")) {
      window.open(href, "_blank", "noopener");
    } else if (href) {
      window.location.hash = href.replace(/^#/, "");
    }
  }

  if (event.target.closest("[data-banner-prev]")) {
    moveBanner(-1);
    restartBannerTimer();
  }

  if (event.target.closest("[data-banner-next]")) {
    moveBanner(1);
    restartBannerTimer();
  }

  const bannerDot = event.target.closest("[data-banner-dot]");
  if (bannerDot) {
    bannerIndex = Number(bannerDot.dataset.bannerDot);
    updateBannerCarousel();
    restartBannerTimer();
  }

  const filter = event.target.closest("[data-filter]");
  if (filter) {
    const type = filter.dataset.filter;
    state[type].category = filter.dataset.category;
    document.querySelectorAll(`[data-filter="${type}"]`).forEach((button) => button.classList.toggle("active", button === filter));
    updateFilteredGrid(type);
  }

  const productCategory = event.target.closest("[data-product-category]");
  if (productCategory) {
    const route = productCategory.dataset.productRoute;
    if (state[route]) state[route].category = productCategory.dataset.productCategory;
    renderRoute();
  }

  const galleryItem = event.target.closest("[data-gallery-id]");
  if (galleryItem) openGallery(Number(galleryItem.dataset.galleryId));

  const download = event.target.closest("[data-download]");
  if (download) {
    download.textContent = "Prepared";
    setTimeout(() => {
      download.textContent = "Download";
    }, 1400);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeGallery();
  if ((event.key === "Enter" || event.key === " ") && event.target.closest("[data-card-href]")) {
    event.preventDefault();
    const card = event.target.closest("[data-card-href]");
    const href = card.dataset.cardHref;
    if (href?.startsWith("http")) {
      window.open(href, "_blank", "noopener");
    } else if (href) {
      window.location.hash = href.replace(/^#/, "");
    }
  }
  if (event.key === "Enter") {
    const galleryItem = event.target.closest("[data-gallery-id]");
    if (galleryItem) openGallery(Number(galleryItem.dataset.galleryId));
  }
});

document.addEventListener("input", (event) => {
  const input = event.target.closest("[data-search]");
  if (!input) return;
  const type = input.dataset.search;
  state[type].search = input.value;
  updateFilteredGrid(type);
});

document.addEventListener("input", (event) => {
  const productInput = event.target.closest("[data-product-search]");
  if (!productInput) return;
  const route = productInput.dataset.productSearch;
  if (!state[route]) return;
  state[route].search = productInput.value;
  updateFilteredGrid(route);
});

document.addEventListener("submit", (event) => {
  if (event.target.id !== "contactForm") return;
  event.preventDefault();
  document.getElementById("formStatus").textContent = "Thank you. Your inquiry has been prepared for submission.";
  event.target.reset();
});

function openGallery(id) {
  const item = gallery.find((entry) => entry.id === id);
  if (!item) return;
  document.getElementById("modalContent").innerHTML = `
    <img src="${item.image}" alt="${item.title}" />
    <div class="body">
      <div class="meta"><span class="pill">${item.category}</span><span>${formatDate(item.date)}</span></div>
      <h2>${item.title}</h2>
      <p>${item.desc}</p>
    </div>
  `;
  const modal = document.getElementById("galleryModal");
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

function closeGallery() {
  const modal = document.getElementById("galleryModal");
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

document.getElementById("navToggle").addEventListener("click", () => {
  const menu = document.getElementById("navMenu");
  const open = !menu.classList.contains("open");
  menu.classList.toggle("open", open);
  document.getElementById("navToggle").setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
});

document.getElementById("modalClose").addEventListener("click", closeGallery);
document.getElementById("galleryModal").addEventListener("click", (event) => {
  if (event.target.id === "galleryModal") closeGallery();
});

document.getElementById("backToTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

window.addEventListener("scroll", () => {
  document.getElementById("backToTop").classList.toggle("show", window.scrollY > 520);
});

window.addEventListener("resize", updateBannerCarousel);
window.addEventListener("hashchange", renderRoute);
window.addEventListener("load", () => {
  renderRoute();
  document.getElementById("loader").classList.add("hide");
});
