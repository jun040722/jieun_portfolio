import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';
import { ANI_TRANSITION, OPACITY_0, OPACITY_1, Y_0, Y_P10 } from '../../utils/constant/constant';
import { BoldTxt } from '../atoms/text/BoldText';
import { AnimationP, BgText, MainSubText, MainTitle } from '../atoms/text/Text.styled';

export const TxtBox = tw.section`
  absolute
  top-12
  flex
  items-center
  flex-col
  mb-20
  w-full
  mt-[calc(100vh-85vh)]

  max-sm:mt-[calc(100vh-90vh)]
`;

export const IntroAnimationDiv = tw(motion.div)`
  relative
  w-full
`;

export const StTxt = tw.strong`
  font-black
`;


function TextWrap() {
  const WINDOW_HEIGHT = window.innerHeight - (0.75 * window.innerHeight);

  return (
    <TxtBox>
      <IntroAnimationDiv
        initial={{ ...Y_0, scale: 1.25 }}
        animate={{ y: -(WINDOW_HEIGHT), scale: 1 }}
        transition={{ ...ANI_TRANSITION, delay: 2 }}
      >
        <MainTitle
          initial={{ ...OPACITY_0, y: WINDOW_HEIGHT }}
          animate={{ ...OPACITY_1, y: WINDOW_HEIGHT }}
          transition={ANI_TRANSITION}
        >
          AI 엔지니어 <StTxt>박상준</StTxt>입니다.
          <BgText>
            <AnimationP
              initial={{ y: 150 }}
              animate={{ ...Y_0 }}
              transition={{ ...ANI_TRANSITION, delay: 1 }}
            >AI/ML</AnimationP>
          </BgText>
        </MainTitle>
      </IntroAnimationDiv>

      <MainSubText
        initial={{ ...OPACITY_0, ...Y_0 }}
        animate={{ ...OPACITY_1, ...Y_P10 }}
        transition={{ ...ANI_TRANSITION, delay: 3 }}
      >
        사용자를 생각하는 <BoldTxt>완벽주의</BoldTxt> 마인드,
      </MainSubText>
      <MainSubText
        initial={{ ...OPACITY_0, ...Y_0 }}
        animate={{ ...OPACITY_1, ...Y_P10 }}
        transition={{ ...ANI_TRANSITION, delay: 3.5 }}
      >
        처음부터 끝까지 <BoldTxt>완성도</BoldTxt>있게 일하는 AI 엔지니어입니다.
      </MainSubText>
    </TxtBox >
  )
}

export default TextWrap;