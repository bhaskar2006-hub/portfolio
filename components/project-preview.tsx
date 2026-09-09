'use client'

import { ShoppingBag, ShieldCheck, Lock, UserCheck, Check, Server, ArrowRight, MessageSquare, Clock, Activity } from 'lucide-react'

export function GoCartPreview() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-orange-500/20 bg-gradient-to-br from-white via-slate-50 to-orange-500/5 p-5 shadow-inner group">
      {/* Top Header Mockup */}
      <div className="flex items-center justify-between border-b border-border/80 pb-3 font-mono text-xs">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-white font-bold text-xs shadow-sm">
            GC
          </div>
          <span className="font-semibold text-foreground">GoCart Store</span>
          <span className="rounded-full bg-orange-500/10 px-2 py-0.5 text-[10px] text-orange-600 border border-orange-500/30 font-semibold">
            Live on AWS EC2
          </span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-orange-500/10 px-2.5 py-1 text-xs text-primary font-bold">
          <ShoppingBag className="h-3.5 w-3.5" />
          <span>Cart (3)</span>
        </div>
      </div>

      {/* Grid of Product Cards */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div className="rounded-lg border border-border bg-white p-3 shadow-sm transition-transform duration-300 group-hover:translate-y-[-2px]">
          <div className="h-16 w-full rounded bg-slate-100 flex items-center justify-center font-mono text-[10px] text-muted-foreground border border-dashed border-border">
            [Product Image]
          </div>
          <div className="mt-2 text-xs font-semibold text-foreground">Wireless Headphones</div>
          <div className="mt-1 flex items-center justify-between text-[11px]">
            <span className="font-mono font-bold text-primary">$129.99</span>
            <span className="text-[10px] text-orange-600 font-mono font-bold">In Stock</span>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-white p-3 shadow-sm transition-transform duration-300 group-hover:translate-y-[-2px]">
          <div className="h-16 w-full rounded bg-slate-100 flex items-center justify-center font-mono text-[10px] text-muted-foreground border border-dashed border-border">
            [Product Image]
          </div>
          <div className="mt-2 text-xs font-semibold text-foreground">Mechanical Keyboard</div>
          <div className="mt-1 flex items-center justify-between text-[11px]">
            <span className="font-mono font-bold text-primary">$89.50</span>
            <span className="text-[10px] text-orange-600 font-mono font-bold">In Stock</span>
          </div>
        </div>

        <div className="hidden sm:block rounded-lg border border-border bg-white p-3 shadow-sm transition-transform duration-300 group-hover:translate-y-[-2px]">
          <div className="h-16 w-full rounded bg-slate-100 flex items-center justify-center font-mono text-[10px] text-muted-foreground border border-dashed border-border">
            [Product Image]
          </div>
          <div className="mt-2 text-xs font-semibold text-foreground">Smart Fitness Watch</div>
          <div className="mt-1 flex items-center justify-between text-[11px]">
            <span className="font-mono font-bold text-primary">$199.00</span>
            <span className="text-[10px] text-orange-600 font-mono font-bold">In Stock</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ByteSecurePreview() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-orange-500/20 bg-gradient-to-br from-white via-slate-50 to-amber-500/5 p-5 shadow-inner group">
      {/* Top Bar Header */}
      <div className="flex items-center justify-between border-b border-border/80 pb-3 font-mono text-xs">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-amber-500/20 text-amber-700 border border-amber-500/40">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <span className="font-semibold text-foreground">ByteSecure Admin Panel</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-0.5 text-[10px] text-orange-600 font-mono font-bold">
          <Lock className="h-3 w-3" />
          <span>JWT AUTH VALIDATED</span>
        </div>
      </div>

      {/* Role Matrix Dashboard Preview */}
      <div className="mt-4 space-y-2 font-mono text-xs">
        <div className="flex items-center justify-between rounded-lg border border-border bg-white p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <UserCheck className="h-4 w-4 text-primary" />
            <span className="font-bold text-foreground">Role: ADMIN</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-orange-600 font-semibold">
            <Check className="h-3.5 w-3.5" />
            <span>Full System Access (Read/Write/Delete)</span>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-lg border border-border bg-slate-50 p-3 text-muted-foreground">
          <div className="flex items-center gap-2">
            <UserCheck className="h-4 w-4 text-amber-600" />
            <span className="font-semibold text-foreground">Role: MODERATOR</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-amber-700 font-semibold">
            <Check className="h-3.5 w-3.5" />
            <span>Content Audit Access</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function DevFlowPreview() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-orange-500/20 bg-gradient-to-br from-white via-slate-50 to-orange-500/5 p-5 shadow-inner group">
      {/* Top Header Mockup */}
      <div className="flex items-center justify-between border-b border-border/80 pb-3 font-mono text-xs">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-orange-500 to-amber-600 text-white font-bold text-xs shadow-sm">
            DF
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-foreground">devflow-core</span>
            <span className="text-[10px] text-muted-foreground">/ sprint-04</span>
          </div>
          <span className="rounded-full bg-orange-500/10 px-2 py-0.5 text-[10px] text-orange-600 border border-orange-500/30 font-semibold hidden sm:inline-flex">
            Vercel + Render
          </span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] text-emerald-700 font-mono font-bold border border-emerald-500/30">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>ROLE: OWNER</span>
        </div>
      </div>

      {/* Kanban / Issue Cards Row */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
        {/* Issue 1: In Progress */}
        <div className="rounded-lg border border-border bg-white p-3 shadow-sm transition-transform duration-300 group-hover:translate-y-[-2px] space-y-2">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1 rounded bg-orange-500/10 px-2 py-0.5 text-[10px] font-bold text-orange-600 border border-orange-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
              IN_PROGRESS
            </span>
            <span className="rounded bg-rose-500/10 px-1.5 py-0.5 text-[10px] font-bold text-rose-600 border border-rose-500/20">
              URGENT
            </span>
          </div>
          <div className="font-semibold text-foreground text-xs leading-snug line-clamp-1 font-sans">
            #DF-104: JWT &amp; Google OAuth flow
          </div>
          <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1 border-t border-border/60">
            <span className="text-slate-700 font-medium">@bhaskar</span>
            <div className="flex items-center gap-1 text-slate-500">
              <MessageSquare className="h-3 w-3 text-orange-500" />
              <span>3 comments</span>
            </div>
          </div>
        </div>

        {/* Issue 2: In Review */}
        <div className="rounded-lg border border-border bg-white p-3 shadow-sm transition-transform duration-300 group-hover:translate-y-[-2px] space-y-2">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1 rounded bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold text-blue-600 border border-blue-500/20">
              <Clock className="h-2.5 w-2.5" />
              IN_REVIEW
            </span>
            <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-bold text-amber-700 border border-amber-500/20">
              HIGH
            </span>
          </div>
          <div className="font-semibold text-foreground text-xs leading-snug line-clamp-1 font-sans">
            #DF-108: RBAC middleware (Owner/Admin)
          </div>
          <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1 border-t border-border/60">
            <span className="text-slate-700 font-medium">@team-lead</span>
            <div className="flex items-center gap-1 text-slate-500">
              <MessageSquare className="h-3 w-3 text-orange-500" />
              <span>5 comments</span>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Timeline Status Bar */}
      <div className="mt-3 flex items-center justify-between rounded-lg border border-border/70 bg-slate-50/80 px-3 py-1.5 font-mono text-[10px] text-muted-foreground">
        <div className="flex items-center gap-1.5 truncate">
          <Activity className="h-3 w-3 text-primary shrink-0" />
          <span className="truncate">Activity: @bhaskar assigned #DF-104 to @alex</span>
        </div>
        <span className="shrink-0 text-slate-500 font-medium ml-2">2m ago</span>
      </div>
    </div>
  )
}

