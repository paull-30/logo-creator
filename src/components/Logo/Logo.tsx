import { useLogo } from '../../store/logo-context';
import Icon from '../Icon/Icon';

const Logo = () => {
  const { icon, iconStyles } = useLogo();

  return (
    <div className=' w-full flex justify-center h-screen relative'>
      <div className='absolute z-[-1] h-full bg-[url(/grid.png)] bg-repeat w-full opacity-10'></div>
      <div className='mx-auto py-16 '>
        <div className='outline-2  outline-dashed outline-[#9C92AC20] hover:outline-[#9C92AC50] bg-[#9C92AC15] hover:bg-[#9C92AC25] duration-100 overflow-hidden'>
          <div
            className='bg-transparent w-screen max-w-full aspect-square md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[600px]'
            style={{ padding: iconStyles.padding }}
          >
            <div
              className={`w-full aspect-square overflow-hidden flex justify-center items-center ${iconStyles.shadow}`}
              style={{
                backgroundColor: iconStyles.backgroundColor,
                borderRadius: iconStyles.radius,
                boxShadow: iconStyles.shadow,
              }}
            >
              <span>
                <Icon
                  name={icon}
                  style={{
                    width: iconStyles.size,
                    height: iconStyles.size,
                    transform: `rotate(${iconStyles.rotate}deg)`,
                    stroke: iconStyles.strokeColor,
                    strokeWidth: iconStyles.strokeWidth,
                    fill: iconStyles.fillColor,
                    fillOpacity: iconStyles.fillOpacity / 100,
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
Logo;
