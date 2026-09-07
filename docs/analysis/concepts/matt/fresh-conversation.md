---
package: matt
name: fresh conversation
slug: fresh-conversation
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

# fresh conversation

## Definition — verbatim
(used, not defined)

> "Start it in a <strong class="ah-prose-strong">fresh conversation</strong>, not on top of a plan you already had an agent write." — external/grill-me.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/grill-me.md | 28 | used here | Instructs the user to invoke /grill-me in a clean conversation rather than atop prior agent-generated plans. |

## Consumes
A new, unpolluted conversation context in the AI agent harness.

## Produces
An unbiased questioning session free from hallucinations or commitments anchored in prior context.

## When applied
When initiating an interactive grilling or exploration session.

## Sub-concepts
none

## Part of
grill-me

## Implementation status
defects: orphan, doc-drift

## Design notes
Starting in a fresh conversation is an operational hygiene pattern in Matt's toolkit. LLMs are easily anchored by previous drafts, speculative plans, or prior conversational turns. Mandating a fresh conversation ensures the agent evaluates the user's idea from first principles and uncovers blind spots rather than rationalizing existing assumptions.
