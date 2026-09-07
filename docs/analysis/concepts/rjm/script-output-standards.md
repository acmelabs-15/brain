---
package: rjm
name: Script Output Standards
slug: script-output-standards
kind: checklist
package_phase: rjm:Phase 3: Generation
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Script Output Standards

## Definition — verbatim
> "| Output Type | Format | Convention |" — .claude/skills/skillforge/references/script-integration-framework.md:386

## Also called — verbatim
> "### Script Output Standards" — .claude/skills/skillforge/references/script-integration-framework.md:384

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-integration-framework.md | 384 | defined here | Specifies standard exit codes and stream separation conventions for skill scripts. |

## Consumes
Script execution outcomes and data payloads.

## Produces
Standard exit codes (0, 1, 2, 10), JSON stdout, and stderr log streams.

## When applied
When formatting output and choosing exit codes in any skill script.

## Sub-concepts
none

## Part of
script-integration-framework

## Implementation status
clean

## Design notes
Standardizes stdout for machine-readable JSON data and stderr for progress/diagnostic logs alongside strict exit codes, enabling deterministic script chaining and reliable agent interpretation.
