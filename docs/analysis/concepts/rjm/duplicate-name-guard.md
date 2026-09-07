---
package: rjm
name: duplicate-name guard
slug: duplicate-name-guard
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-evidence.md, sha256: 70d527ebb420739aa099f7982f4dc28e44432b3fa91532ae93ed5e0fa78e34e9}
  - {path: .claude/skills/context-optimizer/references/rule-audit-instrument.md, sha256: e44bedb58e00f8ca48ec3ee0cb3b8396e3cecf9bfde2e87f00e98adee9c6ee18}
  - {path: .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md, sha256: 3b2836c032a358fad40abda517f2abf08797f77014d08c8f2cf00b4b52a01c7b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# duplicate-name guard

## Definition — verbatim
(used, not defined)

> "originals check it: 0 of 24 trip the textual duplicate-name guard, and all 24 salvage" — .claude/skills/context-optimizer/references/rule-audit-evidence.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-evidence.md | 84 | used here | Validates that recovered full judge payloads do not contain competing duplicate score fields or secondary verdicts. |
| .claude/skills/context-optimizer/references/rule-audit-instrument.md | 270 | used here | Verifies that none of the 264 successful judge samples trips duplicate-name rejection when replayed through the hardened parser. |
| .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md | 36 | used here | Describes parser vulnerability where duplicate-name checks missed single-quote key spellings emitted by lenient models. |

## Consumes
Raw JSON response text and candidate verdict structures emitted by LLM judges.

## Produces
Validation verdict rejecting payloads that contain repeated score key names across top-level and nested scopes.

## When applied
Applied before parsing any judge output on both strict and recovery paths to prevent accepting competing or shadowed verdicts.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
The `duplicate-name guard` is a defensive parsing gate in rjm's evaluation harness designed to prevent prompt injection, model confusion, or nested JSON payloads from sneaking a false verdict into published metrics. Because standard JSON parsers silently overwrite earlier duplicate keys with later ones, this guard rejects any payload where score keys appear more than once.
