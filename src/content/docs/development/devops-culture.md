---
title: "DevOps 문화"
description: "CI/CD, 플랫폼 엔지니어링, 그리고 개발 문화의 변화"
---

## DevOps의 진화

DevOps는 단순한 도구의 조합을 넘어, 조직 문화와 일하는 방식의 변화를 의미합니다. 2026년에는 플랫폼 엔지니어링과 개발자 경험(DX)이 핵심 키워드입니다.

### CI/CD 파이프라인

**GitHub Actions 예시**
```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
      - uses: oven-sh/setup-bun@v2

      - name: Install & Build
        run: |
          bun install
          bun run build

      - name: Deploy
        run: bun run deploy
        env:
          DEPLOY_TOKEN: ${{ secrets.DEPLOY_TOKEN }}
```

### 플랫폼 엔지니어링

개발자가 인프라 복잡성 없이 제품에 집중할 수 있게 하는 것이 목표입니다.

**Internal Developer Platform (IDP) 구성 요소**
- **Backstage**: 개발자 포털
- **Crossplane**: 인프라 추상화
- **ArgoCD**: GitOps 배포
- **Prometheus + Grafana**: 모니터링

### 관측가능성 (Observability)

```typescript
// OpenTelemetry 트레이싱 예시
import { trace } from '@opentelemetry/api';

const tracer = trace.getTracer('my-service');

async function processOrder(orderId: string) {
  const span = tracer.startSpan('process-order');
  span.setAttribute('order.id', orderId);

  try {
    await validateOrder(orderId);
    await chargePayment(orderId);
    await shipOrder(orderId);
    span.setStatus({ code: SpanStatusCode.OK });
  } catch (error) {
    span.setStatus({ code: SpanStatusCode.ERROR });
    throw error;
  } finally {
    span.end();
  }
}
```

### 문화적 요소

- **Blameless Postmortem**: 장애에서 배우는 문화
- **SLO/SLI 기반 운영**: 객관적 지표로 서비스 품질 관리
- **Chaos Engineering**: 의도적 장애 주입으로 복원력 강화
- **Developer Experience**: 개발자 생산성과 만족도 중시
