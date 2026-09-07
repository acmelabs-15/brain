---
package: rjm
name: .agents/memory/episodes/**
slug: agents-memory-episodes
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/test_selection/runtime_read_patterns.txt, sha256: 5bab0d48d8906521a1f19e991200ce72507009857733e862a05dbdc91e63c5dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# .agents/memory/episodes/**

## Definition — verbatim
(used, not defined)

> ".agents/memory/episodes/**" — scripts/test_selection/runtime_read_patterns.txt:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/runtime_read_patterns.txt | 12 | defined here | Pattern entry triggering full-suite test execution when episodic memory files are modified. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`.agents/memory/episodes/**` is a glob path pattern in `scripts/test_selection/runtime_read_patterns.txt` designating episodic memory files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
