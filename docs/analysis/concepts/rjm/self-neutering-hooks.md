---
package: rjm
name: Self-neutering hooks
slug: self-neutering-hooks
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

# Self-neutering hooks

## Definition — verbatim
> "**Self-neutering hooks are banned from the vendored surface.**" — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:104

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-084-vendored-hook-roi-bar.md | 104 | defined here | Defined as Rule 4 of the vendored-hook ROI standard banning hooks that no-op in external consumer repositories. |

## Consumes
Hook registration manifests and repository execution context inspection.

## Produces
Enforcement decisions excluding or relocating internal repository-specific hooks away from distributed plugin surfaces.

## When applied
Applied during hook implementation and plugin packaging to prevent shipping hooks that execute as no-ops in consumer repositories.

## Sub-concepts
none

## Part of
vendored-hook-roi-bar

## Implementation status
defects: doc-drift

## Design notes
Self-neutering hooks designate an architectural anti-pattern in rjm where internal development protocol hooks were distributed to plugin consumers but immediately no-oped via origin checks. Banning them ensures that distributed plugins contain only code that delivers functional value in consumer repositories.
