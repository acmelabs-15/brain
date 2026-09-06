---
package: addy
name: read-only sandbox
slug: read-only-sandbox
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

# read-only sandbox

## Definition — verbatim
> "read-only sandbox keeps the CLI from writing to your workspace" — skills/doubt-driven-development/SKILL.md:143

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/doubt-driven-development/SKILL.md | 143 | defined here | Configuration constraint ensuring external CLIs cannot write to the workspace during adversarial evaluation. |

## Consumes
External CLI flags, sandbox execution modes, and piped review prompt content.

## Produces
Guaranteed isolation preventing external review models or prompt injection payloads from modifying local workspace files.

## When applied
Mandatory whenever invoking external CLI tools for cross-model review.

## Sub-concepts
none

## Part of
cross-model-second-opinion

## Implementation status
clean

## Design notes
The `read-only sandbox` enforces execution boundaries during external CLI review, ensuring that untrusted code or prompt injection payloads inside review artifacts cannot execute destructive actions or modify the local development workspace.
