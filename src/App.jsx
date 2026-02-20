import React, { useState, useEffect } from 'react';
import { 
  ArrowDown, ArrowUpRight, Mail, Linkedin, Globe, FileText, Layout, 
  Presentation, Download, Mountain, Waves, Map, Cpu, Bot, LineChart, 
  BookOpen, ShoppingCart, Home, Phone, Moon, Sun, Github, Plus, Send, CheckCircle2
} from 'lucide-react';

const CONTENT_DATA = {
  he: {
    nav: { about: "אודות", work: "Case Studies", builder: "Projects", experience: "ניסיון", methodology: "מתודולוגיה" },
    hero: {
      greeting: "שלום, אני יניב.",
      role: "Senior Product Manager",
      whoAmI: "מי אני?",
      paragraphs: [
        "מנהל מוצר עם למעלה מ-12 שנות ניסיון בהובלת מחזור החיים המלא של מוצרים דיגיטליים מורכבים — מרעיונות ובעיות לא־מוגדרות, ועד מוצרים בשלים, מדידים ומייצרי ערך עסקי אמיתי.",
        "החוזקה המרכזית שלי היא היכולת לפשט מורכבות: לקחת אתגרים טכנולוגיים, רגולטוריים ועסקיים, ולתרגם אותם לחוויות משתמש אינטואיטיביות ולמוצרים שאנשים באמת רוצים להשתמש בהם. הובלתי בניית מוצרי 0-1, הקמת MVPs, וסקיילינג של פלטפורמות גלובליות עם מיליוני משתמשים.",
        "בשנים האחרונות אני מתמקד עמוקות בעולמות ה-AI וה-GenAI — לא כהייפ, אלא ככלי פרודוקטיבי. אני עוסק בפרודוקטיזציה של יכולות AI במטרה לייצר חוויות משתמש מתקדמות ומדידות.",
        "כמנהל מוצר וכמנהיג, אני מתמחה בבנייה והובלה של צוותי מוצר חוצי-ארגון, בהגדרת חזון ברור, בתרגום אסטרטגיה ל-Roadmap מבוסס OKRs.",
        "אני מאמין שמוצר מצוין נבנה בצומת שבין הבנת משתמש עמוקה, החלטות מבוססות נתונים, ויכולת ביצוע — מהר, חכם ועם סטנדרט גבוה."
      ]
    },
    about: {
      title: "קצת מעבר לתפקיד",
      p1: "מה שמשך אותי לניהול מוצר הוא היופי שב-UX טוב - כשמוצר מרגיש אינטואיטיבי, חכם ופשוט עובד. אני אוהב לעצב חוויות שפותרות בעיות אמיתיות ועדיין מרגישות טבעיות ומהנות לשימוש. אני Builder בנשמה, חי ונושם את עולם ה-AI.",
      p2: "כשאני לא בונה מוצרים, תמצאו אותי כנראה בחוץ: חורש סינגלים על אופני ההרים שלי, מטייל ברחבי הארץ, תופס גלים בים, או מתכנן את חופשת הסנובורד הבאה שלי. איפה שיש בלאגן וחוסר בהירות, שם אני מרגיש הכי בנוח לעשות סדר.",
      resumeBtn: "הורד קורות חיים",
      hobbies: [
        { id: 'mtb', name: "אופני הרים", Icon: Mountain },
        { id: 'surf', name: "גלישה", Icon: Waves },
        { id: 'snowboard', name: "סנובורד", Icon: Mountain },
        { id: 'travel', name: "טיולים", Icon: Map }
      ]
    },
    builder: {
      title: "AI & Side Projects",
      subtitle: "אני לא רק מאפיין, אני בונה. אלו חלק מהכלים והמערכות שיזמתי ופיתחתי בעצמי באמצעות קוד וכלי AI.",
      projects: [
        { title: "TaxFree Solutions", desc: "מערכת אוטומטית המפשטת ומייעלת את תהליך ההגשה של בקשות להחזרי מס.", Icon: FileText },
        { title: "Smart Investment Tracker", desc: "סקרייפר ומערכת ניתוח סנטימנט פיננסי מפורומים לטובת החלטות השקעה.", Icon: LineChart },
        { title: "AI Children's Books", desc: "פלטפורמה ליצירת ספרי ילדים מותאמים אישית המשלבת LLMs ו-Image Generation.", Icon: BookOpen },
        { title: "E-Commerce Automations", desc: "אוטומציות חכמות לניהול שרשרת אספקה ומלאי בעולמות הדרופשיפינג.", Icon: ShoppingCart },
        { title: "Instagram Bot", desc: "כלי מבוסס קוד לניהול מעורבות ואוטומציה של אינטראקציות באינסטגרם.", Icon: Bot },
        { title: "Home IoT Hub", desc: "פיתוח פתרונות IoT מותאמים אישית לשליטה ואוטומציה של מערכות בבית.", Icon: Home }
      ]
    },
    work: {
      title: "Impact & Results",
      labels: { challenge: "האתגר", solution: "הפתרון", impact: "האימפקט", artifacts: "תוצרים" },
      projects: [
        {
          id: "01",
          company: "IronCircle",
          role: "Senior Product Manager",
          description: "הובלת אסטרטגיית מוצר AI-Native בתחום ה-EdTech.",
          challenge: "בעיית Retention אצל סטודנטים לסייבר וקושי של בוגרים להציג ניסיון מעשי למעסיקים.",
          solution: "השקת 'Weekly Goals' ליצירת הרגלי למידה וכלי 'Career AI' ליצירת קורות חיים ופרופילי לינקדאין מבוססי דאטה.",
          impact: "עלייה משמעותית ב-Retention וערך תעסוקתי מיידי לבוגרים דרך אוטומציה של ה-Value Chain.",
          artifacts: ["Kickoff Deck", "AI Specs", "User Flows"]
        },
        {
          id: "02",
          company: "GO7",
          role: "Lead Product Manager",
          description: "סקילינג של פלטפורמת White-Label ל-200 חברות תעופה.",
          challenge: "תהליכי Onboarding איטיים ו-Booking Flow עם אחוזי נטישה גבוהים.",
          solution: "ארכיטקטורה של פלטפורמת White-Label גמישה ואופטימיזציה אגרסיבית של משפך המכירה.",
          impact: "עלייה של 20% בהמרות וקיצור ה-Time-to-Market עבור לקוחות B2B חדשים.",
          artifacts: ["White-Label Strategy", "A/B Testing"]
        },
        {
          id: "03",
          company: "Matrix / EL AL",
          role: "Senior Product Manager",
          description: "טרנספורמציה דיגיטלית מלאה של אל-על בתקופת הקורונה.",
          challenge: "קריסת מערכות שירות הלקוחות והיעדר כלי Self-Service בזמן משבר עולמי.",
          solution: "השקת אקו-סיסטם דיגיטלי חדש (אתר, אפליקציה, פורטלים) ואפיון מחדש של מערך ה'צור קשר' החכם.",
          impact: "עלייה של 25% במכירות ישירות והורדת עומס דרמטית ממוקדי השירות הטלפוניים.",
          artifacts: ["Detailed PRDs", "Architecture Docs", "Wireframes"]
        },
        {
          id: "04",
          company: "Migdal Insurance",
          role: "Product Manager",
          description: "בניית מערכת One-Stop-Shop ל-50,000 סוכני ביטוח.",
          challenge: "סוכנים שעבדו על ריבוי מערכות Legacy מיושנות, מה שיצר איטיות וטעויות.",
          solution: "אפיון והשקה של 'שולחן עבודה לסוכן' - פלטפורמה אחודה המפשטת תהליכי רגולציה וחיתום.",
          impact: "אימוץ מלא של 50,000 סוכנים תוך רבעון אחד ושיפור דרמטי ביעילות התפעולית.",
          artifacts: ["Adoption Strategy", "Regulatory Workflows"]
        }
      ]
    },
    experience: {
      title: "מסלול קריירה",
      jobs: [
        { company: "IronCircle", role: "Senior Product Manager", period: "2025 — היום", desc: "הובלת אסטרטגיית AI-Native ומנועי Retention." },
        { company: "GO7", role: "Lead Product Manager", period: "2023 — 2025", desc: "סקילינג של פלטפורמת PSS ו-White-Label ללקוחות גלובליים." },
        { company: "Matrix / EL AL", role: "Senior Product Manager", period: "2020 — 2023", desc: "טרנספורמציה דיגיטלית ב-Scale." },
        { company: "Migdal Insurance", role: "Product Manager", period: "2017 — 2020", desc: "מערכות B2B מורכבות ורגולציה." },
        { company: "Visonic Group", role: "Project Manager", period: "2010 — 2017", desc: "ניהול פרויקטי R&D חומרה ותוכנה." }
      ]
    },
    methodology: {
      title: "Playbook",
      steps: [
        { title: "Discovery", desc: "הבנת ה'למה', חקר משתמשים ותיעדוף אכזרי מבוסס ROI." },
        { title: "Architecture", desc: "ויזואליזציה של מסע המשתמש ובדיקת היתכנות טכנית." },
        { title: "Alignment", desc: "אפיון מדויק ויישור קו מול ה-Stakeholders לפני הפיתוח." },
        { title: "Growth", desc: "השקה מדורגת, מדידה מתמדת ואיטרציות מהירות." }
      ]
    },
    footer: {
      talk: "בואו נדבר.",
      desc: "בין אם מדובר באתגר מוצרי, הזדמנות תעסוקתית, או שסתם בא לכם לדבר על roadmap and user flows – אשמח לשמוע מכם.",
      emailPlaceholder: "האימייל שלך",
      messagePlaceholder: "מה תרצו לשתף איתי?",
      sendBtn: "שלח הודעה",
      successMsg: "ההודעה נשלחה בהצלחה! אצור קשר בהקדם.",
      rights: "כל הזכויות שמורות ליניב לוי. 2026."
    }
  },
  en: {
    nav: { about: "About", work: "Case Studies", builder: "Projects", experience: "Experience", methodology: "Methodology" },
    hero: {
      greeting: "Hello, I'm Yaniv.",
      role: "Senior Product Manager",
      whoAmI: "Who am I?",
      paragraphs: [
        "A Product Manager with over 12 years of experience leading the full lifecycle of complex digital products—from vague ideas to mature, measurable products that drive real business value.",
        "My core strength is simplifying complexity: taking technological, regulatory, and business challenges and translating them into intuitive user experiences.",
        "Recently, I have been deeply focused on the AI and GenAI spaces—not as hype, but as powerful productivity engines.",
        "As a leader, I excel at building and mentoring cross-functional product teams, defining a clear vision, and translating strategy into OKRs.",
        "I believe a great product is built at the intersection of deep user understanding, data-driven decisions, and flawless execution."
      ]
    },
    about: {
      title: "Beyond The Title",
      p1: "What drew me to product management is the beauty of good UX—when a product feels intuitive, thoughtful, and simply works. I love shaping experiences that solve real problems.",
      p2: "When I’m not building products, I'm probably outdoors: hitting the trails on my mountain bike, traveling across Israel, or surfing.",
      resumeBtn: "Download Resume",
      hobbies: [
        { id: 'mtb', name: "Mountain Biking", Icon: Mountain },
        { id: 'surf', name: "Surfing", Icon: Waves },
        { id: 'snowboard', name: "Snowboarding", Icon: Mountain },
        { id: 'travel', name: "Traveling", Icon: Map }
      ]
    },
    builder: {
      title: "AI & Side Projects",
      subtitle: "I don't just write specs, I build. These are some of the tools and systems I've developed using Code and AI.",
      projects: [
        { title: "Tax Refund Automation", desc: "Automated system streamlining the tax refund submission process.", Icon: FileText },
        { title: "Smart Investment Tracker", desc: "Custom scraper and analytics tool for data-driven investment insights.", Icon: LineChart },
        { title: "AI Children's Books", desc: "Platform for personalized books combining LLMs and AI illustration.", Icon: BookOpen },
        { title: "E-Commerce Automations", desc: "Smart workflows for supply chain and inventory management.", Icon: ShoppingCart },
        { title: "Instagram Bot", desc: "Code-based tool for managing organic engagement and automation.", Icon: Bot },
        { title: "Home IoT Hub", desc: "Custom IoT solutions for automated home management and control.", Icon: Home }
      ]
    },
    work: {
      title: "Impact & Results",
      labels: { challenge: "Challenge", solution: "Solution", impact: "Impact", artifacts: "Artifacts" },
      projects: [
        {
          id: "01",
          company: "IronCircle",
          role: "Senior Product Manager",
          description: "Leading AI-Native product strategy in EdTech.",
          challenge: "Cybersecurity students dropping out and graduates struggling to showcase expertise.",
          solution: "Designed 'Weekly Goals' and 'Career AI' tools to generate data-driven CVs and LinkedIn profiles using GenAI.",
          impact: "Massive increase in retention and immediate employability value for graduates.",
          artifacts: ["Kickoff Deck", "AI Specs", "User Flows"]
        },
        {
          id: "02",
          company: "GO7",
          role: "Lead Product Manager",
          description: "Scaling a B2B2C PSS platform serving 200 airlines.",
          challenge: "Slow B2B onboarding and high drop-off rates in the booking flow.",
          solution: "Architected a flexible White-Label platform and aggressively optimized the funnel.",
          impact: "Achieved a 20% increase in conversion rates and drastically shortened Time-to-Market.",
          artifacts: ["White-Label Strategy", "A/B Testing"]
        },
        {
          id: "03",
          company: "Matrix / EL AL",
          role: "Senior Product Manager",
          description: "Leading enterprise digital transformation during COVID-19.",
          challenge: "Legacy platforms collapsing under load and a lack of digital self-service for passengers.",
          solution: "Launched a new digital ecosystem and redesigned the smart 'Contact Us' funnel with deep CRM integration.",
          impact: "Drove a 25% increase in direct sales and reduced call center load via smart automation.",
          artifacts: ["Detailed PRDs", "Architecture Migration", "Wireframes"]
        },
        {
          id: "04",
          company: "Migdal Insurance",
          role: "Product Manager",
          description: "Building a B2B One-Stop-Shop for 50,000 agents.",
          challenge: "Agents navigating fragmented legacy systems, causing slow processing and regulatory friction.",
          solution: "Designed and launched the 'Agent Desktop' to centralize workflows and simplify regulatory underwriting.",
          impact: "Full adoption by 50,000+ agents in one quarter and significant operational efficiency gains.",
          artifacts: ["Adoption Strategy", "Regulatory Workflows"]
        }
      ]
    },
    experience: {
      title: "Career Timeline",
      jobs: [
        { company: "IronCircle", role: "Senior Product Manager", period: "2025 — Present", desc: "Leading AI-Native strategy and retention engines." },
        { company: "GO7", role: "Lead Product Manager", period: "2023 — 2025", desc: "Global PSS scale and White-Label platform." },
        { company: "Matrix / EL AL", role: "Senior Product Manager", period: "2020 — 2023", desc: "Enterprise-wide digital transformation." },
        { company: "Migdal Insurance", role: "Product Manager", period: "2017 — 2020", desc: "Complex B2B platforms and Insurtech." },
        { company: "Visonic Group", role: "Project Manager", period: "2010 — 2017", desc: "End-to-end hardware & software R&D." }
      ]
    },
    methodology: {
      title: "My Framework",
      steps: [
        { title: "Discovery", desc: "Identify the 'Why', user research, and ruthless ROI-based prioritization." },
        { title: "Architecture", desc: "Visualizing journeys, technical feasibility checks, and wireframes." },
        { title: "Alignment", desc: "Clear specifications and stakeholder alignment before dev starts." },
        { title: "Growth", desc: "Phased releases, measurement, and rapid iterations." }
      ]
    },
    footer: {
      talk: "Let's Talk.",
      desc: "Whether it's a product challenge, a job opportunity, or you just want to talk about roadmap and user flows – I'd love to hear from you.",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "What would you like to share with me?",
      sendBtn: "Send Message",
      successMsg: "Message sent successfully! I'll get back to you soon.",
      rights: "© 2026 Yaniv Levi."
    }
  }
};

