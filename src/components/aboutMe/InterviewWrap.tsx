import tw from "tailwind-styled-components";
import PointText from "../atoms/text/PointText";
import BoldText from "../atoms/text/BoldText";

const RightContainer = tw.div`
  flex
  flex-col
  flex-1
  gap-20
`;

const Tit = tw.h3`
  text-4xl
  font-black
  text-superLightGray
  pb-[2rem]
`;

const SubTit = tw.h5`
  text-2xl
  font-bold
  pb-6
`;

const MyMind = tw.div`
  flex
  flex-col
  gap-3
`;

const MyMindTxt = tw.div`
  relative
  text-base
  mb-5
  bg-lightGray
  p-5
  rounded-tl-2xl
  rounded-tr-2xl  
  rounded-bl-2xl
`;

const InterviewWrap = () => {
  return (
    <RightContainer>
      <MyMind>
        <Tit>Interview</Tit>
        <MyMindTxt>
          <SubTit>Q. AI 엔지니어를 선택한 이유는?</SubTit>
          인공지능공학을 전공하며 AI/ML의 무한한 가능성을 발견했습니다.<br />
          <PointText>데이터를 통해 인사이트를 도출</PointText>하고, <PointText>실제 문제를 해결하는 모델</PointText>을 개발하는 것에 매력을 느꼈습니다.<br />
          Python, PyTorch, TensorFlow 등 다양한 AI/ML 라이브러리를 활용해 지속적으로 발전할 수 있는 새로운 도전에 나서고 있습니다.
        </MyMindTxt>

        <MyMindTxt>
          <SubTit>Q. 일에 있어 가장 중요하게 생각하는 것이 있다면?</SubTit>
          항상 <PointText>완벽주의 마인드로 모델 성능 최적화를 추구합니다.</PointText> 데이터 전처리부터 모델 학습, 평가까지 모든 과정에서 세심한 주의를 기울이면서,<br />
          실제 환경에서도 안정적으로 동작하는 AI 솔루션을 제공하고자 합니다.
        </MyMindTxt>

        <MyMindTxt>
          <SubTit>Q. 자기계발을 위해 어떤 것들을 해왔는지?</SubTit>
          AI 기술의 빠른 발전을 따라가기 위해 논문 리뷰와 온라인 강의에 적극 참여하고, <PointText>새로운 모델 아키텍처에도 포기하지 않고 메타인지 방식을 활용</PointText>해 문제 해결 능력을 쌓고 있습니다.<br />
          <BoldText>연구실에서의 경험을 통해 실무 역량을 키우고,</BoldText>개발 과정에서 항상 개선할 점을 찾기 위해 노력하고 있습니다.
        </MyMindTxt>
      </MyMind>
    </RightContainer>
  );
};

export default InterviewWrap;