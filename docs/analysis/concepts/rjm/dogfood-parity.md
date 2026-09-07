---
package: rjm
name: dogfood parity
slug: dogfood-parity
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md, sha256: 2e49561b59500f4a4b6d417dfc94da905bdb2eb57a996e3070193904150cd40d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# dogfood parity

## Definition — verbatim
> "On Claude, the plugin we run is the plugin we ship. Full dogfood parity." — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md | 59 | defined here | Architectural principle that internal engineering teams run the exact packaged plugins shipped to users. |

## Consumes
Packaged plugin artifacts and developer session runner configurations.

## Produces
Elimination of drift between internal engineering runtime environments and public customer releases.

## When applied
Evaluated when designing harness configurations and local plugin installation mechanisms.

## Sub-concepts
none

## Part of
dogfood-surface-separation

## Implementation status
defects: missing-path, doc-drift

## Design notes
Dogfood parity embodies the principle that engineers developing a tool must consume the exact artifact shipped to end users. By achieving dogfood parity across both Claude Code and GitHub Copilot, internal usage naturally exercises packaging paths, hook dispatchers, and instruction bindings, surfacing distribution flaws immediately.
