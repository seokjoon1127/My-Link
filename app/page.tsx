import { dummyLinks } from "@/data/links";
import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
  const visibleLinks = dummyLinks.filter((link) => link.isVisible);

  return (
    <main className="min-h-screen flex flex-col items-center py-20 px-4 bg-background text-foreground">
      <div className="w-full max-w-md flex flex-col items-center space-y-10">
        
        {/* 프로필 헤더 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-24 h-24 rounded-full bg-muted border shadow-sm flex items-center justify-center">
            <span className="text-3xl font-semibold text-muted-foreground tracking-tight">ML</span>
          </div>
          
          <div className="space-y-1.5">
            <h1 className="text-2xl font-bold tracking-tight">
              My Links
            </h1>
            <p className="text-muted-foreground text-sm">
              모든 채널을 한 곳에서 만나보세요.
            </p>
          </div>
        </div>

        {/* 링크 목록 */}
        <div className="w-full flex flex-col gap-3">
          {visibleLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Card className="w-full transition-all duration-300 hover:bg-accent hover:text-accent-foreground shadow-sm group-hover:scale-[1.02] group-hover:shadow-md">
                <CardContent className="relative flex items-center p-4">
                  
                  {/* 파비콘 박스 (shadcn / 기본 스타일) */}
                  <div className="absolute left-4 w-10 h-10 bg-background border rounded-md flex items-center justify-center overflow-hidden">
                    <img
                      src={link.faviconUrl}
                      alt={`${link.title} icon`}
                      className="w-5 h-5 object-contain"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* 텍스트 컨테이너 (정중앙 밸런스 유지) */}
                  <div className="flex-1 px-14 text-center">
                    <span className="font-semibold text-sm">
                      {link.title}
                    </span>
                  </div>

                </CardContent>
              </Card>
            </a>
          ))}
        </div>
        
      </div>
    </main>
  );
}
