---
package: rjm
name: Ambient configuration
slug: ambient-configuration
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Ambient configuration

## Definition — verbatim
> "domain code reads environment variables, calls `os.getenv`, or reaches into a global settings object. Pass configuration as plain values from the bootstrap." — .claude/skills/software-engineering-library/references/clean-architecture.md:148

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 148 | defined here | Architectural anti-pattern defined in review guidance prohibiting domain modules from reading global environment state. |

## Consumes
Global environment variables, system settings objects, bootstrap dependency configuration.

## Produces
Hidden dependency finding and remediation converting ambient lookups to explicit parameter injection.

## When applied
When domain logic or use cases attempt to read global state, environment variables, or singleton configuration stores directly.

## Sub-concepts
none

## Part of
clean-architecture

## Implementation status
clean

## Design notes
Ambient configuration identifies an anti-pattern where business logic accesses environmental variables or singleton config instances directly rather than receiving explicit parameters. In rjm, ambient access obscures module requirements and hampers deterministic automated testing; all environmental configuration must be resolved at the application bootstrap seam and passed downward as plain values.
