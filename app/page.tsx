"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LinkItem } from "@/data/links";
import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// ────────────────────────────────────────────────────────────────
// Zod 스키마 정의
// ────────────────────────────────────────────────────────────────
const linkFormSchema = z.object({
  title: z
    .string()
    .min(1, "링크 제목을 입력해주세요.")
    .max(50, "제목은 50자 이하로 입력해주세요."),
  url: z
    .string()
    .min(1, "URL을 입력해주세요.")
    .transform((val) =>
      /^https?:\/\//i.test(val) ? val : `https://${val}`
    )
    .refine(
      (val) => {
        try {
          new URL(val);
          return true;
        } catch {
          return false;
        }
      },
      { message: "올바른 URL 형식이 아닙니다." }
    ),
});

type LinkFormValues = z.infer<typeof linkFormSchema>;

// ────────────────────────────────────────────────────────────────
// 페이지 컴포넌트
// ────────────────────────────────────────────────────────────────
export default function Page() {
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLinks = async () => {
    setIsLoading(true);
    try {
      const q = query(collection(db, "users/anonymous/links"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const fetchedLinks: LinkItem[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<LinkItem, "id">),
      }));
      setLinks(fetchedLinks);
    } catch (error) {
      console.error("Firestore getDocs Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LinkFormValues>({
    resolver: zodResolver(linkFormSchema),
    defaultValues: { title: "", url: "" },
  });

  const onSubmit = async (data: LinkFormValues) => {
    let domain = data.url;
    try {
      domain = new URL(data.url).hostname;
    } catch {
      // 파싱 불가 시 url 그대로 사용
    }

    try {
      await addDoc(collection(db, "users/anonymous/links"), {
        title: data.title,
        url: data.url,
        faviconUrl: `https://www.google.com/s2/favicons?domain=${domain}&sz=64`,
        isVisible: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      setIsOpen(false);
      reset();
      await fetchLinks();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) reset(); // 다이얼로그 닫힐 때 폼 초기화
  };

  const visibleLinks = links.filter((link) => link.isVisible);

  return (
    <main className="min-h-screen flex flex-col items-center py-20 px-4 bg-gradient-to-b from-background to-muted/50 text-foreground">
      <div className="w-full max-w-md flex flex-col items-center space-y-12">

        {/* 프로필 헤더 */}
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-violet-600 to-blue-600 p-[3px] shadow-lg hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <span className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-tr from-violet-600 to-blue-600 tracking-tighter">
                ML
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold tracking-tight">My Links</h1>
            <p className="text-muted-foreground text-[15px] font-medium">
              모든 채널을 한 곳에서 만나보세요.
            </p>
          </div>
        </div>

        {/* 링크 추가 다이얼로그 */}
        <div className="w-full">
          <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger
              className="w-full rounded-2xl h-12 border-dashed border-2 border-muted-foreground/30 hover:border-violet-500 hover:text-violet-500 transition-colors bg-transparent text-sm font-medium"
              render={
                <Button
                  variant="outline"
                  className="w-full rounded-2xl h-12 border-dashed border-2 border-muted-foreground/30 hover:border-violet-500 hover:text-violet-500 transition-colors bg-transparent"
                />
              }
            >
              + 링크 추가
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px] rounded-2xl">
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <DialogHeader>
                  <DialogTitle>새 링크 추가</DialogTitle>
                  <DialogDescription>
                    프로필에 추가할 링크의 제목과 URL을 입력하세요.
                    아이콘은 자동으로 가져옵니다.
                  </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                  {/* 제목 필드 */}
                  <div className="grid gap-1.5">
                    <Label htmlFor="title">링크 제목</Label>
                    <Input
                      id="title"
                      placeholder="예) 내 유튜브 채널, 포트폴리오 등"
                      className={`rounded-xl ${errors.title ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      {...register("title")}
                    />
                    {errors.title && (
                      <p className="text-destructive text-sm">
                        {errors.title.message}
                      </p>
                    )}
                  </div>

                  {/* URL 필드 */}
                  <div className="grid gap-1.5">
                    <Label htmlFor="url">URL 주소</Label>
                    <Input
                      id="url"
                      placeholder="예) youtube.com/@mychannel"
                      className={`rounded-xl ${errors.url ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      {...register("url")}
                    />
                    {errors.url && (
                      <p className="text-destructive text-sm">
                        {errors.url.message}
                      </p>
                    )}
                  </div>
                </div>

                <DialogFooter>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-xl w-full bg-violet-600 hover:bg-violet-700"
                  >
                    추가하기
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* 링크 목록 */}
        <div className="w-full flex flex-col gap-4">
          {isLoading ? (
            // 로딩 스피너
            <div className="flex flex-col items-center justify-center py-12 gap-3">
              <svg
                className="animate-spin text-violet-500"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
              <p className="text-sm text-muted-foreground">불러오는 중...</p>
            </div>
          ) : visibleLinks.length === 0 ? (
            // 빈 상태
            <div className="flex flex-col items-center justify-center py-12 gap-2 text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-30"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              <p className="text-sm font-medium">아직 추가된 링크가 없어요.</p>
              <p className="text-xs opacity-60">위 버튼으로 첫 번째 링크를 추가해보세요!</p>
            </div>
          ) : (
            visibleLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Card className="w-full rounded-2xl transition-all duration-300 border-border/50 hover:border-violet-500/50 hover:shadow-lg hover:-translate-y-1 hover:bg-accent/40 bg-card">
                  <CardContent className="relative flex items-center p-4 min-h-[76px]">
                    {/* 파비콘 */}
                    <div className="absolute left-4 w-12 h-12 bg-background/50 border shadow-sm rounded-xl flex items-center justify-center overflow-hidden group-hover:shadow-md transition-shadow">
                      <img
                        src={link.faviconUrl}
                        alt={`${link.title} icon`}
                        className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://www.google.com/s2/favicons?domain=example.com&sz=64";
                        }}
                      />
                    </div>

                    {/* 텍스트 */}
                    <div className="flex-1 px-16 text-center">
                      <span className="font-semibold text-[15px] text-foreground/90 group-hover:text-foreground transition-colors">
                        {link.title}
                      </span>
                    </div>

                    {/* 화살표 마이크로 인터랙션 */}
                    <div className="absolute right-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-muted-foreground group-hover:text-violet-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
