---
package: rjm
name: PIV verdict gate
slug: piv-verdict-gate
kind: gate
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-074-security-review-quick-pass-mode.md, sha256: c2b4a02348c862ed3899605ae5d2efbda035194ef3e8e2c32062b67584b82ba4}
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PIV verdict gate

## Definition — verbatim
> "**PIV Verdict Gate**: Orchestrator MUST NOT proceed to PR creation while the security agent returns BLOCKED. APPROVED clears the gate. CONDITIONAL clears the gate only when the verdict cites a follow-up issue number for the remaining MEDIUM findings, per the Completion Trigger Taxonomy." — .claude/agents/security.md:399

## Also called — verbatim
`PIV gate` — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:101-102

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-074-security-review-quick-pass-mode.md | 54 | used here | Cited as blocking PR creation on BLOCKED verdicts and extended to consume QUICK_PASS and budget_exceeded verdicts. |
| .claude/agents/security.md | 399 | defined here | Core definition establishing the orchestrator constraint prohibiting PR creation on BLOCKED verdicts. |
| templates/agents/security.shared.md | 367 | defined here | Canonical shared agent definition of the post-implementation verification verdict gate. |

## Consumes
Post-implementation verification security verdict (APPROVED, CONDITIONAL, BLOCKED, QUICK_PASS, or budget_exceeded).

## Produces
Gate clearance or blocking decision governing progression to pull request creation.

## When applied
Evaluated by the orchestrator following post-implementation verification prior to creating a pull request.

## Sub-concepts
quick-pass, budget-exceeded, needs-deep-review

## Part of
security-review

## Implementation status
defects: missing-path

## Design notes
The PIV verdict gate enforces fail-closed governance between implementation and pull request creation. By requiring positive clearance (APPROVED or QUICK_PASS) and prohibiting PR progression on BLOCKED or budget_exceeded verdicts, it ensures unreviewed or vulnerable code never reaches review branches without explicit override.
