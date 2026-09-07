---
package: matt
name: Config is death
slug: config-is-death
kind: pattern
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Config is death

## Definition — verbatim
> "Config is death" — external/setup-matt-pocock-skills.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/setup-matt-pocock-skills.md | 56 | defined here | Architectural maxim framing the minimalism of setup-matt-pocock-skills and eliminating configuration drift. |

## Consumes
Tooling and setup decisions for repository skills.

## Produces
Minimal configuration files restricted strictly to essential pointers and templates.

## When applied
Applied as a guiding design constraint across all skill setup and environment configurations.

## Sub-concepts
none

## Part of
setup-matt-pocock-skills

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
"Config is death" encapsulates Matt Pocock's core design philosophy against configuration bloat for AI agents. Every configurable parameter, prompt setting, or options file creates friction and surface area for drift between agent expectations and human workflows. Minimizing configuration to essential Git files and tracker conventions ensures resilient, portable agent execution.
