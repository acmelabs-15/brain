---
package: rjm
name: Low Freedom
slug: low-freedom
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/degrees-of-freedom.md, sha256: 3d5311e2c2241676e4ae91d497de9e930061f02a45127c14560cb12cb2f9b99c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Low Freedom

## Definition — verbatim
> "### Low Freedom (Exact Scripts or Commands)" — .claude/skills/skillforge/references/degrees-of-freedom.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/degrees-of-freedom.md | 56 | defined here | Defines the low freedom level using exact scripts or commands for fragile and deterministic operations. |

## Consumes
Fragile operations, validation scripts, deployment sequences, or deterministic verification rules.

## Produces
Deterministic, rigid command executions and script-driven verification gates with zero deviation.

## When applied
Applied during validation gates, script invocations, deployment steps, and state mutations where failure has high cost.

## Sub-concepts
none

## Part of
degrees-of-freedom

## Implementation status
clean

## Design notes
Low Freedom constrains model execution to exact commands and deterministic scripts with zero latitude. It safeguards fragile operations like destructive mutations, deployment actions, and validation gates from unpredictable hallucination.
