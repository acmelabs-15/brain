---
package: rjm
name: 5 Whys
slug: 5-whys
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
  - {path: .claude/skills/skillforge/assets/templates/skill-spec-template.xml, sha256: 58a4c3f18d2b7e35138bf1058d787f594d46638756ba61e344553b7ee476e3cc}
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
  - {path: src/claude/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
  - {path: templates/agents/analyst.shared.md, sha256: 6b9742aa1f6e82b0e80d0c3b8897141c9d34f4be457de5c043c6b61a6175743a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# 5 Whys

## Definition — verbatim
(used, not defined)

> "5. **Root cause analysis** (5 Whys if applicable)" — .claude/agents/analyst.md:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/analyst.md | 86 | used here | Specified as the recommended root cause analysis technique in step 5 of investigation methodology. |
| .claude/skills/skillforge/assets/templates/skill-spec-template.xml | 50 | used here | Problem statement template prompting 5 Whys analysis to uncover core operational needs. |
| .claude/skills/skillforge/references/specification-template.md | 334 | used here | Skill specification template recommending 5 Whys for root cause derivation. |
| src/claude/analyst.md | 86 | used here | Source copy specifying 5 Whys for root cause analysis in investigations. |
| templates/agents/analyst.shared.md | 101 | used here | Shared template specifying 5 Whys for root cause analysis across platforms. |

## Consumes
Identified defects, incident symptoms, or problem statements requiring root cause discovery.

## Produces
A causal chain tracing superficial bugs to fundamental design, process, or architectural issues.

## When applied
Applied during incident analysis and bug investigations when determining systemic root causes.

## Sub-concepts
none

## Part of
investigation-methodology

## Implementation status
clean

## Design notes
5 Whys is an iterative root cause analysis technique utilized by the analyst agent. It prevents superficial bug fixing by recursively asking why a failure occurred until the underlying design, organizational, or procedural root cause is exposed.
