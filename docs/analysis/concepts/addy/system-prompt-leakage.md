---
package: addy
name: System Prompt Leakage
slug: system-prompt-leakage
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/security-checklist.md, sha256: a8bbff3b1ac9122985e98fbe9a8fa09cd8ad53b190bac7f8f0f63687900f7d7a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# System Prompt Leakage

## Definition — verbatim
(used, not defined)
> "Assume the system prompt can leak; put no secrets in it" — references/security-checklist.md:202

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 202 | used here | Listed in OWASP Top 10 for LLMs quick reference as risk LLM07 with prevention rule |

## Consumes
System prompt instructions and sensitive operational credentials or context.

## Produces
Security hardening rules mandating that secrets, credentials, and sensitive IP be excluded from system prompts.

## When applied
When designing and configuring prompts for LLM integrations, agents, or assistants.

## Sub-concepts
none

## Part of
ai-llm-security

## Implementation status
clean

## Design notes
System prompt leakage is an AI security risk where attackers extract hidden system instructions via prompt injection or adversarial elicitation. Addy's security checklist treats system prompts as public by default, establishing a defensive posture where secrets, internal infrastructure details, and proprietary business logic are kept entirely out of the prompt context.
