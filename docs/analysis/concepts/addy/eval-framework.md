---
package: addy
name: eval framework
slug: eval-framework
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/comparison.md, sha256: 652e4df31f4bc1e1d456db768ee15c6cc5fdd6dee754d9dfccffe5ce1eac7194}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# eval framework

## Definition — verbatim
> "an in-repo eval framework that checks the skills actually route and behave." — docs/comparison.md:11

## Also called — verbatim
> "three-tier eval framework" — docs/comparison.md:24

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/comparison.md | 11 | defines | In-repository test and benchmark framework verifying skill routing, triggering, and behavioral compliance |

## Consumes
Skill markdown files, test prompts, expected outputs, and model execution runs.

## Produces
Pass/fail evaluations measuring whether skills activate on correct prompts and avoid rationalization.

## When applied
Run in CI or locally to test skill authoring and prevent behavioral regressions across LLM versions.

## Sub-concepts
none

## Part of
agent-skills

## Implementation status
clean

## Design notes
The eval framework provides automated testing for the skill pack itself, treating skills as software artifacts that require trigger, routing, and behavioral regression testing against model updates.
