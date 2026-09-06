---
package: addy
name: Excessive Agency
slug: excessive-agency
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

# Excessive Agency

## Definition — verbatim
(used, not defined)
> "| LLM06 | Excessive Agency | Scope tool permissions; confirm destructive actions |" — references/security-checklist.md:201

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 201 | references | Listed as OWASP LLM06 risk requiring scoped tool permissions and human confirmation for destructive actions. |

## Consumes
Autonomous agent tool schemas, execution privileges, and action invocation pipelines.

## Produces
Least-privilege tool execution policies and mandatory human confirmation gates for destructive actions.

## When applied
When equipping LLMs or autonomous agents with tools, APIs, shell access, or write capabilities.

## Sub-concepts
none

## Part of
owasp-top-10-for-llms-quick-reference, ai-llm-security

## Implementation status
clean

## Design notes
Excessive Agency (OWASP LLM06) arises when an LLM-based autonomous agent is granted broad, unchecked access to tools, APIs, or database actions, allowing unintended or malicious prompt injections to trigger damaging actions. Addy mitigates excessive agency by strictly scoping tool privileges to the minimum required and mandating explicit user confirmation for any destructive or irreversible operations.
