---
package: matt
name: task
slug: task
kind: artifact
package_phase: matt:wayfinder
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
  - {path: docs/engineering/wayfinder.md, sha256: 5e186ef2b90a77ccf7b48ff7c72bbc97fc5c2ba0abe316b91fefa206cb18430e}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: skills/engineering/wayfinder/SKILL.md, sha256: fee6e1d0c50f0e736b4ef8a599060c959afae904c9a97d82c97f049fcc3aa0f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# task

## Definition — verbatim
> "Manual work that must happen before a _decision_ can be made: nothing to decide, prototype, or research, but the discussion is blocked until it's done." — skills/engineering/wayfinder/SKILL.md:80

## Also called — verbatim
`A fourth \`task\` ticket type` — CHANGELOG.md:201

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 201 | defined here | Defines the fourth wayfinder ticket type for manual unblocking work |
| CONTEXT.md | 12 | used here | Lists task as one kind of issue tracked in an issue tracker |
| docs/engineering/wayfinder.md | 51 | defined here | Explains that task tickets do rather than decide to unblock subsequent decisions |
| external/wayfinder.md | 47 | defined here | Table row defining the task ticket type and its resolution mechanism |
| skills/engineering/wayfinder/SKILL.md | 65 | defined here | Enumerates task as one of the four wayfinder ticket type labels |
| skills/engineering/wayfinder/SKILL.md | 80 | defined here | Detailed specification of task tickets: manual work blocking decisions |

## Consumes
A blocking operational prerequisite (access provisioning, service signup, data migration)

## Produces
Completed manual work and recorded environment facts (credentials, URLs, row counts) that unblock decisions

## When applied
When a decision cannot proceed without performing manual or external operational work

## Sub-concepts
none

## Part of
wayfinder

## Implementation status
defects: other (external/wayfinder.md:48 notes agents frequently misinterpreting task tickets as implementation steps and writing product code)

## Design notes
The task ticket is the sole ticket type in wayfinder that performs action rather than making a decision; it earns its place strictly by unblocking an upcoming decision rather than delivering pieces of the end product.
