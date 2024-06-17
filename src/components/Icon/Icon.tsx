import { IconType } from 'react-icons';
import * as lucideIcons from 'react-icons/lu';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
}

const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent: IconType = lucideIcons[
    name as keyof typeof lucideIcons
  ] as IconType;

  if (!IconComponent) return null;

  return <IconComponent {...props} />;
};

export default Icon;
