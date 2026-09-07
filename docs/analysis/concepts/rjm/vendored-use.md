---
package: rjm
name: Vendored Use
slug: vendored-use
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/SKILL.md, sha256: 14891e17feb0fc88842a48f8d44b570badb38861a40292484adeb6854d22f372}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Vendored Use

## Definition — verbatim
> "Vendored consumers use this skill's bundled references/ sidecars and do not require those repository trees" — .claude/skills/agent-harness-reference/SKILL.md:338

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/SKILL.md | 336 | defines | Section defining portability conventions that decouple vendored skill consumers from upstream maintainer directories. |

## Consumes
Bundled reference sidecars and skill documentation.

## Produces
Self-contained skill distributions that execute without requiring upstream repository structures (`.agents/`, `.serena/`).

## When applied
Applied when packaging and distributing skills for external or vendored repository consumers.

## Sub-concepts
none

## Part of
agent-harness-reference

## Implementation status
defects: doc-drift

## Design notes
Vendored Use is a portability standard ensuring skills remain self-contained when consumed across different repositories. By instructing downstream consumers to rely exclusively on local bundled sidecars rather than upstream project trees, it eliminates fragile external path dependencies.
