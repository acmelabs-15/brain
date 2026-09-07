---
package: rjm
name: strict monotonicity
slug: strict-monotonicity
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-091-post-merge-version-bot.md, sha256: f9087705e02b6f98efcca48c002b33fe051035ea5db1f6912716c72890b16db8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# strict monotonicity

## Definition — verbatim
> "The post-merge bot guarantees strict monotonicity by reading the current merged version" — .agents/architecture/ADR-091-post-merge-version-bot.md:155

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-091-post-merge-version-bot.md | 155 | defines | Guarantees strictly ascending version progression by incrementing from the authoritative merged state on main. |

## Consumes
Authoritative version state on the main branch.

## Produces
Monotonically increasing patch version (`current_patch + 1`).

## When applied
Applied during version generation upon merging content changes.

## Sub-concepts
none

## Part of
post-merge-bot

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Version ordering invariant ensuring each released version is strictly higher than previous releases, preventing version regressions and caching ambiguities.
