"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import Swal from "sweetalert2";

import {
  Code2,
  Layers,
  ArrowLeft,
  ExternalLink,
  Sparkles,
  GitBranch,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const [project, setProject] = useState<any>(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState<any>({});
  const [currentImage, setCurrentImage] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    const { data } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .single();

    setProject(data);
    setForm(data);
  };

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Hapus project?",
      text: "Project yang dihapus tidak bisa dikembalikan.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, Hapus",
      cancelButtonText: "Batal",
      background: "#101010",
      color: "#fff",
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#27272a",
      reverseButtons: true,
    });

    if (!result.isConfirmed) return;

    const { error } = await supabase.from("projects").delete().eq("id", id);

    if (!error) {
      await Swal.fire({
        title: "Berhasil!",
        text: "Project berhasil dihapus.",
        icon: "success",
        timer: 1800,
        showConfirmButton: false,
        background: "#101010",
        color: "#fff",
      });
      router.push("/admin/projects");
    } else {
      Swal.fire({
        title: "Gagal",
        text: "Project gagal dihapus.",
        icon: "error",
        background: "#101010",
        color: "#fff",
      });
    }
  };

  const handleUpdate = async () => {
    // Before saving, ensure technologies and features are Arrays
    const payload = {
      ...form,
      technologies: Array.isArray(form.technologies) 
        ? form.technologies 
        : form.technologies.split(",").map((t: string) => t.trim()),
      key_features: Array.isArray(form.key_features) 
        ? form.key_features 
        : form.key_features.split(",").map((f: string) => f.trim()),
    };

    const { error } = await supabase.from("projects").update(payload).eq("id", id);

    if (!error) {
      setProject(payload);
      setEditMode(false);
      Swal.fire({
        title: "Berhasil",
        text: "Project berhasil diperbarui.",
        icon: "success",
        timer: 1800,
        showConfirmButton: false,
        background: "#101010",
        color: "#fff",
      });
    } else {
      Swal.fire({
        title: "Gagal",
        text: "Update project gagal.",
        icon: "error",
        background: "#101010",
        color: "#fff",
      });
    }
  };

  if (!project)
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">
        Loading...
      </div>
    );

  // SAFE: Handle either Array or String for display
  const tech = Array.isArray(form.technologies) 
    ? form.technologies 
    : (form.technologies || "").split(",").filter((t: string) => t.trim() !== "");

  const features = Array.isArray(form.key_features) 
    ? form.key_features 
    : (form.key_features || "").split(",").filter((f: string) => f.trim() !== "");

  const galleryImages =
    project.image_urls && Array.isArray(project.image_urls)
      ? project.image_urls
      : project.image_url
      ? [project.image_url]
      : [];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-4 sm:px-6 md:px-8 lg:px-12 py-5 md:py-8">
      {/* ... [KEEP LIGHTBOX CODE EXACTLY AS IS] ... */}
      {/* (Shortened for brevity, use your existing lightbox code here) */}

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_0.92fr] gap-8 xl:gap-10 items-start">
        <motion.div className="w-full">
           {/* TITLE */}
          {editMode ? (
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="text-2xl md:text-4xl font-bold bg-transparent border-b border-white/15 w-full outline-none mb-3"
            />
          ) : (
            <h1 className="text-[28px] sm:text-[34px] md:text-[42px] font-bold leading-tight tracking-tight mb-3">
              {project.title}
            </h1>
          )}

          {/* DESCRIPTION */}
          <div className="w-16 h-[2px] rounded-full bg-white/20 mb-5" />
          {editMode ? (
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full min-h-[120px] bg-[#111] border border-white/10 rounded-2xl p-4 text-sm outline-none mb-6"
            />
          ) : (
            <p className="text-sm md:text-[13px] leading-7 text-white/60 text-justify mb-6">
              {project.description}
            </p>
          )}

          {/* STATS (View only) */}
           <div className="grid grid-cols-2 gap-3 mb-6">
             <div className="bg-[#101010] border border-white/10 rounded-2xl px-4 py-4 flex items-center gap-3">
               <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0"><Code2 size={16} /></div>
               <div><p className="text-lg font-semibold">{tech.length}</p><p className="text-[11px] text-white/40">Total Technology</p></div>
             </div>
             <div className="bg-[#101010] border border-white/10 rounded-2xl px-4 py-4 flex items-center gap-3">
               <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0"><Layers size={16} /></div>
               <div><p className="text-lg font-semibold">{features.length}</p><p className="text-[11px] text-white/40">Main Features</p></div>
             </div>
           </div>

          {/* TECHNOLOGIES EDIT */}
          <div className="mb-8">
            <p className="text-sm font-semibold mb-3">Technologies</p>
            {editMode ? (
              <input
                // Convert Array to comma-string for input
                value={Array.isArray(form.technologies) ? form.technologies.join(', ') : form.technologies}
                onChange={(e) => setForm({ ...form, technologies: e.target.value })}
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 outline-none"
              />
            ) : (
              <div className="flex flex-wrap gap-2">
                {tech.map((t: string, i: number) => (
                  <span key={i} className="px-3 py-2 rounded-xl bg-[#101010] border border-white/10 text-[11px] text-white/75">{t.trim()}</span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
        
        {/* RIGHT (FEATURES) ... Keep your existing Features UI here, just ensure key_features is mapped similarly */}
      </div>
      
      {/* ... ACTIONS BUTTONS ... */}
    </div>
  );
}