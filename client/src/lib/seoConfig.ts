export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  canonicalUrl: string;
  lang: string;
}

const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://tops-cre.manus.space';
const ogImage = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663567263507/7kBMT4bwFHFXdzKagqZs6h/hero-gecko-natural-eDH2mUGJagrLVJCxK5V7jN.webp';

export const seoConfigs = {
  en: {
    home: {
      title: 'TOPS CRE - Premium Crested Gecko Breeder',
      description: 'Discover premium crested geckos from TOPS CRE. Specializing in rare and exclusive gecko morphs with expert breeding and care.',
      keywords: ['crested gecko', 'gecko breeder', 'exotic pets', 'gecko morphs', 'premium geckos', 'gecko breeding'],
      ogTitle: 'TOPS CRE - Premium Crested Gecko Breeder',
      ogDescription: 'Discover premium crested geckos from TOPS CRE. Specializing in rare and exclusive gecko morphs.',
      ogImage: ogImage,
      ogUrl: baseUrl,
      twitterCard: 'summary_large_image',
      twitterTitle: 'TOPS CRE - Premium Crested Gecko Breeder',
      twitterDescription: 'Discover premium crested geckos from TOPS CRE.',
      twitterImage: ogImage,
      canonicalUrl: baseUrl,
      lang: 'en',
    } as SEOConfig,
    about: {
      title: 'About TOPS CRE - Premium Gecko Companions',
      description: 'Learn about TOPS CRE\'s commitment to excellence in crested gecko breeding, care, and human-gecko relationships.',
      keywords: ['gecko care', 'gecko breeding', 'exotic pets', 'animal welfare', 'premium breeding'],
      ogTitle: 'About TOPS CRE - Premium Gecko Companions',
      ogDescription: 'Learn about our commitment to excellence in crested gecko breeding and care.',
      ogImage: ogImage,
      ogUrl: `${baseUrl}#about`,
      twitterCard: 'summary_large_image',
      twitterTitle: 'About TOPS CRE',
      twitterDescription: 'Learn about our commitment to excellence in crested gecko breeding.',
      twitterImage: ogImage,
      canonicalUrl: `${baseUrl}#about`,
      lang: 'en',
    } as SEOConfig,
    signature: {
      title: 'Signature Line - TOPS CRE Exclusive Geckos',
      description: 'Explore our rare and exclusive crested gecko lineup. Find your perfect gecko companion from our premium collection.',
      keywords: ['gecko collection', 'rare geckos', 'exclusive morphs', 'gecko morphs', 'breeding geckos'],
      ogTitle: 'Signature Line - TOPS CRE Exclusive Geckos',
      ogDescription: 'Explore our rare and exclusive crested gecko lineup.',
      ogImage: ogImage,
      ogUrl: `${baseUrl}#signature`,
      twitterCard: 'summary_large_image',
      twitterTitle: 'TOPS CRE Signature Line',
      twitterDescription: 'Explore our rare and exclusive crested gecko lineup.',
      twitterImage: ogImage,
      canonicalUrl: `${baseUrl}#signature`,
      lang: 'en',
    } as SEOConfig,
  },
  ko: {
    home: {
      title: 'TOPS CRE - 프리미엄 크레스티드 게코 브리더',
      description: 'TOPS CRE의 프리미엄 크레스티드 게코를 만나보세요. 희귀하고 독점적인 게코 모프를 전문으로 하는 프리미엄 브리더입니다.',
      keywords: ['크레스티드 게코', '게코 브리더', '이국적 애완동물', '게코 모프', '프리미엄 게코', '게코 번식'],
      ogTitle: 'TOPS CRE - 프리미엄 크레스티드 게코 브리더',
      ogDescription: 'TOPS CRE의 프리미엄 크레스티드 게코를 만나보세요. 희귀하고 독점적인 게코 모프를 전문으로 합니다.',
      ogImage: ogImage,
      ogUrl: baseUrl,
      twitterCard: 'summary_large_image',
      twitterTitle: 'TOPS CRE - 프리미엄 크레스티드 게코 브리더',
      twitterDescription: 'TOPS CRE의 프리미엄 크레스티드 게코를 만나보세요.',
      twitterImage: ogImage,
      canonicalUrl: baseUrl,
      lang: 'ko',
    } as SEOConfig,
    about: {
      title: 'TOPS CRE 소개 - 프리미엄 게코 동반자',
      description: 'TOPS CRE의 크레스티드 게코 번식, 관리, 인간-게코 관계 형성에 대한 우리의 약속을 알아보세요.',
      keywords: ['게코 관리', '게코 번식', '이국적 애완동물', '동물 복지', '프리미엄 번식'],
      ogTitle: 'TOPS CRE 소개 - 프리미엄 게코 동반자',
      ogDescription: 'TOPS CRE의 크레스티드 게코 번식과 관리에 대한 우리의 약속을 알아보세요.',
      ogImage: ogImage,
      ogUrl: `${baseUrl}#about`,
      twitterCard: 'summary_large_image',
      twitterTitle: 'TOPS CRE 소개',
      twitterDescription: 'TOPS CRE의 크레스티드 게코 번식과 관리에 대한 우리의 약속을 알아보세요.',
      twitterImage: ogImage,
      canonicalUrl: `${baseUrl}#about`,
      lang: 'ko',
    } as SEOConfig,
    signature: {
      title: '시그니처 라인 - TOPS CRE 독점 게코',
      description: 'TOPS CRE의 희귀하고 독점적인 크레스티드 게코 라인업을 탐색해보세요. 프리미엄 컬렉션에서 완벽한 게코 동반자를 찾으세요.',
      keywords: ['게코 컬렉션', '희귀 게코', '독점 모프', '게코 모프', '번식 게코'],
      ogTitle: '시그니처 라인 - TOPS CRE 독점 게코',
      ogDescription: 'TOPS CRE의 희귀하고 독점적인 크레스티드 게코 라인업을 탐색해보세요.',
      ogImage: ogImage,
      ogUrl: `${baseUrl}#signature`,
      twitterCard: 'summary_large_image',
      twitterTitle: 'TOPS CRE 시그니처 라인',
      twitterDescription: 'TOPS CRE의 희귀하고 독점적인 크레스티드 게코 라인업을 탐색해보세요.',
      twitterImage: ogImage,
      canonicalUrl: `${baseUrl}#signature`,
      lang: 'ko',
    } as SEOConfig,
  },
};

export const getPageSEOConfig = (
  lang: string,
  page: 'home' | 'about' | 'signature' = 'home'
): SEOConfig => {
  const langConfig = seoConfigs[lang as keyof typeof seoConfigs];
  if (!langConfig) {
    return seoConfigs.en.home;
  }
  return langConfig[page as keyof typeof langConfig] || langConfig.home;
};