const App = () => {
  const [lang, setLang] = useState('he');
  const [isDark, setIsDark] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const t = CONTENT_DATA[lang] || CONTENT_DATA.he;
  const isRTL = lang === 'he';

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className={`font-assistant ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-[#FDFBF9] text-slate-800'} min-h-screen transition-colors duration-500 selection:bg-slate-200 selection:text-black overflow-x-hidden`}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Assistant:wght@200;300;400;500;600;700&display=swap');
          
          /* Forced custom font classes that bypass any Tailwind resets */
          .font-amatic { 
            font-family: 'Amatic SC', cursive !important; 
          }
          .font-assistant { 
            font-family: 'Assistant', sans-serif !important; 
          }
          
          .smooth-reveal { 
            animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
            opacity: 0; 
            transform: translateY(15px); 
          }
          
          @keyframes reveal { 
            to { opacity: 1; transform: translateY(0); } 
          }
          
          html { 
            scroll-behavior: smooth; 
          }
        `}
      </style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-5 transition-all duration-300 ${scrolled ? (isDark ? 'bg-slate-950/95 border-slate-800' : 'bg-white/95 border-slate-200') + ' backdrop-blur-md border-b shadow-sm' : 'bg-transparent'}`}>
        <a href="#" className={`font-amatic text-4xl md:text-5xl font-bold tracking-widest ${isDark ? 'text-white' : 'text-slate-900'} hover:opacity-70 transition`}>YL</a>
        
        <div className="flex items-center gap-6 md:gap-10">
          <div className="hidden lg:flex gap-8">
            {Object.keys(t.nav).map(key => (
              <a key={key} href={`#${key}`} className="font-assistant text-sm font-semibold opacity-60 hover:opacity-100 transition uppercase tracking-[0.2em]">{t.nav[key]}</a>
            ))}
          </div>
          
          <div className="flex items-center gap-4 border-slate-300 rtl:border-r rtl:pr-4 ltr:border-l ltr:pl-4">
             <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full hover:bg-slate-500/10 transition" aria-label="Toggle Dark Mode">
               {isDark ? <Sun size={18} /> : <Moon size={18} />}
             </button>
             <button onClick={() => setLang(lang === 'he' ? 'en' : 'he')} className={`flex items-center gap-2 px-3 py-1 rounded border ${isDark ? 'border-slate-800' : 'border-slate-200'} hover:border-slate-400 transition font-assistant text-xs font-bold tracking-widest uppercase`}>
               {lang === 'he' ? 'EN' : 'HE'}
             </button>
             <div className="hidden sm:flex items-center gap-4">
               <a href="https://www.linkedin.com/in/yaniv--levi/" target="_blank" rel="noreferrer" className="opacity-50 hover:opacity-100 transition"><Linkedin size={18} /></a>
               <a href="tel:+972508623138" className="opacity-50 hover:opacity-100 transition"><Phone size={18} /></a>
             </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative pt-20 max-w-6xl mx-auto">
        <div className="space-y-8 text-start">
          <p className="font-amatic text-4xl md:text-5xl opacity-50 smooth-reveal" style={{animationDelay: '0.1s'}}>{t.hero.greeting}</p>
          <h1 className="font-amatic text-6xl md:text-8xl font-bold smooth-reveal tracking-wide text-slate-900 dark:text-white" style={{animationDelay: '0.2s'}}>{t.hero.role}</h1>
          <div className={`w-16 h-[2px] ${isDark ? 'bg-white' : 'bg-slate-900'} smooth-reveal`} style={{animationDelay: '0.3s'}}></div>
          
          <div className="space-y-6 max-w-4xl smooth-reveal opacity-90" style={{animationDelay: '0.4s'}}>
            <h3 className="font-amatic text-4xl md:text-5xl font-bold mb-4 mt-8 text-slate-900 dark:text-white">{t.hero.whoAmI}</h3>
            {t.hero.paragraphs.map((p, i) => (
              <p key={i} className="font-assistant text-lg md:text-xl font-light leading-relaxed text-slate-600 dark:text-slate-300">{p}</p>
            ))}
          </div>

          <div className="pt-12 smooth-reveal text-center" style={{animationDelay: '0.6s'}}>
            <a href="#about" className="animate-bounce inline-block opacity-30 hover:opacity-100 transition"><ArrowDown size={32} strokeWidth={1} /></a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-32 ${isDark ? 'bg-slate-900/30' : 'bg-white'} border-y ${isDark ? 'border-slate-800' : 'border-slate-100'} px-6 md:px-12`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-amatic text-5xl md:text-6xl mb-16 text-center font-bold tracking-wide">{t.about.title}</h2>
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
            <div className="md:w-1/3 w-full max-w-sm">
              <div className={`aspect-[3/4] ${isDark ? 'bg-slate-800' : 'bg-slate-100'} rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl group`}>
                <img 
                    src="/1749387739889.jpg" 
                    alt="Yaniv Levi" 
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition duration-700" 
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"; }}
                />
                <div className="absolute inset-0 border border-black/10 rounded-2xl m-4 pointer-events-none"></div>
              </div>
            </div>
            <div className="md:w-2/3 space-y-8 text-start">
              <p className="font-assistant text-xl md:text-2xl font-light leading-relaxed opacity-80">{t.about.p1}</p>
              <p className="font-assistant text-xl md:text-2xl leading-relaxed opacity-90 font-medium italic border-s-4 border-slate-300 dark:border-slate-700 ps-6">{t.about.p2}</p>
              <div className="pt-8">
                {/* Updated CV link to match lowercase simplified filename */}
                <a href="/yaniv_cv.pdf" download="Yaniv_Levi_CV.pdf" className={`inline-flex items-center gap-3 px-8 py-4 ${isDark ? 'bg-white text-slate-950 hover:bg-slate-200' : 'bg-slate-900 text-white hover:bg-slate-700'} rounded-lg font-assistant font-semibold tracking-widest uppercase text-sm transition shadow-xl`}>
                  <Download size={16} /> {t.about.resumeBtn}
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12">
                {t.about.hobbies.map((hobby) => (
                  <div key={hobby.id} className={`flex flex-col items-center gap-4 p-6 rounded-2xl border ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-[#FDFBF9] border-slate-100'} text-center hover:-translate-y-1 transition duration-300`}>
                    <hobby.Icon size={24} className="opacity-50" />
                    <span className="font-assistant text-sm font-semibold tracking-wider opacity-70 uppercase">{hobby.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="work" className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="font-amatic text-6xl md:text-7xl font-bold mb-6">{t.work.title}</h2>
          <div className="w-16 h-[2px] bg-slate-300 dark:bg-slate-700 mx-auto"></div>
        </div>
        <div className="flex flex-col border-t border-slate-200 dark:border-slate-800">
          {t.work.projects.map((project, index) => (
            <div key={project.id} className="group border-b border-slate-200 dark:border-slate-800 transition-all duration-500 cursor-default hover:bg-slate-500/5" onMouseEnter={() => setActiveProject(index)} onMouseLeave={() => setActiveProject(null)}>
              <div className="py-12 flex flex-col md:flex-row justify-between md:items-center gap-8 px-6 text-start">
                <div className="flex items-center gap-8 md:w-1/3">
                  <span className="font-amatic text-5xl font-bold opacity-20 w-12 group-hover:opacity-60 transition-opacity duration-500">0{index+1}</span>
                  <div>
                    <h3 className="font-assistant text-2xl font-bold tracking-tight">{project.company}</h3>
                    <p className="font-assistant text-xs opacity-50 font-semibold tracking-[0.2em] mt-2 uppercase">{project.role}</p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <p className="font-assistant text-lg opacity-70 font-light group-hover:opacity-100 transition duration-500 leading-relaxed">{project.description}</p>
                </div>
                <div className="hidden md:flex items-center justify-end w-12">
                  <ArrowUpRight className={`opacity-20 transition-all duration-500 ${activeProject === index ? 'opacity-100' : ''} ${isRTL ? 'group-hover:-rotate-45' : 'group-hover:rotate-45'}`} size={32} strokeWidth={1} />
                </div>
              </div>
              <div className={`grid transition-all duration-500 ease-in-out ${activeProject === index ? 'grid-rows-[1fr] opacity-100 mb-12 px-6' : 'grid-rows-[0fr] opacity-0 px-6'}`}>
                <div className="overflow-hidden">
                  <div className="pt-10 border-t border-dashed border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-16 text-start">
                    <div className="space-y-12">
                       <div>
                         <h4 className="font-assistant font-semibold text-xs uppercase tracking-[0.2em] opacity-40 mb-4 flex items-center gap-2"><Layout size={14} /> {t.work.labels.challenge}</h4>
                         <p className={`font-assistant text-lg font-light leading-relaxed ${isDark ? 'bg-slate-800/30' : 'bg-[#FDFBF9]'} p-7 rounded-2xl border ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>{project.challenge}</p>
                       </div>
                       <div>
                         <h4 className="font-assistant font-semibold text-xs uppercase tracking-[0.2em] opacity-40 mb-4 flex items-center gap-2"><Cpu size={14} /> {t.work.labels.solution}</h4>
                         <p className={`font-assistant text-lg font-light leading-relaxed ${isDark ? 'bg-slate-800/30' : 'bg-[#FDFBF9]'} p-7 rounded-2xl border ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>{project.solution}</p>
                       </div>
                    </div>
                    <div className="space-y-12">
                      <div>
                        <h4 className="font-assistant font-semibold text-xs uppercase tracking-[0.2em] opacity-40 mb-4 flex items-center gap-2"><Plus size={14} /> {t.work.labels.impact}</h4>
                        <div className={`${isDark ? 'bg-white text-slate-950 shadow-white/5' : 'bg-slate-900 text-white shadow-black/20'} p-8 rounded-2xl shadow-xl`}>
                          <p className="font-assistant text-xl font-medium leading-snug italic tracking-wide">"{project.impact}"</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-assistant font-semibold text-xs uppercase tracking-[0.2em] opacity-40 mb-6 flex items-center gap-2"><FileText size={14} /> {t.work.labels.artifacts}</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.artifacts.map((art, i) => (
                            <span key={i} className={`flex items-center gap-2 px-4 py-2 ${isDark ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-white border-slate-200 text-slate-600'} border rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm`}>
                              {art.includes('Deck') ? <Presentation size={14} /> : <FileText size={14} />} {art}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Builder Section */}
      <section id="builder" className={`py-32 ${isDark ? 'bg-slate-900/40' : 'bg-[#F9F9F9]'} border-t ${isDark ? 'border-slate-800' : 'border-slate-200'} px-6 md:px-12`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-amatic text-6xl md:text-7xl font-bold mb-6">{t.builder.title}</h2>
            <div className="w-16 h-[2px] bg-slate-300 dark:bg-slate-700 mx-auto mb-8"></div>
            <p className="font-assistant text-xl opacity-70 max-w-2xl mx-auto leading-relaxed font-light">{t.builder.subtitle}</p>
          </div>
          <div className="flex flex-col text-start">
            {t.builder.projects.map((proj, idx) => (
              <div key={idx} className={`group flex flex-col md:flex-row md:items-center gap-6 md:gap-12 py-10 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'} last:border-0 hover:bg-slate-500/5 transition-all duration-500 px-8 -mx-8 rounded-3xl`}>
                <div className="flex items-center gap-8 md:w-1/3">
                  <div className={`w-14 h-14 ${isDark ? 'bg-slate-800' : 'bg-white'} rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition duration-500`}>
                    <proj.Icon size={22} className="opacity-70" />
                  </div>
                  <h3 className="font-assistant text-2xl font-bold tracking-tight">{proj.title}</h3>
                </div>
                <div className="md:w-2/3 flex items-center justify-between gap-8">
                   <p className="font-assistant text-lg font-light opacity-70 group-hover:opacity-100 transition duration-500 leading-relaxed">{proj.desc}</p>
                   <a href="https://github.com/yanivle1-dotcom?tab=repositories" target="_blank" rel="noreferrer" className="opacity-30 hover:opacity-100 hover:scale-110 transition-all shrink-0">
                     <Github size={28} strokeWidth={1.5} />
                   </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-32 px-6 md:px-12 max-w-4xl mx-auto">
        <h2 className="font-amatic text-6xl md:text-7xl font-bold mb-24 text-center tracking-wide">{t.experience.title}</h2>
        <div className={`relative border-s-2 ${isDark ? 'border-slate-800' : 'border-slate-200'} space-y-20 py-4 ms-6 md:ms-12`}>
          {t.experience.jobs.map((job, idx) => (
            <div key={idx} className="relative ps-12 group text-start">
              <div className={`absolute -start-[11px] top-2 w-5 h-5 ${isDark ? 'bg-slate-950 border-slate-700' : 'bg-white border-slate-300'} border-2 rounded-full group-hover:bg-slate-500 group-hover:border-slate-500 transition duration-500 shadow-sm`}></div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-4">
                <h3 className="font-assistant text-2xl font-bold tracking-tight">{job.company} <span className="opacity-30 font-light mx-4">/</span> <span className="text-xl opacity-70 font-medium">{job.role}</span></h3>
                <span className={`font-assistant text-xs font-semibold tracking-[0.1em] ${isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'} px-4 py-2 rounded-md uppercase`}>{job.period}</span>
              </div>
              <p className="font-assistant text-lg font-light opacity-80 mt-4 leading-relaxed max-w-2xl">{job.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology Section - The Curved S-Curve */}
      <section id="methodology" className={`py-32 ${isDark ? 'bg-slate-900/30' : 'bg-[#F9F9F9]'} border-t ${isDark ? 'border-slate-800' : 'border-slate-200'} overflow-hidden`}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="font-amatic text-6xl md:text-7xl font-bold mb-32 text-center">{t.methodology.title}</h2>
          <div className="relative max-w-5xl mx-auto">
            <div className={`absolute top-0 bottom-0 start-8 md:start-1/2 w-[1px] ${isDark ? 'bg-slate-800' : 'bg-slate-300'} md:-translate-x-1/2 rtl:md:translate-x-1/2`}></div>
            {t.methodology.steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex items-center mb-24 md:mb-32 group">
                  <div className={`absolute top-0 md:top-1/2 md:-translate-y-1/2 start-8 md:start-1/2 -translate-x-1/2 rtl:translate-x-1/2 w-16 h-16 ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-[#F9F9F9] border-slate-200 text-slate-500'} border-2 rounded-full flex items-center justify-center z-10 group-hover:bg-slate-900 group-hover:text-white transition-all duration-700 shadow-md`}>
                    <span className="font-amatic text-4xl font-bold opacity-60 group-hover:opacity-100">0{idx + 1}</span>
                  </div>
                  <div className="md:hidden w-full ps-24 pt-2 text-start">
                    <div className={`${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} p-8 rounded-2xl border shadow-sm`}><h3 className="font-assistant text-xl font-bold mb-3">{step.title}</h3><p className="font-assistant font-light opacity-80 leading-relaxed">{step.desc}</p></div>
                  </div>
                  <div className={`hidden md:flex w-full ${isEven ? 'justify-start text-start' : 'justify-end text-end'}`}>
                    <div className={`w-[44%]`}>
                      <div className={`relative ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-100'} p-10 rounded-2xl border shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-500`}>
                        <div className={`absolute top-1/2 -translate-y-1/2 w-16 h-[1px] ${isDark ? 'bg-slate-800' : 'bg-slate-300'} group-hover:bg-slate-900 transition-colors ${isEven ? '-end-16' : '-start-16'}`}></div>
                        <h3 className="font-assistant text-2xl font-bold mb-3 tracking-tight">{step.title}</h3>
                        <p className="font-assistant text-lg font-light opacity-80 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer & Contact Form */}
      <footer id="contact" className={`py-40 px-6 md:px-12 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'} border-t text-center overflow-hidden relative`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.02] pointer-events-none font-amatic font-bold text-[25vw] whitespace-nowrap -z-10 select-none uppercase tracking-tighter">LEVI YANIV LEVI YANIV</div>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="font-amatic text-7xl md:text-[9rem] font-bold mb-10 leading-none hover:scale-105 transition duration-700 cursor-default">{t.footer.talk}</h2>
          <p className="font-assistant text-xl md:text-2xl font-light opacity-80 leading-relaxed max-w-2xl mb-16">{t.footer.desc}</p>
          <div className="w-full max-w-lg mb-24">
            {isSubmitted ? (
              <div className="flex flex-col items-center gap-4 py-12 animate-in fade-in zoom-in duration-500">
                <CheckCircle2 size={56} className="text-green-500" />
                <p className="font-assistant text-lg font-bold">{t.footer.successMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className={`relative rounded-xl border transition-all duration-300 ${isDark ? 'bg-slate-900 border-slate-800 focus-within:border-white' : 'bg-white border-slate-200 focus-within:border-slate-900'}`}>
                  <input type="email" required placeholder={t.footer.emailPlaceholder} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-4 bg-transparent outline-none font-assistant text-lg font-light text-center" />
                </div>
                <div className={`relative rounded-xl border transition-all duration-300 ${isDark ? 'bg-slate-900 border-slate-800 focus-within:border-white' : 'bg-white border-slate-200 focus-within:border-slate-900'}`}>
                  <textarea required rows="4" placeholder={t.footer.messagePlaceholder} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full p-4 bg-transparent outline-none font-assistant text-lg font-light text-center resize-none" />
                </div>
                <button type="submit" disabled={isSubmitting} className={`w-full py-4 rounded-xl font-assistant font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 ${isDark ? 'bg-white text-slate-950 hover:bg-slate-200' : 'bg-slate-900 text-white hover:bg-slate-800'} ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                  {isSubmitting ? '...' : <><Send size={18} /> {t.footer.sendBtn}</>}
                </button>
              </form>
            )}
          </div>
          <div className="flex justify-center items-center gap-8 md:gap-12">
            <a href="tel:+972508623138" className={`p-5 ${isDark ? 'bg-slate-900 text-white hover:bg-white hover:text-slate-950' : 'bg-slate-50 text-slate-700 hover:bg-slate-900 hover:text-white'} rounded-full transition-all duration-300 shadow-sm hover:-translate-y-1`} title="PHONE"><Phone size={24} strokeWidth={1.5} /></a>
            <a href="mailto:yanivle1@gmail.com" className={`p-5 ${isDark ? 'bg-slate-900 text-white hover:bg-white hover:text-slate-950' : 'bg-slate-50 text-slate-700 hover:bg-slate-900 hover:text-white'} rounded-full transition-all duration-300 shadow-sm hover:-translate-y-1`} title="EMAIL"><Mail size={24} strokeWidth={1.5} /></a>
            <a href="https://www.linkedin.com/in/yaniv--levi/" target="_blank" rel="noreferrer" className={`p-5 ${isDark ? 'bg-slate-900 text-white hover:bg-white hover:text-slate-950' : 'bg-slate-50 text-slate-700 hover:bg-slate-900 hover:text-white'} rounded-full transition-all duration-300 shadow-sm hover:-translate-y-1`} title="LINKEDIN"><Linkedin size={24} strokeWidth={1.5} /></a>
          </div>
          <p className="font-assistant opacity-30 text-[10px] font-bold tracking-[0.3em] pt-24 uppercase">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;