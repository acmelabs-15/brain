---
package: rjm
name: Joint CoVe
slug: joint-cove
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Joint CoVe

## Definition — verbatim
(used, not defined)
> "| **Verification** | Factored Verification | High hallucination persistence in joint verification | CoVe | Joint CoVe | Additional token cost for separation | Outperforms joint CoVe by 3-8 points across tasks |" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 18 | used here | Cited in the technique selection guide as conflicting with Factored Verification, with factored CoVe outperforming it by 3-8 points. |

## Consumes
Draft baseline response and planned verification questions provided simultaneously in a single prompt.

## Produces
Verification answers generated with original baseline output remaining in context.

## When applied
Applied when implementing Chain-of-Verification in low-resource or low-latency settings where managing separate factored contexts is impractical.

## Sub-concepts
none

## Part of
prompt-engineer, cove

## Implementation status
clean

## Design notes
Joint CoVe is a variant of the Chain-of-Verification technique where verification questions are answered in the presence of the original draft response. Because the model sees its own initial answers during verification, it is vulnerable to hallucination copying, achieving lower precision than Factored CoVe.
