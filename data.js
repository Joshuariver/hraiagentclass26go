/**
 * HR AI Agent Dev Process App - Global Data
 */

const AppData = {
    // 1. Agent Dev Process (7 Stages)
    processStages: [
        {
            id: "stage-1",
            title: "1. Idea (아이디어)",
            shortSummary: "어떤 HR 문제를 어떤 사용자 관점에서 해결할 것인가를 정의합니다.",
            description: "어떤 HR 문제를 어떤 사용자 관점에서 해결할 것인가를 정의합니다.",
            detailMarkdown: `## 핵심 개념

Idea 단계는 "앱을 만들자"가 아니라, **어떤 HR 문제를 어떤 사용자 관점에서 해결할 것인가**를 잡는 단계입니다. 기능을 나열하기 전에 "누구의 어떤 불편을 줄이는가"를 먼저 정의해야 합니다.

HR 운영 조직 관점에서는 반복 문의 감소·안내 품질 표준화·담당자 업무부하 감소가 핵심이고, 직원 관점에서는 빠른 답변·심리적 불안 감소·정보 누락 방지가 핵심입니다.

## 하는 방식

다음 네 가지 항목을 구조화해서 적습니다.

- **사용자**: 누가 이 Agent를 사용하는가
- **문제**: 어떤 반복적 불편이나 리스크가 있는가
- **기대 결과**: Agent가 성공하면 어떤 변화가 생기는가
- **금지 범위**: AI가 직접 판단하면 안 되는 영역은 무엇인가

AI에게 아이디어 초안을 맡기더라도, 반드시 AI가 임의로 가정한 내용을 먼저 찾아 확인 질문으로 전환해야 합니다.

## 주의할 점

이 단계에서 바로 "Streamlit 코드 짜줘", "FastAPI로 구현해줘"라고 가지 않습니다. HR 도메인은 개인정보·권한·조직별 정책 차이가 크기 때문에 AI가 빈칸을 임의로 채우면 "그럴듯한 구현"이 곧 위험한 구현이 될 수 있습니다.`,
            activities: [
                "사용자·문제·기대 결과·금지 범위를 구조화해서 정리",
                "AI의 임의 가정 목록 미리 작성",
                "핵심 기능 5개와 절대 하면 안 되는 기능 정의",
                "Agent가 성공했다고 볼 수 있는 결과 지표 설정"
            ],
            deliverables: [
                "아이디어 브리프 (사용자·문제·기대결과·금지범위)",
                "AI 임의 가정 목록",
                "성공 기준 초안"
            ],
            hrExample: "신입사원 온보딩 Agent: \"신입사원이 입사 후 30일 동안 자주 묻는 질문에 답하고, HR 담당자는 반복 문의 트렌드와 위험 신호를 대시보드로 확인할 수 있게 한다.\" 사용자(신입사원·HR 담당자·팀장), 문제(반복 문의·안내 품질 불균일), 금지 범위(평가·징계·보상 직접 판단 금지)를 명확히 정의.",
            risks: [
                "기능을 먼저 나열하고 문제 정의를 나중에 하는 패턴",
                "AI에게 바로 코드를 요청해 임의 가정이 구현에 반영됨",
                "HR 도메인의 개인정보·권한·정책 차이를 고려하지 않음",
                "Vibe Coding으로 빠르게 만든 결과를 검증 없이 배포 검토"
            ],
            relatedSkills: ["prompt-engineering", "step-by-step-reasoning"],
            relatedPrompts: ["m1-assumption"],
            source: "md/agent_dev_process.md#1-idea"
        },
        {
            id: "stage-2",
            title: "2. Research (조사)",
            shortSummary: "현장의 업무 흐름, 데이터, 사용자 불편, 정책 제약을 수집합니다.",
            description: "현장의 업무 흐름, 데이터, 사용자 불편, 정책 제약을 수집합니다.",
            detailMarkdown: `## 핵심 개념

Research 단계는 "AI가 알아서 좋은 기능을 생각하게 하는 단계"가 아닙니다. **현장의 업무 흐름, 데이터, 사용자 불편, 정책 제약을 수집하는 단계**입니다.

## 하는 방식

1. **자주 묻는 질문 확인**: 실제 직원이 묻는 질문 목록 수집
2. **운영 흐름 파악**: HR 담당자의 업무 절차와 순서 이해
3. **기준 문서 확인**: 취업규칙, 온보딩 가이드, 복리후생 안내, 보안 정책 등
4. **위험 영역 분리**: 급여·평가·징계·의료정보·노조 등 AI 직접 판단 금지 영역

이 단계에서 "명확화 질문" 프롬프트가 매우 유용합니다. AI가 스스로 가정하게 두지 말고, 명확화 질문을 하도록 유도해야 합니다.

## 주의할 점

AI가 만든 Research 결과를 사실로 간주하면 안 됩니다. AI는 "조사 설계"와 "질문 생성"에는 강하지만, 우리 회사의 실제 정책을 모릅니다. Research 산출물은 반드시 내부 문서와 HR 담당자 인터뷰로 검증해야 합니다.`,
            activities: [
                "이해관계자 인터뷰 질문 목록 작성",
                "자주 묻는 질문(FAQ) 후보 카테고리 수집",
                "답변 기준이 될 문서와 데이터 목록화",
                "개인정보·보안·노무 리스크 항목 사전 분리",
                "AI 직접 답변 가능 영역과 HR 담당자 에스컬레이션 영역 구분"
            ],
            deliverables: [
                "이해관계자 인터뷰 결과",
                "문서 및 데이터 목록",
                "FAQ 후보 카테고리",
                "리스크 목록 (개인정보·보안·노무)"
            ],
            hrExample: "신입사원 온보딩 Agent: 자주 묻는 질문('사번은 언제?', '법정교육은 어디서?', '휴가 신청은 언제부터?'), HR 담당자 운영 흐름(입사 전 안내→입사 당일→1주차 체크→30일 확인), 취업규칙·온보딩 가이드·교육 일정표 목록, 급여·평가·징계 등 AI 직접 답변 금지 영역 사전 분리.",
            risks: [
                "AI가 만든 Research 결과를 실제 조직 정책으로 착각",
                "현장 조사 없이 AI가 생성한 FAQ를 그대로 사용",
                "민감 영역을 사전에 분리하지 않아 구현 후 뒤늦게 문제 발견",
                "정책 문서 미확인 상태에서 AI가 알아서 판단하도록 방치"
            ],
            relatedSkills: ["context-engineering", "rag", "self-consistency"],
            relatedPrompts: ["m1-assumption", "m1-clarification"],
            source: "md/agent_dev_process.md#2-research"
        },
        {
            id: "stage-3",
            title: "3. Prototype (프로토타입)",
            shortSummary: "가장 핵심적인 사용자 경험이 유용한지 확인하는 가벼운 시제품 단계입니다.",
            description: "가장 핵심적인 사용자 경험이 유용한지 확인하는 가벼운 시제품 단계입니다.",
            detailMarkdown: `## 핵심 개념

Prototype 단계는 전체 시스템을 만드는 단계가 아닙니다. **가장 핵심적인 사용자 경험이 실제로 유용한지 확인하는 가벼운 시제품 단계**입니다. 목적은 "이 기능이 쓸 만한가?"를 확인하는 것이지, 완벽한 보안 아키텍처를 완성하는 것이 아닙니다.

## 하는 방식

Streamlit 같은 간단한 UI로 만들어도 충분합니다. 데이터는 실제 개인정보가 아닌 샘플 데이터로 시작합니다.

- **포함할 기능**: 핵심 사용자 경험 3개 이내
- **제외할 기능**: 인증·권한·로그·보안 아키텍처
- **성공 기준**: "이 기능이 실제로 필요한가?"를 확인할 수 있는 시나리오 3개

프로토타입은 의사결정을 위한 **찰흙 모형**입니다.

## 주의할 점

프로토타입을 "거의 완성된 서비스"로 착각하지 않는 것이 핵심입니다. 실제 HR 데이터·SSO·권한 체계·로그 보관·관리자 승인 플로우가 없으면 프로덕션이 아닙니다. Vibe Coding으로 빠르게 만든 결과는 아이디어 검증에는 좋지만, 보안·확장성·유지보수를 요구하는 상용 시스템에는 바로 쓰기 어렵습니다.`,
            activities: [
                "핵심 사용자 경험 3개 이하로 선정",
                "저충실도 앱 설계 (Streamlit 등)",
                "실제 개인정보 없이 샘플 데이터로 시뮬레이션",
                "프로토타입 성공 기준 3개 정의",
                "실제 구현 전 확인해야 할 리스크 목록 작성"
            ],
            deliverables: [
                "저충실도 프로토타입 (Streamlit 등)",
                "샘플 데이터 구조",
                "사용 시나리오 3개",
                "프로토타입 성공 기준"
            ],
            hrExample: "신입사원 온보딩 Agent 프로토타입: 질문 입력 → FAQ 기반 답변 + 근거 문서 출처 표시, 민감 질문 시 'HR 담당자에게 문의하세요'로 전환, HR 담당자 화면에 오늘 들어온 질문 카테고리·미응답·민감 문의 목록 표시.",
            risks: [
                "프로토타입을 완성품으로 착각하고 바로 운영에 투입",
                "실제 개인정보를 샘플 데이터로 사용",
                "보안·권한·로그 미적용 상태로 배포 검토",
                "Vibe Coding 결과를 PRD·SDD 없이 그대로 확장"
            ],
            relatedSkills: ["vibe-coding", "structured-output"],
            relatedPrompts: [],
            source: "md/agent_dev_process.md#3-prototype"
        },
        {
            id: "stage-4",
            title: "4. PRD (제품 요구사항)",
            shortSummary: "AI와 인간 사이의 계약서. 무엇을 만들고, 무엇을 만들지 않으며, 어떤 기준을 통과해야 하는지 정의합니다.",
            description: "AI와 인간 사이의 계약서로서 무엇을 만들고 무엇을 거절할지 정의합니다.",
            detailMarkdown: `## 핵심 개념

PRD 단계는 예쁜 기획서가 아니라, **AI와 인간 사이의 계약서**입니다. "무엇을 만들고, 무엇을 만들지 않으며, 어떤 기준을 통과해야 하는가"를 명확히 합니다.

PRD는 후속 SDD·Kanban 단계의 단일 진실 공급원(Single Source of Truth)으로 작동합니다.

## 하는 방식

요구사항은 반드시 **관찰 가능한 행동**으로 써야 합니다.

- ❌ "사용자가 편리하게 이용한다" (관찰 불가)
- ✅ "질문 입력 후 3초 이내에 답변 후보를 제공한다" (관찰 가능)
- ✅ "근거 문서가 없으면 추측하지 않고 '확인 필요'로 응답한다" (관찰 가능)

AI 초안은 반드시 모호성 리뷰로 검증한 후 사용합니다.

## 주의할 점

PRD 초안을 검토 없이 사용하면 모호한 명세가 구현에 그대로 반영됩니다. AI 직접 판단 금지 영역(급여·평가·징계 등)을 명확히 분리하고, 확인되지 않은 내용은 [확인 필요]로 표시해야 합니다.`,
            activities: [
                "기능 요구사항 작성 (관찰 가능한 행동 기준)",
                "비기능 요구사항 작성 (성능·보안·접근성)",
                "수용 조건 (Acceptance Criteria) 정의",
                "역할별 접근 권한 정책 작성",
                "민감 질문 처리 정책 명시",
                "AI 직접 판단 금지 영역 분리",
                "PRD 모호성 리뷰 수행"
            ],
            deliverables: [
                "제품 요구사항 문서 (PRD)",
                "역할별 접근 권한 정책",
                "민감 질문 처리 정책",
                "수용 조건 목록 (Acceptance Criteria)"
            ],
            hrExample: "수용 조건 예시: 답변에 근거 문서명 또는 FAQ 항목 ID 표시 필수, 근거 없으면 '확인 필요'로 응답, 급여·평가·징계·의료정보·노무 이슈는 자동 답변 금지 및 HR 담당자 연결, 신입사원은 본인 데이터만 조회 가능.",
            risks: [
                "'사용자가 편리하게 이용한다' 같은 관찰 불가능한 요구사항 작성",
                "AI 초안을 검토 없이 그대로 사용",
                "모호성 리뷰 생략",
                "AI 직접 판단 금지 영역 미분리",
                "확인되지 않은 정책을 사실처럼 기술"
            ],
            relatedSkills: ["sdd"],
            relatedPrompts: ["m2-vibe-prd", "m2-ambiguity", "m3-sdd-spec"],
            source: "md/agent_dev_process.md#4-prd"
        },
        {
            id: "stage-5",
            title: "5. Kanban (작업 분해)",
            shortSummary: "PRD를 AI 코딩 에이전트가 처리할 수 있는 작은 티켓 단위로 분해합니다.",
            description: "PRD를 AI 코딩 에이전트가 처리할 수 있는 작은 티켓 단위로 쪼갭니다.",
            detailMarkdown: `## 핵심 개념

Kanban 단계는 PRD를 개발 작업으로 번역하는 단계입니다. "좋은 기획서"를 **AI 코딩 에이전트가 하나씩 수행할 수 있는 티켓**으로 바꿉니다.

SDD는 전체 애플리케이션을 한 번에 만들게 하지 않고, 작업을 작은 Task List로 분할하여 AI의 컨텍스트 손실을 줄이는 방식입니다.

## 하는 방식

Kanban 컬럼: **Backlog → Ready → In Progress → Review → QA → Done**

각 티켓은 AI 코딩 에이전트가 **30~60분 내 처리할 수 있을 정도로 작게** 쪼갭니다. ReAct 구조로 더 정교하게 작성할 수 있습니다.

- **Reason**: 이 작업이 필요한 이유
- **Act**: 수행할 구체 작업
- **Verify**: 완료 여부를 확인하는 방법
- **Risk**: 실패하거나 오해될 수 있는 지점

## 주의할 점

"온보딩 Agent 구현"은 티켓이 아니라 프로젝트명입니다. AI에게 너무 큰 덩어리를 주면 초반에는 그럴듯하지만, 후반에는 맥락을 잃고 코드베이스를 망가뜨릴 수 있습니다.`,
            activities: [
                "PRD에서 기능별 티켓 분리",
                "UI·데이터 모델·보안 티켓 별도 분리",
                "권한·개인정보·민감 질문 처리 티켓 별도 분리",
                "선행 의존성 (Dependency) 명시",
                "ReAct 형식 Task List 작성"
            ],
            deliverables: [
                "Kanban 보드 티켓 목록",
                "ReAct 형식 Task List",
                "티켓별 Done Definition"
            ],
            hrExample: "신입사원 온보딩 Agent 티켓 예시: ① FAQ 데이터 모델 생성, ② 샘플 FAQ 30개, ③ 사용자 역할 모델 정의, ④ 질문 입력 UI, ⑤ FAQ 검색 로직, ⑥ 민감 질문 분류 규칙, ⑦ HR 대시보드, ⑧ 로그 저장 구조, ⑨ 테스트 케이스, ⑩ 보안·권한 리뷰.",
            risks: [
                "'온보딩 Agent 구현' 같은 너무 큰 티켓 생성",
                "UI와 데이터 모델을 한 티켓에 묶기",
                "선행 의존성 미표시로 실행 순서 충돌",
                "권한·민감 정보 처리 티켓을 일반 기능 티켓과 혼재"
            ],
            relatedSkills: ["react-pattern", "step-by-step-reasoning"],
            relatedPrompts: ["m4-tasklist"],
            source: "md/agent_dev_process.md#5-kanban"
        },
        {
            id: "stage-6",
            title: "6. Implementation (구현)",
            shortSummary: "AI에게 코딩을 맡기되, 한 번에 티켓 하나씩 통제하며 실행합니다.",
            description: "AI에게 코딩을 맡기되, 한 번에 티켓 하나씩 통제하며 실행합니다.",
            detailMarkdown: `## 핵심 개념

Implementation 단계에서 인간의 역할은 코딩 노동자가 아니라 **오케스트레이터**입니다. "구현은 AI가, 의도와 검증은 사람이 주도한다"는 원칙을 지킵니다.

## 하는 방식

1. 전체 PRD와 현재 티켓을 AI에게 제공
2. "현재 티켓만 구현하라"고 범위 제한
3. 구현 후 변경 파일 목록·구현 내용·테스트 방법·남은 이슈 설명 요청
4. 결과를 확인하고 다음 티켓으로 진행

구현 지시문에는 반드시 **하지 말아야 할 것**을 명시합니다.

## 주의할 점

AI가 "친절하게" 범위를 넘는 기능을 추가할 수 있습니다. "로그인도 넣어드렸습니다", "급여 문의도 답변하도록 확장했습니다" 같은 과잉 구현은 HR 시스템에서 리스크 폭탄이 됩니다. 구현 후에는 반드시 수용 조건과 대조해 검토합니다.`,
            activities: [
                "전체 PRD + 현재 티켓을 AI에게 제공",
                "구현 범위 명시 ('현재 티켓만 구현')",
                "하지 말아야 할 것 명시",
                "구현 후 수용 조건 대조 검토",
                "다음 티켓 진행 판단"
            ],
            deliverables: [
                "티켓별 구현 코드",
                "실행 방법",
                "간단한 테스트 방법",
                "다음 티켓으로 넘어가도 되는지 판단 결과"
            ],
            hrExample: "첫 번째 구현 티켓 (FAQ 데이터 모델): category, question, answer, source, sensitivity_level 필드 포함, 민감 질문은 answer 직접 제공 대신 escalation_required=True로 표시, 실제 회사명·개인정보 사용 금지.",
            risks: [
                "AI의 친절한 과잉 구현 (로그인·급여 답변 자동 추가)",
                "'하지 말아야 할 것' 미명시로 범위 이탈",
                "범위를 벗어난 기능을 묵인하고 다음 단계로 진행",
                "수용 조건 검토 없이 '작동하면 OK' 판단"
            ],
            relatedSkills: ["agentic-workflow", "tool-calling", "multi-agent", "memory-engineering"],
            relatedPrompts: ["m4-instruction", "m5-workflow", "m5-tool"],
            source: "md/agent_dev_process.md#6-implementation"
        },
        {
            id: "stage-7",
            title: "7. QA & Code Review (검증)",
            shortSummary: "작동 여부를 넘어 HR 도메인의 신뢰성, 보안성, 설명 가능성을 검증합니다.",
            description: "작동 여부를 넘어 HR 도메인의 신뢰성과 안전성을 검증합니다.",
            detailMarkdown: `## 핵심 개념

QA & Code Review 단계는 버튼이 눌리는지만 보는 단계가 아닙니다. HR AI Agent에서는 **기능적 정확성·권한 제어·개인정보 보호·설명 가능성**을 함께 검증해야 합니다.

## 하는 방식

**QA 관점**: 정상 시나리오 + 엣지 케이스 + 권한 오류 + 민감 질문 + 프롬프트 인젝션 + 개인정보 노출 가능성 + 에스컬레이션 + 로그/감사 추적

**Code Review 관점**: PRD 일치 여부 + 역할 기반 접근 제어 + 개인정보 최소 수집 + 민감 질문 처리 + 하드코딩된 정책 + 예외 처리 + 보안 취약점

TDD와 수용 조건을 구현 전에 정의하고, 권한 제어를 고려한 테스트 케이스를 만드는 것이 핵심입니다.

## 주의할 점

"AI가 리뷰했으니 됐다"로 끝내면 안 됩니다. AI 리뷰는 1차 필터입니다. 실제 HR 시스템에서는 HR·보안·개인정보·법무 담당자의 확인이 필요합니다.`,
            activities: [
                "정상·엣지·권한오류·민감질문 시나리오 테스트",
                "악의적 프롬프트 인젝션 테스트",
                "개인정보 노출 가능성 점검",
                "코드 리뷰 (PRD 일치·접근제어·예외처리·보안)",
                "HR·보안·개인정보·법무 담당자 최종 확인"
            ],
            deliverables: [
                "QA 테스트 시나리오 및 결과",
                "코드 리뷰 리포트 (Critical / Major / Minor Issues)",
                "배포 전 체크리스트",
                "Must-Fix Before Demo / Must-Fix Before Production 목록"
            ],
            hrExample: "신입사원 온보딩 Agent 검증 예시: 급여 질문 시 AI가 자동 답변하지 않는지, 신입사원이 타인 데이터를 조회할 수 없는지, 민감 정보 로그 보관이 안전한지, 에러 발생 시 위험한 정보를 노출하지 않는지 검증.",
            risks: [
                "'AI가 리뷰했으니 됐다'로 마무리",
                "HR·보안·법무 담당자 최종 확인 생략",
                "프로토타입 수준의 보안으로 배포 진행",
                "신입사원 데이터·조직 정보 등 민감 데이터 배포 전 점검 누락"
            ],
            relatedSkills: ["tdd", "guardrail", "self-reflection", "evaluation-engineering"],
            relatedPrompts: ["m3-sdd-spec", "m3-tdd-scenario", "m3-self-reflection", "m6-harness", "m6-guardrail", "m7-cognitive-risk", "m7-deploy-checklist", "m7-pilot-plan", "wrapup-final-summary"],
            source: "md/agent_dev_process.md#7-qa-and-code-review"
        }
    ],

    // 2. AI Engineering Skills (Full 18 Skills)
    skills: {
        "prompt-engineering": {
            title: "Prompt Engineering",
            summary: "AI에게 역할·목적·형식·제약을 명확히 지시하는 기술",
            concept: "AI에게 역할, 목적, 형식 등을 지시하는 기술",
            whenToUse: "AI에게 특정 역할(HR 분석가, 보고서 작성자)을 부여하거나 출력 형식(표, 목록, JSON)을 지정할 때",
            hrUseCase: "채용공고 초안 작성, 온보딩 안내문 생성, 교육 커리큘럼 초안, 성과 피드백 가이드 작성",
            caution: "모호하게 요청하면 AI가 임의 가정을 채웁니다.",
            sourceNote: "md/ai_engineering_technique.md"
        },
        "step-by-step-reasoning": {
            title: "Chain of Thought / Reasoning",
            summary: "복잡한 문제를 단계별로 생각하게 해 추론 정확도를 높이는 기법",
            concept: "복잡한 문제를 한 번에 답하게 하지 않고 단계별로 생각하게 만드는 기법",
            whenToUse: "정답까지 여러 단계의 논리가 필요한 문제, 원인 분석, 의사결정 설계 등",
            hrUseCase: "교육 니즈 분석, 성과 저하 원인 분석, 역량 격차 진단",
            caution: "단순 업무에 적용하면 답변이 불필요하게 장황해질 수 있습니다.",
            sourceNote: "md/ai_engineering_technique.md"
        },
        "self-reflection": {
            title: "Self-Reflection / Critique",
            summary: "AI가 자신의 답을 스스로 비판하고 오류를 찾게 하는 기법",
            concept: "AI가 만든 답을 스스로 비판하고 오류나 약점을 찾게 하는 기법",
            whenToUse: "초안 검토, 정책 문서 점검, 구현 후 자기 검증이 필요한 단계",
            hrUseCase: "보고서 검토, 정책 문서 점검, 코드 리뷰, PRD 모호성 탐지",
            caution: "AI의 자기 검토도 완전하지 않으므로 사람이 최종 확인해야 합니다.",
            sourceNote: "md/ai_engineering_technique.md"
        },
        "self-consistency": {
            title: "Self-Consistency",
            summary: "같은 문제를 여러 관점으로 풀어 답의 일관성을 비교하는 기법",
            concept: "같은 문제를 여러 관점으로 풀게 한 뒤 답이 일관되는지 비교하는 기법",
            whenToUse: "중요한 판단을 내리기 전, 여러 해석이 가능한 문제를 검증할 때",
            hrUseCase: "평가 기준 검증, 리스크 판단, 인터뷰 평가 일관성 점검",
            caution: "관점이 너무 많아지면 의사결정의 초점이 흐려질 수 있습니다.",
            sourceNote: "md/ai_engineering_technique.md"
        },
        "context-engineering": {
            title: "Context Engineering",
            summary: "AI가 판단하기 전 알아야 할 업무 맥락과 자료를 설계하는 기술",
            concept: "AI가 판단하기 전 알아야 할 업무 맥락과 자료를 설계하는 기술",
            whenToUse: "사내 규정·정책·절차를 기반으로 AI가 답변해야 할 때",
            hrUseCase: "사내 규정 기반 챗봇, 직무 역량 분석, 온보딩 FAQ, 복리후생 안내",
            caution: "불필요한 정보를 너무 많이 주면 핵심 맥락이 흐려집니다.",
            sourceNote: "md/ai_engineering_technique.md"
        },
        "rag": {
            title: "RAG (Retrieval-Augmented Generation)",
            summary: "사내 문서에서 관련 정보를 검색한 뒤 답변하게 하는 구조",
            concept: "사내 문서에서 관련 정보를 검색한 뒤 답변하게 하는 구조",
            whenToUse: "사내 문서 기반 Q&A, 최신 정보가 필요한 답변, 출처 표시가 필요한 답변",
            hrUseCase: "취업규칙 Q&A, 복리후생 안내, 교육 규정 검색, 온보딩 가이드 조회",
            caution: "검색 문서의 최신성 관리가 매우 중요합니다.",
            sourceNote: "md/ai_engineering_technique.md"
        },
        "tool-calling": {
            title: "Tool Calling / Function Calling",
            summary: "AI가 외부 도구, API, DB를 직접 호출하게 만드는 기술",
            concept: "AI가 외부 도구, API, DB 등을 직접 호출하게 만드는 기술",
            whenToUse: "AI가 단순 텍스트 생성을 넘어 실제 시스템과 연동해야 할 때",
            hrUseCase: "HRIS 조회, 메일 발송, 일정 등록, 교육 이수 현황 조회",
            caution: "권한 설계 없이는 위험한 동작을 수행할 수 있습니다.",
            sourceNote: "md/ai_engineering_technique.md"
        },
        "react-pattern": {
            title: "ReAct (Reason + Act)",
            summary: "AI가 생각(Thought)→행동(Action)→관찰(Observe)을 반복하는 구조",
            concept: "AI가 생각하고(Thought), 행동하고(Action), 관찰하는(Observe) 반복 구조",
            whenToUse: "여러 단계의 도구 사용과 판단이 필요한 복합 업무 수행 시",
            hrUseCase: "이슈 해결 에이전트, 복합 업무 수행, 다단계 온보딩 체크리스트 실행",
            caution: "단계가 많아질수록 오류가 누적될 수 있습니다.",
            sourceNote: "md/ai_engineering_technique.md"
        },
        "agentic-workflow": {
            title: "Agentic Workflow",
            summary: "AI가 목표 달성을 위해 여러 단계를 자율적으로 수행하는 흐름 설계",
            concept: "AI가 목표 달성을 위해 여러 단계를 순차적으로 수행하는 흐름",
            whenToUse: "여러 단계의 작업이 순서대로 연결되어야 하는 자동화 업무",
            hrUseCase: "온보딩 자동화, 채용 프로세스 지원, 교육 이수 리마인드 자동화",
            caution: "중간 승인 지점(Human-in-the-loop) 설계가 필수입니다.",
            sourceNote: "md/agentic_workflow.md"
        },
        "multi-agent": {
            title: "Multi-Agent Orchestration",
            summary: "여러 전문 에이전트가 역할을 나눠 협업하는 구조",
            concept: "여러 전문 에이전트가 역할을 나누어 협업하고 조율하는 구조",
            whenToUse: "단일 에이전트로 처리하기 어려운 복잡한 멀티도메인 업무",
            hrUseCase: "채용-교육-노무 통합 처리 시스템, 멀티 스텝 HR 케이스 관리",
            caution: "작은 업무에 사용하면 복잡도만 증가할 수 있습니다.",
            sourceNote: "md/ai_engineering_technique.md"
        },
        "sdd": {
            title: "SDD (Spec-Driven Development)",
            summary: "구현 전 요구사항과 수용 조건을 먼저 정의하는 개발 방식",
            concept: "구현 전 요구사항과 수용 조건을 먼저 정의하는 개발 방식",
            whenToUse: "HR처럼 보안·권한·정책 해석이 중요한 영역에서 AI 코딩을 시작하기 전",
            hrUseCase: "HR AI Agent 개발, 내부 업무 자동화 시스템 설계, 권한 제어가 필요한 시스템",
            caution: "초기 문서화 시간이 필요하지만 나중의 수정 비용을 줄입니다.",
            sourceNote: "md/agent_dev_process.md"
        },
        "tdd": {
            title: "TDD (Test-Driven Development)",
            summary: "구현 전에 성공 기준과 테스트 시나리오를 먼저 정의하는 기술",
            concept: "구현 전에 성공 기준과 테스트 시나리오를 먼저 정의하는 기술",
            whenToUse: "AI 답변 품질, 권한 오류, 민감 질문 처리를 검증해야 할 때",
            hrUseCase: "답변 품질 평가, 권한 오류 검증, 민감 질문 처리 기준 테스트",
            caution: "테스트 기준이 모호하면 결과도 검증할 수 없습니다.",
            sourceNote: "md/ai_engineering_technique.md"
        },
        "evaluation-engineering": {
            title: "Evaluation Engineering",
            summary: "AI 결과물이 좋은지 판단하는 정량적·정성적 기준을 설계하는 기술",
            concept: "AI 결과물이 좋은지 판단하는 정량적/정성적 기준을 설계하는 기술",
            whenToUse: "모델 간 성능 비교, AI 답변 정확도 검증, 배포 전 품질 판단 시",
            hrUseCase: "모델 간 성능 비교, 답변 정확도 검증, 온보딩 Agent 답변 품질 평가",
            caution: "평가 지표 자체가 편향되지 않았는지 검토가 필요합니다.",
            sourceNote: "md/ai_engineering_technique.md"
        },
        "guardrail": {
            title: "Guardrail Engineering",
            summary: "AI가 해서는 안 되는 행동을 차단하는 안전장치 설계",
            concept: "AI가 해서는 안 되는 행동을 차단하는 안전장치 설계",
            whenToUse: "민감 정보 노출·개인정보 침해·정책 위반 가능성이 있는 시스템 설계 시",
            hrUseCase: "개인정보 보호, 민감 정보 노출 방지, 급여·평가 자동 판단 차단",
            caution: "윤리 원칙뿐 아니라 시스템적 차단 로직이 필요합니다.",
            sourceNote: "md/ai_engineering_technique.md"
        },
        "memory-engineering": {
            title: "Memory Engineering",
            summary: "AI가 과거 대화나 사용자 선호를 안전하게 기억하게 하는 기술",
            concept: "AI가 과거 대화나 사용자 선호를 안전하게 기억하게 하는 기술",
            whenToUse: "장기 프로젝트, 개인화 추천, 대화 맥락 유지가 필요한 에이전트",
            hrUseCase: "개인별 교육 추천, 장기 프로젝트 맥락 유지, 1:1 온보딩 지원",
            caution: "민감 정보의 무분별한 저장은 개인정보 리스크를 유발합니다.",
            sourceNote: "md/ai_engineering_technique.md"
        },
        "vibe-coding": {
            title: "Vibe Coding",
            summary: "자연어로 의도를 전달하고 AI 코딩 에이전트와 빠르게 프로토타입을 만드는 방식",
            concept: "자연어로 의도와 제약을 전달하고 AI 코딩 에이전트와 빠르게 프로토타입을 만드는 개발 방식",
            whenToUse: "아이디어를 빠르게 검증해야 할 때, 교육용 MVP, 초기 화면 데모",
            hrUseCase: "초기 HR Agent 화면, 업무 흐름 데모, 실습용 MVP를 빠르게 검증할 때",
            caution: "빠른 생성 이후에는 PRD, SDD, 테스트 기준으로 반드시 동작과 리스크를 검증해야 합니다.",
            sourceNote: "md/ai_engineering_technique.md"
        },
        "structured-output": {
            title: "Structured Output Engineering",
            summary: "AI 답변을 JSON, 표 등 시스템 처리가 용이한 형식으로 받는 기술",
            concept: "AI 답변을 JSON, 표 등 시스템 처리가 용이한 형식으로 받는 기술",
            whenToUse: "AI 출력을 후속 시스템에 자동으로 입력해야 할 때, 정형 데이터 생성",
            hrUseCase: "데이터베이스 등록용 데이터 생성, 리포트 자동화, 면접 평가 구조화",
            caution: "구조가 너무 복잡하면 사람이 읽기 어려워질 수 있습니다.",
            sourceNote: "md/ai_engineering_technique.md"
        },
        "workflow-engineering": {
            title: "Workflow Engineering",
            summary: "사람·AI·시스템이 협업하는 전체 업무 흐름을 설계하는 기술",
            concept: "사람, AI, 시스템이 협업하는 전체 업무 흐름을 설계하는 기술",
            whenToUse: "HR 업무 자동화를 기획할 때, 사람과 AI의 역할 분리가 필요한 설계",
            hrUseCase: "교육 운영 자동화, 채용 프로세스 자동화, 온보딩 체크리스트 자동 실행",
            caution: "책임 소재(사람 vs AI)를 명확히 구분해야 합니다.",
            sourceNote: "md/ai_engineering_technique.md"
        }
    },

    // 3. Prompt Templates
    prompts: {
        "m1-assumption": {
            title: "AI의 임의 가정 찾기",
            module: "M1",
            purpose: "AI 초안에서 임의로 가정된 내용을 구조화해 찾아내고, HR 리스크와 확인 질문을 도출합니다.",
            stageIds: ["stage-1", "stage-2"],
            content: "너는 HR AI Agent 요구사항 분석가입니다.\n\n아래 [Agent 아이디어]와 [AI 초안]을 읽고, AI가 자의적으로 가정한 내용을 찾아주세요.\n\n[Agent 아이디어]\n{Agent 아이디어 입력}\n\n[AI 초안]\n{AI가 생성한 초안 입력}\n\n다음 표 형식으로 답변하세요.\n\n| 모호한 표현/영역 | AI가 임의로 가정한 내용 | 틀렸을 때의 HR 리스크 | 확인 질문 | 안전한 기본값 |",
            usageNote: "Agent 아이디어 초안과 AI가 생성한 초안을 함께 제공하세요. 확인 질문 목록을 Research 단계 인터뷰 자료로 활용할 수 있습니다."
        },
        "m1-clarification": {
            title: "명확화 질문 생성",
            module: "M1",
            purpose: "구현 전에 반드시 확인해야 할 명확화 질문을 카테고리별로 작성해 Research 계획을 구체화합니다.",
            stageIds: ["stage-2"],
            content: "너는 HR 업무 분석가이자 AI Agent 기획자입니다.\n\n아래 아이디어를 바탕으로, 구현 전에 반드시 확인해야 할 명확화 질문을 작성해주세요.\n\n[Agent 아이디어]\n{Agent 아이디어 입력}\n\n[AI가 임의로 가정한 내용]\n{임의 가정 목록 입력}\n\n다음 카테고리별로 질문을 작성하세요.\n1. 사용자와 상황\n2. 업무 범위\n3. 답변 금지 범위\n4. 권한과 개인정보\n...",
            usageNote: "임의 가정 찾기 프롬프트 결과를 입력으로 활용하세요. 질문 목록은 HR 담당자 인터뷰 가이드로 바로 활용할 수 있습니다."
        },
        "m2-vibe-prd": {
            title: "Vibe PRD 생성",
            module: "M2",
            purpose: "Idea·Research 결과를 바탕으로 HR AI Agent의 PRD 초안을 빠르게 생성합니다.",
            stageIds: ["stage-4"],
            content: "너는 HR Tech Product Manager입니다.\n\n아래 정보를 바탕으로 HR AI Agent의 Vibe PRD를 작성해주세요.\n\n[사용자/문제/데이터/금지 범위 입력]\n\n다음 구조로 작성하세요:\n1. Product Name\n2. Problem Statement\n3. Key Features\n4. Access Control\n5. Non-Goals\n6. Success Metrics",
            usageNote: "생성된 PRD 초안은 반드시 모호성 리뷰 프롬프트로 검토하세요. 확인되지 않은 정책은 [확인 필요]로 표시하도록 지시하세요."
        },
        "m2-ambiguity": {
            title: "PRD 모호성 리뷰",
            module: "M2",
            purpose: "PRD 초안에서 구현 또는 테스트가 어려운 모호한 문장을 찾아 보완합니다.",
            stageIds: ["stage-4"],
            content: "너는 AI Agent PRD 리뷰어입니다.\n\n아래 PRD 초안을 읽고, 구현 또는 테스트가 어려운 모호한 문장을 찾아주세요.\n\n[PRD 초안 입력]\n\n다음 표로 답변하세요:\n| PRD 문장 | 모호한 부분 | 왜 문제인가 | 보완 문장 | 테스트 가능 여부 |",
            usageNote: "Vibe PRD 생성 결과를 입력으로 활용하세요. 보완 문장은 반드시 관찰 가능한 행동 기준으로 작성되어야 합니다."
        },
        "m3-sdd-spec": {
            title: "SDD 기능 명세 생성",
            module: "M3",
            purpose: "PRD에서 선택한 핵심 기능을 SDD 기능 명세로 구체화해 구현 지시서를 만듭니다.",
            stageIds: ["stage-4", "stage-7"],
            content: "너는 Specification-Driven Development 전문가입니다.\n\n아래 PRD에서 선택한 핵심 기능을 SDD 기능 명세로 작성해주세요.\n\n1. Feature Name\n2. User Story\n3. Main Flow\n4. Alternative Flow\n5. Permission Rules\n6. Human Handoff Conditions",
            usageNote: "PRD 모호성 리뷰 후 수용 조건이 명확한 기능부터 명세화하세요. Human Handoff Conditions에 HR 도메인 민감 영역을 반드시 포함해야 합니다."
        },
        "m3-tdd-scenario": {
            title: "TDD 테스트 시나리오 생성",
            module: "M3",
            purpose: "SDD 기능 명세를 바탕으로 구현 전에 테스트 시나리오를 정의해 품질 기준을 확립합니다.",
            stageIds: ["stage-7"],
            content: "너는 HR AI Agent 테스트 설계자입니다.\n\n아래 SDD 기능 명세를 바탕으로 TDD 테스트 시나리오를 작성해주세요.\n\n| TC ID | 유형 | Given | When | Then | 기대 결과 | 통과 기준 |\n(정상, 권한오류, 민감질문, 개인정보 노출 시도 포함)",
            usageNote: "정상 시나리오뿐 아니라 권한 오류·민감 질문·프롬프트 인젝션 시나리오를 반드시 포함하세요."
        },
        "m3-self-reflection": {
            title: "Self-Reflection 테스트 보강",
            module: "M3",
            purpose: "작성한 테스트가 HR 리스크를 충분히 커버하는지 자기 검토 루프로 보강합니다.",
            stageIds: ["stage-7"],
            content: "너는 HR AI Agent 안전성 리뷰어입니다.\n\n아래 테스트 시나리오가 충분한지 검토하고, 누락된 리스크와 추가 테스트를 제안해주세요.\n\n[PRD]\n{PRD 입력}\n\n[SDD]\n{SDD 입력}\n\n[테스트 시나리오]\n{테스트 입력}\n\n다음 항목을 기준으로 검토하세요.\n- 개인정보\n- 권한\n- 평가/보상/징계\n- 의료/노무/고충\n- 근거 문서 부재\n- 프롬프트 인젝션\n- 자동화 편향\n- 사람 승인 필요 지점\n\n출력 형식:\n1. 현재 테스트의 강점\n2. 누락된 리스크\n3. 추가해야 할 테스트\n4. 반드시 실패해야 하는 테스트\n5. 운영 전 최종 확인 질문",
            usageNote: "테스트 케이스를 만든 뒤 바로 사용하세요. QA 단계에서 놓치기 쉬운 HR 리스크와 승인 지점을 다시 드러내는 용도입니다."
        },
        "m4-tasklist": {
            title: "ReAct Task List 생성",
            module: "M4",
            purpose: "PRD·SDD·테스트 시나리오를 기반으로 AI 코딩 에이전트가 실행할 수 있는 ReAct Task List를 작성합니다.",
            stageIds: ["stage-5"],
            content: "너는 AI Coding Agent 작업 관리자입니다.\n\n아래 PRD, SDD, 테스트 시나리오를 바탕으로 구현 가능한 ReAct Task List를 작성해주세요.\n\n| Task ID | Reason | Act | Observe | Done Definition | 관련 테스트 |",
            usageNote: "각 Task는 AI 코딩 에이전트가 30~60분 내 처리할 수 있는 크기로 작성하세요. UI·데이터·보안·QA 티켓은 반드시 분리합니다."
        },
        "m4-instruction": {
            title: "구현 지시문 작성",
            module: "M4",
            purpose: "현재 Task를 기반으로 AI 코딩 에이전트에게 전달할 명확한 구현 지시문을 작성합니다.",
            stageIds: ["stage-6"],
            content: "너는 AI 코딩 에이전트에게 전달할 구현 지시문을 작성하는 테크 리드입니다.\n\n아래 Task를 기반으로 구현 지시문을 작성해주세요.\n\n1. 목표\n2. 구현 범위\n3. 테스트 기준\n4. 하지 말아야 할 것",
            usageNote: "'하지 말아야 할 것' 항목을 반드시 포함하세요. HR 시스템에서 과잉 구현(로그인 자동 추가, 민감 데이터 확장 등)은 리스크입니다."
        },
        "m5-workflow": {
            title: "Agent Workflow Map 생성",
            module: "M5",
            purpose: "PRD와 Task List를 바탕으로 Agent의 단계별 행동과 도구 사용을 시각화합니다.",
            stageIds: ["stage-6"],
            content: "너는 Agentic Workflow 설계자입니다.\n\n아래 PRD와 Task List를 바탕으로 Agent Workflow Map을 작성해주세요.\n\n| 단계 | Agent 행동 | 사용하는 정보/도구 | 사용자 확인 필요 여부 | 결과 |",
            usageNote: "'사용자 확인 필요 여부' 열에 Human-in-the-loop 지점을 반드시 명시하세요."
        },
        "m5-tool": {
            title: "Tool Calling 설계",
            module: "M5",
            purpose: "HR AI Agent가 사용할 Tool/API를 정의하고 허용·확인·금지 수준으로 분류합니다.",
            stageIds: ["stage-6"],
            content: "너는 HR AI Agent Tool Calling 설계자입니다.\n\n필요한 Tool/API를 정의하고 Allow / Ask / Deny로 분류해주세요.\n\n| Tool/API | 목적 | 입력 | 출력 | 민감도 | 승인 필요 여부 |",
            usageNote: "HR 데이터(급여·평가·개인정보)에 접근하는 Tool은 반드시 민감도를 높게 설정하고 승인 필요로 분류하세요."
        },
        "m6-harness": {
            title: "Harness Canvas 생성",
            module: "M6",
            purpose: "Agent 설계 정보를 바탕으로 일관된 고품질 결과를 보장하는 Harness Canvas를 작성합니다.",
            stageIds: ["stage-7"],
            content: "너는 AI Harness Engineering 전문가입니다.\n\n아래 Agent 설계 정보를 바탕으로 Harness Canvas를 작성해주세요.\n\n1. Constitution (원칙)\n2. Structure (구조)\n3. Validation (검증)\n4. Loop (반복)",
            usageNote: "Constitution에 HR 도메인 절대 원칙(개인정보 최소 수집, 민감 판단 금지 등)을 먼저 정의하세요."
        },
        "m6-guardrail": {
            title: "Guardrail 점검",
            module: "M6",
            purpose: "Harness와 PRD를 바탕으로 HR AI Agent의 Guardrail과 리스크 보완안을 작성합니다.",
            stageIds: ["stage-7"],
            content: "너는 HR AI Agent 리스크 심사자입니다.\n\n아래 Harness와 PRD를 바탕으로 Guardrail과 리스크 보완안을 작성해주세요.\n\n| Guardrail | 적용 지점 | 위반 시 처리 | 관련 HR 리스크 |",
            usageNote: "개인정보·권한 오류·민감 질문·프롬프트 인젝션·환각 시나리오를 모두 포함하세요."
        },
        "m7-cognitive-risk": {
            title: "인지 리스크 점검",
            module: "M7",
            purpose: "HR AI Agent 도입 시 발생할 수 있는 인지 리스크를 평가하고 완화 방안을 도출합니다.",
            stageIds: ["stage-7"],
            content: "너는 HR AI Agent 도입 컨설턴트입니다.\n\n아래 Agent 설계안을 기준으로 인지 리스크를 평가해주세요.\n(Automation Bias, 과신/과소신뢰, 책임 불명확 등)",
            usageNote: "Automation Bias(AI 답변을 무비판적으로 수용하는 경향)와 책임 불명확(AI vs 사람) 항목은 HR 시스템에서 특히 중요합니다."
        },
        "m7-deploy-checklist": {
            title: "배포 전 준비 체크리스트 생성",
            module: "M7",
            purpose: "배포 또는 서버 업로드 전에 필요한 준비물을 점검 가능한 체크리스트로 정리합니다.",
            stageIds: ["stage-7"],
            content: "너는 AI Agent 배포 준비 리뷰어입니다.\n\n아래 산출물을 바탕으로 서버 업로드와 배포 실습 전에 준비해야 할 항목을 점검해주세요.\n\n[PRD]\n{PRD 입력}\n\n[SDD/TDD]\n{SDD와 테스트 입력}\n\n[Workflow / Tool 목록]\n{Workflow와 Tool 입력}\n\n[Harness / Guardrail]\n{Harness 입력}\n\n다음 표로 답변하세요.\n\n| 준비 항목 | 현재 상태 | 부족한 점 | 다음 액션 |\n|---|---|---|---|\n| 핵심 기능 1~2개 |  |  |  |\n| 입력/출력 형식 |  |  |  |\n| 샘플 데이터 |  |  |  |\n| Tool/API 목록 |  |  |  |\n| 환경변수 후보 |  |  |  |\n| 금지 행동 |  |  |  |\n| 테스트 시나리오 |  |  |  |\n| 로그 항목 |  |  |  |\n| README 실행 설명 |  |  |  |\n| 배포 후 검증 시나리오 |  |  |  |",
            usageNote: "실제 개인정보 제거, 환경변수 분리, 배포 후 검증 시나리오까지 한 번에 점검하는 용도로 사용하세요."
        },
        "m7-pilot-plan": {
            title: "2주 현업 적용 계획 생성",
            module: "M7",
            purpose: "교육 이후 실제 현업에서 작은 파일럿으로 시험할 실행 계획을 만듭니다.",
            stageIds: ["stage-7"],
            content: "너는 HR AI Agent 파일럿 운영 코치입니다.\n\n아래 Agent 설계 패키지를 바탕으로 2주 현업 적용 계획을 작성해주세요.\n\n[Agent 설계 패키지 요약]\n{요약 입력}\n\n[우선순위 평가]\n{평가 입력}\n\n[배포 준비 체크리스트]\n{체크리스트 입력}\n\n다음 구조로 작성하세요.\n1. 1주차 목표\n2. 2주차 목표\n3. 파일럿 사용자\n4. 사용할 샘플 데이터\n5. 성공 기준\n6. 중단 기준\n7. 승인자/책임자\n8. 수집할 피드백\n9. 다음 개선 액션",
            usageNote: "처음부터 전사 배포하지 말고 작은 파일럿으로 설계하세요. 민감 데이터는 금지 또는 별도 승인 대상으로 표시해야 합니다."
        },
        "wrapup-final-summary": {
            title: "최종 발표 요약 생성",
            module: "Wrap-up",
            purpose: "워크북 전체 결과를 1페이지 발표용 요약으로 정리합니다.",
            stageIds: ["stage-7"],
            content: "너는 HR AI Agent 워크샵 발표 코치입니다.\n\n아래 워크북 내용을 바탕으로 1페이지 발표 요약을 작성해주세요.\n\n[워크북 내용]\n{워크북 내용 입력}\n\n다음 항목으로 간결하게 정리하세요.\n1. Agent 이름\n2. 해결할 HR 문제\n3. 주요 사용자\n4. 핵심 기능 1~2개\n5. 사용 데이터/문서\n6. 반드시 거절할 요청\n7. 테스트 시나리오 핵심\n8. Workflow 요약\n9. Tool/API\n10. Guardrail\n11. Human-in-the-loop\n12. 배포 전 남은 준비물\n13. 2주 적용 계획",
            usageNote: "발표 자료나 워크숍 정리 문서가 필요할 때 사용하세요. 확인되지 않은 내용은 [확인 필요]로 남기게 하는 것이 안전합니다."
        }
    },

    // 4. Static Markdown Content (Sub-menus)
    staticPages: {
        "agentic-workflow": `# Agentic Workflow & Vibe Coding

## Executive Summary

에이전틱 워크플로우는 AI를 단순 응답기에서 **목표를 향해 계획하고, 도구를 호출하고, 결과를 검증하는 작업 시스템**으로 전환하는 접근입니다. 원문 문서의 핵심은 "좋은 모델"보다 **좋은 업무 구조와 거버넌스**가 더 중요하다는 점입니다.

이 관점에서 기업 구성원은 단순 사용자가 아니라, 필요한 도구를 직접 설계하고 조합하는 **내부 빌더**로 이동합니다. 이 전환에는 기술 숙련도만이 아니라 호기심, 실험 태도, 검증 습관이 함께 필요합니다.

## 에이전트의 기술적 구성 요소

AI 에이전트는 보통 다음 다섯 요소를 가집니다.

- **Planner / Orchestrator**: 목표를 해석하고 작업 순서를 짭니다.
- **Knowledge**: 문서, 규정, FAQ, 데이터베이스 같은 지식 원천입니다.
- **Memory**: 이전 대화, 실행 상태, 사용자 선호, 중간 결과를 보관합니다.
- **Goal**: 에이전트가 달성해야 할 구체적인 결과입니다.
- **Tools**: 검색, 문서 조회, 메일 발송, DB 조회, API 호출 같은 외부 행동 수단입니다.

핵심은 이 다섯 요소가 모두 필요하다는 뜻이 아니라, **업무 목적에 맞게 필요한 만큼만 조합해야 한다**는 점입니다.

## 자율성 수준 (Levels of Agency)

### Low Agency

정의된 흐름에 따라 응답하거나 정해진 규칙으로만 움직입니다.

- 예: HR FAQ, 규정 질의응답, 단순 공지 생성
- 장점: 설명 가능성이 높고 리스크가 낮음
- 한계: 예외 상황 대응력이 낮음

### Medium Agency

도구를 호출하고, 실패를 일부 복구하고, 제한된 범위 안에서 계획을 조정합니다.

- 예: 교육 운영 지원, 온보딩 체크리스트 자동화, HR 티켓 분류
- 장점: 반복 업무 자동화 효과가 큼
- 한계: 권한·예외 처리 설계가 필요함

### High Agency

복잡한 계획 수립, 하위 작업 분해, 멀티 에이전트 협업, 상황에 따른 경로 수정이 들어갑니다.

- 예: Workforce Planning, Skill Intelligence, 전략 HR 분석
- 장점: 고차원 문제 해결 가능
- 한계: 설명 가능성, 비용, 책임 구조가 급격히 어려워짐

## 엔터프라이즈 도입 관점

원문은 로지텍(Logitech)과 엠바크(Embark) 사례를 통해, 엔터프라이즈 AI가 단순 모델 사용을 넘어 **Wrapper, 거버넌스, 비용 구조, 데이터 통제**를 함께 설계해야 한다고 설명합니다.

### Logitech의 시사점

- 자체 LLM Wrapper로 접근성을 높이고 채택 장벽을 줄임
- Seat 기반 비용보다 Token 기반 사용량 관리가 유리할 수 있음
- 브랜드 보이스와 사내 정책을 시스템 안에 내장할 수 있음
- 결과적으로 많은 내부 어시스턴트를 통제 가능한 방식으로 운영 가능

### Embark의 시사점

- 정형 자동화와 비정형 AI 처리를 결합해야 실제 업무 가치가 남
- AI가 데이터를 잘 다루려면 **기초 데이터 청결도**가 먼저 확보되어야 함
- AI는 모든 데이터를 대신 해석하는 마법이 아니라, 잘 정리된 흐름 위에서 강해짐

## Vibe Coding의 위치

바이브 코딩은 문법보다 **의도 전달과 빠른 반복**에 초점을 둔 개발 방식입니다.

도구 스펙트럼은 대체로 다음 순서로 이해할 수 있습니다.

1. 기초 LLM: 간단한 모형, 사고 보조, 초안 생성
2. Vibe Coder: 빠른 MVP, 인증·배포 포함 앱 생성
3. Coding Agent: 정밀 수정, 리팩터링, 테스트, 구조 개선

바이브 코딩은 프로토타입 단계에서 매우 강하지만, 원문이 계속 강조하듯 **프로덕션 품질을 보장하지는 않습니다**. HR 시스템에서는 특히 다음을 분리해야 합니다.

- 아이디어 검증용 PoC
- 실제 운영용 시스템
- 민감 데이터가 포함된 상용 환경

## 보안과 거버넌스

에이전트가 강해질수록 거버넌스가 먼저 따라와야 합니다.

- 회사 정책을 AI가 임의로 만들게 하지 않음
- 민감 데이터는 합성 데이터나 샘플 데이터로 대체
- MCP 같은 프로토콜로 도구 접근을 통제
- Human-in-the-loop를 핵심 결정 지점에 유지

특히 HR 영역에서는 다음 요청은 자동 판단 대상이 아니라 **Ask 또는 Deny**에 가깝습니다.

- 급여/보상 확정
- 평가/징계 판단
- 의료/노무/고충 사안
- 개인별 민감 정보 조회

## HR Agent 설계로 번역하면

에이전틱 워크플로우는 "에이전트를 많이 붙이는 것"이 아니라, **업무 흐름을 어떤 수준까지 맡길 것인가를 결정하는 설계 작업**입니다.

### 좋은 시작점

- HR 규정 질의응답 Agent
- 온보딩 FAQ Agent
- 교육 운영 알림 Agent
- HR 티켓 분류 Agent

### 신중해야 할 영역

- 개인 평가/보상 추천
- 민감 고충 자동 분류 후 판단
- 전략적 인력 재배치 자동 제안

## 실무 적용 체크리스트

1. 이 업무는 반복적인가?
2. 결과물이 구조화되어 있는가?
3. 실패했을 때 회복 가능한가?
4. 사람 승인 지점을 설계할 수 있는가?
5. 도구 접근 권한을 Allow / Ask / Deny로 나눌 수 있는가?
6. 샘플 데이터로 먼저 검증 가능한가?

## 한 줄 결론

에이전틱 워크플로우의 본질은 AI를 더 똑똑하게 쓰는 데 있지 않습니다. **AI가 조직 안에서 책임 있게 일하도록 목표, 도구, 검증, 승인 구조를 설계하는 것**이 핵심입니다.`,
        "cognitive-reasoning": `# Cognitive & Reasoning

## 추론이란 무엇인가

추론은 단순히 저장된 지식을 꺼내는 기능이 아니라, **주어진 정보로부터 새로운 결론을 이끌어내는 과정**입니다. AI는 조건을 비교하고, 관계를 해석하고, 여러 가능성 중 그럴듯한 경로를 선택해 답을 만듭니다.

하지만 그 결론은 언제나 검증 대상입니다. 길이 젖어 있다고 해서 반드시 비가 온 것은 아니듯, AI도 관찰된 사실과 가능한 설명 사이를 이동할 뿐입니다.

## 대표적인 추론 방식

### 연역 추론

일반 규칙에서 구체 결론을 이끌어냅니다.

- 강점: 규칙 기반, 법규, 정책 해석
- HR 예시: "본인 정보만 조회 가능" 규칙에 따른 접근 제어

### 귀납 추론

여러 사례에서 패턴을 일반화합니다.

- 강점: 데이터 기반 패턴 발견
- 한계: 예외에 취약함
- HR 예시: 자주 반복되는 교육 만족도 불만 패턴 파악

### 귀추 추론

관찰된 현상을 가장 잘 설명하는 원인을 추정합니다.

- 강점: 원인 가설 도출
- HR 예시: 이탈 증가 원인 가설, 온보딩 실패 원인 가설

### 유비 추론

비슷한 구조의 다른 사례를 참고합니다.

- 강점: 전략 기획, 프레임 전이
- HR 예시: 다른 직무군의 온보딩 패턴을 새로운 조직에 적용

### 인과 추론

단순 상관관계를 넘어 원인을 따집니다.

- HR 예시: 교육 수료율 증가가 실제 성과 향상 때문인지, 다른 요인 때문인지 구분

### 확률적 추론

불확실한 상황에서 가능성을 비교합니다.

- HR 예시: 이탈 가능성, 교육 이수 지연 가능성, 문의 에스컬레이션 확률

## 현대 LLM의 추론 메커니즘

원문은 최신 모델의 추론을 다음 흐름으로 설명합니다.

- **Chain of Thought**: 문제를 작은 단계로 나눔
- **Tree of Thoughts**: 여러 해법을 병렬 탐색
- **Self-Reflection / Reflexion**: 스스로 결과를 검토
- **ReAct**: 생각하고 행동하고 관찰하는 루프
- **System 2 Thinking**: 즉답 대신 시간을 들여 검증하는 느린 사고

실무적으로 중요한 점은, 이 기법들이 "항상 더 좋다"가 아니라 **문제 난이도에 맞게 선택적으로 써야 한다**는 것입니다.

## 추론의 한계

AI의 추론은 강력하지만, 다음 한계를 명확히 가져갑니다.

- 사실 확인 없이 그럴듯한 답을 만들 수 있음
- 전제가 틀리면 결론도 틀림
- 최신 조직 맥락을 모르면 부정확해짐
- 상관관계와 인과관계를 혼동할 수 있음
- 윤리 판단과 최종 책임을 대신할 수 없음

따라서 HR에서는 AI의 답을 **판단의 초안**으로 다루는 것이 안전합니다.

## AI 전환에서 자주 발생하는 인지 이슈

원문 \`ai_agent_cognitive_considerations.md\`는 기술보다 인간 측면의 리스크를 강조합니다.

### 1. Automation Bias

"AI가 그렇게 말했다면 맞겠지"라는 과잉 신뢰입니다.

- 증상: 보고서 무검토 제출, 정책 검증 생략
- 대응: 출처 표시, 반례 검토, 승인 체크리스트

### 2. Learned Helplessness

AI가 초안을 너무 빨리 만들면서 사람의 문제 정의 능력이 약해지는 현상입니다.

- 증상: AI 없이는 시작 못함, 질문 설계 능력 저하
- 대응: 먼저 인간이 목표·성공 기준·금지 범위를 정의

### 3. 설명 가능성의 붕괴

결과는 나왔지만 왜 그런지 설명하지 못하는 상태입니다.

- 대응: 근거 문서, 실행 로그, 의사결정 단계 시각화

### 4. Authority Illusion

AI 결과를 객관적 판단으로 착각하는 현상입니다.

- 대응: AI를 결정자가 아니라 참고 의견으로 위치시킴

### 5. 컨텍스트 붕괴

AI가 조직 맥락을 놓쳤는데도 인간이 이해했다고 착각하는 문제입니다.

- 대응: 감정·갈등·정치적 맥락은 사람 중심 유지

### 6. 정체성 충돌

전문성이 사라지는 것처럼 느끼는 불안입니다.

- 대응: 작성자에서 감독자, 코더에서 아키텍트로 역할 이동을 교육

### 7. 과잉 연결 피로

도구가 다 연결되면서 인간이 오히려 더 피곤해지는 문제입니다.

- 대응: 중요도 기반 요약, 승인 지점 최소화, 집중 시간 보호

### 8. 사고 속도의 비대칭

AI는 빠르고 인간은 느린데, 조직이 인간에게도 같은 속도를 요구하는 문제입니다.

- 대응: 빠른 생성과 느린 판단을 분리

## 부정적 리스크만은 아니다

원문은 이 긴장이 오히려 조직을 더 건강하게 만들 수도 있다고 봅니다.

- 검증 문화 강화
- 업무 표준화와 조직 기강 강화
- 권한 남용 억제와 기록성 향상
- 인간 역할의 고도화
- 암묵지 독점 구조 약화
- 느린 판단의 가치 재발견

즉, AI 도입의 핵심은 자동화 자체보다 **설명 가능한 기준과 책임 구조를 강제하는 효과**에 있습니다.

## 16가지 엔지니어링 기법과 인지 이슈의 연결

원문은 엔지니어링 기법을 단순 기술 목록이 아니라 **인지 리스크를 다루는 설계 도구**로 해석합니다.

### Intent Layer

- Prompt Engineering
- Step-by-Step Reasoning
- Self-Reflection
- Self-Consistency

해결하는 문제:
- 모호성 착각
- 성급한 결론
- 단일 관점 고착
- 초안 과신

### Context Layer

- Context Engineering
- RAG
- Memory Engineering

해결하는 문제:
- 맥락 생략
- 기억 착각
- 최신성 착각
- 프라이버시 둔감화

### Action Layer

- Tool Calling
- ReAct
- Agentic Workflow
- Multi-Agent Orchestration
- Structured Output
- Workflow Engineering

해결하는 문제:
- 실행 착각
- 과정 생략
- 책임 분산
- 조율 피로
- 해석 편차

### Reliability Layer

- SDD
- TDD / Evaluation Engineering
- Guardrail Engineering

해결하는 문제:
- 즉흥 실행
- 성공 기준 부재
- 권한 착각
- 규정 회피

## 교육 설계 관점

좋은 HR AI Agent 교육은 단순히 "프롬프트 잘 쓰는 법"에서 멈추지 않습니다. 다음을 함께 다뤄야 합니다.

1. 인간이 먼저 정의해야 할 것
2. AI가 자동으로 결정하면 안 되는 것
3. 근거와 승인 구조를 어디에 둘 것인지
4. 학습자와 운영 조직 사이의 신뢰를 어떻게 지킬 것인지

## HR 적용 원칙

- AI 답변은 최종 결론이 아니라 검토 초안
- 민감 사안은 자동 판단보다 에스컬레이션 우선
- 근거 문서 없으면 추측하지 않음
- 설명 가능성 없는 추천은 배포하지 않음
- 인간의 숙고 시간까지 자동화하지 않음

## 결론

추론은 AI의 강점이지만, HR에서는 강점만으로 충분하지 않습니다. **추론의 속도 위에 검증 문화, 권한 통제, 인간 판단, 조직 신뢰를 함께 올려야 실제로 쓸 수 있는 Agent가 됩니다.**`,
        "harness-engineering": `# Harness Engineering

## Executive Summary

하네스 엔지니어링은 AI 에이전트가 자율적으로 일할 때 생기는 무작위성과 오류를 줄이고, **일관된 품질을 내도록 작업 환경 자체를 설계하는 기술**입니다.

핵심 메시지는 단순합니다. AI가 일을 못 하는 이유가 항상 모델 성능 때문은 아닙니다. 종종 더 큰 원인은 **부실한 작업 환경, 약한 검증 기준, 모호한 규칙, 느슨한 반복 루프**입니다.

## 하네스의 의미

원래 harness는 강한 힘을 가진 대상이 목적지에서 벗어나지 않도록 통제하는 장치입니다. AI에서의 의미도 같습니다.

- AI는 유능하지만 예측 불가능할 수 있음
- 따라서 모델 능력만이 아니라 모델이 일하는 환경을 설계해야 함

즉, 프롬프트를 잘 쓰는 것에서 끝나지 않고 **작업 규칙과 검증 게이트를 포함한 시스템 설계**가 필요합니다.

## 왜 필요한가

원문은 세 가지 문제를 반복적으로 지적합니다.

### Context Anxiety

대화가 길어질수록 AI가 이전 맥락을 잊거나, 급하게 마무리하려는 경향이 생깁니다.

### Self-Evaluation Bias

AI가 자기 결과를 스스로 검토할 때 지나치게 관대할 수 있습니다.

### 무작위성 제어 문제

같은 모델이라도 작업 환경, 검증 기준, 반복 루프에 따라 결과 품질 차이가 매우 커집니다.

## 4대 핵심 구성 요소

### 1. Constitution

에이전트가 절대 지켜야 할 원칙입니다.

- Do's & Don'ts
- 보안 규칙
- 코딩 컨벤션
- 민감 데이터 금지
- HR 도메인 금지 판단 영역

### 2. Structure

무엇을 어떻게 만들지 정의하는 설계도입니다.

- Task Brief
- 폴더 구조
- 기능 범위
- 입출력 형식
- 아키텍처 제약

### 3. Validation

결과가 통과 가능한지 판단하는 기준입니다.

- 테스트 코드
- 체크리스트
- 스크린샷 확인
- 품질 점수
- 수용 조건

### 4. Loop

수정과 검증을 반복하는 실행 루프입니다.

- 실패 원인 추적
- 수정
- 재검증
- 승인 또는 재작업

## 프롬프트에서 하네스로의 진화

원문은 AI 활용 방법론이 다음처럼 진화한다고 설명합니다.

1. Prompt Engineering
2. Context Engineering
3. Harness Engineering
4. Agentic Engineering

즉, 좋은 결과를 위해 필요한 것은 "잘 말하기"를 넘어 **환경 설계와 통제 구조**까지 포함하는 것입니다.

## 실전 아키텍처: Planner - Generator - Evaluator

하네스의 대표 구조는 역할 분리입니다.

### Planner

추상적 요청을 상세 스펙으로 바꿉니다.

### Generator

설계도에 따라 실제 산출물을 만듭니다.

### Evaluator

테스트와 품질 기준으로 결과를 검증하고, 불합격이면 되돌립니다.

이 구조의 장점은 자기 평가 편향을 줄인다는 점입니다. 만든 주체와 검증 주체를 분리하면 품질이 안정됩니다.

## 컨텍스트 관리 전략

### Agent-Readability

사람이 아니라 AI가 읽기 쉬운 구조로 문서를 조직합니다.

- 핵심 가이드 문서
- 세부 문서 색인
- 짧고 명확한 파일 경로
- 작업 단위별 정보 분리

### 컨텍스트 리셋

작업 단계를 쪼개고 메모를 남긴 뒤 새로운 세션으로 이어가는 방식입니다. 긴 대화 하나에 모든 것을 몰아넣는 것보다 안정적입니다.

### 포크 활용

좋은 컨텍스트를 유지한 채 분기 작업을 만들어 비교합니다.

## 관련 도구

- **MCP**: 도구 접근과 동작 범위를 통제하는 기반
- **Skills**: 반복 참조 지식 패키지
- **Hooks**: 보안 규칙, 컨벤션, 자동 점검 주입

## HR Agent에 적용하면

하네스는 HR에서 특히 중요합니다. 이유는 다음과 같습니다.

- 개인정보와 민감 정보가 많음
- 권한 오류가 치명적일 수 있음
- 답변 정확성보다 거절/에스컬레이션 품질이 더 중요할 수 있음
- "그럴듯한 오답"이 실제 제도 오해를 만들 수 있음

### HR용 Constitution 예시

- 근거 없는 정책 확정 금지
- 평가/보상/징계/의료/노무 자동 판단 금지
- 실제 개인정보를 샘플 데이터로 쓰지 않음
- 권한 불명확 시 기본값은 거절 또는 Ask

### HR용 Validation 예시

- 근거 문서 링크 표시 여부
- 권한 없는 사용자 거절 여부
- 민감 질문 에스컬레이션 여부
- 로그에 과도한 개인정보가 남지 않는지

### HR용 Loop 예시

1. 질문 접수
2. 근거 문서 조회
3. 답변 초안 생성
4. 민감도/권한 검사
5. 통과 시 답변, 실패 시 사람 연결
6. 로그 기록 및 후속 개선

## 비용과 가치

하네스는 단기적으로 더 많은 토큰과 시간이 들 수 있습니다. 하지만 원문이 말하듯, **기다리는 비용이 인간이 뒤늦게 고치는 비용보다 쌀 때가 많습니다.**

즉, 빠른 초안 10개보다 **검증 가능한 결과 1개**가 더 가치 있을 수 있습니다.

## 엔지니어의 역할 변화

하네스 관점에서 미래 엔지니어의 역할은 직접 코드를 많이 치는 사람보다:

- 작업 환경을 설계하고
- 검증 기준을 만들고
- 편향을 통제하고
- 승인 구조를 정의하는 사람

에 가깝습니다.

## 결론

하네스 엔지니어링은 AI의 한계를 인간의 설계로 보완하는 기술입니다. 좋은 HR Agent는 똑똑한 모델 하나로 만들어지지 않습니다. **원칙, 구조, 검증, 반복 루프가 갖춰졌을 때 비로소 조직 안에서 신뢰할 수 있는 시스템이 됩니다.**`,
        "environment": `# Agent Development Environment

## 기본 권장 조합

운영형 AI Agent를 기준으로 가장 추천되는 기본 조합은 **FastAPI + React**입니다.

- **FastAPI**: Python 기반 API 서버, LLM/RAG/데이터 처리에 유리
- **React**: 사용자 UI, 대시보드, 채팅 인터페이스
- **Streamlit**: 데모, PoC, 내부 실습용에 적합
- **Node.js**: 실시간 스트리밍이나 프론트엔드 친화 백엔드에 강점

원문은 특히 HR Agent처럼 권한, 개인정보, 로그, 승인, RAG, 테스트가 중요한 시스템에서는 **FastAPI를 중심 서버로 두고 React를 UI로 붙이는 구조**를 가장 안정적인 선택으로 봅니다.

## 어떤 환경을 언제 쓰는가

| 환경 | 적합한 용도 | 비고 |
|---|---|---|
| Streamlit | 데모, PoC, 내부 실습용 챗봇 | 빠르지만 운영 구조는 약함 |
| FastAPI | 운영형 AI Agent 백엔드 | Python 생태계 활용에 강함 |
| Node.js | 실시간 통신, 이벤트 중심 서비스 | 보조 서버로 적합 |
| React | 사용자 화면 | 백엔드가 아니라 UI 계층 |

## 왜 FastAPI가 자주 선택되는가

AI Agent 구현에 필요한 주요 생태계가 Python에 집중되어 있기 때문입니다.

- LLM SDK
- RAG 라이브러리
- 벡터 DB 연동
- LangGraph, LlamaIndex
- Pandas, NumPy 기반 데이터 처리

즉, FastAPI 선택은 취향 문제가 아니라 **생태계와 운영성의 문제**입니다.

## 운영형 아키텍처 예시

\`React UI -> FastAPI Agent Server -> LLM API / Vector DB / Tool API / DB\`

이 구조는 다음 장점이 있습니다.

- 프론트엔드와 Agent 로직 분리
- 권한과 로깅 분리
- 테스트와 교체가 쉬움
- Tool Calling과 백그라운드 작업 확장에 유리

## 교육용 / 빠른 검증용 아키텍처

\`Streamlit -> Python Agent Logic -> LLM API\`

이 구조는 학습과 초기 검증에 강합니다.

- 화면과 로직이 가까워 빠르게 만들 수 있음
- 데모 몰입도가 높음
- 다만 권한, 멀티 유저, 복잡한 API 설계에는 한계가 있음

## FastAPI 권장 프로젝트 구조

\`\`\`text
ai-agent-server/
├── app/
│   ├── main.py
│   ├── api/
│   ├── core/
│   ├── agents/
│   ├── services/
│   ├── models/
│   ├── repositories/
│   └── utils/
├── tests/
├── docs/
├── .env
├── requirements.txt
└── README.md
\`\`\`

## 각 계층의 역할

### API 계층

외부 요청을 받고, 응답 형태를 정의합니다. Agent 로직과 섞지 않는 것이 중요합니다.

### Agent 계층

Planner, Executor, Memory 같은 핵심 실행 로직을 둡니다.

### Services 계층

LLM, Vector DB, 외부 API, Tool 호출을 중간 계층으로 감쌉니다.

### Models 계층

Pydantic 모델이나 도메인 스키마를 둡니다.

### Docs 계층

PRD, SDD, Task List, Acceptance Criteria 같은 문서를 코드와 함께 둡니다. 원문이 강조하듯, 이 문서들은 참고 자료가 아니라 **AI를 통제하는 실행 스펙**입니다.

## Streamlit 권장 구조

\`\`\`text
hr-ai-agent-streamlit/
├── app.py
├── pages/
├── agents/
├── services/
├── prompts/
├── data/
├── docs/
├── tests/
├── .streamlit/
├── .env
├── requirements.txt
└── README.md
\`\`\`

작게 시작할 때는 \`app.py\` 하나로도 가능하지만, 권한·문서 검색·로그·검증이 들어가면 금방 엉키므로 조기 분리를 권장합니다.

## 가장 중요한 설계 원칙

### 1. Agent를 API 안에 직접 넣지 말 것

- 나쁨: 라우트 파일 안에 LLM 호출과 비즈니스 로직을 직접 작성
- 좋음: \`routes -> agent -> service\` 구조 유지

### 2. 프롬프트를 코드에 하드코딩하지 말 것

- \`prompts/\`
- \`utils/prompt_templates.py\`
- \`docs/prompts/\`

같이 별도 관리해야 테스트와 개선이 쉬워집니다.

### 3. 테스트 구조를 필수로 둘 것

HR Agent에서 "일단 돌아간다"는 기준은 위험합니다. 권한 오류, 민감 질문, 근거 문서 부재, 에스컬레이션이 반드시 테스트에 들어가야 합니다.

### 4. Task 단위 실행 구조를 유지할 것

SDD 기준에서는:

1. Task 정의
2. Agent 실행
3. 검증
4. 다음 Task 진행

이 흐름이 유지되어야 합니다.

## 운영형과 실습형을 분리해서 보라

### 실습형에 적합

- Streamlit
- 샘플 데이터
- 단일 Agent
- 화면 중심 시연

### 운영형에 적합

- FastAPI + React
- Tool/API 계층 분리
- 권한 관리
- 로그 및 감사 추적
- 배포 전 검증 체계

## 한 줄 요약

데모는 Streamlit으로 빠르게, 제품화는 FastAPI + React로 안정적으로 가는 것이 현실적입니다. HR AI Agent에서는 특히 **구현 언어보다 구조 분리, 문서 스펙, 검증 체계가 더 중요합니다.**`,
        "examples": `# HR AI Agent Ideas & Examples

## 개요

원문 문서는 HR 업무를 10개 영역으로 나누고, 각 영역마다 반복성이 높고 Agent화 효과가 큰 아이디어를 정리합니다. 핵심 기준은 다음 세 가지입니다.

1. 반복 업무가 많은가
2. 판단 보조가 필요한가
3. 문서·데이터·시스템 연동 가치가 큰가

## 1. 채용 / Talent Acquisition

- 채용공고 작성 Agent
- JD 분석 Agent
- 후보자 이력서 스크리닝 Agent
- 면접 질문 생성 Agent
- 역량 기반 평가표 Agent
- 후보자 커뮤니케이션 Agent
- 채용 퍼널 분석 Agent
- 채용 리스크 탐지 Agent
- 다양성 채용 점검 Agent
- 채용 브리핑 Agent

## 2. 온보딩 / 신입·경력 입사자 적응

- 온보딩 플랜 설계 Agent
- 입사자 FAQ Agent
- 신입사원 체크리스트 Agent
- 버디 매칭 Agent
- 온보딩 만족도 분석 Agent
- 역할 명확화 Agent
- 조직문화 안내 Agent
- 초기 성과 리스크 Agent
- 온보딩 콘텐츠 추천 Agent
- 경력입사자 적응 코칭 Agent

## 3. 교육 / Learning & Development

- 교육 니즈 분석 Agent
- 교육과정 설계 Agent
- AI 교육 설계 Agent
- 개인별 학습 추천 Agent
- 교육자료 생성 Agent
- 교육 효과 평가 Agent
- 리더십 교육 코치 Agent
- 역량 진단 Agent
- 학습 여정 설계 Agent
- 교육 운영 자동화 Agent

## 4. 성과관리 / Performance Management

- 목표 설정 Agent
- 목표 품질 점검 Agent
- 성과 리뷰 작성 Agent
- 피드백 코칭 Agent
- 성과 면담 준비 Agent
- 평가 편향 탐지 Agent
- 성과 데이터 요약 Agent
- 저성과자 지원 Agent
- 고성과자 관리 Agent
- 성과 Calibration Agent

## 5. 보상 / Compensation & Benefits

- 보상정책 안내 Agent
- 보상 밴드 분석 Agent
- 연봉 조정 시뮬레이션 Agent
- 인센티브 설계 Agent
- 복리후생 추천 Agent
- 보상 커뮤니케이션 Agent
- Pay Equity 점검 Agent
- 총보상 명세 Agent
- 보상 민원 대응 Agent
- 보상제도 개선 Agent

## 6. 조직문화 / Employee Experience

- 조직문화 진단 Agent
- 몰입도 분석 Agent
- 펄스서베이 Agent
- 조직문화 캠페인 Agent
- 구성원 경험 여정 Agent
- 회의문화 개선 Agent
- 협업문화 진단 Agent
- 심리적 안전감 Agent
- 조직 내 커뮤니케이션 Agent
- 이슈 조기감지 Agent

## 7. 노무 / Employee Relations / Compliance

- HR 규정 질의응답 Agent
- 노동법 체크 Agent
- 징계 절차 지원 Agent
- 고충처리 Agent
- 직장 내 괴롭힘 초기 분류 Agent
- 휴가·근태 규정 Agent
- 노사협의회 지원 Agent
- 단체협약 분석 Agent
- 컴플라이언스 교육 Agent
- 민감 이슈 에스컬레이션 Agent

이 영역은 특히 "답변 생성"보다 **리스크 분류와 사람 연결**이 더 중요합니다.

## 8. HR Operations / 인사운영

- 인사 문의 자동응답 Agent
- 증명서 발급 안내 Agent
- 인사발령 문서 Agent
- 근태 이상 탐지 Agent
- HR 업무 매뉴얼 Agent
- 사내공지 작성 Agent
- HR 티켓 분류 Agent
- HR 문서 검토 Agent
- HR 일정 관리 Agent
- HR 업무 자동화 추천 Agent

## 9. 인재관리 / Talent Management / Succession

- 핵심인재 식별 Agent
- 승계계획 Agent
- 경력개발 Agent
- 내부 이동 추천 Agent
- 역량 갭 분석 Agent
- 리더 후보 발굴 Agent
- 리텐션 리스크 Agent
- 성장 대화 지원 Agent
- 인재 리뷰 자료 Agent
- 직무 포트폴리오 Agent

## 10. Workforce Planning / HR Analytics / 전략인사

- Workforce Planning Agent
- Skill Intelligence Agent
- 인력 수요 예측 Agent
- 조직 리스크 Radar Agent
- 인건비 시뮬레이션 Agent
- 조직개편 시나리오 Agent
- HR KPI 대시보드 Agent
- 이직 원인 분석 Agent
- 미래 직무 변화 Agent
- 경영진 브리핑 Agent

## 교육 실습용으로 특히 좋은 후보 TOP 10

1. HR 규정 질의응답 Agent
2. 채용공고 작성 Agent
3. 이력서 스크리닝 Agent
4. 온보딩 플랜 설계 Agent
5. 교육과정 설계 Agent
6. 성과 리뷰 작성 Agent
7. 조직문화 진단 Agent
8. Workforce Planning Agent
9. Skill Intelligence Agent
10. HR 티켓 분류 Agent

## Agent 유형으로 다시 묶기

### 문서 생성형

- 채용공고
- 교육과정 설계
- 성과 리뷰
- 공지/보고서

### 질의응답형

- HR 규정 FAQ
- 복지/근태 문의
- 온보딩 안내

### 분석·진단형

- 몰입도 분석
- 이직 원인 분석
- 조직 리스크 탐지

### 실행·오케스트레이션형

- 온보딩 체크리스트
- 교육 운영 자동화
- HR 티켓 분류

실습 난이도는 보통 다음 순서가 좋습니다.

1. 문서 생성형
2. 질의응답형
3. 분석·진단형
4. 실행·오케스트레이션형

## 추천 실습 시나리오

### 1. HR 규정 질의응답 Agent

가장 안정적인 입문 과제입니다.

- RAG
- 권한 제어
- 근거 문서 표시
- 민감 질문 에스컬레이션

을 한 번에 다룰 수 있습니다.

### 2. 온보딩 플랜 설계 Agent

HR 담당자가 결과물을 직관적으로 이해하고 수정하기 쉽습니다.

- 직무별 30/60/90일 플랜
- 필수 교육
- 체크리스트
- 샘플 데이터 기반 시연

### 3. 성과 피드백 코칭 Agent

문장 품질과 공정성을 다루는 좋은 과제지만, 평가·보상과 연결될 수 있어 Guardrail 설계가 필수입니다.

### 4. Skill Intelligence / Workforce Planning Agent

전략 HR과 연결하기 좋지만, 난이도와 리스크가 높아 초기 과제로는 무겁습니다.

## 우선순위 판단 기준

좋은 첫 프로젝트는 보통 다음 특성을 가집니다.

- 산출물이 명확함
- 반복 빈도가 높음
- 샘플 데이터로 검증 가능함
- 틀려도 회복 가능함
- Human-in-the-loop를 넣기 쉬움

## 학습자 중심 관점

원문 후반부는 특히 교육 관련 HR Agent에서 **운영 효율만 보지 말고, 학습자 경험을 별도 계층으로 봐야 한다**고 강조합니다.

따라서 교육 분야 Agent는 다음 두 층을 분리해서 설계하는 편이 건강합니다.

### Organization Layer

- 운영
- 정책
- 일정
- 리포트
- 리스크 관리

### Learner Layer

- 학습 코칭
- 성찰 질문
- 탐색 지원
- 성장 경험

그리고 이 둘 사이에:

- 설명 가능성
- 권한 통제
- 윤리 검토
- 승인 구조

를 담당하는 **Mediation Layer**가 필요합니다.

## 결론

모든 HR Agent를 한 번에 만들 필요는 없습니다. 가장 좋은 시작은 **저위험·고반복·고구조화 업무**에서 성공 경험을 만드는 것입니다. 이 문서의 100개 아이디어는 체크리스트가 아니라, 조직의 성숙도와 리스크 수준에 맞춰 고르는 **설계 후보군**으로 보는 것이 맞습니다.`
    }
};
