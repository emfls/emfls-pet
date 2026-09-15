# emfls pet — Project History

## 2026-09-14 — P0 site foundation

- 빈 `emfls-pet` 저장소에 Astro + TypeScript 정적 사이트를 구성했다.
- 콘텐츠는 Astro content collection과 Markdown frontmatter으로 분리해 100개 이상의 가이드도 확장 가능하게 했다.
- 강아지와 고양이를 민트/웜 오렌지 계열 배지와 허브 페이지로 구분했다.
- 홈은 포털형 흐름(빠른 선택 → 자주 찾는 문제 → 주제 영역 → 향후 기능 → 가이드)으로 설계했다.
- P0 샘플 가이드는 정확히 3개만 작성했다.
- 의료적 진단·처방을 피하고 관찰, 생활관리, 전문가 확인 신호 중심으로 작성했다.
- 실제 기능 없이 Pet Routine과 급여량 참고 계산기의 향후 확장 영역만 배치했다.
- canonical, Open Graph 기본 메타, sitemap, robots.txt, favicon을 추가했다.
- `CONNECTION.md`는 기존 내용을 유지했다.

## 2026-09-14 — P1 core tools

- `/guides/`에 제목·설명·태그 기반 클라이언트 검색, 반려동물 필터, 카테고리 필터, 결과 개수, 결과 없음 상태, 초기화를 추가했다. Content Collection이 생성한 정적 카드 데이터를 사용하므로 서버/API/DB가 필요 없다.
- `/tools/`, `/tools/routine/`, `/tools/feeding/`을 추가하고 홈페이지의 두 확장 영역을 실제 기능으로 연결했다.
- Pet Routine은 급여·물·산책·놀이·위생/관리 5개 체크 항목과 진행 개수를 제공하며, `localStorage`에 `YYYY-MM-DD` 날짜와 완료 상태를 저장한다. 저장된 날짜가 오늘과 다르면 새 상태로 시작해 전날 상태가 이어지지 않는다.
- 급여량 참고 계산기는 `(실제 체중 ÷ 표시 기준 체중) × 표시 하루 권장량`으로 하루 참고량을 계산하고 이를 급여 횟수로 나눠 1회 참고량을 표시한다. 0 이하, 비정상 숫자, 정수가 아닌 급여 횟수를 검증한다.
- 계산기 결과에는 제품 제조사 표 우선, 개별 조건에 따른 차이, 건강·체중 조절 시 수의사 상담 안내를 명시해 의료적 처방으로 오해되지 않게 했다.
- 도구 UI는 기존 아이보리·민트·웜 오렌지 팔레트와 둥근 카드 시스템을 유지하고, 체크박스·폼 라벨·focus 표시·aria-live 오류/결과 영역을 적용했다.
- 재점검에서 Routine 날짜 기준을 UTC가 아닌 브라우저 현지 날짜로 보완했다.

## 2026-09-14 — P2 content foundation

- 기존 3개를 포함해 총 15개 가이드로 확장했다: 강아지 7개, 고양이 8개.
- 강아지 클러스터는 식사·산책·산책 후 관리·목욕·발톱·장난감·혼자 있는 시간을 다룬다.
- 고양이 클러스터는 물·화장실·모래·이동장·놀이·스크래처·혼자 있는 시간·발톱을 다룬다.
- 상세 페이지는 `relatedGuides`를 우선 사용하고, 비어 있으면 같은 pet type과 category를 기준으로 최대 3개를 정적 빌드 시 추천한다. 현재 페이지는 항상 제외한다.
- 본문에는 다음 질문으로 이어지는 의미 있는 내부 링크를 제한적으로 넣었다.
- `/dog/`와 `/cat/`는 각 동물의 생활 소개와 전체 가이드·오늘 루틴 연결을 갖춘 허브로 보완했다.
- `CONTENT_GUIDE.md`에 제목·메타데이터·내부링크·의료 경계·게시 전 체크리스트를 기록했다.
- P2 콘텐츠는 진단·약물·치료 지시 없이 생활 관찰, 환경 확인, 관리 방법, 전문가 확인 신호 범위로 제한했다.

## 2026-09-14 — P3 launch readiness audit

