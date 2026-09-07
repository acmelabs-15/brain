---
package: rjm
name: Adapters
slug: adapters
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

# Adapters

## Definition — verbatim
> "Adapters are the translation layer. They convert outer formats into shapes the inner layers expect and inner shapes into formats the outer world expects. Examples in this codebase: GitHub skill wrappers, MCP request and response handlers, JSON serializers for session logs, CLI argument parsers, hook payload deserializers." — .claude/skills/software-engineering-library/references/clean-architecture.md:89

## Also called — verbatim
`Interface Adapters` — .claude/skills/software-engineering-library/references/clean-architecture.md:17

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 89 | defined here | Translation components converting outer wire formats into inner domain shapes and vice versa. |

## Consumes
Untrusted external payloads, wire formats, domain objects.

## Produces
Validated domain objects for inner layers, wire format envelopes for outer layers.

## When applied
Applied at every boundary where application data enters from or exits to an external system.

## Sub-concepts
wire-format, to-domain, to-record

## Part of
interface-adapters

## Implementation status
clean

## Design notes
Adapters are the concrete translation components within the Interface Adapters layer that isolate inner domain logic from outer wire formats. In rjm, adapters ensure that tool integrations, GitHub CLI wrappers, and hook scripts validate and map untrusted external data into domain objects before passing them to use cases.
