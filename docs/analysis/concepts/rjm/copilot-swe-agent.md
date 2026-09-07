---
package: rjm
name: copilot-swe-agent
slug: copilot-swe-agent
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/write_copilot_synthesis_summary.py, sha256: 66e561aabde64519c36ba45cf72ea182d9ddaa490d07dbed619e75d1cae541f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# copilot-swe-agent

## Definition — verbatim
(used, not defined)

> "- Assigned copilot-swe-agent to the issue" — scripts/ci/write_copilot_synthesis_summary.py:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/write_copilot_synthesis_summary.py | 32 | used here | Documented as the automated coding agent assigned to an issue upon completion of context synthesis. |

## Consumes
Synthesized issue context, issue description with @copilot mention.

## Produces
Automated pull request implementing the requested issue changes.

## When applied
Assigned automatically to an issue after context synthesis finishes processing an issue labelled copilot-ready.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`copilot-swe-agent` represents GitHub's autonomous software engineering agent actor assigned to issues within the Copilot integration pipeline to execute code changes and open PRs from synthesized issue context.
