---
package: matt
name: Call-graph collapse
slug: call-graph-collapse
kind: technique
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

# Call-graph collapse

## Definition — verbatim
> "Before: a tree of function calls rendered as nested boxes. After: the same tree collapsed into one box, with the now-internal calls shown faded inside it." — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/improve-codebase-architecture/HTML-REPORT.md | 90 | defined here | Defined as a diagram pattern depicting a nested function-call tree collapsed into a single deep module with faded internal calls. |

## Consumes
A complex tree of function calls spanning multiple shallow modules.

## Produces
A side-by-side before/after visual showing nested function call trees collapsed into a unified deep module boundary.

## When applied
Used when illustrating refactorings that consolidate scattered function calls into a single cohesive module.

## Sub-concepts
none

## Part of
html-report

## Implementation status
clean

## Design notes
A specialized diagram pattern for HTML architecture reports that illustrates deepening by showing an intricate tree of nested function calls consolidated into a single deep module with internal details faded out.
