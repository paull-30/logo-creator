import { IconType } from 'react-icons';
import * as lucideIcons from 'react-icons/lu';

const Icon = ({ name, ...props }) => {
  const IconComponent: IconType = lucideIcons[name as keyof typeof lucideIcons];

  if (!IconComponent) return null;

  return <IconComponent {...props} />;
};

export default Icon;
