---
package: matt
name: single-session planning
slug: single-session-planning
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

# single-session planning

## Definition — verbatim
> "The wayfinder split comes down to session count: <code class="ah-code-inline">/grill-with-docs</code> for single-session planning, <code class="ah-code-inline">/wayfinder</code> for multi-session planning." — external/grill-with-docs.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/grill-with-docs.md | 31 | defined here | Contrasts single-session planning using /grill-with-docs against multi-session planning using /wayfinder. |

## Consumes
A well-scoped change or localized architectural problem within an existing repository.

## Produces
Settled domain terms in CONTEXT.md and qualifying architectural decisions in docs/adr/.

## When applied
At the start of a change when the scope fits comfortably within a single conversation session.

## Sub-concepts
none

## Part of
grill-with-docs

## Implementation status
defects: orphan, doc-drift

## Design notes
Single-session planning is an architectural technique for resolving trade-offs and settling terminology in a single conversation. It prioritizes low overhead and rapid convergence, writing newly crystallized domain terms into CONTEXT.md and significant trade-offs into ADRs before passing the settled conversation directly to downstream specification skills.
