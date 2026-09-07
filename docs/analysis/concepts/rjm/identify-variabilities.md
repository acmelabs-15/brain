---
package: rjm
name: Identify Variabilities
slug: identify-variabilities
kind: phase
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Identify Variabilities

## Definition — verbatim
> "<name>Identify Variabilities</name>" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:194

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 194 | defined here | Defined as Phase 2 in the CVA skill specification process schema. |

## Consumes
Established commonalities, use case variations, parameter differences, external dependency variations.

## Produces
Structured inventory of variation points, variability dimensions, and difference parameters across use cases.

## When applied
Executed during Phase 2 of CVA immediately following commonality identification.

## Sub-concepts
none

## Part of
cva-analysis

## Implementation status
defects: doc-drift, missing-path

## Design notes
Identify Variabilities is Phase 2 of the CVA execution process defined in SKILL_SPEC.md. It isolates the specific dimensions along which use cases diverge (such as payment methods, protocols, or formats), identifying the extension points where patterns should be introduced. Without this phase, variabilities remain tangled with common logic, obscuring where flexible interfaces and abstractions are genuinely required.
