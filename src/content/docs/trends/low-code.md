---
title: "로우코드/노코드"
description: "코딩 없이 애플리케이션을 만드는 새로운 패러다임"
---

## 로우코드의 시대

개발자 부족 현상과 디지털 전환 가속화로 로우코드/노코드 플랫폼이 급부상하고 있습니다. 2026년 현재, 기업 애플리케이션의 70% 이상이 로우코드로 개발될 것으로 전망됩니다.

### 주요 플랫폼

**비즈니스 앱 개발**
- **Retool**: 내부 도구 빠른 개발
- **Appsmith**: 오픈소스 로우코드 플랫폼
- **Bubble**: 웹 앱 노코드 개발

**자동화 및 워크플로우**
- **Zapier**: 앱 간 자동화
- **n8n**: 오픈소스 워크플로우 자동화
- **Make (Integromat)**: 복잡한 시나리오 자동화

### 개발자가 알아야 할 점

```javascript
// Retool에서의 쿼리 예시
const users = await query1.trigger();
const filteredUsers = users.filter(user =>
  user.status === 'active' &&
  user.role === selectRole.value
);
return filteredUsers;
```

### 로우코드의 한계

- **복잡한 로직 구현의 어려움**
- **벤더 종속성 문제**
- **성능 최적화 한계**
- **보안 커스터마이징 제한**

### 프로 개발자의 활용법

로우코드는 대체재가 아닌 보완재입니다:
- MVP 빠른 검증
- 내부 도구 신속 개발
- 반복 업무 자동화
- 비개발자와의 협업 도구
