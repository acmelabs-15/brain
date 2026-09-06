---
package: matt
name: native blocking edges
slug: native-blocking-edges
kind: technique
package_phase: matt:to-tickets
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# native blocking edges

## Definition — verbatim
> "Publishing prefers the tracker's **native sub-issues** for parent → slice and **native blocking edges** for `Blocked by` where the tracker supports them, keeping the `## Parent` / `## Blocked by` body sections as the fallback." — CHANGELOG.md:185

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 185 | defined here | Establishes native tracker dependency edges for blocking relationships |

## Consumes
Dependency graphs generated during ticket breakdown

## Produces
Tracker-enforced dependency edges that govern ticket execution order

## When applied
When creating tickets in trackers supporting native blocking relationships

## Sub-concepts
none

## Part of
to-tickets

## Implementation status
defects: doc-drift (external/to-tickets.md:58 records issues being created without native blocking edges; issue #513)

## Design notes
Native blocking edges represent prerequisite constraints directly within the issue tracking engine, ensuring that tasks cannot be picked up until their dependencies are completed.
