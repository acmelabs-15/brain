---
package: rjm
name: zero-spawn host-native surfaces
slug: zero-spawn-host-native-surfaces
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

# zero-spawn host-native surfaces

## Definition — verbatim
> "**Prefer zero-spawn host-native surfaces.** When the host provides a declarative surface that achieves the same effect without spawning a process, use it." — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:92-94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-084-vendored-hook-roi-bar.md | 92 | defined here | Defined as Rule 3 of the vendored-hook ROI standard requiring declarative host configurations over process-spawning hooks. |

## Consumes
Host platform configuration capabilities such as declarative allow/deny rules and static prompt rules.

## Produces
Declarative permission configurations that enforce security and behavioral policies with zero process spawn latency.

## When applied
Applied during agent hook design and architectural reviews whenever host-native declarative surfaces can express the required policy.

## Sub-concepts
none

## Part of
vendored-hook-roi-bar

## Implementation status
defects: doc-drift

## Design notes
Zero-spawn host-native surfaces are an architectural design pattern in rjm emphasizing declarative platform configuration over executable hook scripts. By utilizing built-in capabilities like `permissions.allow` and `permissions.deny`, the system enforces policy constraints without incurring child-process invocation overhead on hot tool-execution loops.
