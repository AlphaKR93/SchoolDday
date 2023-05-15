const changelog: {
    version: string;
    date: string;
    content: string[];
}[] = [
    {
        version: "1.0.0",
        date: "2022. 06. 07 PM 06:00",
        content: ["석동중 디데이 사이트 공개"]
    },
    {
        version: "1.0.1",
        date: "2022. 08. 14. PM 11:27",
        content: ["디데이 날짜 계산 알고리즘 최적화"]
    },
    {
        version: "1.0.2",
        date: "2022. 09. 24. PM 03:09",
        content: ["디데이 업데이트 및 최적화"]
    },
    {
        version: "1.0.3",
        date: "2022. 12. 09 PM 12:37",
        content: ["홈페이지 개선", "디데이 업데이트 및 최적화"]
    },
    {
        version: "1.1.0",
        date: "2023. 03. 12 PM 06:45",
        content: ["exam.alpha93.kro.kr 에서 dday.alpha93.kr 로 도메인 변경"]
    },
    {
        version: "1.2.0",
        date: "2023. 03. 30 AM 12:57",
        content: ["2023년 디데이 업데이트", "디데이 스타일링 코드 최적화"]
    },
    {
        version: "2.0.0",
        date: "2023. 04. 20 AM 01:41",
        content: [
            "디데이 사이트 리뉴얼 (완전 재작성)",
            "호스트 변경 (GitHub Pages -> Vercel)",
            "언어 변경 (HTML5 -> Next.js)",
            "지난 디데이 자동 제거 기능 추가",
            "디데이 해당 학년 표시 개선",
            "밀리초 제거",
            "마진 오류 해결"
        ]
    },
    {
        version: "2.0.1",
        date: "2023. 04. 21 PM 07:29",
        content: [
            "정보 페이지 추가",
            "정보 페이지에 개발자 프로필 추기",
            "정보 페이지에 업데이트 기록 추가",
            "Footer 최적화",
            "버저닝(Versioning) 규칙 추가",
            "HOTFIX: 업데이트 기록 추가, 현재 버전 추가"
        ]
    },
    {
        version: "2.0.2",
        date: "2023. 04. 21 PM 07:43",
        content: ["HOTFIX: Footer에 버전 추가"]
    },
    {
        version: "2.0.3",
        date: "2023. 04. 31 PM 09:15",
        content: ["HOTFIX: 메타데이터 추가"]
    },
    {
        version: "2.0.4",
        date: "2023. 04. 21 PM 10:58",
        content: ["라이브러리 및 코드 최적화"]
    },
    {
        version: "2.0.5",
        date: "2023. 04. 21 PM 11:11",
        content: ["Prettier 도입"]
    },
    {
        version: "2.0.6",
        date: "2023. 04. 21 PM 11:21",
        content: ["Prettier 구성 개선"]
    },
    {
        version: "2.0.7",
        date: "2023. 04. 22 AM 12:24",
        content: [
            "일부 3학년용 디데이가 1학년으로 설정되어 있던 문제 해결",
            "수학능력시험 디데이가 특수 교육으로 지정되어 있던 문제 해결",
            "일반 디데이용 스타일 추가"
        ]
    },
    {
        version: "2.0.8",
        date: "2023. 04. 22 AM 02.25",
        content: ["레포지토리 공개"]
    },
    {
        version: "2.0.9",
        date: "2023. 04. 22 AM 02:34",
        content: ["레포지토리 설명 개선"]
    },
    {
        version: "2.1.0",
        date: "2023. 04. 22 AM 02:34",
        content: ["디데이 필터링 기능 추가"]
    },
    {
        version: "2.2.0",
        date: "2023. 04. 22 AM 09:52",
        content: ["2023년 진행바 추가", "HOTFIX: 모바일에서 디데이 필터 버튼이 잘못된 위치에 표시되는 문제 해결"]
    },
    {
        version: "2.2.1",
        date: "2023. 04. 22 AM 09:54",
        content: ["HOTFIX: 2.2.0 업데이트 기록 추가"]
    },
    {
        version: "2.3.0.0",
        date: "2023. 04. 22 AM 09:54",
        content: ["버저닝 규칙 변경 (a.b.c -> a.b.c.d)", "상단 바 개선", "레포지토리 보안 강화", "라이브러리 업데이트"]
    },
    {
        version: "2.3.1.0",
        date: "2023. 05. 02 PM 11:24",
        content: ["디데이 업데이트", "라이브러리 업데이트"]
    },
    {
        version: "2.3.1.1",
        date: "2023. 05. 05 AM 08:26",
        content: ["디데이 업데이트", "라이브러리 업데이트", "라이브러리 체크 액션 추가"]
    },
    {
        version: "2.3.1.2",
        date: "2023. 05. 12 AM 11:45",
        content: ["검색엔진에서 검색이 가능하도록 변경"]
    },
    {
        version: "2.3.1.3",
        date: "2023. 05. 12 AM 11:45",
        content: ["구글, 네이버 애널리틱스 적용", "HOTFIX: 라이브러리 업데이트"]
    },
    {
        version: "3.0.0.0-BETA1",
        date: "2023. 05. 14 PM 11:48",
        content: [
            "사이트 리뉴얼",
            "필터 버튼 사이드바로 이동",
            "네비게이션 바 개선",
            "필터 데이터 저장 기능 추가",
            "날짜 계산 알고리즘 개선",
            "2023년 진행바 디자인 및 알고리즘 개선",
            "유용한 링크 탭 추가",
			"한강/낙동강 물온도 체크 탭 추가",
			"모바일 페이지 개선"
        ]
    }
].reverse();
export default changelog;
