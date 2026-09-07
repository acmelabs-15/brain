---
package: rjm
name: Lefthook
slug: lefthook
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-033-routing-level-enforcement-gates.md, sha256: 0b62580ef09da6d1986775cd9119f65f6e379d09e69716a0591c743fb81946c1}
  - {path: .agents/architecture/ADR-036-two-source-agent-template-architecture.md, sha256: b3e971d5b084d026cc3d84d44c0a28f05a39b97de272200ba3f3ef611343e274}
  - {path: .agents/architecture/ADR-054-local-security-scanning.md, sha256: 5c14b625368f85810129fb4ebdbe8cb56fa59fa8c8c912e8b21e41f6d1016b97}
  - {path: .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md, sha256: 9c9d265c58a594d301eccfdd19ae672962b14346fafec48e28c327e3ce1fbf1c}
  - {path: .claude/skills/ai-agents-change-control/references/gate-ladder.md, sha256: b22eb897c2009931a8bf5edb70e02644174f0bf5d79605ada991fbd4b2a765d8}
  - {path: .claude/skills/ai-agents-config-catalog/SKILL.md, sha256: fed89f32f1de6d65bf43c3fb654fb87b277603f2714c917bd36f52b15ba4a7fc}
  - {path: .claude/skills/security-detection/SKILL.md, sha256: d30a2af5f4760055052ffa9f61d5f440df2538d1d34761b0367dd6b48d33ec9b}
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
  - {path: docs/technical-guardrails.md, sha256: 16099b0af1bf37a012414b8430666217cbbc6e88c05a45ffc3c2e3f5d14b900d}
  - {path: scripts/validation/check_placeholder_identity.py, sha256: b226e1a01102b85939b491881b102f5b978fd226c21b697a0b89c8ea69506383}
  - {path: scripts/validation/git_hook_policy.py, sha256: 43137253ce418f1bb7e76d0eeddf685cbc9041c84c49e2b38395d0605bdf5ada}
  - {path: scripts/validation/push_ref_staleness.py, sha256: 3fcaf0d51323fffbfb8addbad5c47d5bd9a6532d453c13f4bb289e2ef82987d5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Lefthook

## Definition — verbatim
(used, not defined)

> "Lefthook is the sole Git hook manager." — .claude/skills/ai-agents-config-catalog/SKILL.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-033-routing-level-enforcement-gates.md | 488 | used here | Identifies Lefthook as the runner executing session-policy and retrospective-policy pre-commit gates. |
| .agents/architecture/ADR-036-two-source-agent-template-architecture.md | 154 | used here | Explains Lefthook's role in running agent code generation and staging jobs prior to commit. |
| .agents/architecture/ADR-054-local-security-scanning.md | 24 | used here | Distinguishes between manual skill scanning and Semgrep security checks executed via Lefthook pre-push. |
| .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md | 37 | used here | Cites Lefthook as establishing the pre-commit gate tier and execution budget. |
| .claude/skills/ai-agents-change-control/references/gate-ladder.md | 14 | used here | Places Lefthook at Layer 2 of the gate ladder running named pre-commit validators on staged files. |
| .claude/skills/ai-agents-config-catalog/SKILL.md | 42 | used here | Designates Lefthook as the sole Git hook manager configured by lefthook.yml. |
| .claude/skills/security-detection/SKILL.md | 111 | used here | Provides instructions for registering security detection validator jobs within lefthook.yml. |
| CONTRIBUTING.md | 548 | used here | Explains Lefthook hook installation shims and worktree troubleshooting procedures. |
| docs/technical-guardrails.md | 19 | used here | Specifies Lefthook pre-commit filtering and validator script execution on staged files. |
| scripts/validation/check_placeholder_identity.py | 164 | used here | References the CLI validator invoked by the Lefthook pre-push test job. |
| scripts/validation/git_hook_policy.py | 4 | used here | Validates narrow Git policies that Lefthook cannot express declaratively. |
| scripts/validation/push_ref_staleness.py | 4 | used here | Notes the Lefthook pre-push execution window during which remote tracking refs can drift. |

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
defects: cross-file-contradiction, doc-drift, internal-contradiction, missing-path, orphan

## Design notes
Lefthook is an external Git hook manager CLI tool and configuration runner rather than an autonomous agent lifecycle concept, classified as name-only per D-023.
