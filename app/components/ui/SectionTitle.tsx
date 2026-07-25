type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-16">
      {eyebrow && (
        <p className="uppercase tracking-[5px] text-green-700 font-semibold text-sm">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 text-lg text-gray-600 leading-8">
          {subtitle}
        </p>
      )}
    </div>
  );
}