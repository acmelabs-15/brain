---
package: rjm
name: Contradiction With the Spec
slug: contradiction-with-the-spec
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/spec-compliance.md, sha256: 9e50737d1c7146134285d882501c119b417becab5db7e182af64e5c47edc1a7c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Contradiction With the Spec

## Definition — verbatim
> "### 4. Contradiction With the Spec" — .claude/skills/review/references/spec-compliance.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/spec-compliance.md | 84 | defined here | Analysis focus area 4 detecting changes that do the opposite of, or materially diverge from, what an acceptance criterion states. |

## Consumes
Specification constraints, rejected alternatives, and code implementations in the diff.

## Produces
Blocking findings identifying behavioral contradictions or divergence from architectural decisions.

## When applied
Executed during Stage-1 review to catch changes that directly violate specification requirements or use explicitly rejected approaches.

## Sub-concepts
none

## Part of
spec-compliance

## Implementation status
defects: internal-contradiction

## Design notes
An analytical check within rjm's spec review that detects intentional or unintentional contradictions where code behavior directly opposes specification contracts or re-introduces explicitly rejected designs.
