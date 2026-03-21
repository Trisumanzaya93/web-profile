/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import HeroSection from './HeroSection';

// Mock child components and external hooks/libraries to keep snapshot clean
jest.mock('@/component/Desktop/Desktop', () => {
  const Desktop = () => <div data-testid="computer-canvas" />;
  return { __esModule: true, default: Desktop, Desktop };
});
jest.mock('../DotGrid/DotGrid', () => {
  const DotGrid = () => <div data-testid="dot-grid" />;
  return { __esModule: true, default: DotGrid, DotGrid };
});
jest.mock('../TrueFocus/TrueFocus', () => {
  const TrueFocus = ({ sentence }: { sentence: string }) => <div data-testid="true-focus">{sentence}</div>;
  return { __esModule: true, default: TrueFocus, TrueFocus };
});
jest.mock('@/component/Footer/Footer', () => {
  const Footer = () => <div data-testid="footer" />;
  return { __esModule: true, default: Footer, Footer };
});
jest.mock('../timeline', () => {
  const Timeline = ({ data }: { data: any[] }) => (
    <div data-testid="timeline">
      {data?.map((item, index) => (
        <div key={index} data-testid={`timeline-item-${index}`}>
          <h2>{item.title}</h2>
          {/* Mocking content to keep snapshot stable */}
          <div>Timeline Content</div>
        </div>
      ))}
    </div>
  );
  return { __esModule: true, default: Timeline, Timeline };
});
jest.mock('../../LogoLoop', () => {
  const LogoLoop = () => <div data-testid="logo-loop" />;
  return { __esModule: true, default: LogoLoop, LogoLoop };
});
jest.mock('../carousel', () => {
  const Carousel = () => <div data-testid="carousel" />;
  return { __esModule: true, default: Carousel, Carousel };
});
jest.mock('../../Lanyard', () => {
  const Lanyard = () => <div data-testid="lanyard" />;
  return { __esModule: true, default: Lanyard, Lanyard };
});
jest.mock('@/components/ui/progress', () => ({ Progress: ({ value }: { value: number }) => <div data-testid="progress-bar" >{value}</div> }));
jest.mock('@react-three/drei', () => {
  return new Proxy({}, {
    get: (target, prop) => {
      if (prop === 'useProgress') return () => ({ progress: 100 });
      return ({ children }: any) => <div data-testid={`drei-${String(prop)}`}>{children}</div>;
    },
  });
});
jest.mock("motion/react", () => ({
  motion: {
    div: ({ children, initial, animate, exit, whileInView, viewport, variants, transition, ...props }: any) => <div {...props}>{children}</div>,
    p: ({ children, initial, animate, exit, whileInView, viewport, variants, transition, ...props }: any) => <p {...props}>{children}</p>,
    h1: ({ children, initial, animate, exit, whileInView, viewport, variants, transition, ...props }: any) => <h1 {...props}>{children}</h1>,
    h2: ({ children, initial, animate, exit, whileInView, viewport, variants, transition, ...props }: any) => <h2 {...props}>{children}</h2>,
    span: ({ children, initial, animate, exit, whileInView, viewport, variants, transition, ...props }: any) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));
jest.mock('../modal-journey', () => {
  const ModalJourney = ({ open, setter, content }: { open: boolean, setter: Function, content: any }) => (
    open ? <div data-testid="modal-journey">{JSON.stringify(content)}</div> : null
  );
  return { __esModule: true, default: ModalJourney, ModalJourney };
});
jest.mock('../card-project', () => {
  const CardProject = (props: any) => <div data-testid="card-project">{props.title}</div>;
  return { __esModule: true, default: CardProject, CardProject };
});

jest.mock('react-icons/si', () => ({
  SiReact: () => <div data-testid="icon-react" />,
  SiNextdotjs: () => <div data-testid="icon-nextjs" />,
  SiTypescript: () => <div data-testid="icon-typescript" />,
  SiTailwindcss: () => <div data-testid="icon-tailwindcss" />,
  SiNodedotjs: () => <div data-testid="icon-nodejs" />,
  SiExpress: () => <div data-testid="icon-express" />,
  SiMysql: () => <div data-testid="icon-mysql" />,
  SiJenkins: () => <div data-testid="icon-jenkins" />,
  SiVuedotjs: () => <div data-testid="icon-vuejs" />,
  SiGithub: () => <div data-testid="icon-github" />,
  SiLinkedin: () => <div data-testid="icon-linkedin" />,
}));

jest.mock('react-icons/md', () => ({
  MdOutlineMail: () => <div data-testid="icon-mail" />,
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

// Mock Constants
jest.mock('@/lib/constants', () => ({
  ENV: {
    github: 'https://github.com/mock',
    linkedin: 'https://linkedin.com/mock',
    whatsapp: '1234567890',
  },
}));

describe('HeroSection Snapshot', () => {
  it('renders correctly and matches snapshot', () => {
    const scrollReff = React.createRef<HTMLDivElement>();
    const { asFragment } = render(<HeroSection scrollReff={scrollReff} displayDock={true} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly without dock and matches snapshot', () => {
    const scrollReff = React.createRef<HTMLDivElement>();
    const { asFragment } = render(<HeroSection scrollReff={scrollReff} displayDock={false} />);
    expect(asFragment()).toMatchSnapshot();
  });
});