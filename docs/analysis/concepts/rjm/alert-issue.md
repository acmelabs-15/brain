---
package: rjm
name: alert-issue
slug: alert-issue
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/software_engineering_library_activation_ci.py, sha256: 199512179852374e66fdb5c4407c75bfca0a316e0594a85eb2a16ae7a82c2200}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# alert-issue

## Definition — verbatim
> "subparsers.add_parser(\"alert-issue\", help=\"Create or update rollback alert issue.\")" — scripts/eval/software_engineering_library_activation_ci.py:206

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/software_engineering_library_activation_ci.py | 206 | defined here | Subcommand creating or commenting on a GitHub tracking issue upon activation failure. |

## Consumes
Threshold report and existing open issues matching label `software-engineering-library-activation`.

## Produces
Created GitHub issue or new issue comment linking the failed workflow run.

## When applied
Invoked in CI upon an activation gate failure to notify `agent-qa` and request a restoration PR.

## Sub-concepts
none

## Part of
software-engineering-library

## Implementation status
clean

## Design notes
An automated notification mechanism in rjm's CI pipeline that creates or updates a tracking issue when progressive disclosure activation fails.
