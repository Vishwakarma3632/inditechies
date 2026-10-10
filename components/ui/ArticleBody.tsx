import type { ArticleBlock } from "@/types";

export function ArticleBody({ content }: { content: ArticleBlock[] }) {
  return (
    <div className="max-w-3xl space-y-6 text-base leading-relaxed text-muted-strong sm:text-lg">
      {content.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2 key={index} className="pt-4 text-2xl font-semibold text-white">
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={index} className="list-disc space-y-2 pl-5">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        return <p key={index}>{block.text}</p>;
      })}
    </div>
  );
}
