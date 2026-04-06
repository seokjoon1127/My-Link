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

## 4. 데이터 모델 규칙
- 수정 없음. 기존 렌더링에 사용 중인 `data/links.ts` (LinkItem)의 모델 유지.
