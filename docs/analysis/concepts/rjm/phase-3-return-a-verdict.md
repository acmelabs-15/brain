---
package: rjm
name: "Phase 3: Return a Verdict"
slug: phase-3-return-a-verdict
kind: phase
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-review/SKILL.md, sha256: b57012000d003bb310303174bac1019963d415d8f7718b8e2fc51e267105b438}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 3: Return a Verdict

## Definition — verbatim
> "### Phase 3: Return a Verdict" — .claude/skills/security-review/SKILL.md:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-review/SKILL.md | 79 | defined here | Final phase of security review mapping findings to a single definitive verdict (IDENTIFY, OK, or ESCALATE) based on reachability and unmitigated risk. |

## Consumes
Threat model findings, risk scores, and reachability assessment from Phase 2.

## Produces
A final single-word verdict token (IDENTIFY, OK, or ESCALATE) accompanied by concise remediation guidance or missing artifact specifications.

## When applied
Executed as the conclusion of every security review to emit the terminal gate verdict.

## Sub-concepts
verdict-taxonomy

## Part of
security-review

## Implementation status
clean

## Design notes
The terminal decision phase of the security-review lifecycle. Phase 3 translates threat modeling into an actionable, unambiguous verdict token suitable for automated evaluation and orchestrator routing, enforcing reachability checks so incomplete diffs escalate rather than receive guessed verdicts.
