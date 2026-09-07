---
package: rjm
name: Recommendation Framework
slug: recommendation-framework
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/SKILL.md, sha256: c921fd24a13d7a23d2a2e48282b613debb43ce77469240480d7d3380be612552}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Recommendation Framework

## Definition — verbatim
> "### Step 6: Recommendation Framework (Quick Reference)" — .claude/skills/programming-advisor/SKILL.md:111

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/SKILL.md | 111 | defined here | Decision rubric guiding whether to recommend internal reuse, existing third-party solutions, or custom vibe coding. |

## Consumes
Internal prior-art search results, external solution evaluation, security classification, and task constraints.

## Produces
Actionable implementation verdict categorizing the path forward as Leverage/Extend, existing solution, or vibe coding.

## When applied
Applied during Step 6 of programming-advisor to synthesize comparative evaluation metrics into a concrete implementation recommendation.

## Sub-concepts
none

## Part of
programming-advisor

## Implementation status
clean

## Design notes
The recommendation framework provides a deterministic heuristic for advising engineers on implementation paths. By prescribing explicit rules—such as internal reuse when >=80% coverage exists, external solutions for security-sensitive capabilities or mature packages, and custom vibe coding only for bespoke business logic—it removes subjective guesswork from technical choices.
