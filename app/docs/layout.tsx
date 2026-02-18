import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
  const base = baseOptions();
  return (
    <DocsLayout
      {...base}
      tree={source.getPageTree()}
      links={base.links?.filter((item) => item.type === "icon")}
      nav={{
        ...base.nav,
      }}
    >
      {children}
    </DocsLayout>
  );
}
