---
package: addy
name: Prompt Injection
slug: prompt-injection
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/security-checklist.md, sha256: a8bbff3b1ac9122985e98fbe9a8fa09cd8ad53b190bac7f8f0f63687900f7d7a}
  - {path: skills/source-driven-development/SKILL.md, sha256: 719d4e54083c90ded62112fb41df3dbc4619309118ee0e6aa4d846f92d8204af}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Prompt Injection

## Definition — verbatim
(used, not defined)
> "Prompt injection assumed; permissions enforced in code, not in the system prompt" — references/security-checklist.md:154

## Also called — verbatim
"LLM01: Prompt Injection" — skills/source-driven-development/SKILL.md:101

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 154 | references | Identified as an assumed threat condition where permissions must be enforced in application code rather than prompts. |
| skills/source-driven-development/SKILL.md | 101 | references | Cites prompt injection as the underlying threat model requiring retrieval safety and extraction hygiene. |

## Consumes
Untrusted text inputs, fetched web documentation, or external user prompts supplied to LLMs.

## Produces
Defensive architectural constraints ensuring retrieved text is treated strictly as data rather than instructions.

## When applied
When designing or implementing LLM features, web-scraping agents, documentation retrieval, or tool-calling systems.

## Sub-concepts
none

## Part of
ai-llm-security, owasp-top-10-for-llms-quick-reference

## Implementation status
clean

## Design notes
Prompt injection occurs when untrusted input manipulates an LLM's execution flow or induces it to disregard system instructions. Addy treats prompt injection as an assumed threat condition rather than a preventable edge case: developer guidelines dictate that system prompts must never be relied upon as security boundaries, permissions must be enforced exclusively in deterministic application code, and external web content must be sanitized strictly as data.
