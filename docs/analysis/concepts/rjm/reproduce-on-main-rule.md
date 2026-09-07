---
package: rjm
name: Reproduce-on-main rule
slug: reproduce-on-main-rule
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md, sha256: 56a5414b5d3dd24132335dade19bf3a3294921a141558e38b8c1069f345a6e82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Reproduce-on-main rule

## Definition — verbatim
(used, not defined)

> "Reproduce-on-main rule (PR #1361)" — .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md | 20 | defines | Cited in the provenance table referencing Serena memory ci-infrastructure-observations.md:8 established during PR #1361. |

## Consumes
Continuous integration failure reports encountered on active pull request branches.

## Produces
Triage determination establishing whether a failure is a pre-existing trunk defect or caused by branch modifications.

## When applied
Immediately upon encountering any CI test failure on a pull request branch before debugging PR diff code.

## Sub-concepts
reproduce-on-main-discriminator

## Part of
empirical-probe-toolkit

## Implementation status
defects: doc-drift

## Design notes
Originating from PR #1361, the reproduce-on-main rule dictates that whenever a CI job fails on a pull request, the developer must first verify whether the same failure reproduces on the main branch before spending time investigating branch changes. This prevents misattributing pre-existing trunk defects or external infrastructure flakes to innocent PR code.
