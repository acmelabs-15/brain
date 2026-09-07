---
package: matt
name: triage roles
slug: triage-roles
kind: role
package_phase: matt:Triage
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/triage.md, sha256: 7bdab6379baf24a6617db8349b53f332f1837227add23144d61ba9245eb15d14}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: skills/engineering/triage/SKILL.md, sha256: 623a2ed692bdc77d2090e2a3dea3b627dd722ad3bbaca0be83aada75292c8fc4}
  - {path: skills/engineering/triage/agents/openai.yaml, sha256: 2e683717720cf456d165d0bb1a68bb600d0b6a8ccb61841c172e50d26f95351c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# triage roles

## Definition — verbatim
> "moving each one through a small state machine of **triage roles** (a category role and a state role) and leaving behind either an agent-ready brief, a specific question for the reporter, or a closed issue with a recorded reason." — docs/engineering/triage.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/triage.md | 3 | defined here | Defined as the two-dimensional state machine classification scheme comprising a category role and a state role. |
| external/triage.md | 25 | defined here | Defined in external documentation as the categorization and lifecycle state roles an issue moves through. |
| skills/engineering/triage/agents/openai.yaml | 3 | used here | Used in the OpenAI agent interface short description summarizing the skill's purpose to move issues through triage roles. |
| skills/engineering/triage/SKILL.md | 9 | defined here | Defined as the state machine classification scheme governing issue tracker items during triage execution. |

## Consumes
Untriaged issues, external bug reports, or incoming pull requests landing from outside contributors.

## Produces
A structured issue classification assigning exactly one category role and exactly one state role to each triaged item.

## When applied
Applied when invoking `/triage` to evaluate and categorize incoming work on the project's issue tracker.

## Sub-concepts
bug, enhancement, needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix

## Part of
triage, state-machine

## Implementation status
defects: doc-drift, script-bug, other (from docs-engineering-triage-md.md: setup-matt-pocock-skills writes label vocabulary to docs/agents/triage-labels.md but fails to create tracker labels via CLI; the five-state machine lacks states for blocked, deferred, and implemented; external PR triage command fails due to unsupported gh authorAssociation flag)

## Design notes
Triage roles form the two-dimensional taxonomy that structures incoming work in matt's workflow: every incoming issue or external PR is assigned exactly one category role (bug or enhancement) and exactly one state role (needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix). This strict two-role invariant ensures deterministic queryability and prevents ambiguous backlog states.
