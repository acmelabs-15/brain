---
package: rjm
name: summary
slug: summary
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
  - {path: .claude/skills/review/references/observability.md, sha256: 6983df4d518ec2dc87e6bd546c4e7850acb7e9fbcc9644305773239ade46c4ff}
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
  - {path: scripts/progress/reporter.py, sha256: 3a09cf686fe7a267467190029851cc0ed3ce5ab9b9f68b573c48a84acb8b2cdb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# summary

## Definition — verbatim
(used, not defined)

> "only a file list or stat-only summary is present" — .claude/skills/review/references/decision-rigor.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/decision-rigor.md | 20 | used here | Enum value in CONTEXT_MODE header indicating diff-size limit exceeded and only stat summary provided. |
| .claude/skills/review/references/devops.md | 20 | used here | Enum value in CONTEXT_MODE header indicating diff-size limit exceeded and only stat summary provided. |
| .claude/skills/review/references/observability.md | 20 | used here | Enum value in CONTEXT_MODE header indicating diff-size limit exceeded and only stat summary provided. |
| .claude/skills/review/references/qa.md | 20 | used here | Enum value in CONTEXT_MODE header indicating diff-size limit exceeded and only stat summary provided. |
| scripts/progress/reporter.py | 161 | used here | Section header printed to sys.stderr summarizing progress steps and duration. |

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
clean

## Design notes
A context mode header enumeration value in review axis prompts and a terminal reporting header in progress/reporter.py, classified as `kind: name-only` per D-023.
