---
package: rjm
name: Decision: Script vs No Script
slug: decision-script-vs-no-script
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/phase1-analysis-deep-dive.md, sha256: 242427fcc7271d76c15e9d96a0388cdb21f1dc97ee092f69c1bc77685887235f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Decision: Script vs No Script

## Definition — verbatim
> "## Decision: Script vs No Script" — .claude/skills/skillforge/references/phase1-analysis-deep-dive.md:131

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase1-analysis-deep-dive.md | 131 | defined here | Section heading and decision table defining criteria for creating or skipping automation scripts. |

## Consumes
Candidate skill operations, determinism requirements, validation needs, and external tool integration points.

## Produces
A formal decision whether to implement an operation as a script or keep it as Claude reasoning.

## When applied
Applied during Phase 1 automation analysis to prevent script over-engineering.

## Sub-concepts
none

## Part of
automation-analysis

## Implementation status
clean

## Design notes
Decision: Script vs No Script establishes a disciplined trade-off rubric between deterministic code and model reasoning. In rjm, scripts are created only when operations are repeatable, verifiable, and stateful, preventing redundant code when model reasoning is sufficient.
