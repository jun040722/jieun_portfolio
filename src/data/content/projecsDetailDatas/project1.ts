export const project1 = {
  name: 'rag-cs-service',
  pointcolor: 'before:bg-[#7c29a7]',
  title: 'RAG 구조 기반 CS 응답 자동화 시스템 구축',
  subtext:
    'KoGPT2 기반 사전학습 모델과 기존 CS QnA 데이터를 활용한 도메인 특화 질의응답 시스템입니다.\nRetrieval-Augmented Generation(RAG) 구조를 설계하여 문서 검색 → 질의 생성 → 응답 반환 흐름을 최적화했습니다.\n\n*시스템 architecture 설계 및 AI 파트 PM을 맡아 전체 시스템의 60%를 담당했습니다.',
  data: '2025.04 - 2025.06 (3개월)',
  team: '기여도 60% (AI 파트 PM)',
  tag: ['python', 'pytorch', 'kogpt2', 'rag', 'nlp', 'sbert', 'faiss'],
  videourl: '/src/assets/videos/rag-demo.mp4', // 영상 파일 경로 추가 (예시)

  tools: [
    {
      title: 'Python',
      detail: '메인 개발 언어로 사용하여 AI 모델 구현, 데이터 전처리, API 개발을 수행했습니다.',
    },
    {
      title: 'KoGPT2',
      detail: '한국어 특화 사전학습 모델을 활용하여 도메인 특화 질의응답 시스템을 구현했습니다.',
    },
    {
      title: 'RAG',
      detail: 'Retrieval-Augmented Generation 구조를 설계하여 외부 지식 베이스와 LLM을 결합했습니다.',
    },
    {
      title: 'SBERT + FAISS',
      detail: 'Hybrid retriever 조합을 통해 세맨틱 검색 정확도 및 누락률을 개선했습니다.',
    },
  ],
  featinfo: ['도메인 특화 질의응답', '멀티턴 응답 시스템', '성능 최적화', '자동화 파이프라인'],
  parts: [
    {
      title: 'AI 질의응답 시스템 개발',
      detailList: [
        `KoGPT2 기반 사전학습 모델과 기존 CS QnA 데이터를 활용한 도메인 특화 질의응답 시스템 구현`,
        `Retrieval-Augmented Generation(RAG) 구조 설계: 문서 검색 → 질의 생성 → 응답 반환 흐름 최적화`,
        `Hybrid retriever(SBERT + FAISS 기반 세맨틱 검색 결과를 기반으로 KoGPT를 통한 문맥 응답 생성 시스템 구축) 조합을 통한 검색 정확도 및 누락률 개선`,
        `프롬프트 엔지니어링 기법 적용으로 다양한 질문 패턴에 대응 가능한 멀티턴 응답 시스템 구성`,
      ],
    },
    {
      title: '성능 최적화 및 운영 효율 개선',
      detailList: [
        `텍스트 임베딩, 벡터 인덱싱 구조 최적화를 통해 평균 응답 시간 약 30% 단축`,
        `프롬프트 구조를 모듈화하여 API 호출 수 최적화 및 비용 절감 실현`,
        `학습 파이프라인 자동화: 데이터 클렌징 → 파인튜닝 → 평가 리포트 생성 흐름 정립`,
      ],
    },
    {
      title: '시스템 아키텍처 설계 및 팀 리딩',
      detailList: [
        `질의 유형 분류 → 검색 → 응답 생성을 연결하는 엔드 투 엔드 아키텍처 설계`,
        `프롬프트 템플릿 및 검색 쿼리 템플릿 표준화로 응답 품질의 일관성 확보`,
        `AI 파트 PM으로서 팀원들과의 원활한 커뮤니케이션 및 프로젝트 진행 관리`,
      ],
    },
  ],
  trouble: [
    {
      title: '검색 정확도 및 응답 시간 최적화',
      detailList: [
        `문제: 단일 검색 방식으로 인한 검색 정확도 부족 및 응답 시간 지연`,
        `해결: Hybrid retriever(SBERT + FAISS) 조합 도입으로 검색 정확도 향상 및 응답 시간 30% 단축`,
      ],
    },
    {
      title: '다양한 질문 패턴 대응',
      detailList: [
        `문제: 고정된 프롬프트로 인한 다양한 질문 패턴 대응 한계`,
        `해결: 프롬프트 엔지니어링 기법 적용으로 멀티턴 응답 시스템 구축`,
      ],
    },
  ],
  insight: [
    {
      title: 'RAG 시스템의 실제 적용 경험',
      detailList: [
        `도메인 특화 모델과 일반 모델의 성능 차이를 직접 경험하며 특화의 중요성 인식`,
        `Hybrid retriever 조합을 통한 검색 성능 향상의 효과적임을 확인`,
        `프롬프트 엔지니어링의 중요성과 모듈화를 통한 운영 효율성 개선 경험`,
      ],
    },
  ],
};
