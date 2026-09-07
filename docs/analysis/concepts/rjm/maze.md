---
package: rjm
name: Maze
slug: maze
kind: pattern
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

# Maze

## Definition — verbatim
> "Topic does not match content; discussion derails" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:116

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 116 | defines | Tabulated under Time Dimension anti-patterns as a document where the topic does not match the content and discussion derails. |

## Consumes
ADR title, declared problem statement, and narrative argumentation body.

## Produces
Structural refactoring guidance refocusing the document strictly on its stated decision topic.

## When applied
Detected during ADR quality evaluation when narrative prose wanders into unrelated architectural topics.

## Sub-concepts
none

## Part of
adr-creation-anti-patterns

## Implementation status
clean

## Design notes
Maze describes an ADR that digresses into winding tangents, peripheral debates, and unrelated implementation details, obscuring the primary decision at hand. In rjm, documents exhibiting the Maze anti-pattern are returned for structural editing, ensuring that the title, problem context, and decision rationale remain tightly aligned and legible.
