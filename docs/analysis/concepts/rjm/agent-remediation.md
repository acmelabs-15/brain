---
package: rjm
name: AGENT_REMEDIATION
slug: agent-remediation
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md, sha256: be47542008b1aef449e2366ade2f13b336d8de6f05a426d4234572a8e97a6f7a}
  - {path: .claude/skills/golden-principles/SKILL.md, sha256: a7aaeeabf10383fdbee167c8b0ca013789173907695cae91958202cafcea1e12}
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
  - {path: .claude/skills/taste-lints/scripts/taste_lints.py, sha256: 0291a0a69d6836830ca04174c8ddbfa2e15727b2775bdcace843df1e21162f80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# AGENT_REMEDIATION

## Definition — verbatim
> "2. Review AGENT_REMEDIATION blocks in output" — .claude/skills/golden-principles/SKILL.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md | 67 | used here | Notes that golden principles findings include an AGENT_REMEDIATION block providing exact fix instructions. |
| .claude/skills/golden-principles/SKILL.md | 52 | defined here | Process step instructing agents to review AGENT_REMEDIATION blocks in scanner output. |
| .claude/skills/taste-lints/scripts/taste_lints.py | 568 | defined here | Formats AGENT_REMEDIATION message block detailing options for resolving file size overages. |
| .claude/skills/taste-lints/SKILL.md | 70 | defined here | Process step instructing agents to review AGENT_REMEDIATION blocks emitted by taste_lints.py. |

## Consumes
Lint or principle scanner failure findings.

## Produces
Structured, machine-readable instructions guiding an autonomous agent on how to resolve the detected violation.

## When applied
Emitted in stdout when scan_principles.py or taste_lints.py flags a compliance violation.

## Sub-concepts
none

## Part of
golden-principles

## Implementation status
defects: unfailable-gate, other, doc-drift

## Design notes
A structured error output pattern in rjm linters and scanners (golden-principles, taste-lints) specifically tailored for agent consumers. When a rule is violated, the tool emits a dedicated AGENT_REMEDIATION block detailing exact options, target thresholds, and fix commands so an autonomous agent can understand and remediate the issue without human intervention.
