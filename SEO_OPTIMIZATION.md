# SEO 최적화 가이드 - TOPS CRE

## 개요
TOPS CRE 웹사이트는 다음과 같은 SEO 최적화 기능을 포함하고 있습니다:

## 1. 동적 메타 태그 관리

### react-helmet-async 통합
- `SEOHead` 컴포넌트를 통해 모든 메타 태그를 동적으로 관리합니다.
- 언어 변경 시 자동으로 메타 태그가 업데이트됩니다.

### 포함된 메타 태그
- **기본 메타 태그**: charset, viewport, description, keywords
- **Open Graph 태그**: og:title, og:description, og:image, og:url, og:locale
- **Twitter Card 태그**: twitter:card, twitter:title, twitter:description, twitter:image
- **Canonical URL**: 중복 콘텐츠 방지
- **언어 대체 링크**: hreflang 태그로 다국어 버전 명시

## 2. 다국어 SEO

### 지원 언어
- **영어 (en)**: 국제 사용자 대상
- **한국어 (ko)**: 한국 사용자 대상

### 언어별 메타 데이터
각 언어별로 최적화된 메타 데이터가 `seoConfig.ts`에 정의되어 있습니다:
- 제목 (Title)
- 설명 (Description)
- 키워드 (Keywords)
- Open Graph 정보
- Twitter Card 정보

## 3. 구조화된 데이터 (Structured Data)

### JSON-LD 형식
웹사이트는 다음과 같은 구조화된 데이터를 포함합니다:
- **Organization**: 회사 정보, 로고, 설명
- **Contact Point**: 연락처 정보
- **Area Served**: 서비스 지역

이를 통해 검색 엔진이 웹사이트를 더 잘 이해하고 Rich Snippets를 표시할 수 있습니다.

## 4. Sitemap과 Robots.txt

### sitemap.xml
- 모든 주요 페이지와 섹션을 포함합니다.
- 각 페이지의 우선순위와 업데이트 빈도를 명시합니다.
- 다국어 버전에 대한 hreflang 링크를 포함합니다.

### robots.txt
- 검색 엔진 크롤러에 대한 지침을 제공합니다.
- 주요 검색 엔진(Google, Bing, Yahoo)에 대한 특정 규칙을 포함합니다.

## 5. 페이지별 SEO 설정

### Home (홈)
- **목표**: 브랜드 인식 및 초기 방문자 유입
- **키워드**: crested gecko, gecko breeder, exotic pets, premium geckos

### About (소개)
- **목표**: 브랜드 신뢰도 구축
- **키워드**: gecko care, breeding, animal welfare

### Signature (시그니처)
- **목표**: 제품 발견 및 구매 의도
- **키워드**: gecko collection, rare geckos, exclusive morphs

## 6. 최적화된 이미지

### 이미지 SEO
- 모든 이미지에 alt 텍스트가 포함되어 있습니다.
- Open Graph 이미지는 1200x630px 크기로 최적화되었습니다.

## 7. 성능 최적화

### Core Web Vitals
- 빠른 로딩 속도를 위해 최적화된 이미지 사용
- 효율적인 코드 번들링
- 캐싱 전략 (Service Worker를 통한 PWA 지원)

## 8. 모바일 최적화

### Responsive Design
- 모든 페이지가 모바일 친화적입니다.
- 터치 친화적인 인터페이스
- 모바일 메타 태그 포함

## 9. 검색 엔진 등록

### Google Search Console
1. https://search.google.com/search-console 방문
2. 웹사이트 URL 추가
3. Sitemap 제출: `/sitemap.xml`
4. robots.txt 확인

### Bing Webmaster Tools
1. https://www.bing.com/webmaster 방문
2. 웹사이트 추가
3. Sitemap 제출

## 10. 모니터링 및 유지보수

### 정기적인 점검 사항
- Google Analytics를 통한 트래픽 모니터링
- Search Console을 통한 검색 성능 확인
- 메타 태그 정확성 검증
- 링크 상태 확인

### 콘텐츠 업데이트
- 새로운 게코 정보 추가 시 메타 데이터 업데이트
- 계절별 콘텐츠 최적화
- 사용자 피드백 기반 개선

## 11. 추가 최적화 기회

### 향후 개선 사항
1. **Blog 섹션**: 게코 관리, 번식 팁 등의 블로그 콘텐츠 추가
2. **FAQ 페이지**: 자주 묻는 질문에 대한 FAQ 스키마 추가
3. **Video SEO**: YouTube 영상 임베드 및 비디오 스키마 추가
4. **Local SEO**: Google My Business 프로필 최적화
5. **Backlink 전략**: 관련 웹사이트와의 링크 구축

## 12. SEO 체크리스트

- [x] 메타 태그 최적화
- [x] Open Graph 태그 추가
- [x] Twitter Card 태그 추가
- [x] Canonical URL 설정
- [x] 구조화된 데이터 (JSON-LD) 추가
- [x] Sitemap 생성
- [x] Robots.txt 생성
- [x] 다국어 hreflang 태그
- [x] 모바일 최적화
- [x] 이미지 alt 텍스트
- [ ] Google Search Console 등록
- [ ] Bing Webmaster Tools 등록
- [ ] Google Analytics 설정
- [ ] 정기적인 모니터링

## 참고 자료

- [Google Search Central](https://developers.google.com/search)
- [Bing Webmaster Tools](https://www.bing.com/webmaster)
- [Schema.org](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
