---
package: matt
name: event
slug: event
kind: pattern
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/loop-me/SKILL.md, sha256: e44d1cc3e760fb86ac42964c2a5f1fcac511715db50fb375f3f7be814de1eaa7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# event

## Definition — verbatim
> "an **event** (a new email, a new issue) or a **schedule** (every morning). Event-triggering is usually the more efficient." — skills/in-progress/loop-me/SKILL.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/loop-me/SKILL.md | 20 | defined here | Reactive trigger type exemplified by new emails or issues, noted as generally more efficient. |

## Consumes
Inbound webhook, message, email, or repository event.

## Produces
Immediate invocation of the target workflow.

## When applied
Used when workflow execution should respond immediately to incoming data or actions.

## Sub-concepts
none

## Part of
trigger, loop-me

## Implementation status
clean

## Design notes
A reactive trigger pattern in loop-me where workflows fire in response to discrete occurrences like incoming emails or new issues. It is characterized as more efficient than polling schedules because execution occurs only when new work arrives.