- Audit 결과 About·Privacy·Contact가 사이트 운영 목적과 실제 기능을 충분히 설명하지 못해 보완했다. Contact에는 정의되지 않은 이메일을 만들지 않고 공개 채널 준비 상태를 명시했다.
- `/editorial-policy/`를 추가해 작성·검수·업데이트·오류 수정·의료 경계·향후 상업 콘텐츠 구분 원칙을 공개했다.
- Privacy에 Pet Routine의 브라우저 `localStorage` 저장과 검색/계산기의 서버 전송 없음, 계정·DB·광고·분석 미운영을 실제 상태에 맞게 기록했다.
- Footer에 Pet Routine, 급여량 참고, 콘텐츠 정책을 추가하고 404에서 홈·가이드·강아지·고양이로 복귀할 수 있게 했다.
- Layout의 Open Graph site name과 navigation label을 보완했다. 별도 JSON-LD는 허위 author/rating/organization을 만들지 않기 위해 추가하지 않았다.
- 이미지 정책을 라이선스 확인 자산·직접 제작 자산·alt text·장식 이미지 원칙으로 확정했다.
- P3 범위에서 새 콘텐츠·기능·광고·분석·배포 설정은 추가하지 않았다.

## 2026-09-14 — P4 production launch readiness

- 문서와 저장소를 확인한 결과 현재 프로젝트에는 Cloudflare/Pages/Workers 연결 설정, hosting manifest, wrangler 설정 또는 production credential이 없다. 따라서 다른 Cloudflare 프로젝트로 우회하거나 새 프로젝트를 임의 생성하지 않았다.
- Astro production URL은 `astro.config.mjs`의 `https://pet.emfls.com`으로 이미 일관되게 설정되어 있었다. sitemap, robots, canonical, Open Graph URL도 해당 site 설정을 사용한다.
- `README.md`를 추가해 공식 URL, sitemap, robots, Search Console 제출 방법과 실제 배포 연결이 별도 필요함을 기록했다.
- `npm run check`와 `npm run build`를 재실행하고 27개 정적 페이지, sitemap, robots, favicon, tools 페이지 생성을 확인했다.
- 빌드 HTML 기준 27개 title·description·canonical이 모두 존재하고 중복이 없으며, 내부 링크와 slug도 오류가 없다.
- production URL 외부 QA는 현재 환경에서 `pet.emfls.com`을 안전하게 열 수 없어 완료하지 못했다. 따라서 HTTP 200, HTTPS redirect, 실제 모바일 동작, Search Console 소유권은 사람이 배포 연결 후 확인해야 한다.
- 이번 작업에서 새 기능, 광고, Analytics, verification 값, Cloudflare 설정은 추가하지 않았다.

## 2026-09-14 — P4 Cloudflare connection attempt

- Cloudflare 계정에서 다른 Pages 프로젝트를 수정하지 않고 `emfls-pet` Pages 프로젝트를 생성했다. Project ID는 `f08b8eef-88d9-4cae-bf40-4b73c6ec9f9f`이다.
- GitHub source는 `emfls/emfls-pet`, production branch는 `main`, build command는 `npm run build`, output directory는 `dist`, root directory는 저장소 루트로 연결했다. Analytics와 환경변수는 추가하지 않았다.
- `main`에 `chore: trigger production deployment` 커밋(`66cac66`)을 push했지만 Cloudflare API의 deployment 목록에는 아직 production deployment가 생성되지 않았다.
- `emfls.com` zone에서 기존 `pet.emfls.com` DNS record가 없음을 확인한 뒤 `pet → emfls-pet.pages.dev` CNAME을 추가했다. Pages custom domain 상태는 여전히 `pending`이며 API가 `CNAME record not set`으로 보고한다.
- CNAME은 Pages 검증을 위해 DNS-only(`proxied: false`)로 설정했다. 기존 다른 프로젝트의 DNS 레코드는 수정하지 않았다.
- Direct Upload는 로컬 `dist`를 배포할 수 있지만 Wrangler에 `CLOUDFLARE_API_TOKEN`이 없어 실행되지 않았다. 검증된 manifest 없이 deployment API에 메타데이터만 POST하는 우회는 안전상 수행하지 않았다.
- 결과: Cloudflare project와 GitHub 연결은 완료됐지만 production deployment와 custom domain 검증은 BLOCKED 상태다. 사람이 Cloudflare Pages/GitHub 연결 권한 또는 scoped API token으로 한 번 배포를 트리거하고 CNAME 검증을 확인해야 한다.

