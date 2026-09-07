---
package: rjm
name: convergence check
slug: convergence-check
kind: technique
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/critique/ADR-023-debate-log.md, sha256: f199ea3783f0e058dc4704243dd7f91d0f4a44c0437d4bff41bf2731a65f9013}
  - {path: .claude/skills/adr-review/references/agent-prompts.md, sha256: 58a13dd3adc40229b5a77f394c0ffcfc5e20588f166f961bfc00dc877cd6598e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# convergence check

## Definition — verbatim
(used, not defined)

> "2. Re-invoke agents for convergence check (Phase 4)" — .agents/critique/ADR-023-debate-log.md:126

## Also called — verbatim
"ADR Convergence Check" — .claude/skills/adr-review/references/agent-prompts.md:464

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-023-debate-log.md | 126 | defined here | Next step instruction to re-invoke reviewing agents for round 2 validation. |
| .claude/skills/adr-review/references/agent-prompts.md | 464 | defined here | Subagent prompt template for executing round-based ADR convergence checks. |

## Consumes
Revised ADR draft, unresolved issues from prior critique rounds, agent review histories.

## Produces
Subagent verdicts indicating whether previously raised issues are resolved and consensus is achieved.

## When applied
Executed in subsequent review rounds after an ADR has been updated to address critique findings.

## Sub-concepts
none

## Part of
adr-review

## Implementation status
defects: internal-contradiction

## Design notes
A convergence check is a multi-agent review procedure in rjm's ADR review protocol where reviewing specialist agents are re-invoked on a revised decision document to confirm that prior blocking concerns have been resolved and that consensus has converged.
