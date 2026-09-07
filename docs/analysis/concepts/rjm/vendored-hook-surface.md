---
package: rjm
name: vendored hook surface
slug: vendored-hook-surface
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-084-vendored-hook-roi-bar.md, sha256: f803b402a803541adf9820344cedaec80e4287c68685834b8cdd175081bdf196}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# vendored hook surface

## Definition — verbatim
(used, not defined)

> "The #3197 ROI review measured the vendored hook surface against that reality and" — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-084-vendored-hook-roi-bar.md | 44 | used here | Collective term for hooks packaged and shipped into consumer repositories via marketplace plugins. |

## Consumes
Packaged plugin manifest definitions (`hooks.json`) and hook scripts.

## Produces
Set of active hooks executing in customer repositories upon agent tool calls.

## When applied
Evaluated when assessing performance overhead and security boundaries of shipped plugins.

## Sub-concepts
none

## Part of
hook-governance

## Implementation status
defects: doc-drift

## Design notes
The vendored hook surface represents the total set of hooks shipped inside marketplace plugins to execute within end-user repositories. Because these hooks run on consumer machines during agent operations, every hook in the vendored surface must provide direct consumer value and justify its execution latency.
