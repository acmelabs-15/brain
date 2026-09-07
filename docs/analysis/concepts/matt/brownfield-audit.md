---
package: matt
name: Brownfield audit
slug: brownfield-audit
kind: pattern
package_phase: matt:Upkeep
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Brownfield audit

## Definition — verbatim
> "Run it on a large, unstructured or <a class=\"decoration-primary/40 underline-offset-4 hover:decoration-primary\" data-state=\"closed\" href=\"/ai-coding-dictionary/vibe-coding\">vibe-coded</a> repo to find out what shape it is actually in." — external/improve-codebase-architecture.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/improve-codebase-architecture.md | 31 | used here | Named as an operating situation for surveying large, unstructured, or legacy repositories to diagnose architectural health. |

## Consumes
A large, unstructured, legacy, or vibe-coded repository.

## Produces
An architectural survey report exposing real boundaries, dependencies, and deepening opportunities across the codebase.

## When applied
"Run it on a large, unstructured or <a class=\"decoration-primary/40 underline-offset-4 hover:decoration-primary\" data-state=\"closed\" href=\"/ai-coding-dictionary/vibe-coding\">vibe-coded</a> repo to find out what shape it is actually in." — external/improve-codebase-architecture.md:31

## Sub-concepts
vibe-coded

## Part of
improve-codebase-architecture

## Implementation status
defects: doc-drift (external/improve-codebase-architecture.md:64), doc-drift (external/improve-codebase-architecture.md:50), missing-path (external/improve-codebase-architecture.md:66), orphan (external/improve-codebase-architecture.md:1)

## Design notes
An architectural assessment pattern used when encountering an unfamiliar, unstructured, or hastily built repository. Running an architectural survey before attempting structural changes reveals existing module boundaries and identifies the most critical areas requiring refactoring.
