---
package: rjm
name: The Yes/No Verification Trap
slug: the-yes-no-verification-trap
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# The Yes/No Verification Trap

## Definition — verbatim
> "Phrasing verification questions as yes/no confirmations." — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:641

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 639 | defined here | Documented as an anti-pattern that triggers sycophantic agreement bias in model verification turns. |

## Consumes
Verification questions phrased as binary confirmations (e.g. "Is it true that...?").

## Produces
False verification passes due to language models agreeing with proposed statements regardless of correctness.

## When applied
Identified when auditing verification questions to enforce open, factual inquiry phrasing.

## Sub-concepts
none

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
A verification anti-pattern where questions are formulated as yes/no confirmations. In rjm prompt engineering, empirical findings demonstrate that models exhibit strong affirmative bias when asked yes/no questions, rendering verification ineffective unless converted to open-ended factual queries.
