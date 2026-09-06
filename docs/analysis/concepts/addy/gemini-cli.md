---
package: addy
name: Gemini CLI
slug: gemini-cli
kind: reference
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

# Gemini CLI

## Definition — verbatim
(used, not defined)
> "Single-model review complete. Want a cross-model second opinion? Options: Gemini CLI, Codex CLI, manual external review (you paste it elsewhere), or skip." — skills/doubt-driven-development/SKILL.md:122

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/doubt-driven-development/SKILL.md | 122 | used here | Listed as an external CLI option for obtaining a cross-model second opinion via read-only stdin execution. |

## Consumes
Adversarial review prompt piped through stdin with read-only planning flags.

## Produces
Cross-model adversarial review findings from the Gemini model.

## When applied
Selected by the user during cross-model escalation in interactive sessions.

## Sub-concepts
none

## Part of
cross-model-second-opinion

## Implementation status
clean

## Design notes
`Gemini CLI` is an external command-line interface tool utilized to execute read-only, non-interactive review prompts against Google's Gemini models, serving as a cross-architecture auditor.
