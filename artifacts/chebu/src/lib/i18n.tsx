import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ru" | "zh";

const translations = {
  en: {
    hero: {
      headline: "THE PEOPLE'S MEME HAS ARRIVED",
      subtext: "Born in mystery. Raised by comrades. Deployed on TON.",
      btnBuy: "BUY $CHEBU",
      btnTelegram: "JOIN TELEGRAM",
      btnManifesto: "READ MANIFESTO",
      ticker: "HODL FOR THE MOTHERLAND ★ CHEBU IS WATCHING ★ THE CHART MUST GO UP ★",
    },
    manifesto: {
      title: "THE CHEBU MANIFESTO",
      p1: "Comrades! For too long, the bourgeoisie have controlled the memes. They promised utility, roadmaps, and venture capital returns. They gave us nothing but empty discord servers and rugged charts.",
      p2: "The time for fake utility is over. $CHEBU is the vanguard of the new meme economy. We do not build products. We build a movement.",
      p3: "Join the collective. Embrace the red chart until it turns green. The motherland of TON welcomes you.",
      card1: "No masters. Only memes.",
      card2: "Every comrade deserves a bag.",
      card3: "The revolution will be posted in Telegram.",
      card4: "One meme. One people. One chart.",
    },
    culture: {
      title: "THE CULTURE",
      block1Title: "THIS IS NOT A PRODUCT",
      block1Text: "Do not look for a whitepaper. Do not ask for a CEO. We are a collective consciousness.",
      block2Title: "THIS IS NOT AN INVESTMENT",
      block2Text: "This is a test of faith. Only the strongest hands will survive the winter.",
      block3Title: "THIS IS A MEME YOU CHOOSE TO BELIEVE IN",
      block3Text: "Culture is our only utility. Identity is our only roadmap.",
    },
    roadmap: {
      title: "THE FIVE-YEAR PLAN",
      phase1: "Phase I — The Toy Awakens",
      phase2: "Phase II — The People Assemble",
      phase3: "Phase III — Infinite Posting",
      phase4: "Phase IV — Global Chebu Expansion",
      phase5: "Phase V — The Chart Goes Up",
    },
    howToBuy: {
      title: "HOW TO JOIN THE UNION",
      step1: "1. Install Tonkeeper",
      step2: "2. Buy TON",
      step3: "3. Swap for $CHEBU",
      step4: "4. Hold",
      step5: "5. Post memes",
      btnBuy: "BUY ON TON",
    },
    propaganda: {
      card1: "BUY THE DIP, COMRADE",
      card2: "HODL FOR THE MOTHERLAND",
      card3: "REPORT BEARISH THOUGHTS",
      card4: "THE CHART MUST GO UP",
      card5: "PAPER HANDS WILL BE REPORTED",
      card6: "MEMES ARE THE WEAPONS OF THE PROLETARIAT",
    },
    community: {
      title: "JOIN THE PROPAGANDA DEPARTMENT",
      copy: "Every meme is ammunition. Every repost is service.",
      telegram: "Telegram",
      twitter: "Twitter/X",
      dexScreener: "DexScreener",
      tonviewer: "Tonviewer",
    },
    footer: {
      caCopied: "COPIED TO CLIPBOARD",
    }
  },
  ru: {
    hero: {
      headline: "НАРОДНЫЙ МЕМ ПРИБЫЛ",
      subtext: "Рожден в тайне. Воспитан товарищами. Развернут на TON.",
      btnBuy: "КУПИТЬ $CHEBU",
      btnTelegram: "ВСТУПИТЬ В ТЕЛЕГРАМ",
      btnManifesto: "ЧИТАТЬ МАНИФЕСТ",
      ticker: "ХОДЛ ЗА РОДИНУ ★ ЧЕБУ СЛЕДИТ ★ ГРАФИК ДОЛЖЕН РАСТИ ★",
    },
    manifesto: {
      title: "МАНИФЕСТ ЧЕБУ",
      p1: "Товарищи! Слишком долго буржуазия контролировала мемы. Они обещали ютилити, роадмапы и венчурные доходы. Они не дали нам ничего, кроме пустых дискорд-серверов и обваленных графиков.",
      p2: "Время фальшивого ютилити прошло. $CHEBU — это авангард новой мем-экономики. Мы не строим продукты. Мы строим движение.",
      p3: "Присоединяйтесь к коллективу. Примите красный график, пока он не станет зеленым. Родина TON приветствует вас.",
      card1: "Никаких хозяев. Только мемы.",
      card2: "Каждый товарищ заслуживает сумку.",
      card3: "Революция будет опубликована в Telegram.",
      card4: "Один мем. Один народ. Один график.",
    },
    culture: {
      title: "КУЛЬТУРА",
      block1Title: "ЭТО НЕ ПРОДУКТ",
      block1Text: "Не ищите вайтпейпер. Не спрашивайте о CEO. Мы — коллективное сознание.",
      block2Title: "ЭТО НЕ ИНВЕСТИЦИЯ",
      block2Text: "Это проверка веры. Только самые сильные руки переживут зиму.",
      block3Title: "ЭТО МЕМ, В КОТОРЫЙ ВЫ ВЫБИРАЕТЕ ВЕРИТЬ",
      block3Text: "Культура — наше единственное ютилити. Идентичность — наш единственный роадмап.",
    },
    roadmap: {
      title: "ПЯТИЛЕТНИЙ ПЛАН",
      phase1: "Фаза I — Игрушка Пробуждается",
      phase2: "Фаза II — Народ Собирается",
      phase3: "Фаза III — Бесконечный Постинг",
      phase4: "Фаза IV — Глобальная Экспансия Чебу",
      phase5: "Фаза V — График Идет Вверх",
    },
    howToBuy: {
      title: "КАК ВСТУПИТЬ В СОЮЗ",
      step1: "1. Установить Tonkeeper",
      step2: "2. Купить TON",
      step3: "3. Обменять на $CHEBU",
      step4: "4. Ходлить",
      step5: "5. Постить мемы",
      btnBuy: "КУПИТЬ НА TON",
    },
    propaganda: {
      card1: "ОТКУПАЙ ДНО, ТОВАРИЩ",
      card2: "ХОДЛ ЗА РОДИНУ",
      card3: "ДОКЛАДЫВАЙ О МЕДВЕЖЬИХ МЫСЛЯХ",
      card4: "ГРАФИК ДОЛЖЕН РАСТИ",
      card5: "О БУМАЖНЫХ РУКАХ БУДЕТ ДОЛОЖЕНО",
      card6: "МЕМЫ — ОРУЖИЕ ПРОЛЕТАРИАТА",
    },
    community: {
      title: "ВСТУПАЙ В ОТДЕЛ ПРОПАГАНДЫ",
      copy: "Каждый мем — это боеприпас. Каждый репост — это служба.",
      telegram: "Telegram",
      twitter: "Twitter/X",
      dexScreener: "DexScreener",
      tonviewer: "Tonviewer",
    },
    footer: {
      caCopied: "СКОПИРОВАНО В БУФЕР ОБМЕНА",
    }
  },
  zh: {
    hero: {
      headline: "人民的模因已经到来",
      subtext: "生于神秘。由同志抚养。部署在 TON 上。",
      btnBuy: "购买 $CHEBU",
      btnTelegram: "加入电报",
      btnManifesto: "阅读宣言",
      ticker: "为祖国持有 ★ CHEBU 在看着你 ★ 必须上涨 ★",
    },
    manifesto: {
      title: "CHEBU 宣言",
      p1: "同志们！资产阶级控制模因太久了。他们承诺效用、路线图和风投回报。除了空荡荡的 discord 服务器和崩溃的图表，他们什么也没给我们。",
      p2: "虚假效用的时代结束了。$CHEBU 是新模因经济的先锋。我们不生产产品。我们建立一场运动。",
      p3: "加入集体。拥抱红色图表直到它变绿。TON 的祖国欢迎你。",
      card1: "没有主人。只有模因。",
      card2: "每个同志都应得一个包。",
      card3: "革命将在电报中发布。",
      card4: "一个模因。一个民族。一个图表。",
    },
    culture: {
      title: "文化",
      block1Title: "这不是一个产品",
      block1Text: "不要寻找白皮书。不要问首席执行官是谁。我们是集体意识。",
      block2Title: "这不是一项投资",
      block2Text: "这是对信仰的考验。只有最强有力的手才能熬过冬天。",
      block3Title: "这是一个你选择相信的模因",
      block3Text: "文化是我们唯一的效用。身份是我们唯一的路线图。",
    },
    roadmap: {
      title: "五年计划",
      phase1: "第一阶段 — 玩具觉醒",
      phase2: "第二阶段 — 人民集结",
      phase3: "第三阶段 — 无限发帖",
      phase4: "第四阶段 — 全球 Chebu 扩张",
      phase5: "第五阶段 — 图表上涨",
    },
    howToBuy: {
      title: "如何加入联盟",
      step1: "1. 安装 Tonkeeper",
      step2: "2. 购买 TON",
      step3: "3. 兑换 $CHEBU",
      step4: "4. 持有",
      step5: "5. 发布模因",
      btnBuy: "在 TON 上购买",
    },
    propaganda: {
      card1: "抄底，同志",
      card2: "为祖国持有",
      card3: "报告看跌思想",
      card4: "图表必须上涨",
      card5: "纸手将被报告",
      card6: "模因是无产阶级的武器",
    },
    community: {
      title: "加入宣传部",
      copy: "每个模因都是弹药。每次转发都是服务。",
      telegram: "Telegram",
      twitter: "Twitter/X",
      dexScreener: "DexScreener",
      tonviewer: "Tonviewer",
    },
    footer: {
      caCopied: "已复制到剪贴板",
    }
  }
};

type Translations = typeof translations.en;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <I18nContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
