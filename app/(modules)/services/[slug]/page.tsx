import { notFound } from "next/navigation";
import type { Metadata } from "next";
import MainLayout from "@/layouts/MainLayout";
import { ServiceDetail } from "@/components";
import {
  SERVICES,
  getServiceBySlug,
} from "@/assets/content/services/ServicesContent";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service | Creativerse" };
  return {
    title: `${service.title} | Creativerse`,
    description: service.intro[0],
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <MainLayout>
      <ServiceDetail service={service} />
    </MainLayout>
  );
}
