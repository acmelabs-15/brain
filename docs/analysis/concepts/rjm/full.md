---
package: rjm
name: full
slug: full
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codeql-scan/SKILL.md, sha256: 8a6c6ef93c8eec0a5ec66fa0c367185ac6f166ca9f3bdfc9d2e8f6daae3ae0d6}
  - {path: .claude/skills/context-optimizer/references/rule-audit-procedure.md, sha256: 410c727ad2802a3cd5dd5d32009daf60016a6b3eb02947b0bd0693d068007b4b}
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
  - {path: .claude/skills/review/references/observability.md, sha256: 6983df4d518ec2dc87e6bd546c4e7850acb7e9fbcc9644305773239ade46c4ff}
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# full

## Definition — verbatim
> "| `full` | First scan, major changes, pre-PR validation | 30-60s | SARIF + Console |" — .claude/skills/codeql-scan/SKILL.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codeql-scan/SKILL.md | 52 | defined here | Operation mode running comprehensive security scans on first scan, major changes, or pre-PR validation. |
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 146 | used here | Scope tier in rule audit evaluation testing whether the whole rule body adds value over condensed forms. |
| .claude/skills/review/references/decision-rigor.md | 18 | used here | Review mode where the complete diff is present and full verdicts (PASS, WARN, CRITICAL_FAIL) are available. |
| .claude/skills/review/references/devops.md | 18 | used here | DevOps review mode evaluating complete diffs with full verdict levels. |
| .claude/skills/review/references/observability.md | 18 | used here | Observability review mode evaluating complete diffs with full verdict levels. |
| .claude/skills/review/references/qa.md | 18 | used here | QA review mode evaluating complete diffs with full verdict levels. |
| scripts/eval/eval-rule-activation.py | 11 | defined here | Evaluation mode placing the entire rule body or router plus reference body into system prompt as a diagnostic ceiling. |
| scripts/eval/README.md | 209 | defined here | Documented evaluation mode where the entire rule body is loaded as a diagnostic ceiling. |

## Consumes
Complete repository diffs, full rule bodies, or un-cached target source trees.

## Produces
Exhaustive scan reports (SARIF + Console), comprehensive review verdicts (PASS, WARN, CRITICAL_FAIL), or diagnostic activation benchmarks.

## When applied
Applied during initial validation passes, major changes, pre-PR security gates, or baseline ceiling evaluations.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A cross-cutting execution tier in rjm designating comprehensive, un-abridged processing. Across security scanning, peer review, and rule activation evaluation, full trades execution time and context tokens for complete coverage and unconstrained verification rigor.
