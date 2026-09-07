---
package: rjm
name: FOAK
slug: foak
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# FOAK

## Definition — verbatim
> "First-of-a-Kind for this team" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 16 | defined here | Sixth criterion of the ASR Test indicating a technology, pattern, or approach being introduced for the first time. |

## Consumes
Team engineering experience records, technology stack inventory, proposed novel architecture or framework choices.

## Produces
Novelty risk classification score prompting prototype evaluation and explicit architectural justification in an ADR.

## When applied
Evaluated during initial ASR Test screening whenever introducing an unfamiliar technology, library, or design pattern.

## Sub-concepts
none

## Part of
asr-test

## Implementation status
clean

## Design notes
The sixth criterion of the ASR Test, FOAK (First-of-a-Kind) identifies technologies, frameworks, or architectural styles that the development team has not previously deployed. Because novel approaches carry unpredictable operational risks, steep learning curves, and unforeseen integration complexities, adopting a FOAK solution requires explicit rationale and trade-off analysis in an ADR.
