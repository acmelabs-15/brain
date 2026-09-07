---
package: matt
name: vibe-coded
slug: vibe-coded
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# vibe-coded

## Definition — verbatim
(used, not defined)

> "Run it on a large, unstructured or [vibe-coded](https://www.aihero.dev/ai-coding-dictionary/vibe-coding) repo to find out what shape it is actually in." — docs/engineering/improve-codebase-architecture.md:19

## Also called — verbatim
vibe-coding — docs/engineering/improve-codebase-architecture.md:19

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/improve-codebase-architecture.md | 19 | used here | Recommends running architectural surveys on vibe-coded codebases to discover their actual structural shape. |
| external/improve-codebase-architecture.md | 31 | used here | Notes brownfield audits of unstructured or vibe-coded repositories as a prime use case. |

## Consumes
none

## Produces
none

## When applied
Characterizes target codebases requiring systematic architectural discovery and stabilization.

## Sub-concepts
none

## Part of
ai-coding-dictionary

## Implementation status
clean

## Design notes
Vibe-coded describes repositories assembled rapidly with AI assistance without deliberate architectural planning, explicit boundaries, or disciplined testing seams. Matt's toolkit provides diagnostic skills (like improve-codebase-architecture) to discover what shape such codebases are actually in.
