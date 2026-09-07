---
package: matt
name: boundary
slug: boundary
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/codebase-design.md, sha256: 2317e07ee6633c335c21ecea689bff5613f74d0233fcec8587991eec43e043d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# boundary

## Definition — verbatim
(used, not defined)
> "bans the loose substitutes (&quot;component&quot;, &quot;service&quot;, &quot;API&quot;, &quot;boundary&quot;)" — external/codebase-design.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/codebase-design.md | 25 | used here | Proscribed terminology banned as an imprecise substitute for seam in codebase-design. |

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
An imprecise software design label proscribed in `codebase-design` in favor of "seam", cataloged as `kind: name-only` per D-023 rather than an active development lifecycle concept.
