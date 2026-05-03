# 시스템 및 인터페이스 커스텀 설계서 (리디자인)

## 1. 아키텍처 및 기술 스택 명세
- **프레임워크**: Next.js 14 App Router 구조 유지
- **스타일링**: Tailwind CSS 4, PostCSS
- **UI 컴포넌트**: `shadcn/ui` Card 유지 (원칙 준수). 컴포넌트 자체를 교체하지 않고, 부모 단위에서 Tailwind `className` 속성을 중첩하여 새로운 디자인 시스템(Glassmorphism)을 강제로 주입하는 방식을 채택합니다.

## 2. 인터페이스(UI) 설계 원칙
- **무게감 있고 화려한 디자인 (Rich Aesthetics)**: 기존 흰색/검은색 단색 배경 탈피.
- **유리 질감 도입 (Glassmorphism)**: UI 컨테이너 및 `Card`에 `bg-white/10`, `backdrop-blur-lg`, `border-white/20` 등의 시각적 설정을 적용해 현대적 디자인 구성.
- **Gradient Typography**: 주요 타이틀("My Links") 텍스트에 CSS 그라디언트 텍스트(`bg-clip-text text-transparent`) 기술을 활용하여 시선 유도.

## 3. 세부 구성 요소 설계 방안
- **배경 (Background Layer)**: `fixed inset-0` 위치로 뒷배경에 다중 반투명 구형(Blob)을 배치하고 `blur-3xl` 등으로 문질러 오로라/메쉬(Gradient Mesh) 형태의 백그라운드를 구축합니다.
- **헤더 영역 (Header Section)**: 사용자 임시 아바타 영역의 배경을 제거하고 부드러운 그라데이션 타이틀 텍스트로 시각적 개편.
- **링크 카드 리스트 (Link Card List)**: 
  - 기본 상태: 약한 반투명 색상, 얇고 밝은 보더 라인
  - 상호작용 상태 (Hover): 어두운 테마 대비 밝아지는 유리 배경(`hover:bg-white/20`), 규모 확장(`hover:scale-[1.02]`), 강렬한 박스 쉐도우.

## 4. 링크 관리 및 상태 구조 설계
- **로컬 데이터 상태 관리**: 메인 페이지(`app/page.tsx`)를 Client Component(`"use client"`)로 전환하여 `useState`를 통해 링크 데이터(`links`) 임시 보관 및 렌더링 제어.
- **다이얼로그 폼 (Dialog Form)**:
  - `shadcn/ui`의 Dialog, Input, Label, Button 컴포넌트를 사용하여 인라인 혹은 모달 형태의 폼 렌더링.
  - 제출 시 Google Favicon API(`https://www.google.com/s2/favicons?domain=${url}&sz=64`)를 적용된 `faviconUrl`을 신규 링크 객체에 담아 목록 최하단 혹은 최상단에 반영.
- **폼 검증 (Validation)**: `zod` + `react-hook-form` + `@hookform/resolvers` 조합으로 구현.
  - Zod 스키마(`linkFormSchema`)에 각 필드 규칙 정의 (제목: 1~50자, URL: 비어있지 않고 파싱 가능한 형식, `https://` 자동 보정).
  - `useForm({ resolver: zodResolver(linkFormSchema) })`로 RHF와 연결.
  - 에러 메시지: `formState.errors.[field]?.message`로 각 `Input` 하단에 표시 (`text-destructive text-sm`).
  - 에러 필드 테두리: `border-destructive` 강조.
  - 다이얼로그 닫힐 때 `reset()` 호출로 폼 전체 초기화.
- **데이터 모델 규칙**:
  - `data/links.ts` (LinkItem)의 모델 유지. 추가되는 임시 요소의 고유 ID는 `Date.now().toString()` 등 임시 해시 활용.
