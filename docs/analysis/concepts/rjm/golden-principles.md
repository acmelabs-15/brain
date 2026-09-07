---
package: rjm
name: Golden principles
slug: golden-principles
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md, sha256: e828ecf0ae117cb6cce4e44b70d490dee5da7418f2129f6801e9f6e9f9513d71}
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md, sha256: be47542008b1aef449e2366ade2f13b336d8de6f05a426d4234572a8e97a6f7a}
  - {path: .claude/skills/golden-principles/SKILL.md, sha256: a7aaeeabf10383fdbee167c8b0ca013789173907695cae91958202cafcea1e12}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Golden principles

## Definition — verbatim
> "Mechanical enforcement of `.agents/governance/golden-principles.md`: rules `script-language`, `skill-frontmatter`, `agent-definition`, `yaml-logic`, `actions-pinned`." — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md | 54 | defined here | Section heading defining the mechanical golden principles diagnostic instrument. |
| .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md | 29 | used here | Instrument index row mapping golden principles to scanning GP-001 through GP-005 mechanical rules. |
| .claude/skills/golden-principles/SKILL.md | 8 | defined here | Title heading of the golden-principles skill enforcing GP-001 through GP-008. |
| .claude/skills/review/SKILL.md | 4 | used here | Cited in review skill description as a specialized check selected during deep reviews. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 293 | used here | Step 7 invokes golden-principles to scan spec design proposals for SOLID, KISS, DRY, and YAGNI violations. |
| scripts/eval/eval-knowledge-integration.py | 142 | used here | Evaluation prompt suite test category verifying agent comprehension of golden principles. |

## Consumes
Repository scripts, skill frontmatter, agent definitions, workflows, and proposed specifications.

## Produces
Machine-enforced compliance verdicts and structured AGENT_REMEDIATION instructions.

## When applied
Executed during PR preparation, analyst spec reviews, and review pipelines to enforce foundational architectural rules GP-001 through GP-008.

## Sub-concepts
agent-remediation

## Part of
quality-gates

## Implementation status
defects: unfailable-gate, other, doc-drift, missing-path

## Design notes
A suite of mechanically enforced architectural standards (GP-001 through GP-008) in rjm governing script language choices, frontmatter syntax, agent structure, YAML logic, and pinned GitHub Actions. Rather than relying on human vigilance or subjective reviews, golden-principles scans code mechanically and provides actionable remediation blocks that autonomous agents can directly consume and fix.
