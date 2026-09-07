---
package: rjm
name: lefthook.yml
slug: lefthook-yml
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/metrics/dashboard-template.md, sha256: 645d599ed5100a968188f22d7ccd8e43df7fb8eea23c2b79d608804b1dc17103}
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
  - {path: docs/diagrams/routing-flowchart.md, sha256: feaf09515dfbc306f8b928d4fc541635582a4960670527552415f2118db5bc85}
  - {path: scripts/test_selection/runtime_read_patterns.txt, sha256: 5bab0d48d8906521a1f19e991200ce72507009857733e862a05dbdc91e63c5dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# lefthook.yml

## Definition — verbatim
(used, not defined)
> "Add a named validator job to `lefthook.yml` to run the security scan before" — .claude/skills/security-scan/SKILL.md:173

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/metrics/dashboard-template.md | 99 | used here | Listed in the infrastructure review table as a key configuration file governing Git hook policy. |
| .claude/skills/security-scan/SKILL.md | 173 | used here | Cited as the pre-commit configuration file to register blocking security validation jobs. |
| docs/diagrams/routing-flowchart.md | 196 | used here | Cited as the authoritative Git hook configuration file replacing obsolete custom hook scripts. |
| scripts/test_selection/runtime_read_patterns.txt | 7 | defined here | Listed in test selection patterns as a static configuration file affecting test runtime boundaries. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, orphan, missing-path

## Design notes
lefthook.yml is a Git hook manager configuration file specifying pre-commit and pre-push automation rather than an autonomous software lifecycle concept, classified as name-only per D-023.
