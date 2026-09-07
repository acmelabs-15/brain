---
package: rjm
name: dogfood install
slug: dogfood-install
kind: technique
package_phase: test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md, sha256: 2e49561b59500f4a4b6d417dfc94da905bdb2eb57a996e3070193904150cd40d}
  - {path: scripts/dev/dogfood_copilot_plugin.py, sha256: c9070ffbcff5d39290ffdfe5932104942ab93407904dc5215c89c2fa78f2c98c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# dogfood install

## Definition — verbatim
> "def dogfood_install(source: Path, target: Path) -> str:" — scripts/dev/dogfood_copilot_plugin.py:184

## Also called — verbatim
"dogfood_install" — scripts/dev/dogfood_copilot_plugin.py:184

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md | 21 | defined here | Mandated procedure copying packaged plugin artifacts into local Copilot CLI install paths. |
| scripts/dev/dogfood_copilot_plugin.py | 184 | defined here | Function implementing the local copy of the working-tree plugin into the installed plugins directory. |

## Consumes
Built plugin distribution tree (`src/copilot-cli`) and local install target path (`~/.copilot/installed-plugins/`).

## Produces
Locally installed dogfood plugin directory and backup of prior installations.

## When applied
Executed by developers (`python3 scripts/dev/dogfood_copilot_plugin.py --install`) to test packaged plugins locally.

## Sub-concepts
none

## Part of
dogfood-surface-separation

## Implementation status
clean for script implementation; defects: missing-path, doc-drift on citing ADR-083

## Design notes
Dogfood install bridges the gap between source repository development and customer experience. By copying packaged plugin trees into GitHub Copilot CLI's local installation directory (`~/.copilot/installed-plugins/`), internal developers run the exact artifact shipped to users, catching packaging, routing, and hook execution defects prior to release.
