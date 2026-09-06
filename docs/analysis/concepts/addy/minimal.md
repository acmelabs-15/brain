---
package: addy
name: Minimal
slug: minimal
kind: pattern
package_phase: none
implementation_in_scope: true
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 190d4a4a399018f1d7bf0895a953042fe0f285080e37ca45381785f80ba007c7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Minimal

## Definition — verbatim
> "- **Minimal** — Only the content needed to guide the agent correctly" — CONTRIBUTING.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 34 | defines | Fourth criterion of the Skill Quality Bar, enforcing strict context efficiency and brevity in skill instructions. |

## Consumes
Draft skill instructions and reference materials.

## Produces
Concise, high-signal skill definitions that conserve scarce LLM context window tokens.

## When applied
When authoring or editing skills to eliminate unnecessary prose and extraneous details.

## Sub-concepts
none

## Part of
skill-quality-bar

## Implementation status
clean

## Design notes
"Minimal" enforces strict context budget management across the skill pack. Because every token loaded into an agent's prompt degrades attention and increases latency and operational cost, skills must be tightly scoped, containing only the vital instructions, decision trees, and gates necessary to steer execution.
