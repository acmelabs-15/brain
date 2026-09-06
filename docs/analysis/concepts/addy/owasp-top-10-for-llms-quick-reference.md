---
package: addy
name: OWASP Top 10 for LLMs Quick Reference
slug: owasp-top-10-for-llms-quick-reference
kind: reference
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

# OWASP Top 10 for LLMs Quick Reference

## Definition — verbatim
> "For apps with LLM features. See the [OWASP GenAI Security Project](https://genai.owasp.org/llm-top-10/)." — references/security-checklist.md:192

## Also called — verbatim
"OWASP Top 10 for LLM Applications" — skills/security-and-hardening/SKILL.md:379

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 19 | defines | Summary reference table indexing the ten critical risks for LLM applications with targeted mitigations. |

## Consumes
Generative AI features, autonomous agent tool pipelines, and prompt/retrieval workflows.

## Produces
Evaluated risk categories (LLM01–LLM10) mapped to specific engineering preventions.

## When applied
When reviewing or designing applications that incorporate LLMs or autonomous agents.

## Sub-concepts
prompt-injection, excessive-agency

## Part of
security-checklist

## Implementation status
clean

## Design notes
The OWASP Top 10 for LLMs Quick Reference synthesizes the core risks from the OWASP GenAI Security Project (LLM01 through LLM10) into an actionable checklist table. It ensures that agents designing or auditing generative AI features systematically address prompt injection, data leakage, model poisoning, output handling, and excessive agency.
