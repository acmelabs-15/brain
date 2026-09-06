---
package: addy
name: doubt-driven-development
slug: doubt-driven-development
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/doubt-driven-development.json, sha256: c92769c979e81afa55f9f937eff6a952e60599792e59d8a38ed8e68d7b7abeba}
  - {path: external/doubt-driven-development.md, sha256: 14ed5d0c377737e6739c290e63818be735de2ce06f3bdff56b14cf7b4271a0fe}
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
  - {path: skills/interview-me/SKILL.md, sha256: 1d94741d10d2c826cd0c191aea3981ee94c8abb27ef2a166f6a372117d06448f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# doubt-driven-development

## Definition — verbatim
> "Doubt-driven development is the discipline of materializing a fresh-context reviewer — biased to **disprove**, not approve — before any non-trivial output stands." — skills/doubt-driven-development/SKILL.md:10

## Also called — verbatim
- "Doubt-Driven Development" — skills/doubt-driven-development/SKILL.md:6

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/doubt-driven-development.json | 2 | used here | Names the evaluated skill in the test case configuration. |
| external/doubt-driven-development.md | 1 | defined here | Web catalog page title defining the skill in the external documentation site. |
| README.md | 253 | used here | Catalogs the skill in the Build phase table of the README. |
| skills/doubt-driven-development/SKILL.md | 2 | defined here | Declares the skill name in the YAML frontmatter. |
| skills/doubt-driven-development/SKILL.md | 6 | defined here | Heading title introducing the skill. |
| skills/interview-me/SKILL.md | 14 | used here | Contrasts interview-me against skills that stress-test a plan after drafting. |

## Consumes
A non-trivial decision, architectural claim, boundary crossing, or unverified invariant along with its contract.

## Produces
An adversarial review prompt (ARTIFACT + CONTRACT), classified review findings (Contract misread, Valid + actionable, Valid trade-off, Noise), reconciled code or explicit trade-offs, and a go or stop verdict.

## When applied
> "Use when correctness matters more than speed, when working in unfamiliar code, when stakes are high (production, security-sensitive logic, irreversible operations), or any time a confident output would be cheaper to verify now than to debug later." — skills/doubt-driven-development/SKILL.md:3

## Sub-concepts
- claim
- extract
- doubt
- reconcile
- stop
- fresh-context-reviewer
- cross-model-escalation
- adversarial-review
- doubt-theater

## Part of
- addy:Build

## Implementation status
clean

## Design notes
Doubt-driven development counteracts LLM confirmation bias and context accumulation drift during long agent sessions. By extracting a minimal artifact and contract without author reasoning and feeding it to an adversarial, fresh-context reviewer instructed to disprove rather than validate, it catches faulty assumptions before code or plans harden into production.
