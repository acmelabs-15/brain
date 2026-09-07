---
package: rjm
name: bullshit asymmetry principle
slug: bullshit-asymmetry-principle
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md, sha256: 9b965f79cb3d9306372944d26d89fad405b9479e7515201709191307e45bfa21}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# bullshit asymmetry principle

## Definition — verbatim
> "Also called the bullshit asymmetry principle. A confident, unsupported claim is cheap to write and expensive to disprove." — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md | 15 | defined here | Defined as an alternate name for Brandolini's Law, highlighting that confident unsupported claims favor the producer and exhaust reviewers. |

## Consumes
Assertions, proposals, design claims, reviewer bandwidth.

## Produces
Review burden allocation, rejection of unevidenced claims, shifting burden of proof back to claim author.

## When applied
During verification and challenge steps of decision critique when reviewing unsubstantiated or overly confident assertions.

## Sub-concepts
none

## Part of
decision-critic

## Implementation status
defects: missing-path

## Design notes
The bullshit asymmetry principle (Brandolini's Law) protects engineering review bandwidth by counteracting the asymmetric cost of generating versus refuting unsubstantiated assertions. In architectural debates and code reviews, confident claims are trivial to make but disproportionately expensive to disprove; this principle empowers reviewers to push the burden of proof back onto the author rather than exhausting review resources attempting to disprove baseless assertions.
