# emfls pet

강아지와 고양이의 먹이, 행동, 생활환경, 위생, 훈련, 놀이를 다루는 정적 생활 가이드 사이트입니다.

## Production

- 공식 도메인: https://pet.emfls.com
- Sitemap: https://pet.emfls.com/sitemap-index.xml
- Robots: https://pet.emfls.com/robots.txt

Search Console에 사이트를 등록할 때 위 sitemap URL을 제출합니다. 소유권 확인 값은 실제 Search Console에서 발급받은 뒤 별도 작업으로 추가합니다.

## Local verification

```bash
npm install
npm run check
npm run build
```

배포 설정과 custom domain 연결은 실제 Cloudflare 프로젝트가 확인된 뒤 해당 프로젝트에서 처리합니다. 이 저장소에는 API, DB, 환경변수, 계정 기능이 없습니다.
