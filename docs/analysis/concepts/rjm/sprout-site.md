---
package: rjm
name: sprout site
slug: sprout-site
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/working-with-legacy-code.md, sha256: c60a6eb46d697b79a4517c521499b3db023b8198e336e3fc74fd340d85aa8467}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# sprout site

## Definition — verbatim
> "The entry point is a sprout site, not a place to grow business logic." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:155

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/working-with-legacy-code.md | 155 | defined here | Defined as an architectural entry point that delegates to underlying services rather than accumulating business logic. |

## Consumes
Thin architectural entry points such as sessions, hooks, or skills that orchestrate behavior.

## Produces
Delegated invocations to underlying services and repositories, preserving thin entry points.

## When applied
Applied when modifying behavior orchestrated by entry points, ensuring new functionality sprouts into underlying services rather than inline code.

## Sub-concepts
sprout-method, sprout-class

## Part of
working-with-legacy-code

## Implementation status
clean

## Design notes
An architectural boundary pattern ensuring that high-level orchestration entry points remain lightweight by acting only as sprout dispatch sites rather than accumulating inline domain logic.
