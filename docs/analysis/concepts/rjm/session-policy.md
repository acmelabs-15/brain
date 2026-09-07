---
package: rjm
name: session-policy
slug: session-policy
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-033-routing-level-enforcement-gates.md, sha256: 0b62580ef09da6d1986775cd9119f65f6e379d09e69716a0591c743fb81946c1}
  - {path: .claude/rules/session-logs.md, sha256: a4592aa8702246ac5770c118f5e5e3e4c31699ce9fede52273a865384d87208e}
  - {path: .claude/skills/ai-agents-docs-of-record/SKILL.md, sha256: a262246040d329b1c4620441bdc61bb563e9fd33fe4eb61f36b8e4287913b728}
  - {path: scripts/AGENTS.md, sha256: c36cd367a4f2c02dd84b708c93bcef1a0b76d811885f9f768ae4a98ac70cdc5a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# session-policy

## Definition — verbatim
> "| **Trigger** | `session-policy` pre-commit hook (validate-if-present), on demand |" — scripts/AGENTS.md:248

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-033-routing-level-enforcement-gates.md | 488 | used here | Identifies session-policy as the Lefthook pre-commit gate enforcing Gate 1 (Session Protocol) on `.agents/**` modifications. |
| .claude/rules/session-logs.md | 31 | used here | Notes that the session-policy pre-commit hook continues validating session logs when staged. |
| .claude/skills/ai-agents-docs-of-record/SKILL.md | 28 | used here | Specifies validate-if-present execution of session-policy on staged JSON session log artifacts. |
| scripts/AGENTS.md | 248 | defined here, used here | Defines session-policy as the pre-commit hook trigger executing `scripts/validate_session_json.py` to validate session log schema compliance. |

## Consumes
Staged files under `.agents/**` and staged JSON session log artifacts.

## Produces
A binary pre-commit gate verdict permitting or blocking `git commit` operations.

## When applied
Triggered automatically by Lefthook during pre-commit whenever files under `.agents/**` or session logs are staged for commit.

## Sub-concepts
none

## Part of
routing-level-enforcement-gates

## Implementation status
defects: doc-drift, missing-path, orphan

## Design notes
An automated pre-commit quality gate executed via Lefthook that enforces repository session protocol rules. It validates staged session log JSON documents against schema requirements to prevent corrupt or non-compliant session records from being committed.
