export interface LinkItem {
  id: string;
  title: string;
  url: string;
  faviconUrl: string;
  isVisible: boolean;
  createdAt: string;
  updatedAt: string;
}

export const dummyLinks: LinkItem[] = [
  {
    id: "1",
    title: "인스타그램",
    url: "https://www.instagram.com/",
    faviconUrl: "https://www.google.com/s2/favicons?domain=instagram.com&sz=128",
    isVisible: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "유튜브",
    url: "https://www.youtube.com/",
    faviconUrl: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
    isVisible: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "블로그",
    url: "https://velog.io/",
    faviconUrl: "https://www.google.com/s2/favicons?domain=velog.io&sz=128",
    isVisible: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "4",
    title: "GitHub",
    url: "https://github.com/",
    faviconUrl: "https://www.google.com/s2/favicons?domain=github.com&sz=128",
    isVisible: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "5",
    title: "포트폴리오",
    url: "https://my-portfolio.com/",
    faviconUrl: "https://www.google.com/s2/favicons?domain=my-portfolio.com&sz=128",
    isVisible: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
