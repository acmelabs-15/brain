---
package: addy
name: Redaction
slug: redaction
kind: technique
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/constraint-driven-development/references/floor-guard.md, sha256: dba15dad8f5a5cbae464ec8457e6dd014a7bcb3ad13a360a6908d54991a5415e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Redaction

## Definition — verbatim
(used, not defined)
> "Redaction is not optional (Step 4)." — skills/constraint-driven-development/references/floor-guard.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/references/floor-guard.md | 12 | used here | Mandates redacting matched secret values from error reports and console logs. |

## Consumes
Security scanner outputs and matched secrets or credentials in working tree diffs.

## Produces
Sanitized diagnostic logs reporting only the rule ID and file location without leaking sensitive key material.

## When applied
Whenever automated guards report secret detection or security constraint violations.

## Sub-concepts
none

## Part of
floor-guard

## Implementation status
clean

## Design notes
A security safeguard ensuring that diagnostic tools and diff checkers report only rule names and file paths rather than echoing matched secret values, preventing tokens from leaking into agent transcripts, CI logs, or terminal histories.
