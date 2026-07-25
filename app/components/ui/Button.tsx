import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-green-700 text-white hover:bg-green-800 hover:-translate-y-1 shadow-lg",
    secondary:
      "border border-gray-300 text-gray-900 hover:bg-gray-100",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}