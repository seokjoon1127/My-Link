# 메인 페이지 리디자인 태스크 목록

- [x] 1. 배경 UI 구현: Tailwind CSS를 활용하여 다이내믹 오로라 / 그라데이션 메쉬 배경(Background layer)을 프로젝트 메인 영역(`app/page.tsx`) 가장 뒷단에 추가.
- [x] 2. 폰트/텍스트 개선: 핵심 타이틀 텍스트를 그라데이션 타이포그래피(`bg-clip-text`)로 수정.
- [x] 3. 컴포넌트 강화: shadcn의 기본 `Card` 컴포넌트에 Tailwind Glassmorphism (유리 질감, blur, 투명도 등) CSS Utility를 주입.
- [x] 4. 애니메이션 추가: 카드에 마우스 호버(Hover) 시 발생하는 인터랙티브한 마이크로 애니메이션 효과 (Scale, Shadow glow 등) 디테일 세팅하기.
- [x] 5. 검증 단계: `npm run build` 명령어 수행 및 실제 구동 환경에서 UI가 의도된 프레임/비율대로 깨짐 없이 출력되는지 확인 (진행 중).
