---
package: matt
name: map
slug: map
kind: artifact
package_phase: matt:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/to-spec.md, sha256: 47dbcde3e8ba381dc6650206bf36c64336c91f2d9de86ab1898355155081fe5a}
  - {path: docs/engineering/wayfinder.md, sha256: 5e186ef2b90a77ccf7b48ff7c72bbc97fc5c2ba0abe316b91fefa206cb18430e}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md, sha256: afd6852a80185217bd28aa5cbe456bef1e85be25be7bd1fba382d5b8ee428325}
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md, sha256: ea175f73d193b3f55819c0ed9bbccf6ee0e70ad8f928e3d7607596c53380acd6}
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md, sha256: 7dcda20a2eb4bdc89b95d1143423c0691309921cadae3132e6424f371030506e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# map

## Definition — verbatim
> "charts it as a shared **map** of **decision tickets** on your issue tracker, then resolves them one at a time until the way is clear." — docs/engineering/wayfinder.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/to-spec.md | 48 | used here | Explains that a cleared wayfinder map should be collapsed into a spec via to-spec before implementation. |
| docs/engineering/wayfinder.md | 3 | defined here | Defines the map as a shared structure of decision tickets charted on the issue tracker. |
| external/implement.md | 74 | used here | Mentions wayfinder decision maps when contrasting implementation tickets with planning artifacts. |
| external/wayfinder.md | 25 | defined here | External catalog definition of charting large efforts as shared maps of decision tickets. |
| skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md | 38 | used here | Documents how GitHub issues represent wayfinder decision maps via issue dependencies. |
| skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md | 39 | used here | Documents how GitLab issue links represent wayfinder decision maps. |
| skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md | 23 | used here | Documents local markdown issue storage for wayfinder decision maps under .scratch/. |

## Consumes
An ambiguous, large-scale goal or destination that exceeds the scope of a single context window.

## Produces
A directed graph of decision tickets on the issue tracker tracking questions, assumptions, and dependencies.

## When applied
Triggered via `/wayfinder` when embarking on a greenfield project or multi-session initiative where the route to the goal is unclear.

## Sub-concepts
none

## Part of
wayfinder

## Implementation status
clean

## Design notes
In Matt's engineering workflow, a `map` is a specialized planning artifact produced by `wayfinder`. Rather than breaking down code implementation tasks directly, a map decomposes a complex, uncertain objective into a dependency network of decision tickets. Each node on the map represents an architectural, technical, or product question that must be resolved through exploration or spike sessions. Once the map clears—meaning all prerequisite decisions have settled—the unified path is handed off to `to-spec` and `to-tickets` for execution.
