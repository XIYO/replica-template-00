---
title: "클라우드 네이티브"
description: "컨테이너, 쿠버네티스, 그리고 현대적인 인프라 구축"
---

## 클라우드 네이티브란?

클라우드 네이티브는 클라우드 환경의 장점을 최대한 활용하도록 설계된 애플리케이션 개발 방식입니다. 확장성, 유연성, 복원력을 핵심 가치로 합니다.

### 핵심 기술 요소

**컨테이너와 Docker**
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

**쿠버네티스 기본 배포**
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: my-app:latest
        ports:
        - containerPort: 3000
```

### 주요 플랫폼 비교

| 플랫폼 | 장점 | 적합한 상황 |
|--------|------|------------|
| AWS EKS | 광범위한 서비스 연동 | 대규모 엔터프라이즈 |
| Google GKE | 가장 성숙한 관리형 K8s | AI/ML 워크로드 |
| Azure AKS | Microsoft 생태계 통합 | .NET 기반 서비스 |

### 서버리스의 부상

- **AWS Lambda / Cloud Functions**: 이벤트 기반 컴퓨팅
- **Cloudflare Workers**: 엣지에서 실행되는 서버리스
- **Vercel / Netlify**: 프론트엔드 중심 서버리스 플랫폼
