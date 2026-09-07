---
package: rjm
name: Skill size
slug: skill-size
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md, sha256: e828ecf0ae117cb6cce4e44b70d490dee5da7418f2129f6801e9f6e9f9513d71}
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md, sha256: be47542008b1aef449e2366ade2f13b336d8de6f05a426d4234572a8e97a6f7a}
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
  - {path: .claude/skills/taste-lints/scripts/taste_lints.py, sha256: 0291a0a69d6836830ca04174c8ddbfa2e15727b2775bdcace843df1e21162f80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Skill size

## Definition — verbatim
> "- Limits: warn over 300 lines, block over 500. Escape: `size-exception: true` in frontmatter, justification required." — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md | 24 | defined here | Section heading detailing skill size line thresholds, escape hatches, baselines, and CI flags. |
| .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md | 27 | used here | Instrument index row identifying skill size checks against the 300-warn and 500-block line limits. |
| .claude/skills/taste-lints/scripts/taste_lints.py | 34 | defined here | Defines skill-size as one of the four active rules in ALL_RULES. |
| .claude/skills/taste-lints/SKILL.md | 125 | defined here | Lists skill-size among the valid suppression rules in taste-lints. |

## Consumes
SKILL.md files across the repository.

## Produces
Line count and byte metrics with warning (300 lines / 12,288 bytes) and blocking (500 lines / 20,480 bytes) violation reports.

## When applied
Executed during validation sweeps and CI gates (skill_size.py --ci and taste_lints.py).

## Sub-concepts
size-exception

## Part of
quality-gates

## Implementation status
defects: unfailable-gate, other, doc-drift

## Design notes
A critical governance gate in rjm that constrains prompt size for skill definition files. By warning at 300 lines and blocking at 500 lines, it enforces progressive disclosure, compelling authors to extract secondary procedures, reference material, and templates into separate references/ files to keep base skill prompts lean.
