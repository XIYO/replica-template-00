# Replica Template

Cloudflare Workers에 자동 배포되는 Astro + Starlight 문서 사이트 템플릿.

## 배포 설정

이 템플릿을 포크/복제한 후 **GitHub Repository Settings**에서 다음 값을 설정하세요.

### 1. Variables 설정

`Settings > Secrets and variables > Actions > Variables`

| Name | 설명 | 예시 |
|------|------|------|
| `SITE_SUBDOMAIN` | 사이트 서브도메인 | `my-docs` |

> 설정 후 `https://{SITE_SUBDOMAIN}.xiyo.dev`로 접속 가능

### 2. Secrets 설정

`Settings > Secrets and variables > Actions > Secrets`

| Name | 설명 |
|------|------|
| `CLOUDFLARE_API_KEY` | Cloudflare Global API Key |
| `CLOUDFLARE_EMAIL` | Cloudflare 계정 이메일 |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Account ID |
| `CLOUDFLARE_ZONE_ID` | xiyo.dev Zone ID |

### 3. 배포 실행

설정 완료 후:

- `main` 브랜치에 푸시하면 자동 배포
- 또는 `Actions > Deploy to Cloudflare Workers > Run workflow` 수동 실행

### 설정 누락 시

필수 값이 누락되면 빌드가 실패하며, 어떤 값이 누락되었는지 에러 메시지로 표시됩니다.

## 로컬 개발

```bash
pnpm install
pnpm dev        # http://localhost:4321
```

## 프로젝트 구조

```text
.
├── src/
│   ├── content/docs/   # 문서 파일 (.md, .mdx)
│   ├── assets/         # 이미지
│   └── styles/         # 커스텀 CSS
├── public/             # 정적 파일 (favicon 등)
├── site.config.json    # 사이트 설정
├── astro.config.mjs    # Astro 설정
└── wrangler.toml       # Cloudflare Workers 설정
```

## 명령어

| 명령어 | 설명 |
|--------|------|
| `pnpm dev` | 개발 서버 실행 |
| `pnpm build` | 프로덕션 빌드 |
| `pnpm preview` | 빌드 미리보기 |

## 참고

- [Starlight Docs](https://starlight.astro.build/)
- [Astro Docs](https://docs.astro.build)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
