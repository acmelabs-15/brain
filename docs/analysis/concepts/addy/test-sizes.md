---
package: addy
name: "test sizes"
slug: test-sizes
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/test-driven-development.md, sha256: bbfc367718b154ec8a68864f5e0756cb6df62844ab22a8cdf9248789f3f8bf9f}
  - {path: skills/test-driven-development/SKILL.md, sha256: 440fb3c9b76f4f1b0b564dfbaec19d370beab0167a3e2ab048ce59c5a865ecef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# test sizes

## Definition — verbatim
> "### Test Sizes (Resource Model)" — skills/test-driven-development/SKILL.md:163

## Also called — verbatim
Test Sizes (Resource Model) — skills/test-driven-development/SKILL.md:163

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/test-driven-development.md | 5 | used here | Listed as a foundational testing topic alongside the test pyramid and Red-Green-Refactor. |
| skills/test-driven-development/SKILL.md | 163 | defines | Defines the resource model classifying tests into Small (in-process, fast), Medium (localhost I/O), and Large (network/distributed). |

## Consumes
Test suites, execution environment specifications, and resource constraints.

## Produces
Resource-classified test suites with strict boundaries on execution time and external I/O.

## When applied
Used during test authoring in the Build phase to categorize and balance tests by resource consumption.

## Sub-concepts
none

## Part of
test-driven-development

## Implementation status
defects: cross-file-contradiction

## Design notes
A resource-based classification model (Small, Medium, Large) adapted from Google testing practices. It defines test categories by the hardware and network resources they consume rather than ambiguous architectural terminology.
