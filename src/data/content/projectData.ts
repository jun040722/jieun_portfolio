import { project1 } from './projecsDetailDatas/project1';
import { project11 } from './projecsDetailDatas/project11';

export const projectData = [
  {
    name: project11.name,
    type: 'team',
    title: 'Inhance (인하대학교 학생 전용 어플리케이션)',
    subject: 'Chat GPT api 연결 및 프롬프트 엔지니어링을 사용한 chatbot 제작, 어플리케이션 내 학점 계산기 등 간단한 모듈 제작 담당을 하였습니다.',
    tag: ['java', 'android studio', 'github', 'gradle', 'chatgpt api'],
    imgurl: undefined,
    giturl: undefined,
    depoloyurl: undefined,
  },
  {
    name: project1.name,
    type: 'team',
    title: 'RAG 구조 기반 CS 응답 자동화 시스템 구축',
    subject: 'KoGPT2 기반 도메인 특화 질의응답 시스템으로 Hybrid retriever를 활용한 성능 최적화를 구현했습니다.',
    tag: ['python', 'pytorch', 'tensorflow', 'github'],
    imgurl: undefined,
    giturl: undefined,
    depoloyurl: undefined,
  },
];
