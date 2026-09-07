---
package: matt
name: multi-session planning
slug: multi-session-planning
kind: technique
package_phase: matt:shaping
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# multi-session planning

## Definition — verbatim
> "The wayfinder split comes down to session count: <code class="ah-code-inline">/grill-with-docs</code> for single-session planning, <code class="ah-code-inline">/wayfinder</code> for multi-session planning." — external/grill-with-docs.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/grill-with-docs.md | 31 | defined here | Defines /wayfinder as the primary tool for multi-session planning across large architectural scopes. |

## Consumes
Broad, ambiguous, or large-scale initiatives spanning multiple domains or sessions.

## Produces
An interconnected dependency network of scoped decision tickets and exploratory tasks.

## When applied
When an architectural initiative is too large or complex to resolve in a single conversation window.

## Sub-concepts
none

## Part of
wayfinder

## Implementation status
defects: orphan, doc-drift

## Design notes
Multi-session planning is an architectural strategy designed to combat context window exhaustion on large efforts. Instead of attempting to settle all details at once, it maps the problem into a structured graph of decision tickets that can be tackled across separate, focused sessions, preventing context degradation.
