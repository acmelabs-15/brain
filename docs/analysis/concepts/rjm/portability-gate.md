---
package: rjm
name: portability gate
slug: portability-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md, sha256: f4d18d9ff8942cccc310f26dbf6a33f6473a8cf65d03c3e1b681be91d680227e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# portability gate

## Definition — verbatim
> "Each time, the edit reported success. The portability gate caught the third," — .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md | 73 | used here | Gate cited as catching deleted vendor portability markers in documentation. |

## Consumes
Source documentation and skill files containing vendor-specific annotations or portability comments.

## Produces
Validation pass/fail results ensuring external platform dependencies and portability markers remain intact.

## When applied
Applied during pre-PR validation checks to ensure vendor annotations are not inadvertently stripped.

## Sub-concepts
none

## Part of
rule-audit-measurement-discipline

## Implementation status
clean

## Design notes
A verification gate that validates vendor-portability annotations and structural markers across the repository, catching regressions where vendor declarations or platform constraints are accidentally stripped.
