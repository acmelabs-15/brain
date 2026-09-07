---
package: rjm
name: Manifest-parity gate
slug: manifest-parity-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-079-merge-time-plugin-version-bump.md, sha256: b317b3a12963681bd925bbe44f1233471c97de08730385744caff8aea3b93604}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Manifest-parity gate

## Definition — verbatim
> "2. **Manifest-parity gate** (`build/scripts/check_plugin_manifest_parity.py`). The `.claude` and `src/copilot-cli` manifests MUST carry identical versions." — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-079-merge-time-plugin-version-bump.md | 42 | used here | Verified as CI gate requiring identical version strings between `.claude` and `src/copilot-cli` manifests. |

## Consumes
`.claude/.claude-plugin/plugin.json` and `src/copilot-cli/.claude-plugin/plugin.json` manifest version fields.

## Produces
Pass/fail verification verdict ensuring parity between Claude Code and Copilot CLI plugin manifests.

## When applied
Evaluated during PR CI when changes touch plugin manifests or plugin source directories.

## Sub-concepts
none

## Part of
version-bump-gate

## Implementation status
clean

## Design notes
The Manifest-parity gate enforces version synchronization across the multi-harness distribution of `project-toolkit`. Because `.claude` and `src/copilot-cli` package and deliver the identical plugin to two different host runtimes, version divergence would cause split release states and broken cache-invalidation behavior across harnesses.
