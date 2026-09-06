---
package: matt
name: Invocation mode
slug: invocation-mode
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Invocation mode

## Definition — verbatim
> "- **Invocation mode.** State whether you type it or the agent fires it." — .agents/writing-docs.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 31 | defined here | Specifies the documentation requirement to explicitly state whether a skill is user-invoked or model-invoked. |

## Consumes
Skill trigger configuration and harness execution policies.

## Produces
Explicit documentation text clarifying whether a skill is user-invoked or model-invoked.

## When applied
Written in the When to reach for it section of every skill documentation page.

## Sub-concepts
user-invoked, Model-invoked

## Part of
When to reach for it

## Implementation status
clean

## Design notes
A documentation convention explicitly declaring execution authority: whether a skill must be manually triggered by a human typing a slash command, or whether autonomous agent models are permitted to invoke it automatically.
