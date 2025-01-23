export interface NavItem {
  name: string;
  href: string;
}

export interface SocialLink extends NavItem {
  icon: React.ComponentType<{ className?: string }>;
}

export interface FooterSection {
  main: NavItem[];
  legal: NavItem[];
  social: SocialLink[];
}

export interface ThemeConfig {
  theme: string;
  setTheme: (theme: string) => void;
  systemTheme?: string;
  isDark: boolean;
}