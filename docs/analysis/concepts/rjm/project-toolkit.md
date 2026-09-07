---
package: rjm
name: project-toolkit
slug: project-toolkit
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-072-jtbd-plugin-architecture.md, sha256: dd3585a127093a7612362aaf1737c13379ef32d464af6f14b6151f87364c8052}
  - {path: .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md, sha256: 2e49561b59500f4a4b6d417dfc94da905bdb2eb57a996e3070193904150cd40d}
  - {path: .agents/architecture/ADR-097-zero-tool-use-hooks.md, sha256: 44727c50e7577d6c7e139cb121d0118d94b16ace6b70725c20018d565ad98945}
  - {path: .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md, sha256: 3b68e11d9db7b25daccc5b46f4c2ec9ee5595e1d9161815396d0217d5050a76f}
  - {path: scripts/dev/dogfood_copilot_plugin.py, sha256: c9070ffbcff5d39290ffdfe5932104942ab93407904dc5215c89c2fa78f2c98c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# project-toolkit

## Definition — verbatim
> "| `project-toolkit` | All of the above | meta-plugin that DEPENDS ON the above, retained for one-install convenience |" — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:89

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-072-jtbd-plugin-architecture.md | 89 | defined here | Defined in taxonomy table as a meta-plugin depending on modular plugins for one-install convenience |
| .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md | 58 | used here | Cited regarding marketplace distribution configuration from .claude root |
| .agents/architecture/ADR-097-zero-tool-use-hooks.md | 89 | used here | Cited regarding hook surface shipping locations |
| .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md | 13 | used here | Documented as affected plugin during the PR #1773 manifest schema outage |
| scripts/dev/dogfood_copilot_plugin.py | 12 | used here | Script docstring noting overlay of development directory over installed project-toolkit plugin |

## Consumes
dev-lifecycle, agent-team, and supporting plugin modules.

## Produces
A comprehensive meta-plugin providing all development tools in a single installation.

## When applied
Installed by users seeking the complete repository toolkit with unified dependency management.

## Sub-concepts
dev-lifecycle, agent-team

## Part of
jtbd-based-plugin-architecture

## Implementation status
defects: doc-drift, missing-path

## Design notes
project-toolkit is an umbrella meta-plugin in rjm that aggregates and depends on the modular JTBD plugins (`dev-lifecycle`, `agent-team`), preserving single-command installation convenience while maintaining underlying modular architectural boundaries.
