import tw from "tailwind-styled-components";
import { useState } from "react";
import myImgIm from '../../assets/images/sangjune_im1.webp';
import myImgImOn from '../../assets/images/sangjune_im2.webp';
import ShowReviewBtn from "../button/ShowReviewBtn";
import TagText from "../atoms/tag/TagTxt";
import { aboutMetags } from "../../data/content/aboutmeData";

const LeftContainer = tw.div`
  flex
  flex-col
  gap-10
  justify-center
  items-center
  flex-2
`;

const Img = tw.img`
  max-md:w-[60vw]
`;

const FlexBox = tw.div`
  flex
  flex-col
  justify-center
  items-center
  gap-1
`;

const TagTxtWrap = tw.div`
  flex
  gap-1
`;

const LeftWrap = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LeftContainer>
      <FlexBox>
        <Img 
          src={isHovered ? myImgImOn : myImgIm} 
          loading='lazy' 
          alt="박상준 이미지"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        <TagTxtWrap>
          {aboutMetags.map((tag, idx) => (
            <TagText key={idx} tag={tag.name} />
          ))}
        </TagTxtWrap>
      </FlexBox>
      <ShowReviewBtn>팀원 리뷰 보기</ShowReviewBtn>
    </LeftContainer>
  );
};

export default LeftWrap;