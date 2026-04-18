import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { getPageSEOConfig } from '@/lib/seoConfig';

interface SEOHeadProps {
  page?: 'home' | 'about' | 'signature';
}

export default function SEOHead({ page = 'home' }: SEOHeadProps) {
  const { i18n } = useTranslation();
  const seoConfig = getPageSEOConfig(i18n.language, page);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={seoConfig.lang} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={seoConfig.description} />
      <meta name="keywords" content={seoConfig.keywords.join(', ')} />
      <meta name="theme-color" content="#C85A3A" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="TOPS CRE" />

      {/* Canonical URL */}
      <link rel="canonical" href={seoConfig.canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoConfig.ogTitle} />
      <meta property="og:description" content={seoConfig.ogDescription} />
      <meta property="og:image" content={seoConfig.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={seoConfig.ogUrl} />
      <meta property="og:site_name" content="TOPS CRE" />
      <meta property="og:locale" content={seoConfig.lang === 'ko' ? 'ko_KR' : 'en_US'} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={seoConfig.twitterCard} />
      <meta name="twitter:title" content={seoConfig.twitterTitle} />
      <meta name="twitter:description" content={seoConfig.twitterDescription} />
      <meta name="twitter:image" content={seoConfig.twitterImage} />
      <meta name="twitter:site" content="@tops_cre" />
      <meta name="twitter:creator" content="@tops_cre" />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Language Alternatives */}
      <link rel="alternate" hrefLang="en" href={`${seoConfig.ogUrl}`} />
      <link rel="alternate" hrefLang="ko" href={`${seoConfig.ogUrl}`} />
      <link rel="alternate" hrefLang="x-default" href={`${seoConfig.ogUrl}`} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'TOPS CRE',
          url: 'https://tops-cre.vercel.app',
          logo: seoConfig.ogImage,
          description: seoConfig.description,
          sameAs: [
            'https://instagram.com/tops_cre',
            'https://www.naver.com',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            availableLanguage: ['en', 'ko'],
          },
          areaServed: ['KR', 'US', 'GB'],
        })}
      </script>

      {/* Title Tag */}
      <title>{seoConfig.title}</title>
    </Helmet>
  );
}
