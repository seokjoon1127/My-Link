# My Link (마이링크) - Gemini CLI 프로젝트 가이드

이 파일은 Gemini CLI가 프로젝트를 이해하고 일관된 방식으로 협업하기 위한 가이드라인입니다.

## 1. 프로젝트 개요 (Project Overview)
- **목적**: 크리에이터와 프리랜서를 위한 개인화된 멀티 링크 프로필 서비스 (Linktree 클론).
- **주요 기술 스택**:
  - **Framework**: Next.js 14 (App Router, TypeScript)
  - **Styling**: Tailwind CSS 4, PostCSS
  - **UI Library**: Shadcn UI (Radix UI 기반)
  - **Icons**: Hugeicons
  - **Backend**: Firebase (Google Auth, Firestore 예정)
- **아키텍처**:
  - `/app`: Next.js App Router 기반 페이지 및 레이아웃.
  - `/components`: 공통 컴포넌트 및 Shadcn UI (`/ui`).
  - `/lib`: 공통 유틸리티 함수 (`utils.ts`).
  - `/docs`: PRD, 사용자 시나리오, 와이어프레임 등 기획 문서.

## 2. 주요 명령어 (Building and Running)
- **개발 서버 실행**: `npm run dev` (Turbopack 사용)
- **프로젝트 빌드**: `npm run build`
- **린트 체크**: `npm run lint`
- **타입 체크**: `npm run typecheck`
- **코드 포맷팅**: `npm run format` (Prettier)
- **UI 컴포넌트 추가**: `npx shadcn@latest add [component-name]`

## 3. 개발 규칙 및 컨벤션 (Development Conventions)

### 3.1 일반 원칙
- **언어**: 모든 응답, 계획, 태스크 설명은 **한국어**로 작성합니다.
- **커밋 메시지**: 상세하게 작성하며, **한국어**를 사용합니다. (예: `feat: ...`, `fix: ...`, `docs: ...`)
- **검증**: 코드 변경이 완료된 후에는 반드시 `npm run build` 명령어를 실행하여 빌드 오류가 없는지 확인합니다.
- **실행**: 사용자가 명시적으로 요청하지 않는 한 임의로 애플리케이션을 실행하지 않습니다.
- **질문**: 모호하거나 확실하지 않은 부분은 추측하지 말고 사용자에게 질문합니다.

### 3.2 UI/UX 설계 원칙 (와이어프레임 기반)
- **공통 디자인**: 모바일 세로 화면 비율에 최적화된 **중앙 정렬(Center Aligned)** 레이아웃을 채택합니다.
- **인라인 편집(Inline Editing)**: 관리자 대시보드에서 닉네임, Bio, 링크 정보 수정 시 별도의 모달 없이 해당 위치에서 즉시 수정(Inline)할 수 있도록 구현합니다.
- **방문자 뷰 (`/[displayName]`)**:
    - 프로필 아이덴티티(이미지, 닉네임, Bio)와 동적 링크 리스트로 구성합니다.
    - 각 링크 클릭 시 `_blank`(새 탭)로 외부 URL을 엽니다.
- **관리자 대시보드**:
    - **링크 관리**: 링크 추가, 인라인 수정, 삭제(재확인 모달 포함), 노출 상태(ON/OFF) 토글 기능을 포함합니다.
    - **파비콘**: 링크 추가 시 Google Favicon API를 활용하여 해당 사이트의 아이콘을 자동으로 표시합니다.

### 3.3 코드 스타일
- **컴포넌트**: `components/ui/` 하위의 Shadcn UI 컴포넌트를 우선적으로 활용합니다.
- **스타일링**: Tailwind CSS 4의 기능을 활용하며, 가급적 Vanilla CSS보다 유틸리티 클래스 기반 설계를 선호합니다.
- **다크 모드**: `next-themes`와 `ThemeProvider`를 사용하여 다크 모드를 지원합니다.
- **아이콘**: `@hugeicons/react` 라이브러리를 사용합니다.

### 3.3 기획 및 문서화
- `docs/` 폴더 내의 기획 문서(PRD, 시나리오 등)를 수시로 참조하여 구현 방향성을 일치시킵니다.
- 새로운 기능 추가 시 관련 기획 문서 업데이트를 고려합니다.

## 4. 핵심 워크플로우
1. **리서치**: `docs/` 문서 및 기존 코드를 분석하여 요구사항 파악.
2. **전략 수립**: 구현 계획을 한국어로 제안.
3. **실행**: 단계별 코드 작성 및 `npm run build` 검증.
4. **커밋**: 작업 내용을 상세한 한국어 메시지와 함께 커밋.
