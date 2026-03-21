import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from './HeroSection';

// Mock child components and external hooks/libraries
jest.mock('@/component/Desktop/Desktop', () => {
  const Desktop = () => <div data-testid="computer-canvas" />;
  return {
    __esModule: true,
    default: Desktop,
    Desktop,
  };
});
jest.mock('../DotGrid/DotGrid', () => {
  const DotGrid = () => <div data-testid="dot-grid" />;
  return {
    __esModule: true,
    default: DotGrid,
    DotGrid,
  };
});
jest.mock('../TrueFocus/TrueFocus', () => {
  const TrueFocus = ({ sentence }: { sentence: string }) => <div data-testid="true-focus">{sentence}</div>;
  return {
    __esModule: true,
    default: TrueFocus,
    TrueFocus,
  };
});
jest.mock('@/component/Footer/Footer', () => {
  const Footer = () => <div data-testid="footer" />;
  return {
    __esModule: true,
    default: Footer,
    Footer,
  };
});
jest.mock('../timeline', () => {
  const Timeline = ({ data }: { data: any[] }) => (
    <div data-testid="timeline">
      {data?.map((item, index) => (
        <div key={index} data-testid={`timeline-item-${index}`}>
          <h2>{item.title}</h2>
          <div>{item.content}</div>
        </div>
      ))}
    </div>
  );
  return {
    __esModule: true,
    default: Timeline,
    Timeline,
  };
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
  return {
    __esModule: true,
    default: ModalJourney,
    ModalJourney,
  };
});
jest.mock('../card-project', () => {
  const CardProject = (props: any) => <div data-testid="card-project">{props.title}</div>;
  return {
    __esModule: true,
    default: CardProject,
    CardProject,
  };
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

// Mock Constants to avoid import errors or missing env vars
jest.mock('@/lib/constants', () => ({
  ENV: {
    github: 'https://github.com/mock',
    linkedin: 'https://linkedin.com/mock',
    whatsapp: '1234567890',
  },
}));

// Mock window.open
const originalOpen = window.open;
beforeAll(() => {
  Object.defineProperty(window, 'open', {
    configurable: true,
    value: jest.fn(),
  });
});
afterAll(() => {
  window.open = originalOpen;
});

describe('HeroSection Logic', () => {
  const scrollReff = React.createRef<HTMLDivElement>();

  beforeEach(() => {
    (window.open as jest.Mock).mockClear();
  });

  it('renders the main heading and introduction', () => {
    render(<HeroSection scrollReff={scrollReff} displayDock={true} />);
    expect(screen.getByText('Hi, I’m')).toBeInTheDocument();
    expect(screen.getByText('Tri Sumanzaya')).toBeInTheDocument();
    expect(screen.getByText('Software Mobile')).toBeInTheDocument();
    expect(screen.getByText('Engineer.')).toBeInTheDocument();
    expect(screen.getByText('Practical code, Real impact.')).toBeInTheDocument();
  });

  it('opens the journey modal with Fazztech content when its button is clicked', () => {
    render(<HeroSection scrollReff={scrollReff} displayDock={true} />);
    
    // Find the button inside the timeline item
    const fazztechButton = screen.getByText('Fazztech - Front End Developer').closest('button');
    expect(fazztechButton).toBeInTheDocument();

    fireEvent.click(fazztechButton!);

    const modal = screen.getByTestId('modal-journey');
    expect(modal).toBeInTheDocument();
    
    // Check if content is passed (checking for a substring of the content)
    expect(modal).toHaveTextContent("Digi Expert");
  });

  it('calls window.open with the correct GitHub URL when the Github button is clicked', () => {
    render(<HeroSection scrollReff={scrollReff} displayDock={true} />);
    const githubButton = screen.getByText('Github').closest('button');
    fireEvent.click(githubButton!);
    expect(window.open).toHaveBeenCalledWith('https://github.com/mock');
  });

  it('calls window.open with the correct LinkedIn URL when the LinkedIn button is clicked', () => {
    render(<HeroSection scrollReff={scrollReff} displayDock={true} />);
    const linkedinButton = screen.getByText('LinkedIn').closest('button');
    fireEvent.click(linkedinButton!);
    expect(window.open).toHaveBeenCalledWith('https://linkedin.com/mock');
  });

  it('calls window.open with the correct WhatsApp URL when the Whatsapp button is clicked', () => {
    render(<HeroSection scrollReff={scrollReff} displayDock={true} />);
    const whatsappButton = screen.getByText('Whatsapp').closest('button');
    fireEvent.click(whatsappButton!);
    expect(window.open).toHaveBeenCalledWith(expect.stringContaining('1234567890'));
  });
});