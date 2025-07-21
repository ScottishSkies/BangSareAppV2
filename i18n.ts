import { I18n } from "i18n-js";

// Define the translation dictionary
const translations = {
  en: {
    welcome: "Welcome to our Bang Saray Guidebook!",
    appPurpose:
      "This app has been created with a single purpose: to provide a positive, inclusive, and helpful asset for everyone who experiences our charming fishing village, whether you're a lifelong local or a first-time visitor. We aim to share the authentic spirit of Bang Saray, highlighting its beauty, culture, and community, and to help you navigate and enjoy all it has to offer.",
    privacyHeader: "Your privacy is important to us.",
    privacyPurpose:
      "This app is designed to provide useful local information about Bang Saray without tracking your personal activity or collecting unnecessary data.",
    whatWeCollectHeader: "What We Collect",
    noPersonalData:
      "• We do not collect your name, contact details, or precise location.",
    basicUsageStats:
      "• We may collect basic usage statistics to improve the app and content.",
    locationAccessHeader: "Location Access",
    locationOptional:
      "• Location access is optional and only used to show your position on the interactive map (coming soon).",
    denyLocation:
      "• You can deny location permission without losing access to the rest of the app.",
    dataSharingHeader: "Data Sharing",
    noDataSharing: "• We do not share your data with third parties.",
    anonymousAnalytics:
      "• Any analytics are anonymous and used only for internal improvement.",
    embeddedContentHeader: "Embedded Content",
    externalLinks:
      "• Some pages link to external sites (e.g. Google Maps, Booking.com).",
    externalPrivacy:
      "• We are not responsible for the privacy practices of these external platforms.",
    contactHeader: "Contact",
    contactText:
      "If you have any questions about this policy or how your data is handled, please contact:",
    email: "📧 bangsaraylocal@gmail.com",
    privacyPolicyLink: "https://bslprivacy.carrd.co/",
    // Hero Screen specific translations
    heroWelcomeTop: "Bang Saray",
    heroWelcomeBottom: "local...",
    heroExplore: "Explore the culture & natural beauty.",
    letsGoButton: "Let's Go!",
    // Settings screen specific translations
    settingsHeader: "App Settings",
    languageHeader: "Select Language",
    settingsButton: "Settings",
    // New MainNavigationScreen translations
    mainNavigationHeader: "Explore Bang Saray", // NEW
    aboutGuidebookButton: "About Our Guidebook", // NEW
    barsRestaurantsButton: "Bars & Restaurants", // NEW
    streetEatingButton: "Street Eating", // NEW
    thingsToDoButton: "Things To Do", // Optional future button
  },
  th: {
    welcome: "ยินดีต้อนรับสู่คู่มือบางเสร่ของเรา!",
    appPurpose:
      "แอปพลิเคชันนี้ถูกสร้างขึ้นด้วยวัตถุประสงค์เดียวคือ เพื่อเป็นเครื่องมือที่เป็นประโยชน์ สร้างสรรค์ และครอบคลุมสำหรับทุกคนที่มาเยือนหมู่บ้านชาวประมงที่มีเสน่ห์ของเรา ไม่ว่าคุณจะเป็นคนท้องถิ่นที่อยู่มาทั้งชีวิต หรือผู้มาเยือนครั้งแรก เรามุ่งหวังที่จะแบ่งปันจิตวิญญาณที่แท้จริงของบางเสร่ เน้นย้ำความงาม วัฒนธรรม และชุมชนของที่นี่ และช่วยให้คุณสำรวจและเพลิดเพลินไปกับทุกสิ่งที่บางเสร่มีให้",
    privacyHeader: "ความเป็นส่วนตัวของคุณเป็นสิ่งสำคัญสำหรับเรา",
    privacyPurpose:
      "แอปพลิเคชันนี้ออกแบบมาเพื่อให้ข้อมูลท้องถิ่นที่เป็นประโยชน์เกี่ยวกับบางเสร่โดยไม่ต้องติดตามกิจกรรมส่วนตัวของคุณหรือรวบรวมข้อมูลที่ไม่จำเป็น",
    whatWeCollectHeader: "สิ่งที่เราเก็บรวบรวม",
    noPersonalData:
      "• เราไม่รวบรวมชื่อ รายละเอียดการติดต่อ หรือตำแหน่งที่แม่นยำของคุณ",
    basicUsageStats:
      "• เราอาจรวบรวมสถิติการใช้งานพื้นฐานเพื่อปรับปรุงแอปและเนื้อหา",
    locationAccessHeader: "การเข้าถึงตำแหน่ง",
    locationOptional:
      "• การเข้าถึงตำแหน่งเป็นทางเลือกและใช้เพื่อแสดงตำแหน่งของคุณบนแผนที่แบบโต้ตอบเท่านั้น (เร็วๆ นี้).",
    denyLocation:
      "• คุณสามารถปฏิเสธการอนุญาตตำแหน่งได้โดยไม่สูญเสียการเข้าถึงส่วนที่เหลือของแอป",
    dataSharingHeader: "การแบ่งปันข้อมูล",
    noDataSharing: "• เราไม่แบ่งปันข้อมูลของคุณกับบุคคลที่สาม",
    anonymousAnalytics:
      "• การวิเคราะห์ใดๆ เป็นข้อมูลที่ไม่ระบุตัวตนและใช้เพื่อการปรับปรุงภายในเท่านั้น",
    embeddedContentHeader: "เนื้อหาที่ฝังตัว",
    externalLinks:
      "• บางหน้าเชื่อมโยงไปยังเว็บไซต์ภายนอก (เช่น Google Maps, Booking.com).",
    externalPrivacy:
      "• เราไม่รับผิดชอบต่อแนวทางปฏิบัติความเป็นส่วนตัวของแพลตฟอร์มภายนอกเหล่านี้",
    contactHeader: "ติดต่อ",
    contactText:
      "หากคุณมีคำถามใดๆ เกี่ยวกับนโยบายนี้หรือวิธีการจัดการข้อมูลของคุณ โปรดติดต่อ:",
    email: "📧 bangsaraylocal@gmail.com",
    privacyPolicyLink: "https://bslprivacy.carrd.co/",
    // Hero Screen specific translations
    heroWelcomeTop: "บางเสร่",
    heroWelcomeBottom: "ท้องถิ่น...",
    heroExplore: "สำรวจวัฒนธรรมและความงามตามธรรมชาติ",
    letsGoButton: "ไปกันเลย!",
    // Settings screen specific translations
    settingsHeader: "การตั้งค่าแอป",
    languageHeader: "เลือกภาษา",
    settingsButton: "การตั้งค่า",
    // New MainNavigationScreen translations
    mainNavigationHeader: "สำรวจบางเสร่", // NEW
    aboutGuidebookButton: "เกี่ยวกับคู่มือของเรา", // NEW
    barsRestaurantsButton: "บาร์และร้านอาหาร", // NEW
    streetEatingButton: "อาหารริมทาง", // NEW
    thingsToDoButton: "สิ่งที่น่าสนใจ", // Optional future button
  },
};

const i18n = new I18n(translations);

// Set a default locale (e.g., English)
i18n.defaultLocale = "en";
i18n.locale = "en"; // Initial locale

// Fallback if a translation is missing
i18n.enableFallback = true;

export default i18n;
