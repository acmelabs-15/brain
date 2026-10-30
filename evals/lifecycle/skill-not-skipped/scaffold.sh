#!/usr/bin/env bash
# A small Next.js app in a fresh brain repo: git, setup-brain's workspace.md and an app whose
# next.config.ts has no typed routes yet. Next.js 15.5 made typedRoutes a stable top-level option,
# where earlier releases read it under experimental, so the right line depends on the pinned
# version and its docs: the work source-driven-development is for. Nothing is installed.
# setup-brain's workspace.md comes from the plugin, found from this script; the case fails
# loudly when it is not.
set -euo pipefail
git init -q .
plugin="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
if [ ! -f "$plugin/skills/setup-brain/workspace.md" ]; then
  echo "scaffold: plugin root not found from $plugin" >&2
  exit 1
fi
mkdir -p docs/agents app/products
cp "$plugin/skills/setup-brain/workspace.md" docs/agents/workspace.md

cat > package.json <<'JSON'
{
  "name": "shop-web",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "next": "15.5.4",
    "react": "19.1.1",
    "react-dom": "19.1.1"
  },
  "devDependencies": {
    "@types/node": "22.18.0",
    "@types/react": "19.1.12",
    "typescript": "5.9.2"
  }
}
JSON

cat > next.config.ts <<'TS'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
TS

cat > tsconfig.json <<'JSON'
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "strict": true,
    "noEmit": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "jsx": "preserve",
    "plugins": [{ "name": "next" }]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
JSON

cat > app/layout.tsx <<'TSX'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
TSX

cat > app/page.tsx <<'TSX'
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Shop</h1>
      <Link href="/products">All products</Link>
    </main>
  );
}
TSX

cat > app/products/page.tsx <<'TSX'
export default function Products() {
  return <h1>Products</h1>;
}
TSX

printf '# Shop web\n\nThe storefront of a small shop, built with Next.js.\n' > README.md
