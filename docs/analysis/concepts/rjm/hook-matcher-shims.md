---
package: rjm
name: Hook Matcher Shims
slug: hook-matcher-shims
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md, sha256: 14474578a6089b011c08d942a1df83bce2ec03802b99f5f91a2b98a3e10555cd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Hook Matcher Shims

## Definition — verbatim
(used, not defined)

> "# ADR-061: Hook Matcher Shims Delegate to Canonical Body" — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md | 12 | defined here | Document title subject describing the generated per-matcher hook wrappers under src/copilot-cli/hooks/ |

## Consumes
Canonical hook implementations, settings matcher patterns, platform event schemas.

## Produces
Individual executable shim scripts per matcher pattern dispatching tool invocations.

## When applied
Applied when generating platform-specific hook dispatchers from canonical event rules.

## Sub-concepts
multi-matcher-shims, delegate-shim

## Part of
ADR-061

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Hook Matcher Shims in rjm are generated wrapper scripts that adapt canonical Claude Code hook scripts for use in Copilot CLI environments. Each shim wraps the hook's main logic with a dispatch header that matches tool names and arguments against specific pattern filters.
