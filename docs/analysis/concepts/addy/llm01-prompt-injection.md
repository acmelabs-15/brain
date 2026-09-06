---
package: addy
name: LLM01: Prompt Injection
slug: llm01-prompt-injection
kind: reference
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/source-driven-development/SKILL.md, sha256: 719d4e54083c90ded62112fb41df3dbc4619309118ee0e6aa4d846f92d8204af}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# LLM01: Prompt Injection

## Definition — verbatim
(used, not defined)

> "For the underlying threat model (LLM01: Prompt Injection), follow the `security-and-hardening` skill — this section covers extraction hygiene, that one covers the threat model." — skills/source-driven-development/SKILL.md:101

## Also called — verbatim
Prompt Injection — skills/source-driven-development/SKILL.md:101

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/source-driven-development/SKILL.md | 101 | used here | Cites the OWASP LLM01 threat model for prompt injection to govern retrieval safety hygiene. |

## Consumes
Untrusted external web pages and user-provided inputs.

## Produces
Threat model awareness guiding defensive prompt design and input sanitization.

## When applied
When retrieving web documentation or handling untrusted external inputs.

## Sub-concepts
none

## Part of
retrieval-safety-treat-fetched-content-as-data

## Implementation status
defects: orphan, missing-path, doc-drift

## Design notes
Reference to the OWASP Top 10 for Large Language Models security classification (LLM01: Prompt Injection), justifying strict extraction hygiene whenever external documentation is retrieved.
