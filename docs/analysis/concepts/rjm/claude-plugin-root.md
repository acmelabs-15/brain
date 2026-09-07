---
package: rjm
name: CLAUDE_PLUGIN_ROOT
slug: claude-plugin-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/claude-code-plugin-marketplaces.md, sha256: 7bf3c4c5147775914422c77a5ab9b7f61a348c3a0584fd947ec2959316ddfd8b}
  - {path: .agents/architecture/ADR-047-plugin-mode-hook-behavior.md, sha256: 3434f27ef9056e9a72836805fcc30dbb43f5447d14e4fe406330014c02503491}
  - {path: .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md, sha256: 448e6a220e09ab02d59769c840894e604dafd9fd851ed977d8e4ed1139cc1c11}
  - {path: .claude/skills/threat-modeling/scripts/validate_threat_model.py, sha256: 2df216789ee2fa0e552450372de422efd2bda8e7dc1f6f8a4e386e05ec3d86b9}
  - {path: scripts/ci/test_installed_plugin_hooks.py, sha256: 7c14da017765e6ea5df1f3cdac71f1203ffb258520dc2b35b8a50407a2ebf160}
  - {path: scripts/hook_utilities/bootstrap.py, sha256: f18044a4ab6383dd647b3616bacd01ae96145cf2a0107cb45b212a45a66279cc}
  - {path: scripts/migrations/req003_inline_plugin_root_bootstrap.py, sha256: 4a43689e9d9d33639adc7633b1d2b64661a05d5f7ff3fa1145306f30718612b3}
  - {path: scripts/validation/skill_md_exec_portability_baseline.json, sha256: 443a380bdae502462b837dd841290985f9279faaab5d56132e2af43e842bdf61}
  - {path: scripts/validation/validate_hook_anchoring.py, sha256: 0ffb67131b3c2a02efe52fdae23e3d439235a2be9c07ee4e95e44a4acbce99f8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CLAUDE_PLUGIN_ROOT

## Definition — verbatim
(used, not defined)

> "Use `${CLAUDE_PLUGIN_ROOT}` to reference files within the plugin installation directory." — .agents/analysis/claude-code-plugin-marketplaces.md:220

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/claude-code-plugin-marketplaces.md | 211 | defined here | Shows hook command paths anchored with `${CLAUDE_PLUGIN_ROOT}` to target plugin cache directories. |
| .agents/architecture/ADR-047-plugin-mode-hook-behavior.md | 30 | used here | Defines runtime environment variable semantics pointing to the installed plugin cache directory. |
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 143 | used here | Recounts historical bug where Copilot plugin root was assumed by analogy to CLAUDE_PLUGIN_ROOT. |
| .claude/skills/threat-modeling/scripts/validate_threat_model.py | 16 | used here | Checks CLAUDE_PLUGIN_ROOT in python script bootstrap to resolve library paths in installed plugin environments. |
| scripts/ci/test_installed_plugin_hooks.py | 112 | used here | Clears CLAUDE_PLUGIN_ROOT during isolation tests for installed plugin hook execution. |
| scripts/hook_utilities/bootstrap.py | 9 | used here | Documents literal CLAUDE_PLUGIN_ROOT environment check required for hook script bootstrap patterns. |
| scripts/migrations/req003_inline_plugin_root_bootstrap.py | 9 | used here | Restores literal CLAUDE_PLUGIN_ROOT inline pattern required by ADR-047 path resolution tests. |
| scripts/validation/skill_md_exec_portability_baseline.json | 2 | used here | Mentions CLAUDE_PLUGIN_ROOT in baseline comment describing portable executable path migrations. |
| scripts/validation/validate_hook_anchoring.py | 12 | used here | Verifies that Claude plugin hook command paths are anchored to ${CLAUDE_PLUGIN_ROOT}. |

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
defects: missing-path, doc-drift

## Design notes
An environment variable set by Claude Code when running an installed plugin, pointing to the cached plugin root directory; it is a platform execution variable rather than an agent lifecycle concept.
