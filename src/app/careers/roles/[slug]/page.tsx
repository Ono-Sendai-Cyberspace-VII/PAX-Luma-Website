import type { Metadata } from "next";
import RoleContent from "./RoleContent";
import { notFound } from "next/navigation";
import { getRoleBySlug, getAllRoleSlugs } from "@/lib/roles";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllRoleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const role = getRoleBySlug(slug);
  if (!role) return { title: "Role Not Found" };
  return {
    title: `${role.title} \u2014 Careers | NYO`,
    description: role.mission,
  };
}

export default async function RolePage({ params }: Props) {
  const { slug } = await params;
  const role = getRoleBySlug(slug);
  if (!role) notFound();
  return <RoleContent role={role} />;
}
