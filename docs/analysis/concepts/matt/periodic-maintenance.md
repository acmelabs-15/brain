---
package: matt
name: periodic maintenance
slug: periodic-maintenance
kind: pattern
package_phase: matt:Engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# periodic maintenance

## Definition — verbatim
> "`improve-codebase-architecture` is **periodic maintenance**: run it every few days, outside any chain, to queue up work rather than to do it." — docs/engineering/improve-codebase-architecture.md:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 66 | defined here | Classifies improve-codebase-architecture as periodic maintenance run every few days outside any chain. |
| docs/engineering/improve-codebase-architecture.md | 101 | defined here | Explains that improve-codebase-architecture serves as periodic maintenance to discover and queue refactoring candidates. |
| external/improve-codebase-architecture.md | 77 | defined here | Explains that improve-codebase-architecture serves as periodic maintenance to discover and queue refactoring candidates. |

## Consumes
Existing codebase architecture, module seams, and dependency structures.

## Produces
Prioritized architectural refactoring proposals, candidate cards, and suggested ADRs.

## When applied
Executed periodically (e.g. every few days or weeks) outside active feature delivery chains.

## Sub-concepts
none

## Part of
Where it fits

## Implementation status
defects: other, missing-path, doc-drift, orphan

## Design notes
A workflow role classification for recurring codebase health routines that inspect module depth and seams outside linear feature chains, identifying architectural decay and queuing refactoring candidates for future work.
