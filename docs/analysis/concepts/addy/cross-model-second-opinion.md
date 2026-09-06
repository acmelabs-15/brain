---
package: addy
name: cross-model second opinion
slug: cross-model-second-opinion
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

# cross-model second opinion

## Definition — verbatim
> "Single-model review complete. Want a cross-model second opinion? Options: Gemini CLI, Codex CLI, manual external review (you paste it elsewhere), or skip." — skills/doubt-driven-development/SKILL.md:122

## Also called — verbatim
> "Cross-model escalation" — skills/doubt-driven-development/SKILL.md:112

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/doubt-driven-development/SKILL.md | 122 | defined here | Mandatory prompt offer presenting external LLM review options (Gemini CLI, Codex CLI) to the user. |

## Consumes
Completed single-model review findings, user authorization, and external CLI tools.

## Produces
Independent adversarial critique from a distinct model family with differing biases and training foundations.

## When applied
Explicitly offered to the user in every interactive doubt cycle following single-model review.

## Sub-concepts
gemini-cli, read-only-sandbox

## Part of
doubt-driven-development

## Implementation status
clean

## Design notes
A `cross-model second opinion` counteracts model-specific blind spots and shared architectural sycophancy by submitting review prompts to an external, alternative model family (such as Gemini or Codex), providing genuinely independent adversarial critique on critical decisions.
