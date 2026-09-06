---
package: addy
name: degraded self-questioning fallback
slug: degraded-self-questioning-fallback
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# degraded self-questioning fallback

## Definition — verbatim
> "As a last resort only, a degraded self-questioning fallback exists — rewrite ARTIFACT + CONTRACT as a fresh self-prompt with a hard mental separator from your prior reasoning, and walk Steps 1–5." — skills/doubt-driven-development/SKILL.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/doubt-driven-development/SKILL.md | 47 | defined here | Defined as an emergency self-prompted doubt procedure when operating inside a subagent context where nested reviewer spawning is disallowed. |

## Consumes
Subagent execution environment unable to spawn child reviewers, along with isolated ARTIFACT + CONTRACT.

## Produces
A self-critique output explicitly flagged as degraded due to lack of isolated context.

## When applied
Used only as a last resort inside a subagent context when the user is unreachable and nested subagent creation is blocked.

## Sub-concepts
none

## Part of
doubt-driven-development

## Implementation status
clean

## Design notes
The `degraded self-questioning fallback` provides a structured self-examination protocol when platform constraints prevent spawning a fresh reviewer, while explicitly marking the output as degraded so developers do not mistake self-scrutiny for independent adversarial verification.
