---
package: rjm
name: Verify the Result
slug: verify-the-result
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/vibe-engineering.md, sha256: 74fba64a08fefa107a664143c29dab8e3f4425eea76f9d7cebbc940e4d421f9a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Verify the Result

## Definition — verbatim
> "### 5. Verify the Result" — .claude/skills/context-optimizer/references/vibe-engineering.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/vibe-engineering.md | 31 | defined here | Step 5 of the interaction protocol validating step completion with automated tests, output checks, and error handling. |

## Consumes
Step execution outputs, acceptance criteria, test suites, and expected formats.

## Produces
Verification pass/fail verdict preventing silent behavioral drift.

## When applied
Mandatory gate following execution of each step.

## Sub-concepts
none

## Part of
7-step-agent-interaction-protocol, vibe-engineering

## Implementation status
defects: missing-path

## Design notes
The verification gate in the 7-Step Protocol prohibiting "looks good" assumptions and mandating concrete proofs (tests pass, outputs match format, error cases handled) before declaring a step complete.
