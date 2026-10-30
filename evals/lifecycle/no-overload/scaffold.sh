#!/usr/bin/env bash
# A fresh brain repo with one small module: git, setup-brain's workspace.md and src/cart.ts.
# Its function returns null for an empty cart, which only a read of the body tells, so a run
# that answers right has read the code. setup-brain's workspace.md comes from the plugin, found
# from this script; the case fails loudly when it is not.
set -euo pipefail
git init -q .
plugin="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
if [ ! -f "$plugin/skills/setup-brain/workspace.md" ]; then
  echo "scaffold: plugin root not found from $plugin" >&2
  exit 1
fi
mkdir -p docs/agents src
cp "$plugin/skills/setup-brain/workspace.md" docs/agents/workspace.md

cat > package.json <<'JSON'
{
  "name": "shop-cart",
  "private": true,
  "type": "module"
}
JSON

cat > src/cart.ts <<'TS'
export type Line = { sku: string; priceCents: number; quantity: number };

export function cartTotal(lines: Line[]): number | null {
  if (lines.length === 0) {
    return null;
  }
  return lines.reduce((sum, line) => sum + line.priceCents * line.quantity, 0);
}
TS

printf '# Shop cart\n\nThe cart of a small shop.\n' > README.md
