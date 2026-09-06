---
package: addy
name: AI / LLM Features
slug: ai-llm-features
kind: checklist
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/security-auditor.md, sha256: 66a3f68f1c691b600ddb44e88afb138e239d0572df37be84e1f9a427c887dd0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# AI / LLM Features

## Definition — verbatim
(used, not defined)
> "### 6. AI / LLM Features (if present)" — agents/security-auditor.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/security-auditor.md | 48 | defines | Section heading structuring audit checks for model output handling, prompt injection boundaries, context data leakage, excessive tool agency, and consumption limits. |

## Consumes
LLM prompt construction code, model response handlers, tool/function calling schemas, and context window assembly logic.

## Produces
Targeted vulnerability assessments identifying AI-specific risks mapped to the OWASP Top 10 for LLMs.

## When applied
Applied during security review whenever an application incorporates LLM calls, RAG pipelines, or autonomous agent behaviors.

## Sub-concepts
owasp-top-10-for-llm-applications

## Part of
security-audit-report

## Implementation status
clean

## Design notes
AI / LLM Features defines an audit category tailored for generative AI systems, ensuring model outputs are treated as untrusted data and code-enforced boundaries prevent prompt injection or excessive agency.
