import tw from 'tailwind-styled-components';
import { ICON_URL } from '../../../utils/constant/constant';

// Import new local icons
import pythonIcon from '../../../assets/icons/icons_python.svg';
import pytorchIcon from '../../../assets/icons/icons_pytorch.svg';
import tensorflowIcon from '../../../assets/icons/icons_tenserflow.svg';
import androidStudioIcon from '../../../assets/icons/icons_android studio_color.svg';
import githubIcon from '../../../assets/icons/icon_github.svg';
import notionIcon from '../../../assets/icons/icons_notion.svg';
import figmaIcon from '../../../assets/icons/icon_figma.svg';

type StackIconProps = {
  stack?: string;
  width?: string;
};

export const IconBox = tw.div<StackIconProps>`
  relative
  bg-[#0C0C0C]
  ${(props) => props.width}
  h-0
  pb-[3.125rem]
  flex
  items-center
  justify-center
  rounded-2xl
`;

export const Img = tw.img`
  absolute
  w-2/4
  h-1/2
  inset-2/4
  translate-y-[-50%]
  translate-x-[-50%]
`;

// Icon mapping for new local icons
const iconMap: { [key: string]: string } = {
  python: pythonIcon,
  pytorch: pytorchIcon,
  tensorflow: tensorflowIcon,
  'android studio': androidStudioIcon,
  github: githubIcon,
  notion: notionIcon,
  figma: figmaIcon,
};

function StackIcon({ stack, width }: StackIconProps) {
  // Check if we have a local icon for this stack
  const localIcon = stack ? iconMap[stack.toLowerCase()] : null;
  
  return (
    <IconBox width={width}>
      <Img 
        src={localIcon || `${ICON_URL}${stack}.svg`} 
        alt={`${stack}`} 
        loading='lazy' 
      />
    </IconBox>
  )
}

export default StackIcon;