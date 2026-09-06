---
package: addy
name: AI / LLM Security
slug: ai-llm-security
kind: checklist
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

# AI / LLM Security

## Definition — verbatim
> "For any feature that calls an LLM (chatbots, summarizers, agents, RAG):" — references/security-checklist.md:151

## Also called — verbatim
"Securing AI / LLM Features" — skills/security-and-hardening/SKILL.md:377

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 16 | defines | Checklist section detailing defensive requirements for features that invoke LLMs. |

## Consumes
Generative AI architecture, system prompts, retrieval contexts, and agent tool execution hooks.

## Produces
Safeguards ensuring model outputs are untrusted, permissions are enforced in code, and execution loops are capped.

## When applied
When implementing or reviewing features that call LLMs (chatbots, summarizers, agents, RAG).

## Sub-concepts
prompt-injection, excessive-agency

## Part of
security-checklist, security-and-hardening

## Implementation status
clean

## Design notes
AI / LLM Security addresses the unique vulnerability surface of generative AI and autonomous agent systems. Addy establishes that model outputs must always be treated as untrusted data (never evaluated as raw code or SQL), that prompt injection must be assumed with authorization enforced in application code rather than natural language system prompts, and that agent permissions and consumption loops must be strictly bounded.
