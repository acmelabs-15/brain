---
package: rjm
name: Explicit linking
slug: explicit-linking
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Explicit linking

## Definition — verbatim
> "Explicit linking**: Connections with context (why linked, not just that linked)" — .agents/architecture/ADR-007-memory-first-architecture.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 67 | used here | Specified as a Zettelkasten principle requiring connection context explaining the rationale for linking. |

## Consumes
Pairwise memory notes and contextual explanations of their relationship.

## Produces
Documented hyperlinks or relational metadata providing reasoning for the association between notes.

## When applied
When connecting related memories, ADRs, or skill guidelines during memory creation and retrospective consolidation.

## Sub-concepts
none

## Part of
zettelkasten-method

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The practice of establishing associative links between memory notes accompanied by explicit justification describing why the connection exists. Providing relation context transforms raw links into meaningful semantic paths that guide agent reasoning during knowledge graph navigation.
