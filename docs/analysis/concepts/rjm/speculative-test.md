---
package: rjm
name: speculative test
slug: speculative-test
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-step0-gates.md, sha256: 4a8aacb665f1475a6d2da319dcafb8c7cba55d6f65149bdefb6d682f7d1a1bb0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# speculative test

## Definition — verbatim
> "Q5 passes the speculative test." — .claude/skills/spec-generator/references/spec-step0-gates.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-step0-gates.md | 11 | defined here | Operational test ensuring Step 0 Q5 cites empirical evidence such as quotes, logs, metrics, or SHAs. |

## Consumes
Response text provided for Step 0 Q5 (Observation).

## Produces
Pass determination or triggers halt H2 if empirical evidence (quotes, metrics, log entries, file paths, commit SHAs, PR numbers, or named observers) is completely absent.

## When applied
> "Q5 is speculative if all three are absent" — .claude/skills/spec-generator/references/spec-step0-gates.md:58

## Sub-concepts
none

## Part of
step-0-gate-logic

## Implementation status
defects: missing-path, doc-drift

## Design notes
Prevents building features based on ungrounded speculation by requiring Step 0 Q5 to contain verifiable empirical evidence such as direct quotes, log entries, metrics, or commit references.
