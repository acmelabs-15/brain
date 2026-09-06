---
package: addy
name: Honesty in Review
slug: honesty-in-review
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Honesty in Review

## Definition — verbatim
> "When reviewing code — whether written by you, another agent, or a human:" — skills/code-review-and-quality/SKILL.md:269-271

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/code-review-and-quality/SKILL.md | 269 | defined here | Establishes anti-sycophancy and rigorous review conduct rules for agents and human reviewers. |

## Consumes
Code changes submitted for review across human, agent, and self-authored work.

## Produces
Candid, evidence-backed critique that quantifies production risks, rejects rubber-stamping, and focuses on code rather than personal attributes.

## When applied
During all code review evaluations regardless of who authored the changes.

## Sub-concepts
none

## Part of
code-review-and-quality

## Implementation status
clean

## Design notes
An ethical and procedural standard guarding against reviewer sycophancy, rubber-stamping, or issue-softening, mandating that reviewers speak candidly about technical flaws, quantify real failure modes, and gracefully defer when authors hold superior context.
