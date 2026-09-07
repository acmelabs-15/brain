---
package: matt
name: Candidate card
slug: candidate-card
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/improve-codebase-architecture/HTML-REPORT.md, sha256: 581e8bb5a521e46bbda8ca7e19b15948bed882187108092ebb90c62513b77528}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Candidate card

## Definition — verbatim
> "## Candidate card" — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:40

> "The diagrams carry the weight. Prose is sparse, plain, and uses the glossary terms (from the `/codebase-design` skill) without ceremony." — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:42

> "Each candidate is one `<article>`:" — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/improve-codebase-architecture/HTML-REPORT.md | 40 | defined here | Defined as an article-based card format presenting an individual architectural improvement candidate. |

## Consumes
Identified architectural refactoring candidates, problem descriptions, proposed solutions, impacted files, and dependency categories.

## Produces
An `<article>` element in the HTML architecture review report presenting an individual candidate refactoring.

## When applied
When presenting architectural candidates within the self-contained HTML review report.

## Sub-concepts
before-after-diagram, adr-callout

## Part of
html-report

## Implementation status
clean

## Design notes
A structured HTML card template that presents an individual architectural refactoring candidate visually and concisely, organizing recommendation strength badges, affected files, side-by-side before/after diagrams, and concise problem/solution/win statements without lengthy prose.
