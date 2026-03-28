"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { Upload, Mic, MessageSquare, LogOut, FileText, Brain, Activity } from "lucide-react";

export default function DashboardContent() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-nyo-orange border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!session) return null;

  const services = [
    {
      icon: Upload,
      title: "Document Ingestion",
      description: "Upload documents, decks, PDFs, screenshots, and handwritten notes for PAX to process and integrate into your knowledge base.",
      status: "Under Development",
    },
    {
      icon: Mic,
      title: "Voice Chat",
      description: "Speak directly with Luma. Voice-first interaction with evidence-backed dialogue, designed for walking, driving, and transition moments.",
      status: "Under Development",
    },
    {
      icon: MessageSquare,
      title: "Text Chat",
      description: "Text-based conversation with Luma. Query your knowledge base, get relationship context, review evidence, and plan actions.",
      status: "Under Development",
    },
  ];

  const stats = [
    { icon: FileText, label: "Documents", value: "0" },
    { icon: Brain, label: "Evidence Objects", value: "0" },
    { icon: Activity, label: "Insights", value: "0" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-nyo-white mb-2">
              Dashboard
            </h1>
            <p className="text-nyo-gray-400">
              Welcome back, <span className="text-nyo-white">{session.user?.name || session.user?.email}</span>
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <LogOut size={16} />
            Sign Out
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-5 text-center">
              <stat.icon size={20} className="text-nyo-gray-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-nyo-gray-600">{stat.value}</p>
              <p className="text-xs text-nyo-gray-500 mt-1">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* PA Services */}
        <h2 className="text-xl font-bold text-nyo-white mb-6">
          Personal Assistant Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="p-6 relative overflow-hidden">
              {/* FPO overlay */}
              <div className="absolute inset-0 bg-nyo-black/40 backdrop-blur-[1px] z-10 flex flex-col items-center justify-center">
                <Badge variant="orange" className="mb-2">FPO</Badge>
                <span className="text-xs text-nyo-gray-400">{service.status}</span>
              </div>

              <div className="relative z-0">
                <div className="p-3 rounded-2xl bg-nyo-gray-800/50 border border-nyo-gray-700/30 inline-block mb-4">
                  <service.icon size={24} className="text-nyo-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-nyo-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-nyo-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Info banner */}
        <div className="mt-12 rounded-2xl border border-nyo-gray-800/60 bg-nyo-gray-900/30 p-6 text-center">
          <p className="text-nyo-gray-400">
            PAX:Luma&apos;s personal assistant services are under active development.
            Early access members will be notified as each feature becomes available.
          </p>
          <p className="mt-2 text-sm text-nyo-gray-600">
            Follow our progress on <a href="/kata" className="text-nyo-orange hover:underline">Kata</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
