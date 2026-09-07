---
package: rjm
name: skill knowledge integration
slug: skill-knowledge-integration
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-suite.py, sha256: 65acc521915f252268c5eefda9c61ced62776d29003d88a7ffd851ec44343290}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# skill knowledge integration

## Definition — verbatim
> "Run skill knowledge integration via eval-knowledge-integration.py." — scripts/eval/eval-suite.py:365

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-suite.py | 365 | defined here | Function docstring defines the skill knowledge integration evaluation technique dispatched via eval-knowledge-integration.py. |

## Consumes
Skill definition directory paths under `.claude/skills/<skill>/` (SKILL.md, references) and evaluation model.

## Produces
Knowledge integration scores comparing skill-enhanced answers against baseline LLM outputs.

## When applied
Triggered whenever skills or their bundled reference materials are created or modified.

## Sub-concepts
none

## Part of
eval-suite

## Implementation status
defects: missing-path

## Design notes
An evaluation technique that measures whether a skill's instructions and reference documents provide measurable improvement over baseline LLM capabilities in answering domain-specific prompts. By proving that the skill earns its token cost, it prevents the proliferation of low-value or redundant skills in the repository catalog.
