import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import {PLANET_LINK} from "@/constant";
const Footer: React.FC = () => {
  const defaultMessage = 'YG(影)出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: 'YG THE ISLE 恐龙岛',
          href: PLANET_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: 'THE ISLE 游戏导航',
          href: 'https://www.baidu',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
