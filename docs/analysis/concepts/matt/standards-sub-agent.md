---
package: matt
name: Standards sub-agent
slug: standards-sub-agent
kind: role
package_phase: matt:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/code-review/SKILL.md, sha256: 47f4e52c21694def9c7c11cbfbf891ca35eac7a93e395797515be3c8a409ae50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Standards sub-agent

## Definition — verbatim
> "**Standards sub-agent prompt** should include:" — skills/engineering/code-review/SKILL.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/code-review/SKILL.md | 60 | defined here | Prompt specification for the sub-agent auditing coding standards and smell baselines. |

## Consumes
Full diff command, commit list, discovered standards-source files, and baseline smells.

## Produces
A review report under 400 words identifying documented standard violations and baseline smells per file/hunk.

## When applied
Spawned concurrently with the Spec sub-agent during step 4 of `/code-review`.

## Sub-concepts
none

## Part of
code-review, two-axis-review

## Implementation status
defects: doc-drift, cross-file-contradiction, other (from skills/engineering/code-review/SKILL.md: prompt lacks prohibition against recursive sub-agent calls)

## Design notes
A specialized evaluation role in `/code-review` responsible exclusively for assessing diff conformance against documented repository coding conventions, architectural invariants, and known smell baselines. Running independently of functional requirements checking, it ensures stylistic and structural health without being swayed by functional progress.
