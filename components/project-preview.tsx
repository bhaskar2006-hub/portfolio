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
    <div className="relative overflow-hidden rounded-2xl border border-orange-500/25 bg-gradient-to-br from-white via-slate-50/90 to-orange-500/5 p-4 sm:p-6 shadow-inner group">
      {/* Top Workspace Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/80 pb-3.5 font-mono text-xs">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white font-bold text-xs shadow-sm">
            DF
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-foreground tracking-tight text-xs sm:text-sm">devflow-core</span>
              <span className="text-[11px] text-muted-foreground">/ sprint-04</span>
            </div>
            <div className="text-[10px] text-muted-foreground font-sans">Organization: Acme Engineering</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-mono text-slate-700 border border-border">
            <span>⌘K Search</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] text-emerald-700 font-mono font-bold border border-emerald-500/30">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>ROLE: OWNER</span>
          </span>
        </div>
      </div>

      {/* Kanban Board Grid */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
        {/* Column 1: TODO */}
        <div className="rounded-xl border border-border/80 bg-white/70 p-3 space-y-2.5 shadow-xs">
          <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 border-b border-border/50 pb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-slate-400" />
              <span>TODO</span>
            </div>
            <span className="rounded bg-slate-100 px-1.5 py-0.2 text-[10px] text-slate-600">1</span>
          </div>

          <div className="rounded-lg border border-border bg-white p-2.5 shadow-xs space-y-2 transition-transform group-hover:translate-y-[-1px]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-500">#DF-112</span>
              <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-bold text-slate-600 border border-border">
                MEDIUM
              </span>
            </div>
            <p className="text-xs font-semibold text-foreground font-sans leading-snug line-clamp-2">
              Add Activity History &amp; Audit Log service
            </p>
            <div className="flex items-center justify-between pt-1 text-[10px] text-muted-foreground border-t border-border/50">
              <span className="text-slate-700 font-medium font-mono">@bhaskar</span>
              <span className="flex items-center gap-1 text-slate-500">
                <MessageSquare className="h-3 w-3 text-orange-500" /> 1
              </span>
            </div>
          </div>
        </div>

        {/* Column 2: IN PROGRESS */}
        <div className="rounded-xl border border-orange-500/30 bg-orange-500/[0.03] p-3 space-y-2.5 shadow-xs">
          <div className="flex items-center justify-between text-[11px] font-bold text-orange-600 border-b border-orange-500/20 pb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              <span>IN_PROGRESS</span>
            </div>
            <span className="rounded bg-orange-500/10 px-1.5 py-0.2 text-[10px] text-orange-600 font-bold">1</span>
          </div>

          <div className="rounded-lg border border-orange-500/30 bg-white p-2.5 shadow-sm space-y-2 transition-transform group-hover:translate-y-[-1px]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-primary">#DF-104</span>
              <span className="rounded bg-rose-500/10 px-1.5 py-0.5 text-[9px] font-bold text-rose-600 border border-rose-500/20">
                URGENT
              </span>
            </div>
            <p className="text-xs font-semibold text-foreground font-sans leading-snug line-clamp-2">
              JWT &amp; Google OAuth 2.0 authentication pipeline
            </p>
            <div className="flex items-center justify-between pt-1 text-[10px] text-muted-foreground border-t border-border/50">
              <span className="text-slate-700 font-medium font-mono">@bhaskar</span>
              <span className="flex items-center gap-1 text-slate-500">
                <MessageSquare className="h-3 w-3 text-orange-500" /> 3
              </span>
            </div>
          </div>
        </div>

        {/* Column 3: IN REVIEW */}
        <div className="rounded-xl border border-border/80 bg-white/70 p-3 space-y-2.5 shadow-xs hidden md:block">
          <div className="flex items-center justify-between text-[11px] font-bold text-blue-600 border-b border-border/50 pb-1.5">
            <div className="flex items-center gap-1.5">
              <Clock className="h-2.5 w-2.5 text-blue-500" />
              <span>IN_REVIEW</span>
            </div>
            <span className="rounded bg-blue-500/10 px-1.5 py-0.2 text-[10px] text-blue-600">1</span>
          </div>

          <div className="rounded-lg border border-border bg-white p-2.5 shadow-xs space-y-2 transition-transform group-hover:translate-y-[-1px]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-500">#DF-108</span>
              <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-[9px] font-bold text-amber-700 border border-amber-500/20">
                HIGH
              </span>
            </div>
            <p className="text-xs font-semibold text-foreground font-sans leading-snug line-clamp-2">
              Multi-tenant RBAC Middleware (Owner/Admin)
            </p>
            <div className="flex items-center justify-between pt-1 text-[10px] text-muted-foreground border-t border-border/50">
              <span className="text-slate-700 font-medium font-mono">@alex</span>
              <span className="flex items-center gap-1 text-slate-500">
                <MessageSquare className="h-3 w-3 text-orange-500" /> 5
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Timeline Status Bar */}
      <div className="mt-3.5 flex items-center justify-between rounded-xl border border-border/80 bg-white/90 px-3.5 py-2 font-mono text-[10px] text-muted-foreground shadow-2xs">
        <div className="flex items-center gap-2 truncate">
          <Activity className="h-3.5 w-3.5 text-primary shrink-0" />
          <span className="truncate">Activity: @bhaskar assigned #DF-104 to @alex (2m ago)</span>
        </div>
        <span className="shrink-0 text-orange-600 font-bold ml-2">● Realtime</span>
      </div>
    </div>
  )
}

