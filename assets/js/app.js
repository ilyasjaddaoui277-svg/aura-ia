/**
 * Template Name: AuraAI - AI Micro-SaaS & Prompt Workspace HTML5 Template
 * Author:        Ilyas Digital Studio
 * Version:       1.5.0 (Final Gold Release)
 * Description:   Main front-end interaction script (OS Theme Detection + Switcher, 100% EN/AR RTL/LTR i18n with dynamic page titles across 5 pages, Token ROI Calculator, Billing Labels, Use-Case Tabs, 6-Workflow AI Studio with Race-Condition Guard, Clear Button, Ctrl+Enter Shortcut, Temperature Slider, Token Meter, Clickable History, Copy/Export fallback, Live API Playground, Toast & Back-to-Top)
 */
(function () {
  "use strict";

  /* 1. Complete 100% Bilingual Translation Dictionary (Strict EN/AR Parity across all 5 pages) */
  const i18n = {
    en: {
      page_title_home: "AuraAI — AI Micro-SaaS & Prompt Studio HTML5 Template",
      page_title_workspace: "AI Prompt Studio & Workspace — AuraAI Template",
      page_title_api: "Developer API Docs — AuraAI Template",
      page_title_sla: "Enterprise SLA & Architecture Comparison — AuraAI Template",
      page_title_404: "404 Page Not Found — AuraAI Template",
      skip_main: "Skip to main content",
      menu_btn: "☰ Menu",
      nav_home: "Home",
      nav_features: "Features",
      nav_calculator: "ROI Calculator",
      nav_pricing: "Pricing",
      nav_workspace: "AI Workspace",
      nav_api: "API Docs",
      nav_Enterprise: "Enterprise SLA",
      btn_launch: "Open Studio",
      btn_upgrade: "Upgrade Plan",
      hero_badge: "v1.5 Final — Built for AI Micro-SaaS Founders",
      hero_title: "Launch Your AI SaaS & Prompt Studio in Hours, Not Months",
      hero_desc: "A production-grade, bilingual (RTL/LTR) HTML5 template engineered for AI startups, prompt engineering teams, and automation agencies.",
      btn_try_workspace: "Launch Interactive Workspace",
      btn_calc_roi: "Estimate Token Costs",
      metric_1_sub: "W3C Semantic HTML5",
      metric_2_sub: "Instant Arabic & English",
      metric_3_sub: "External Framework Bloat",
      demo_live_label: "AuraAI Studio — Live Preview",
      feat_badge: "Why Choose AuraAI",
      feat_title: "Engineered for High-Converting AI Products",
      feat_subtitle: "Every component is crafted with clean modular CSS variables, accessible ARIA states, and real interactive workflows.",
      feat_1_title: "Interactive Prompt Studio",
      feat_1_desc: "Includes a dedicated workspace with 6 workflow templates, live filtering, creativity control, token meter, copy/export tools, and clickable run history.",
      feat_2_title: "True Bidirectional RTL / LTR",
      feat_2_desc: "Switch seamlessly between English (LTR) and Arabic (RTL) with one click. Built from day one for global and MENA markets.",
      feat_3_title: "Token & ROI Cost Estimator",
      feat_3_desc: "Help prospective SaaS buyers calculate their monthly token consumption and team productivity savings right on the landing page.",
      feat_4_title: "Dark & Light Theme Tokens",
      feat_4_desc: "Auto-detects system color preference on first visit with LocalStorage persistence and zero flash of unstyled content.",
      feat_5_title: "Live Developer API Playground",
      feat_5_desc: "Ready-to-ship API reference with cURL, JavaScript, and Python tabs, one-click copy, and an interactive JSON test runner.",
      feat_6_title: "GitHub Pages & Envato Ready",
      feat_6_desc: "Pure static architecture with custom SVG favicon, dedicated 404 page, and zero inline styles for $0 hosting.",
      uc_badge: "Built For Every AI Workflow",
      uc_title: "Explore Real-World Industry Use Cases",
      uc_tab_1: "SaaS & API Wrappers",
      uc_tab_2: "Content & SEO Agencies",
      uc_tab_3: "Customer Support Automation",
      uc_p1_title: "Ship Your AI Wrapper Front-End in One Afternoon",
      uc_p1_desc: "Connect your REST or streaming LLM endpoint directly to AuraAI's clean workspace interface without spending weeks designing dashboards.",
      uc_p2_title: "Productize Your Agency's Internal Prompt Playbooks",
      uc_p2_desc: "Give clients or team members structured, repeatable prompt workflows for SEO briefs, ad copy, and localization.",
      uc_p3_title: "Standardize Tier-1 Technical Support Responses",
      uc_p3_desc: "Equip support engineers with tone-controlled response generators and SLA escalation templates.",
      calc_badge: "Interactive Utility",
      calc_title: "Interactive AI Token & Team ROI Calculator",
      calc_subtitle: "Estimate monthly API expenditure and engineering hours saved based on team size and prompt volume.",
      calc_team_label: "Active Team Members",
      calc_runs_label: "Workflow Executions per User / Day",
      calc_model_label: "Select Foundation Model Tier",
      model_opt_fast: "Aura Fast Tier ($0.005 / 1K tokens)",
      model_opt_pro: "Aura Pro Reasoning ($0.015 / 1K tokens)",
      model_opt_ent: "Aura Enterprise Dedicated ($0.030 / 1K tokens)",
      calc_res_tokens: "Estimated Monthly Tokens",
      calc_res_spend: "Estimated API Spend",
      calc_res_hours: "Team Time Saved",
      calc_res_roi: "Estimated Net Value Created",
      price_badge: "Transparent Pricing",
      price_title: "Flexible Plans That Scale With Your Usage",
      price_subtitle: "Switch between monthly and annual billing to preview dynamic pricing updates.",
      billing_label: "Billing Cycle:",
      opt_monthly: "Monthly Billing",
      opt_annual: "Annual Billing (Save 20%)",
      discount_badge: "2 Months Free on Annual",
      plan_starter_name: "Starter",
      plan_starter_desc: "For solo makers & indie hackers",
      plan_s_f1: "250,000 AI tokens / month",
      plan_s_f2: "15 pre-built prompt workflows",
      plan_s_f3: "Standard community support",
      plan_s_f4: "Markdown & TXT export",
      plan_pro_ribbon: "Most Popular",
      plan_pro_name: "Growth Pro",
      plan_pro_desc: "For scaling startups & agencies",
      plan_p_f1: "2,000,000 AI tokens / month",
      plan_p_f2: "Unlimited custom prompt templates",
      plan_p_f3: "Team workspace up to 10 seats",
      plan_p_f4: "Priority API webhook integration",
      plan_ent_name: "Enterprise",
      plan_ent_desc: "For organizations needing custom SLAs",
      plan_e_f1: "Custom token volume & dedicated cluster",
      plan_e_f2: "Zero data retention policy",
      plan_e_f3: "SSO / SAML authentication ready",
      plan_e_f4: "Dedicated solutions engineer",
      per_month: "per month",
      btn_start_trial: "Start Free Trial",
      btn_launch_pro: "Launch Growth Plan",
      btn_compare_sla: "Compare Enterprise SLA",
      faq_badge: "Frequently Asked Questions",
      faq_title: "Everything You Need to Know",
      faq_q1: "Can I host the live preview of this template on GitHub Pages for free?",
      faq_a1: "Yes! Because AuraAI is built with clean, standard-compliant HTML5, CSS3, and Vanilla ES6 JavaScript without server-side dependencies, you can deploy it directly on GitHub Pages, Vercel, or Netlify for free.",
      faq_q2: "How does the Arabic RTL and English LTR switcher work?",
      faq_a2: "Clicking the language button updates the document dir, lang, and page title dynamically, translates all interface elements across all 5 pages, and saves the preference in LocalStorage.",
      faq_q3: "Are all visual assets and icons safe for commercial redistribution?",
      faq_a3: "Absolutely. All SVG graphics, favicon, and UI icons included in the package are 100% custom-authored specifically for this template, requiring no external attribution or paid stock licenses.",
      lead_badge: "Instant Sandbox Access",
      lead_title: "Request Your Interactive API Sandbox",
      lead_subtitle: "Test our client-side form validation by submitting your work email below.",
      lead_email_label: "Work Email Address *",
      lead_btn: "Get Instant Sandbox Link",
      footer_about: "High-converting HTML5 SaaS, API Docs & AI Workspace template engineered for modern digital creators.",
      footer_pages_title: "Template Pages",
      footer_comp_title: "Documentation & Compliance",
      footer_comp_desc: "W3C Valid HTML5 • Zero Inline Styles • Accessible ARIA Landmarks • Native RTL/LTR Support.",
      footer_copyright: "© 2026 AuraAI Template. All rights reserved.",
      footer_standards: "Crafted for ThemeForest Site Templates Standards.",
      back_home: "← Return to Main Landing Page",
      ws_sidebar_title: "Prompt Categories",
      ws_cat_all: "All Workflows (6)",
      ws_cat_mkt: "Marketing & SEO (2)",
      ws_cat_prod: "Product & SaaS (1)",
      ws_cat_sup: "Customer Support (1)",
      ws_cat_eng: "Engineering & Code (2)",
      ws_badge_mkt: "Marketing & SEO",
      ws_badge_prod: "Product & SaaS",
      ws_badge_sup: "Customer Support",
      ws_badge_eng: "Engineering & Code",
      ws_history_title: "Recent Simulations",
      ws_history_clear: "Clear",
      ws_badge: "Interactive Workspace",
      ws_title: "AI Prompt Engineering Studio",
      ws_subtitle: "Select a verified template below or write your own prompt to test live token counting, creativity control, copy/export, and clickable run history.",
      ws_card1_title: "High-Converting Landing Page Copy",
      ws_card1_desc: "Generates hero headlines, benefit bullets, and objection-handling FAQs for digital products.",
      ws_card2_title: "Technical SEO Content Cluster",
      ws_card2_desc: "Builds a 5-part topical authority cluster with search intent mapping and internal linking anchors.",
      ws_card3_title: "User Onboarding Email Sequence",
      ws_card3_desc: "Drafts a 4-day activation sequence to convert free-trial signups into paid subscribers.",
      ws_card4_title: "Empathetic Bug Escalation Reply",
      ws_card4_desc: "Creates a clear, reassuring technical support response with SLA timeline and workaround steps.",
      ws_card5_title: "REST API OpenAPI 3.1 Spec Builder",
      ws_card5_desc: "Generates clean endpoint schemas, request validation rules, and error payload contracts.",
      ws_card6_title: "Automated Code Review & Security Checklist",
      ws_card6_desc: "Audits frontend and backend pull requests for performance bottlenecks and XSS/CSRF risks.",
      ws_btn_load: "Load Into Studio",
      ws_empty_title: "No Matching Prompt Templates Found",
      ws_empty_desc: "We could not find any templates matching your search criteria. Try clearing the search box or resetting your filters.",
      ws_reset_filters: "Reset Search & Filters",
      ws_sandbox_title: "Prompt Execution Sandbox",
      ws_prompt_label: "Prompt Instructions (Minimum 15 characters) *",
      ws_tone_label: "Output Tone & Format",
      ws_temp_label: "Creativity (Temperature)",
      tone_exec: "Executive Blueprint",
      tone_tech: "Technical Specification",
      tone_pers: "Persuasive Conversion Copy",
      ws_run_btn: "Run Prompt Simulation",
      ws_clear_btn: "Clear Editor",
      ws_shortcut_hint: "Tip: Press Ctrl + Enter to run",
      ws_loading_title: "⏳ Processing Prompt...",
      ws_loading_desc: "Synthesizing structured response and calculating token metrics.",
      ws_done_title: "✅ Generation Complete",
      ws_copy_btn: "Copy Output",
      ws_download_btn: "Download .MD",
      sla_badge: "Enterprise Technical Matrix",
      sla_title: "Compare Plans, Security & API Throughput",
      sla_subtitle: "Detailed specification breakdown for technical decision-makers and procurement teams.",
      sla_col_feat: "Feature / Specification",
      sla_col_starter: "Starter ($29/mo)",
      sla_col_pro: "Growth Pro ($79/mo)",
      sla_col_ent: "Enterprise ($249/mo)",
      sla_r1_k: "Monthly Token Quota",
      sla_r1_s: "250K Tokens",
      sla_r1_p: "2M Tokens",
      sla_r1_e: "Custom Unlimited",
      sla_r2_k: "Concurrent API Requests",
      sla_r2_s: "10 req/sec",
      sla_r2_p: "60 req/sec",
      sla_r2_e: "500+ req/sec",
      sla_r3_k: "Data Privacy & Zero-Training",
      sla_r3_s: "Standard",
      sla_r3_p: "Included",
      sla_r3_e: "Dedicated Isolated VPC",
      sla_r4_k: "RTL / LTR Multilingual Workspace",
      sla_r4_s: "Included",
      sla_r4_p: "Included",
      sla_r4_e: "Included + Custom Glossaries",
      sla_r5_k: "Uptime SLA Guarantee",
      sla_r5_s: "99.5%",
      sla_r5_p: "99.9%",
      sla_r5_e: "99.99% Financially Backed",
      api_badge: "Developer Reference v1.5",
      api_title: "REST API & Quickstart Integration",
      api_subtitle: "Connect any frontend or backend service to your AI prompt studio endpoint in minutes with clean JSON payloads.",
      api_sec1_title: "1. Execute Prompt Endpoint",
      api_sec1_desc: "Send a structured prompt payload with your preferred tone and model tier. Switch between cURL, JavaScript, and Python examples below.",
      api_copy_code: "Copy Snippet",
      api_try_btn: "Test Endpoint Live",
      api_live_title: "Live Sandbox Response",
      api_sec2_title: "2. Standard JSON Response Schema",
      api_sec3_title: "3. Rate Limits & HTTP Status Codes",
      api_st_200: "200 OK — Prompt executed successfully with token usage metadata.",
      api_st_400: "400 Bad Request — Prompt shorter than 15 characters or invalid JSON.",
      api_st_401: "401 Unauthorized — Missing or invalid Bearer API token.",
      api_st_429: "429 Too Many Requests — Plan rate limit exceeded; retry with exponential backoff.",
      err_404_title: "Page Not Found",
      err_404_desc: "The page you are looking for might have been moved, renamed, or does not exist in this workspace.",
      err_404_home: "Back to Home",
      err_404_studio: "Open AI Workspace"
    },
    ar: {
      page_title_home: "AuraAI — قالب HTML5 لتطبيقات الذكاء الاصطناعي واستوديو الأوامر",
      page_title_workspace: "مساحة العمل الذكية واستوديو الأوامر — قالب AuraAI",
      page_title_api: "توثيق واجهة API للمطورين — قالب AuraAI",
      page_title_sla: "مقارنة باقات الشركات واتفاقية SLA — قالب AuraAI",
      page_title_404: "404 الصفحة غير موجودة — قالب AuraAI",
      skip_main: "تخطي إلى المحتوى الرئيسي",
      menu_btn: "☰ القائمة",
      nav_home: "الرئيسية",
      nav_features: "المميزات",
      nav_calculator: "حاسبة التكلفة",
      nav_pricing: "الأسعار",
      nav_workspace: "مساحة العمل الذكية",
      nav_api: "توثيق API",
      nav_Enterprise: "مقارنة الباقات",
      btn_launch: "افتح الاستوديو",
      btn_upgrade: "ترقية الباقة",
      hero_badge: "الإصدار 1.5 النهائي — مصمم لمؤسسي تطبيقات الذكاء الاصطناعي",
      hero_title: "أطلق منصتك لأدوات الذكاء الاصطناعي في ساعات بدلاً من أشهر",
      hero_desc: "قالب HTML5 احترافي ثنائي الاتجاه (عربي RTL / إنجليزي LTR) مصمم للشركات الناشئة، واستوديوهات هندسة الأوامر، ووكالات الأتمتة.",
      btn_try_workspace: "جرّب مساحة العمل التفاعلية",
      btn_calc_roi: "احسب تكلفة الـ Tokens",
      metric_1_sub: "كود HTML5 قياسي متوافق مع W3C",
      metric_2_sub: "تبديل فوري عربي وإنجليزي",
      metric_3_sub: "بدون إضافات خارجية ثقيلة",
      demo_live_label: "استوديو AuraAI — معاينة حية",
      feat_badge: "لماذا تختار AuraAI",
      feat_title: "مصمم خصيصاً لمنتجات الذكاء الاصطناعي عالية التحويل",
      feat_subtitle: "تم بناء كل مكون باستخدام متغيرات CSS المعيارية، وخصائص الوصولية، وتجربة المستخدم التفاعلية.",
      feat_1_title: "استوديو أوامر تفاعلي متكامل",
      feat_1_desc: "يتضمن مساحة عمل بـ 6 قوالب جاهزة، وفلترة فورية، وضبط الإبداع، وعداد توكنز حي، وأدوات نسخ وتصدير، وسجل عمليات.",
      feat_2_title: "دعم أصيل للغتين العربية والإنجليزية (RTL / LTR)",
      feat_2_desc: "انتقل بسلاسة بين الإنجليزية والعربية بضغطة زر واحدة، مصمم منذ البداية للأسواق العالمية والعربية.",
      feat_3_title: "حاسبة تكلفة الـ Tokens والعائد (ROI)",
      feat_3_desc: "ساعد عملاءك على حساب استهلاكهم الشهري والتوفير في ساعات عمل الفريق مباشرة من الصفحة الرئيسية.",
      feat_4_title: "الوضع الليلي والنهاري التلقائي",
      feat_4_desc: "يكتشف تلقائياً تفضيل نظام التشغيل في أول زيارة مع حفظ اختيار الزائر في المتصفح دون وميض.",
      feat_5_title: "مختبر API تفاعلي للمطورين",
      feat_5_desc: "صفحة مرجعية جاهزة تتضمن أمثلة cURL وJavaScript وPython مع نسخ فوري وزر محاكاة حي لاستجابة JSON.",
      feat_6_title: "جاهز لـ GitHub Pages و Envato",
      feat_6_desc: "بنية ثابتة خفيفة مع أيقونة Favicon وصفحة خطأ 404 مخصصة وصفر أنماط مضمنة لاستضافة مجانية بالكامل.",
      uc_badge: "مصمم لجميع مجالات الذكاء الاصطناعي",
      uc_title: "استكشف حالات الاستخدام العملية في السوق",
      uc_tab_1: "تطبيقات SaaS وواجهات API",
      uc_tab_2: "وكالات المحتوى والـ SEO",
      uc_tab_3: "أتمتة دعم العملاء",
      uc_p1_title: "أطلق واجهة تطبيق الذكاء الاصطناعي الخاص بك في يوم واحد",
      uc_p1_desc: "اربط واجهة الـ API الخاصة بك مباشرة مع مساحة عمل AuraAI الجاهزة دون إضاعة أسابيع في تصميم لوحات التحكم.",
      uc_p2_title: "حوّل أوامر الذكاء الاصطناعي في وكالتك إلى منتج رقمي",
      uc_p2_desc: "قدّم لفريقك وعملائك قوالب أوامر منظمة وقابلة للتكرار لكتابة خطط الـ SEO والإعلانات والترجمة.",
      uc_p3_title: "وحّد جودة ردود الدعم الفني لعملائك",
      uc_p3_desc: "زوّد فريق الدعم بقوالب استجابة احترافية مضبوطة النبرة للتعامل السريع مع المشكلات التقنية.",
      calc_badge: "أداة تفاعلية",
      calc_title: "حاسبة تكلفة الـ Tokens والعائد على الاستثمار (ROI)",
      calc_subtitle: "قدّر التكاليف الشهرية وعدد ساعات العمل الموفرة لفريقك بناءً على حجم الاستخدام.",
      calc_team_label: "عدد أعضاء الفريق النشطين",
      calc_runs_label: "عدد الأوامر المنفذة لكل عضو / يومياً",
      calc_model_label: "اختر فئة نموذج الذكاء الاصطناعي",
      model_opt_fast: "فئة Aura السريعة ($0.005 / لكل 1000 توكن)",
      model_opt_pro: "فئة Aura Pro للاستنتاج ($0.015 / لكل 1000 توكن)",
      model_opt_ent: "فئة Aura للشركات المخصصة ($0.030 / لكل 1000 توكن)",
      calc_res_tokens: "إجمالي الـ Tokens الشهري المقدر",
      calc_res_spend: "التكلفة الشهرية المقدرة للـ API",
      calc_res_hours: "ساعات عمل الفريق الموفرة",
      calc_res_roi: "صافي القيمة المالية الموفرة شهرياً",
      price_badge: "أسعار شفافة",
      price_title: "باقات مرنة تنمو مع حجم أعمالك",
      price_subtitle: "بدّل بين الدفع الشهري والسنوي لمعاينة التحديث الديناميكي للأسعار.",
      billing_label: "دورة الفوترة:",
      opt_monthly: "فوترة شهرية",
      opt_annual: "فوترة سنوية (وفّر 20%)",
      discount_badge: "شهران مجاناً عند الدفع السنوي",
      plan_starter_name: "باقة البداية (Starter)",
      plan_starter_desc: "للمطورين المستقلين ورواد الأعمال الأفراد",
      plan_s_f1: "250,000 توكن ذكاء اصطناعي شهرياً",
      plan_s_f2: "15 قالب أوامر جاهز للاستخدام",
      plan_s_f3: "دعم قياسي عبر المجتمع",
      plan_s_f4: "تصدير بصيغة Markdown و TXT",
      plan_pro_ribbon: "الأكثر طلباً",
      plan_pro_name: "باقة النمو (Growth Pro)",
      plan_pro_desc: "للشركات الناشئة والوكالات الرقمية",
      plan_p_f1: "2,000,000 توكن ذكاء اصطناعي شهرياً",
      plan_p_f2: "قوالب أوامر مخصصة غير محدودة",
      plan_p_f3: "مساحة عمل جماعية حتى 10 مقاعد",
      plan_p_f4: "تكامل أولوية مع Webhooks و API",
      plan_ent_name: "باقة الشركات (Enterprise)",
      plan_ent_desc: "للمؤسسات التي تتطلب خوادم خاصة واتفاقية SLA",
      plan_e_f1: "حجم توكنز مخصص وخادم معزول",
      plan_e_f2: "سياسة عدم الاحتفاظ بالبيانات",
      plan_e_f3: "جاهزية تسجيل الدخول الموحد SSO / SAML",
      plan_e_f4: "مهندس حلول مخصص للشركة",
      per_month: "شهرياً",
      btn_start_trial: "ابدأ التجربة المجانية",
      btn_launch_pro: "اشترك في باقة النمو",
      btn_compare_sla: "قارن مواصفات الشركات",
      faq_badge: "الأسئلة الشائعة",
      faq_title: "كل ما تحتاج إلى معرفته",
      faq_q1: "هل يمكنني استضافة المعاينة الحية لهذا القالب مجاناً على GitHub Pages؟",
      faq_a1: "نعم بالتأكيد! لأن القالب مبني بـ HTML5 وCSS3 وJavaScript قياسي بدون تعقيدات خوادم خلفية، يمكنك رفعه مجاناً على GitHub Pages أو Netlify.",
      faq_q2: "كيف يعمل مبدّل اللغة العربية (RTL) والإنجليزية (LTR)؟",
      faq_a2: "عند النقر على زر اللغة يتم تحديث اتجاه الصفحة وعنوان التبويب فوراً وترجمة جميع عناصر الصفحات الخمس مع حفظ اختيار الزائر تلقائياً.",
      faq_q3: "هل جميع الأيقونات والرسوم آمنة لإعادة التوزيع التجاري؟",
      faq_a3: "نعم 100%. جميع رسوم الـ SVG وأيقونة المتصفح والشعارات مرسومة برمجياً خصيصاً لهذا القالب ولا تتطلب أي تراخيص خارجية.",
      lead_badge: "تجربة فورية",
      lead_title: "اطلب رابط تجربة بيئة الـ API التفاعلية",
      lead_subtitle: "جرّب نظام التحقق الفوري من صحة البريد الإلكتروني عبر النموذج أدناه.",
      lead_email_label: "البريد الإلكتروني للعمل *",
      lead_btn: "احصل على رابط التجربة الفوري",
      footer_about: "قالب HTML5 متكامل لتطبيقات الذكاء الاصطناعي وتوثيق الـ API ومساحة العمل التفاعلية، مصمم للمبدعين والشركات.",
      footer_pages_title: "صفحات القالب",
      footer_comp_title: "التوثيق والامتثال القياسي",
      footer_comp_desc: "كود HTML5 قياسي W3C • صفر أنماط مضمنة • معايير وصولية ARIA • دعم أصيل للغتين العربية والإنجليزية.",
      footer_copyright: "© 2026 قالب AuraAI. جميع الحقوق محفوظة.",
      footer_standards: "مصمم وفق معايير قوالب ThemeForest الاحترافية.",
      back_home: "→ العودة إلى الصفحة الرئيسية",
      ws_sidebar_title: "فئات الأوامر الذكية",
      ws_cat_all: "جميع القوالب (6)",
      ws_cat_mkt: "التسويق والـ SEO (2)",
      ws_cat_prod: "المنتجات والـ SaaS (1)",
      ws_cat_sup: "دعم العملاء (1)",
      ws_cat_eng: "الهندسة والبرمجة (2)",
      ws_badge_mkt: "التسويق والـ SEO",
      ws_badge_prod: "المنتجات والـ SaaS",
      ws_badge_sup: "دعم العملاء",
      ws_badge_eng: "الهندسة والبرمجة",
      ws_history_title: "سجل العمليات الأخيرة",
      ws_history_clear: "مسح",
      ws_badge: "مساحة عمل تفاعلية",
      ws_title: "استوديو هندسة أوامر الذكاء الاصطناعي",
      ws_subtitle: "اختر قالباً جاهزاً أو اكتب أمرك الخاص لاختبار عداد الـ Tokens المباشر، وضبط الإبداع، والنسخ، والتصدير وسجل العمليات.",
      ws_card1_title: "كتابة نصوص صفحات هبوط عالية التحويل",
      ws_card1_desc: "يولّد عناوين رئيسية جذابة ونقاط مزايا وأسئلة شائعة مقنعة للمنتجات الرقمية.",
      ws_card2_title: "بناء عنقود محتوى SEO تقني متكامل",
      ws_card2_desc: "ينشئ خطة محتوى من 5 مقالات مترابطة مع تحليل نية البحث والروابط الداخلية.",
      ws_card3_title: "سلسلة رسائل ترحيب وتفعيل المستخدمين",
      ws_card3_desc: "يصيغ سلسلة من 4 رسائل بريدية لتحويل مشتركي التجربة المجانية إلى عملاء مدفوعين.",
      ws_card4_title: "صياغة رد احترافي لمتابعة الأعطال التقنية",
      ws_card4_desc: "ينشئ رسالة دعم فني مطمئنة وواضحة تتضمن الجدول الزمني للحل والبدائل المؤقتة.",
      ws_card5_title: "مولّد مواصفات OpenAPI 3.1 لواجهات REST",
      ws_card5_desc: "ينشئ هياكل نقاط النهاية وقواعد التحقق من الطلبات وصيغ الأخطاء القياسية.",
      ws_card6_title: "قائمة فحص الأمان ومراجعة الأكواد البرمجية",
      ws_card6_desc: "يراجع طلبات الدمج البرمجية لرصد اختناقات الأداء وثغرات XSS و CSRF.",
      ws_btn_load: "تحميل في الاستوديو",
      ws_empty_title: "لم يتم العثور على قوالب مطابقة",
      ws_empty_desc: "لا توجد قوالب تطابق كلمات البحث الحالية. جرّب مسح مربع البحث أو إعادة ضبط الفلاتر.",
      ws_reset_filters: "إعادة ضبط البحث والفلاتر",
      ws_sandbox_title: "بيئة تشغيل ومحاكاة الأوامر",
      ws_prompt_label: "تعليمات الأمر البرمجي (15 حرفاً على الأقل) *",
      ws_tone_label: "نبرة وأسلوب المخرجات",
      ws_temp_label: "درجة الإبداع (Temperature)",
      tone_exec: "مخطط تنفيذي احترافي",
      tone_tech: "مواصفات تقنية مفصلة",
      tone_pers: "نصوص تسويقية مقنعة",
      ws_run_btn: "تشغيل محاكاة الأمر",
      ws_clear_btn: "مسح المحرر",
      ws_shortcut_hint: "تلميح: اضغط Ctrl + Enter للتشغيل السريع",
      ws_loading_title: "⏳ جاري معالجة الأمر...",
      ws_loading_desc: "يتم الآن بناء الاستجابة المنظمة وحساب مؤشرات استهلاك الـ Tokens.",
      ws_done_title: "✅ اكتمل التوليد بنجاح",
      ws_copy_btn: "نسخ المخرجات",
      ws_download_btn: "تحميل ملف .MD",
      sla_badge: "مصفوفة المواصفات التقنية للشركات",
      sla_title: "مقارنة الباقات والأمان وقدرة الـ API",
      sla_subtitle: "تفاصيل تقنية شاملة لصناع القرار وفرق المشتريات التقنية.",
      sla_col_feat: "الميزة / المواصفة التقنية",
      sla_col_starter: "البداية ($29/شهر)",
      sla_col_pro: "النمو ($79/شهر)",
      sla_col_ent: "الشركات ($249/شهر)",
      sla_r1_k: "حصة الـ Tokens الشهرية",
      sla_r1_s: "250 ألف توكن",
      sla_r1_p: "2 مليون توكن",
      sla_r1_e: "حجم مخصص غير محدود",
      sla_r2_k: "الطلبات المتزامنة (API Rate Limit)",
      sla_r2_s: "10 طلبات/ثانية",
      sla_r2_p: "60 طلباً/ثانية",
      sla_r2_e: "+500 طلب/ثانية",
      sla_r3_k: "خصوصية البيانات وعدم التدريب عليها",
      sla_r3_s: "قياسي",
      sla_r3_p: "مشمول",
      sla_r3_e: "خادم خاص معزول (VPC)",
      sla_r4_k: "مساحة عمل ثنائية الاتجاه (RTL / LTR)",
      sla_r4_s: "مشمول",
      sla_r4_p: "مشمول",
      sla_r4_e: "مشمول + قواميس مخصصة",
      sla_r5_k: "ضمان استمرارية الخدمة (Uptime SLA)",
      sla_r5_s: "99.5%",
      sla_r5_p: "99.9%",
      sla_r5_e: "99.99% بضمان تعاقدي",
      api_badge: "مرجع المطورين الإصدار 1.5",
      api_title: "واجهة REST API ودليل الربط السريع",
      api_subtitle: "اربط أي واجهة أمامية أو خادم خلفي باستوديو أوامر الذكاء الاصطناعي في دقائق عبر طلبات JSON قياسية.",
      api_sec1_title: "1. نقطة تنفيذ الأوامر (Execute Endpoint)",
      api_sec1_desc: "أرسل بيانات الأمر والنبرة المطلوبة وفئة النموذج. بدّل بين أمثلة cURL وJavaScript وPython أدناه.",
      api_copy_code: "نسخ الكود",
      api_try_btn: "اختبار الاستجابة الحية",
      api_live_title: "استجابة بيئة الاختبار الحية",
      api_sec2_title: "2. هيكل استجابة JSON القياسي",
      api_sec3_title: "3. حدود الطلبات ورموز الحالة (HTTP Status Codes)",
      api_st_200: "200 OK — تم تنفيذ الأمر بنجاح مع إرجاع بيانات استهلاك الـ Tokens.",
      api_st_400: "400 Bad Request — الأمر أقصر من 15 حرفاً أو صيغة JSON غير صالحة.",
      api_st_401: "401 Unauthorized — مفتاح Bearer API مفقود أو غير صالح.",
      api_st_429: "429 Too Many Requests — تم تجاوز الحد المسموح للباقة؛ يرجى إعادة المحاولة لاحقاً.",
      err_404_title: "الصفحة غير موجودة",
      err_404_desc: "عذراً، الصفحة التي تبحث عنها ربما تم نقلها أو حذفها أو أن الرابط غير صحيح.",
      err_404_home: "العودة للرئيسية",
      err_404_studio: "فتح مساحة العمل"
    }
  };

  /* Safe LocalStorage Helpers */
  function getStoredValue(key, fallback) {
    try {
      const val = localStorage.getItem(key);
      return val !== null ? val : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function setStoredValue(key, val) {
    try {
      localStorage.setItem(key, val);
    } catch (e) {
      // Ignore storage errors in private browsing mode
    }
  }

  /* Detect initial theme (respects saved preference, then OS preference) */
  function getInitialTheme() {
    const saved = getStoredValue("aura_theme", "");
    if (saved === "dark" || saved === "light") {
      return saved;
    }
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  /* Universal Clipboard Helper (HTTPS & local file:// compatible) */
  function copyTextToClipboard(text, onSuccess) {
    if (!text) {
      return;
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(onSuccess).catch(function () {
        fallbackCopy(text, onSuccess);
      });
    } else {
      fallbackCopy(text, onSuccess);
    }
  }

  function fallbackCopy(text, onSuccess) {
    const tempArea = document.createElement("textarea");
    tempArea.value = text;
    tempArea.setAttribute("readonly", "");
    tempArea.className = "sr-only";
    document.body.appendChild(tempArea);
    tempArea.select();
    try {
      document.execCommand("copy");
      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      // Clipboard blocked by browser
    }
    document.body.removeChild(tempArea);
  }

  /* Toast Notification Utility */
  let toastEl = document.getElementById("auraToast");
  if (!toastEl) {
    toastEl = document.createElement("div");
    toastEl.id = "auraToast";
    toastEl.className = "toast-notification";
    toastEl.setAttribute("role", "status");
    toastEl.setAttribute("aria-live", "polite");
    document.body.appendChild(toastEl);
  }
  let toastTimer = null;

  function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add("show");
    if (toastTimer) {
      clearTimeout(toastTimer);
    }
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("show");
    }, 2400);
  }

  /* Back-to-Top Floating Button */
  const backToTopBtn = document.createElement("button");
  backToTopBtn.type = "button";
  backToTopBtn.className = "back-to-top";
  backToTopBtn.setAttribute("aria-label", "Back to top");
  backToTopBtn.textContent = "↑";
  document.body.appendChild(backToTopBtn);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 360) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* 2. Theme, Language & Mobile Menu Controller */
  const htmlEl = document.documentElement;
  const themeBtn = document.getElementById("themeToggleBtn");
  const langBtn = document.getElementById("langToggleBtn");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mainNavLinks = document.getElementById("mainNavLinks");

  function applyTheme(theme) {
    htmlEl.setAttribute("data-theme", theme);
    setStoredValue("aura_theme", theme);
    if (themeBtn) {
      const currentLang = htmlEl.getAttribute("lang") || "en";
      if (currentLang === "ar") {
        themeBtn.textContent = theme === "dark" ? "☀️ نهاري" : "🌙 ليلي";
        themeBtn.setAttribute("aria-label", "تبديل المظهر الفاتح والداكن");
      } else {
        themeBtn.textContent = theme === "dark" ? "☀️ Light" : "🌙 Dark";
        themeBtn.setAttribute("aria-label", "Switch color theme, current: " + theme);
      }
    }
  }

  function updateCalculator() {
    const teamInput = document.getElementById("calcTeamSize");
    const promptsInput = document.getElementById("calcPromptsPerDay");
    const modelSelect = document.getElementById("calcModelSelect");
    if (!teamInput || !promptsInput || !modelSelect) {
      return;
    }
    const currentLang = htmlEl.getAttribute("lang") || "en";
    const members = parseInt(teamInput.value, 10) || 1;
    const promptsPerDay = parseInt(promptsInput.value, 10) || 10;
    const ratePerThousand = parseFloat(modelSelect.value) || 0.015;

    document.getElementById("teamSizeVal").textContent =
      currentLang === "ar" ? members + " مستخدمين" : members + " users";
    document.getElementById("promptsDayVal").textContent =
      currentLang === "ar" ? promptsPerDay + " عملية/يوم" : promptsPerDay + " runs/day";

    const monthlyPrompts = members * promptsPerDay * 22;
    const estimatedTokens = monthlyPrompts * 850;
    const apiCost = ((estimatedTokens / 1000) * ratePerThousand).toFixed(2);
    const hoursSaved = Math.round((monthlyPrompts * 4.5) / 60);
    const netSavings = Math.round(hoursSaved * 35 - parseFloat(apiCost));

    const moUnit = currentLang === "ar" ? " / شهرياً" : " / mo";
    const hrUnit = currentLang === "ar" ? " ساعة / شهرياً" : " hrs / mo";

    document.getElementById("resMonthlyTokens").textContent = estimatedTokens.toLocaleString();
    document.getElementById("resApiCost").textContent = "$" + apiCost + moUnit;
    document.getElementById("resHoursSaved").textContent = hoursSaved + hrUnit;
    document.getElementById("resNetRoi").textContent = "$" + netSavings.toLocaleString() + moUnit;
  }

  function updateBillingLabels() {
    const billingToggle = document.getElementById("billingCycleSelect");
    if (!billingToggle) {
      return;
    }
    const isAnnual = billingToggle.value === "annual";
    const isAr = htmlEl.getAttribute("lang") === "ar";
    const prices = document.querySelectorAll("[data-monthly-price]");
    prices.forEach(function (el) {
      const m = parseInt(el.getAttribute("data-monthly-price"), 10);
      const a = parseInt(el.getAttribute("data-annual-price"), 10);
      el.textContent = "$" + (isAnnual ? a : m);
    });
    const periodLabels = document.querySelectorAll(".billing-period-label");
    periodLabels.forEach(function (el) {
      if (isAnnual) {
        el.textContent = isAr ? "شهرياً (تُدفع سنوياً)" : "per month (billed annually)";
      } else {
        el.textContent = isAr ? "شهرياً" : "per month";
      }
    });
  }

  function updatePromptMeter() {
    const textarea = document.getElementById("studioPromptInput");
    const meterBar = document.getElementById("promptMeterBar");
    const charEl = document.getElementById("promptCharCount");
    const tokenEl = document.getElementById("promptTokenEst");
    if (!textarea || !meterBar || !charEl || !tokenEl) {
      return;
    }
    const isAr = htmlEl.getAttribute("lang") === "ar";
    const len = textarea.value.trim().length;
    const estTokens = len ? Math.max(1, Math.ceil(len / 4)) : 0;
    charEl.textContent = isAr
      ? len + " حرفاً (الحد الأدنى 15)"
      : len + " chars (min 15)";
    tokenEl.textContent = isAr
      ? "≈ " + estTokens + " توكن"
      : "~" + estTokens + " tokens";
    if (len >= 15) {
      meterBar.classList.add("valid");
    } else {
      meterBar.classList.remove("valid");
    }
  }

  function renderHistory() {
    const historyListEl = document.getElementById("promptHistoryList");
    const promptTextarea = document.getElementById("studioPromptInput");
    if (!historyListEl) {
      return;
    }
    let items = [];
    try {
      items = JSON.parse(getStoredValue("aura_prompt_history", "[]"));
    } catch (e) {
      items = [];
    }
    historyListEl.innerHTML = "";
    const isAr = htmlEl.getAttribute("lang") === "ar";

    if (!items.length) {
      const emptyLi = document.createElement("li");
      emptyLi.className = "history-empty";
      emptyLi.textContent = isAr ? "لا توجد عمليات سابقة بعد." : "No runs recorded yet.";
      historyListEl.appendChild(emptyLi);
      return;
    }

    items.forEach(function (entry) {
      const fullText = typeof entry === "string" ? entry : (entry.full || "");
      const label = fullText.length > 46 ? fullText.slice(0, 46) + "..." : fullText;
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "history-item-btn";
      btn.textContent = label;
      btn.title = fullText;
      btn.addEventListener("click", function () {
        if (promptTextarea) {
          promptTextarea.value = fullText;
          promptTextarea.focus();
          updatePromptMeter();
          showToast(isAr ? "تم استرجاع الأمر من السجل" : "Prompt restored from history");
        }
      });
      li.appendChild(btn);
      historyListEl.appendChild(li);
    });
  }

  function filterTemplates() {
    const promptSearchInput = document.getElementById("promptSearchInput");
    const promptCards = document.querySelectorAll(".prompt-template-card");
    const emptyStateBox = document.getElementById("workspaceEmptyState");
    if (!promptCards.length) {
      return;
    }
    const query = promptSearchInput ? promptSearchInput.value.toLowerCase().trim() : "";
    const activeBtn = document.querySelector(".filter-btn.active");
    const category = activeBtn ? activeBtn.getAttribute("data-category") : "all";
    let visibleCount = 0;

    promptCards.forEach(function (card) {
      const cardCat = card.getAttribute("data-category");
      const cardText = card.textContent.toLowerCase();
      const matchesCat = category === "all" || cardCat === category;
      const matchesQuery = !query || cardText.indexOf(query) !== -1;

      if (matchesCat && matchesQuery) {
        card.classList.remove("hidden");
        visibleCount++;
      } else {
        card.classList.add("hidden");
      }
    });

    if (emptyStateBox) {
      if (visibleCount === 0) {
        emptyStateBox.classList.remove("hidden");
      } else {
        emptyStateBox.classList.add("hidden");
      }
    }
  }

  function applyLanguage(lang) {
    const dir = lang === "ar" ? "rtl" : "ltr";
    htmlEl.setAttribute("lang", lang);
    htmlEl.setAttribute("dir", dir);
    setStoredValue("aura_lang", lang);
    if (langBtn) {
      langBtn.textContent = lang === "ar" ? "EN | LTR" : "عربي | RTL";
    }
    backToTopBtn.setAttribute("aria-label", lang === "ar" ? "العودة إلى الأعلى" : "Back to top");

    /* Update dynamic document title if declared */
    const titleKey = document.body.getAttribute("data-title-i18n");
    if (titleKey && i18n[lang] && i18n[lang][titleKey]) {
      document.title = i18n[lang][titleKey];
    }

    const nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach(function (node) {
      const key = node.getAttribute("data-i18n");
      if (i18n[lang] && i18n[lang][key]) {
        node.textContent = i18n[lang][key];
      }
    });
    const searchInput = document.getElementById("promptSearchInput");
    if (searchInput) {
      searchInput.placeholder = lang === "ar"
        ? "ابحث في القوالب (مثال: SEO)..."
        : "Search templates (e.g. SEO)...";
    }
    const studioArea = document.getElementById("studioPromptInput");
    if (studioArea) {
      studioArea.placeholder = lang === "ar"
        ? "اكتب تعليمات الأمر هنا أو اضغط «تحميل في الاستوديو» من البطاقات أعلاه..."
        : "Enter your prompt instructions here or click 'Load Into Studio' on any card above...";
    }
    const leadEmail = document.getElementById("leadEmailInput");
    if (leadEmail) {
      leadEmail.placeholder = lang === "ar" ? "name@company.com" : "founder@company.io";
    }
    applyTheme(htmlEl.getAttribute("data-theme") || "light");
    updateCalculator();
    updateBillingLabels();
    updatePromptMeter();
    renderHistory();
    filterTemplates();
  }

  const savedTheme = getInitialTheme();
  const savedLang = getStoredValue("aura_lang", "en");
  applyTheme(savedTheme);
  applyLanguage(savedLang);

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      const nextTheme = htmlEl.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
    });
  }

  if (langBtn) {
    langBtn.addEventListener("click", function () {
      const nextLang = htmlEl.getAttribute("lang") === "ar" ? "en" : "ar";
      applyLanguage(nextLang);
    });
  }

  if (mobileMenuBtn && mainNavLinks) {
    mobileMenuBtn.addEventListener("click", function () {
      const expanded = mainNavLinks.classList.toggle("mobile-open");
      mobileMenuBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
    });

    mainNavLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (mainNavLinks.classList.contains("mobile-open")) {
          mainNavLinks.classList.remove("mobile-open");
          mobileMenuBtn.setAttribute("aria-expanded", "false");
        }
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mainNavLinks.classList.contains("mobile-open")) {
        mainNavLinks.classList.remove("mobile-open");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* 3. Industry Use-Case Tabs (index.html) */
  const ucButtons = document.querySelectorAll(".usecase-tab-btn");
  const ucPanels = document.querySelectorAll(".usecase-panel");
  ucButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const targetId = btn.getAttribute("data-target");
      ucButtons.forEach(function (b) {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      ucPanels.forEach(function (p) {
        p.classList.add("hidden");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      const activePanel = document.getElementById(targetId);
      if (activePanel) {
        activePanel.classList.remove("hidden");
      }
    });
  });

  /* 4. Calculator Listeners */
  const teamInput = document.getElementById("calcTeamSize");
  const promptsInput = document.getElementById("calcPromptsPerDay");
  const modelSelect = document.getElementById("calcModelSelect");

  if (teamInput && promptsInput && modelSelect) {
    teamInput.addEventListener("input", updateCalculator);
    promptsInput.addEventListener("input", updateCalculator);
    modelSelect.addEventListener("change", updateCalculator);
    updateCalculator();
  }

  /* 5. Billing Cycle Toggle (Monthly / Annual) */
  const billingToggle = document.getElementById("billingCycleSelect");
  if (billingToggle) {
    billingToggle.addEventListener("change", updateBillingLabels);
    updateBillingLabels();
  }

  /* 6. FAQ Accordion */
  const faqTriggers = document.querySelectorAll(".faq-trigger");
  faqTriggers.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const parent = btn.closest(".faq-item");
      const isOpen = parent.classList.toggle("open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  });

  /* 7. Lead Capture Form Validation */
  const leadForm = document.getElementById("leadCaptureForm");
  if (leadForm) {
    leadForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailField = document.getElementById("leadEmailInput");
      const feedbackBox = document.getElementById("leadFormFeedback");
      const emailVal = emailField ? emailField.value.trim() : "";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isAr = htmlEl.getAttribute("lang") === "ar";

      feedbackBox.classList.remove("hidden", "ui-state-error", "ui-state-success");
      if (!emailRegex.test(emailVal)) {
        feedbackBox.classList.add("ui-state-error");
        feedbackBox.textContent = isAr
          ? "يرجى إدخال بريد إلكتروني صحيح للعمل (مثال: name@company.com)."
          : "Please enter a valid work email address (e.g., founder@company.io).";
        return;
      }
      feedbackBox.classList.add("ui-state-success");
      feedbackBox.textContent = isAr
        ? "تم بنجاح! تم إرسال رابط الدخول التجريبي إلى بريدك الإلكتروني."
        : "Success! Your interactive sandbox access link has been queued.";
      leadForm.reset();
      showToast(isAr ? "تم إرسال الطلب بنجاح" : "Sandbox link queued!");
    });
  }

  /* 8. Interactive AI Workspace (workspace.html) */
  const promptSearchInput = document.getElementById("promptSearchInput");
  const categoryButtons = document.querySelectorAll(".filter-btn");
  const resetFiltersBtn = document.getElementById("resetFiltersBtn");
  const clearHistoryBtn = document.getElementById("clearHistoryBtn");
  const clearEditorBtn = document.getElementById("clearEditorBtn");
  const promptTextarea = document.getElementById("studioPromptInput");
  const tempSlider = document.getElementById("studioTempRange");
  const tempValDisplay = document.getElementById("studioTempVal");
  const studioSubmitBtn = document.getElementById("studioSubmitBtn");

  if (tempSlider && tempValDisplay) {
    tempSlider.addEventListener("input", function () {
      tempValDisplay.textContent = parseFloat(tempSlider.value).toFixed(1);
    });
  }

  function addToHistory(fullPrompt) {
    let items = [];
    try {
      items = JSON.parse(getStoredValue("aura_prompt_history", "[]"));
    } catch (e) {
      items = [];
    }
    items = items.filter(function (entry) {
      const existing = typeof entry === "string" ? entry : entry.full;
      return existing !== fullPrompt;
    });
    items.unshift({ full: fullPrompt });
    if (items.length > 6) {
      items = items.slice(0, 6);
    }
    setStoredValue("aura_prompt_history", JSON.stringify(items));
    renderHistory();
  }

  if (promptTextarea) {
    promptTextarea.addEventListener("input", updatePromptMeter);
    promptTextarea.addEventListener("keydown", function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        const form = document.getElementById("studioGeneratorForm");
        if (form) {
          form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
        }
      }
    });
    updatePromptMeter();
  }

  if (clearEditorBtn && promptTextarea) {
    clearEditorBtn.addEventListener("click", function () {
      promptTextarea.value = "";
      promptTextarea.focus();
      updatePromptMeter();
      const errBox = document.getElementById("studioErrorState");
      const outBox = document.getElementById("studioOutputState");
      if (errBox) { errBox.classList.add("hidden"); }
      if (outBox) { outBox.classList.add("hidden"); }
    });
  }

  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", function () {
      setStoredValue("aura_prompt_history", "[]");
      renderHistory();
      const isAr = htmlEl.getAttribute("lang") === "ar";
      showToast(isAr ? "تم مسح سجل العمليات" : "Simulation history cleared");
    });
  }

  if (promptSearchInput) {
    promptSearchInput.addEventListener("input", filterTemplates);
  }

  categoryButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      categoryButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      filterTemplates();
    });
  });

  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", function () {
      if (promptSearchInput) {
        promptSearchInput.value = "";
      }
      categoryButtons.forEach(function (b) {
        b.classList.toggle("active", b.getAttribute("data-category") === "all");
      });
      filterTemplates();
    });
  }

  const useTemplateBtns = document.querySelectorAll(".use-template-btn");
  useTemplateBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const isAr = htmlEl.getAttribute("lang") === "ar";
      const promptText = isAr && btn.getAttribute("data-prompt-ar")
        ? btn.getAttribute("data-prompt-ar")
        : btn.getAttribute("data-prompt");
      if (promptTextarea && promptText) {
        promptTextarea.value = promptText;
        promptTextarea.focus();
        updatePromptMeter();
        showToast(isAr ? "تم تحميل القالب في المحرر" : "Template loaded into studio");
      }
    });
  });

  const studioForm = document.getElementById("studioGeneratorForm");
  const outputCode = document.getElementById("studioGeneratedOutput");
  const copyOutputBtn = document.getElementById("copyOutputBtn");
  const downloadOutputBtn = document.getElementById("downloadOutputBtn");
  let isStudioRunning = false;

  if (copyOutputBtn && outputCode) {
    copyOutputBtn.addEventListener("click", function () {
      const text = outputCode.textContent || "";
      const isAr = htmlEl.getAttribute("lang") === "ar";
      copyTextToClipboard(text, function () {
        showToast(isAr ? "تم نسخ المخرجات إلى الحافظة!" : "Output copied to clipboard!");
      });
    });
  }

  if (downloadOutputBtn && outputCode) {
    downloadOutputBtn.addEventListener("click", function () {
      const text = outputCode.textContent || "";
      const isAr = htmlEl.getAttribute("lang") === "ar";
      const blob = new Blob([text], { type: "text/markdown;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "auraai-prompt-output.md";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast(isAr ? "تم تنزيل ملف المخرجات (.md)" : "Downloaded auraai-prompt-output.md");
    });
  }

  if (studioForm) {
    studioForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (isStudioRunning) {
        return;
      }
      const inputVal = promptTextarea ? promptTextarea.value.trim() : "";
      const toneVal = document.getElementById("studioToneSelect").value;
      const tempVal = tempSlider ? parseFloat(tempSlider.value).toFixed(1) : "0.7";
      const loadingBox = document.getElementById("studioLoadingState");
      const errorBox = document.getElementById("studioErrorState");
      const outputBox = document.getElementById("studioOutputState");
      const isAr = htmlEl.getAttribute("lang") === "ar";

      loadingBox.classList.add("hidden");
      errorBox.classList.add("hidden");
      outputBox.classList.add("hidden");

      if (inputVal.length < 15) {
        errorBox.classList.remove("hidden");
        errorBox.textContent = isAr
          ? "خطأ في التحقق: يرجى إدخال أمر وصفي لا يقل عن 15 حرفاً لتوليد المخرجات."
          : "Validation Error: Please enter a descriptive prompt of at least 15 characters to generate a structured output.";
        return;
      }

      isStudioRunning = true;
      if (studioSubmitBtn) {
        studioSubmitBtn.disabled = true;
      }
      loadingBox.classList.remove("hidden");

      setTimeout(function () {
        isStudioRunning = false;
        if (studioSubmitBtn) {
          studioSubmitBtn.disabled = false;
        }
        loadingBox.classList.add("hidden");
        outputBox.classList.remove("hidden");
        const estTok = Math.max(120, Math.ceil(inputVal.length / 4) + 240);
        const generated = isAr
          ? [
              "### مخرجات AuraAI المنظمة (الوضع: " + toneVal.toUpperCase() + " | الإبداع: " + tempVal + ")",
              "------------------------------------------------------------",
              "• الهدف المدخل: " + inputVal,
              "• خطة التنفيذ المقترحة:",
              "  1. صياغة عرض القيمة: عنوان واضح يركز على حل مشكلة العميل المستهدف.",
              "  2. هيكلة التحويل: معاينة حية تفاعلية + جدول باقات شفاف.",
              "  3. ضمان الجودة: كود HTML5 دلالي متوافق مع W3C ودعم أصيل لـ RTL/LTR.",
              "• الاستهلاك المقدر: " + estTok + " توكن | زمن الاستجابة: 0.38 ثانية"
            ].join("\n")
          : [
              "### AuraAI Structured Output (" + toneVal.toUpperCase() + " MODE | Temp: " + tempVal + ")",
              "------------------------------------------------------------",
              "• Input Objective: " + inputVal,
              "• Recommended Execution Framework:",
              "  1. Value Proposition Hook: Clear problem-solution headline tailored to target buyer.",
              "  2. Conversion Architecture: Interactive live preview + transparent pricing tiers.",
              "  3. Quality Assurance: W3C semantic HTML5, zero inline styles, RTL/LTR bidirectional support.",
              "• Estimated Token Usage: " + estTok + " tokens | Latency: 0.38s"
            ].join("\n");
        outputCode.textContent = generated;
        addToHistory(inputVal);
      }, 420);
    });
  }

  /* 9. API Developer Docs Code Tabs, Copy & Race-Safe Live Playground (api-docs.html) */
  const codeTabBtns = document.querySelectorAll(".code-tab-btn");
  const codePanels = document.querySelectorAll(".code-panel");
  const copyApiBtn = document.getElementById("copyApiSnippetBtn");
  const tryApiBtn = document.getElementById("tryApiEndpointBtn");
  const apiLiveBox = document.getElementById("apiLiveResponseBox");
  const apiLivePre = document.getElementById("apiLiveResponsePre");
  let isApiRunning = false;

  codeTabBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const target = btn.getAttribute("data-code-target");
      codeTabBtns.forEach(function (b) {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      codePanels.forEach(function (p) {
        p.classList.add("hidden");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      const activePanel = document.getElementById(target);
      if (activePanel) {
        activePanel.classList.remove("hidden");
      }
    });
  });

  if (copyApiBtn) {
    copyApiBtn.addEventListener("click", function () {
      const activePanel = document.querySelector(".code-panel:not(.hidden)");
      const isAr = htmlEl.getAttribute("lang") === "ar";
      if (activePanel) {
        copyTextToClipboard(activePanel.textContent.trim(), function () {
          showToast(isAr ? "تم نسخ كود الربط بنجاح!" : "API code snippet copied!");
        });
      }
    });
  }

  if (tryApiBtn && apiLiveBox && apiLivePre) {
    tryApiBtn.addEventListener("click", function () {
      if (isApiRunning) {
        return;
      }
      isApiRunning = true;
      tryApiBtn.disabled = true;
      const isAr = htmlEl.getAttribute("lang") === "ar";
      apiLiveBox.classList.remove("hidden");
      apiLivePre.textContent = "// Sending POST request to /v1/prompts/execute ...";
      setTimeout(function () {
        isApiRunning = false;
        tryApiBtn.disabled = false;
        const mockPayload = {
          id: "run_" + Math.random().toString(16).slice(2, 10),
          status: "200 OK",
          model: "aura-pro-reasoning",
          timestamp: new Date().toISOString(),
          usage: { prompt_tokens: 38, completion_tokens: 244, total_tokens: 282 },
          latency_ms: 380,
          output: isAr
            ? "تم توليد مخطط إطلاق تطبيق SaaS بنجاح (استجابة محاكاة)."
            : "B2B SaaS Launch Blueprint generated successfully (simulated response)."
        };
        apiLivePre.textContent = JSON.stringify(mockPayload, null, 2);
        showToast(isAr ? "تم استلام استجابة 200 OK" : "Received 200 OK response");
      }, 380);
    });
  }
})();
