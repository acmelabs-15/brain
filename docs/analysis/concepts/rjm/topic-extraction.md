---
package: rjm
name: topic extraction
slug: topic-extraction
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/spec.md, sha256: f7da01531eeb6c779e39894ebbf99c076b122fed686f185c99b0306abf65f350}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# topic extraction

## Definition — verbatim
> "#### Step 0.5 topic extraction" — .claude/commands/spec.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/spec.md | 69 | defined here | Step 0.5 deterministic extraction and 5-rule normalization of memory search topics from named entities. |

## Consumes
User answers to Step 0 questions Q3 (system path) and Q4 (wedge description/entities).

## Produces
A normalized list of search topics mapped against `.agents/dictionaries/spec-entity-aliases.json`.

## When applied
Executed in Step 0.5 of `/spec` before invoking the memory search skill and knowledge graph exploration.

## Sub-concepts
none

## Part of
spec

## Implementation status
defects: doc-drift

## Design notes
Topic extraction transforms raw entity names into standardized search tokens through a five-stage normalization pipeline (whitespace trimming, dot/slash stripping, lowercasing, separator collapsing, and dictionary alias replacement). This ensures reliable, reproducible retrieval from long-term memory and knowledge graphs regardless of how an author formatted component names in the initial intake interview.
