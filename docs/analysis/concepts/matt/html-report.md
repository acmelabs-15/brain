---
package: matt
name: HTML report
slug: html-report
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/improve-codebase-architecture/SKILL.md, sha256: d1ac25511a936ff4250a48dbcefda363837d6bb9321b3cba73df99fa37270a75}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# HTML report

## Definition — verbatim
> "Write a self-contained HTML file to the OS temp directory so nothing lands in the repo." — skills/engineering/improve-codebase-architecture/SKILL.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/improve-codebase-architecture/SKILL.md | 37 | defined here | Defined in step 2 of the architecture improvement process as the format for presenting refactoring candidates visually. |

## Consumes
Codebase exploration results, candidate cards, diagram specifications, and top recommendation rationale.

## Produces
A self-contained HTML file `<tmpdir>/architecture-review-<timestamp>.html` opened in the user's browser.

## When applied
Generated following the organic exploration phase of an architecture review before interface design begins.

## Sub-concepts
candidate-card, adr-callout, mermaid-graph, call-graph-collapse, top-recommendation-section

## Part of
improve-codebase-architecture

## Implementation status
clean

## Design notes
A self-contained, temporary visual deliverable created in the operating system's temp directory using CDN-delivered Tailwind and Mermaid to present architectural refactorings with side-by-side diagrams without polluting repository git history.
