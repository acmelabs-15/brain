---
package: rjm
name: COPILOT_PLUGIN_ROOT
slug: copilot-plugin-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md, sha256: 448e6a220e09ab02d59769c840894e604dafd9fd851ed977d8e4ed1139cc1c11}
  - {path: .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md, sha256: 2e49561b59500f4a4b6d417dfc94da905bdb2eb57a996e3070193904150cd40d}
  - {path: .claude/skills/threat-modeling/scripts/validate_threat_model.py, sha256: 2df216789ee2fa0e552450372de422efd2bda8e7dc1f6f8a4e386e05ec3d86b9}
  - {path: scripts/ci/test_installed_plugin_hooks.py, sha256: 7c14da017765e6ea5df1f3cdac71f1203ffb258520dc2b35b8a50407a2ebf160}
  - {path: scripts/validation/skill_md_exec_portability_baseline.json, sha256: 443a380bdae502462b837dd841290985f9279faaab5d56132e2af43e842bdf61}
  - {path: scripts/validation/validate_hook_anchoring.py, sha256: 0ffb67131b3c2a02efe52fdae23e3d439235a2be9c07ee4e95e44a4acbce99f8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# COPILOT_PLUGIN_ROOT

## Definition — verbatim
(used, not defined)

> "`COPILOT_PLUGIN_ROOT` by analogy to `CLAUDE_PLUGIN_ROOT` and shipped it" — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:143

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 143 | used here | Incident narrative noting historical assumption and subsequent empirical verification of the variable |
| .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md | 66 | used here | Discussed in hook registration path resolution rules for dogfood plugins |
| .claude/skills/threat-modeling/scripts/validate_threat_model.py | 16 | used here | Fallback environment variable read to determine plugin root directory in script |
| scripts/ci/test_installed_plugin_hooks.py | 111 | used here | Cleared from environment in integration tests to ensure isolation |
| scripts/validation/skill_md_exec_portability_baseline.json | 2 | used here | Referenced in executable portability baseline migration instructions |
| scripts/validation/validate_hook_anchoring.py | 14 | used here | Target environment variable checked by hook anchoring validation gate |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-path, script-bug

## Design notes
COPILOT_PLUGIN_ROOT is the environment variable exported by GitHub Copilot CLI pointing to the root directory of an installed plugin; categorized as name-only per D-023.
