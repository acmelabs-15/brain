---
package: rjm
name: Grounded changes
slug: grounded-changes
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/SKILL.md, sha256: 3d8237e4839c2714ee6e7ad4eaa523f285392c5ae35d22c0a7f68bcccf1c7277}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Grounded changes

## Definition — verbatim
> "3. **Grounded changes**: Every modification traces to a specific pattern with documented impact" — .claude/skills/prompt-engineer/SKILL.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/SKILL.md | 19 | defined here | Defined as the third core success criterion of prompt optimization, requiring empirical pattern attribution for every prompt modification. |

## Consumes
Proposed prompt edits and empirical pattern references with documented trigger conditions.

## Produces
Audited prompt modifications with explicit pattern citations and measurable behavioral rationale.

## When applied
> "Use when the user provides a prompt and wants it improved, refined, or reviewed for best practices." — .claude/skills/prompt-engineer/SKILL.md:42

## Sub-concepts
none

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
In prompt-engineer, grounded changes establish empirical discipline by requiring every alteration to link directly to a research-backed prompt pattern and documented trigger condition, preventing speculative rewrites that break working prompt behaviors.
