type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-wide ${
            isDark ? "text-cyan-200" : "text-zinc-500"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-semibold tracking-tight md:text-4xl ${
          isDark ? "text-white" : "text-zinc-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-7 ${
            isDark ? "text-zinc-300" : "text-zinc-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
