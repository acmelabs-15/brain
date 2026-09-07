---
package: rjm
name: BLOCKING
slug: blocking
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-011-session-state-mcp.md, sha256: 1f587e02f76255cdbfcfe6270ec3765a1e843830f3408b5ae5847068f08e02f1}
  - {path: .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md, sha256: ead8316b739c0e6a848e73e870d9f16e13f02da7768edf171c5ac50ac6e90633}
  - {path: .claude/skills/slashcommandcreator/scripts/validate_slash_command.py, sha256: 65b57128a1004037d377cbe88b7a4ac211ef4521f0852493b4d45c841f5e6e73}
  - {path: docs/technical-guardrails.md, sha256: 16099b0af1bf37a012414b8430666217cbbc6e88c05a45ffc3c2e3f5d14b900d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# BLOCKING

## Definition — verbatim
> "Verification-based BLOCKING gates achieve 100% compliance" — .agents/architecture/ADR-011-session-state-mcp.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-011-session-state-mcp.md | 27 | used here | Contrasts verification-based BLOCKING gates against ineffective trust-based compliance rules. |
| .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md | 43 | used here | Refers to the mandatory BLOCKING Serena Initialization step retained in AGENTS.md. |
| .claude/skills/slashcommandcreator/scripts/validate_slash_command.py | 13 | defined here | Specifies exit code 1 when one or more BLOCKING validation violations are found. |
| docs/technical-guardrails.md | 103 | defined here | Categorizes PR description versus git diff validation as a BLOCKING check in the PR validation CI workflow. |

## Consumes
Validation outputs, tool execution logs, or session prerequisites.

## Produces
A pass verdict permitting workflow transition or an immediate failure that halts automated execution.

## When applied
Enforced during session start phases, tool/command validation scripts, and pull request CI validation.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, script-bug

## Design notes
The highest-severity enforcement tier in rjm governance, designating mandatory checks that immediately fail execution and block workflow advancement. Unlike advisory warnings, BLOCKING gates are programmatically enforced to guarantee compliance.