## 2026-09-14 — P4 deployment blocker confirmation

- 최신 조회에서 Pages project source는 정확히 `github / emfls / emfls-pet / main`이며 `deployments_enabled`와 `production_deployments_enabled`가 모두 true, build는 `npm run build` → `dist`다.
- `main` push 이후에도 Cloudflare deployment 목록은 0개이고 `latest_deployment`·`canonical_deployment`도 null이다. Cloudflare API에 동일 source를 재연결하려 하자 `A repository is already connected to this project`를 반환했다.
- 따라서 최초 Production deployment가 생성되지 않는 확정 범위의 원인은 로컬 Astro build가 아니라 Cloudflare GitHub integration의 push event/webhook 처리 또는 해당 GitHub App repository 권한이다. Pages API 응답만으로 webhook 설치 상태 자체는 확인할 수 없었다.
- `pet.emfls.com` DNS CNAME은 `emfls-pet.pages.dev`로 존재하고 Pages custom domain 상태는 active가 되었지만, deployment가 없어 `https://emfls-pet.pages.dev/`와 `https://pet.emfls.com/` 모두 HTTP 522를 반환했다.
- Wrangler Direct Upload는 `CLOUDFLARE_API_TOKEN`이 없어 실행되지 않았다. 빈 deployment metadata POST나 다른 프로젝트 우회는 하지 않았다.
- 현재 BLOCKER는 Cloudflare Dashboard에서 GitHub App의 `emfls/emfls-pet` repository access/webhook을 확인하거나, 최소 권한의 Cloudflare API token으로 `dist` Direct Upload를 수행하는 것이다.

## 2026-09-15 — GA4 connection

- Measurement ID `G-DS3JXX4VR6`를 공통 `src/layouts/Layout.astro`에 공식 `gtag.js` 방식으로 연결했다.
- `import.meta.env.PROD` 조건으로 production 빌드에서만 Google tag와 config를 출력하며, 정적 사이트의 기본 page_view 동작을 사용하고 수동 page_view 이벤트는 추가하지 않았다.
- 기존 Analytics/GTM 구현은 없었고, 페이지당 Google tag script와 config가 각각 한 번만 생성되도록 확인했다. GTM은 추가하지 않았다.
- Privacy에 Google Analytics 4의 사이트 이용 통계 측정 목적과 Google의 관련 데이터 처리 가능성을 반영했다. Cookie 동의 시스템이나 새로운 수집 항목은 추가하지 않았다.
- `npm run check`와 `npm run build`를 실행해 기존 27개 페이지 구조가 유지되는지 확인한다. Production URL은 기존 Cloudflare deployment blocker 해소 후 별도 확인 대상이다.

## 2026-09-15 — Cloudflare production deployment resolved

- 로컬 `.git` 쓰기 제한으로 일반 push가 처음 차단됐으나, 저장소 범위 권한으로 GA4 변경 commit `72cb774`를 `origin/main`에 push했다.
- 그 push가 `github:push`로 Cloudflare Pages `emfls-pet`에 전달되어 최초 production deployment `e41483b5-9f1a-4572-90a4-c759cdc3fce0`가 생성되고 build/deploy 성공했다. 설정은 `npm run build` → `dist`, production branch `main`이다.
- 배포 alias는 `https://emfls-pet.pages.dev`와 `https://pet.emfls.com`이며, Pages API상 custom domain `pet.emfls.com`은 active다.
- Production에서 홈, 주요 허브·가이드·도구·정책 페이지가 표시되었고, Routine 체크/새로고침 저장과 Feeding 계산/입력 결과를 브라우저로 확인했다. `robots.txt`와 `sitemap-index.xml`은 deployment manifest와 로컬 build에서 정적 파일 생성을 확인했으며 브라우저 보호 기능 때문에 직접 텍스트 열람은 제한됐다.
- Production HTML에는 GA4 `G-DS3JXX4VR6`가 공통 Layout을 통해 삽입되며, deployment에는 27개 HTML 페이지와 sitemap/robots가 포함됐다.
