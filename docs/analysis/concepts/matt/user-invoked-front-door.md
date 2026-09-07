---
package: matt
name: user-invoked front door
slug: user-invoked-front-door
kind: pattern
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/grill-me.md, sha256: 8ef33c20bc9870b89757d0d6238d319381bb0b7afb299d3e4ef1f92d20dba1d3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# user-invoked front door

## Definition — verbatim
> "Both sit on the <a class="ah-prose-a" href="/skills-grilling">grilling</a> primitive; <code class="ah-code-inline">grill-me</code> is the user-invoked front door that carries nothing with it." — external/grill-me.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/grill-me.md | 69 | defined here | Characterizes /grill-me as the zero-dependency, user-triggered front door to the underlying grilling primitive. |

## Consumes
Direct interactive user invocation (/grill-me).

## Produces
An interactive interview session without repository or file persistence requirements.

## When applied
When the user explicitly requests an interview to stress-test ideas outside of any project checkout.

## Sub-concepts
none

## Part of
grill-me

## Implementation status
defects: orphan, doc-drift

## Design notes
A user-invoked front door is an explicit, human-triggered interface that wraps a generic engine (such as the grilling primitive) for standalone use. Unlike background skills or autonomous subagent routines, a front door is never auto-invoked by the agent, ensuring that the human remains in control of initiating exploratory and reflective sessions.
