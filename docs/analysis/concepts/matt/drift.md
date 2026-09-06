---
package: matt
name: drift
slug: drift
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .out-of-scope/setup-skill-verify-mode.md, sha256: aba793ba7b3457fd75e7c2560ec0e98e75a051ecfc5f91f73f16fc97475919bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# drift

## Definition — verbatim
> "The skill is prompt-driven, so the maintainer can scope it to a verification pass (\"don't rewrite anything, just check my existing files against the current seed templates and report drift\") without needing a separate code path." — .out-of-scope/setup-skill-verify-mode.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .out-of-scope/setup-skill-verify-mode.md | 9 | defined here | Identifies discrepancies that accumulate between generated local files and upstream seed templates over time. |

## Consumes
Local configuration files and current upstream template versions.

## Produces
Identified divergence points requiring reconciliation or updates.

## When applied
When evaluating project configuration health after updating agent skill packages.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Drift characterizes the divergence that occurs when local project configuration artifacts age and decouple from evolving upstream skill capabilities, resolved by re-running setup passes.
