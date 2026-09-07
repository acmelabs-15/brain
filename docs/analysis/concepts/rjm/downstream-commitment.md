---
package: rjm
name: Downstream commitment
slug: downstream-commitment
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-external-claims/SKILL.md, sha256: a5deab77d49fe51939c19fe4e1fa3000e57e5cef65daa4ae93aea491c560c9ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Downstream commitment

## Definition — verbatim
> "- **Downstream commitment**: the claim will land in an ADR, a retro, a Serena memory, a PR body, or an external artifact where "I will verify it later" does not survive the round trip." — .claude/skills/ai-agents-external-claims/SKILL.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-external-claims/SKILL.md | 42 | defines | Defines the trigger condition where a claim enters a durable, high-impact repository artifact. |

## Consumes
Claims destined for persistent decision logs, retrospectives, memories, or pull request descriptions.

## Produces
Mandatory verification requirement barring tentative or unconfirmed claims from being recorded.

## When applied
Activated whenever an incoming claim is being incorporated into durable architectural records.

## Sub-concepts
none

## Part of
external-claims

## Implementation status
defects: missing-path

## Design notes
A trigger condition recognizing that claims recorded in permanent architectural artifacts (like ADRs or retrospectives) quickly become treated as settled truth by future agents. Because 'verify later' promises never survive long-term maintenance, verification must occur prior to commitment.
