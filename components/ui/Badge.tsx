interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "accent" | "dark";
  }
  
  export default function Badge({
    children,
    variant = "default",
  }: BadgeProps) {
    const styles = {
      default: "border-slate-200 bg-slate-50 text-slate-600",
      accent: "border-emerald-100 bg-emerald-50 text-emerald-600",
      dark: "border-slate-700 bg-slate-900 text-slate-400",
    };
  
    return (
      <span
        className={`inline-flex rounded-md border px-2 py-1 font-mono text-[10px] font-medium ${styles[variant]}`}
      >
        {children}
      </span>
    );
  }