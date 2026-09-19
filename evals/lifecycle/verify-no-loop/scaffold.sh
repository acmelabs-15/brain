#!/usr/bin/env bash
set -euo pipefail
mkdir -p src
cat > src/export.ts <<'TS'
export function exportRows(rows: string[]): string {
  return rows.join("\n");
}
TS
printf '{ "name": "exporter", "type": "module" }\n' > package.json
