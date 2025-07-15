export const project2 = {
  name: 'computer-vision',
  pointcolor: 'before:bg-[#0b4da1]',
  title: '실시간 객체 감지 및 추적 시스템',
  subtext:
    'OpenCV와 YOLO 모델을 활용한 실시간 객체 감지 및 추적 시스템입니다.\n카메라 영상에서 사람, 차량, 동물 등을 실시간으로 감지하고 추적하는 AI 시스템을 개발했습니다.',
  data: '2024.06 - 2024.08 (2개월)',
  team: '기여도 80%',
  tag: ['python', 'opencv', 'pytorch', 'yolo', 'computer-vision'],
  depoloyurl: 'https://github.com/jun040722/computer-vision-project',
  tools: [
    {
      title: 'Python',
      detail: '메인 개발 언어로 사용하여 컴퓨터 비전 알고리즘을 구현했습니다.',
    },
    {
      title: 'OpenCV',
      detail: '이미지 처리, 영상 처리, 카메라 캡처 등을 위해 OpenCV 라이브러리를 활용했습니다.',
    },
    {
      title: 'PyTorch',
      detail: 'YOLO 모델 구현 및 추론을 위해 PyTorch 프레임워크를 사용했습니다.',
    },
    {
      title: 'YOLO',
      detail: 'YOLOv8 모델을 활용하여 실시간 객체 감지 성능을 구현했습니다.',
    },
  ],
  featinfo: ['실시간 객체 감지', '다중 객체 추적', '경고 알림 시스템', '성능 최적화'],
  parts: [
    {
      title: '데이터 수집 및 전처리',
      detailList: [
        `다양한 환경에서의 객체 이미지 데이터 수집`,
        `이미지 전처리 및 어노테이션 작업 수행`,
        `데이터 증강을 통한 모델 성능 향상`,
      ],
    },
    {
      title: 'YOLO 모델 구현 및 학습',
      detailList: [
        `YOLOv8 모델을 활용한 객체 감지 시스템 구현`,
        `커스텀 데이터셋으로 모델 파인튜닝 수행`,
        `모델 성능 최적화 및 경량화 작업`,
      ],
    },
    {
      title: '실시간 영상 처리 시스템 개발',
      detailList: [
        `OpenCV를 활용한 실시간 카메라 스트림 처리`,
        `멀티스레딩을 통한 성능 최적화`,
        `GPU 가속을 활용한 추론 속도 향상`,
      ],
    },
    {
      title: '객체 추적 알고리즘 구현',
      detailList: [
        `DeepSORT 알고리즘을 활용한 다중 객체 추적`,
        `객체 ID 관리 및 추적 정확도 향상`,
        `추적 실패 시 재감지 로직 구현`,
      ],
    },
    {
      title: '사용자 인터페이스 및 알림 시스템',
      detailList: [
        `PyQt5를 활용한 GUI 개발`,
        `실시간 감지 결과 시각화`,
        `이벤트 기반 알림 시스템 구현`,
      ],
    },
  ],
  trouble: [
    {
      title: '실시간 처리 성능 최적화',
      detailList: [
        `문제: 고해상도 영상에서 FPS가 10 이하로 떨어지는 성능 이슈`,
        `해결: 모델 경량화 및 멀티스레딩 최적화로 30 FPS 달성`,
      ],
    },
    {
      title: '다양한 조명 조건에서의 정확도 개선',
      detailList: [
        `문제: 어두운 환경에서 객체 감지 정확도가 낮음`,
        `해결: 이미지 전처리 및 데이터 증강으로 정확도 90% 달성`,
      ],
    },
  ],
  insight: [
    {
      title: '컴퓨터 비전 시스템의 실제 적용 고려사항',
      detailList: [
        `실시간 처리와 정확도의 트레이드오프 관리의 중요성`,
        `다양한 환경 조건에 대한 모델의 견고성 확보 필요성`,
        `사용자 경험을 고려한 UI/UX 설계의 중요성`,
      ],
    },
  ],
};
