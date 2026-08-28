import { notFound } from "next/navigation";
import { SUPPORTED_LOCALES, isLocale } from "@/lib/i18n";

export { SUPPORTED_LOCALES };

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  return children;
}
