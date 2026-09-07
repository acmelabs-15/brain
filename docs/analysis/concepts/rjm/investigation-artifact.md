---
package: rjm
name: investigation artifact
slug: investigation-artifact
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/modules/investigation_allowlist.py, sha256: bece828fc1a3860637801df5a97f8bf2f55baf516c426bea4298ee629f946785}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# investigation artifact

## Definition — verbatim
(used, not defined)

> "Single source of truth for investigation artifact path patterns." — scripts/modules/investigation_allowlist.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/modules/investigation_allowlist.py | 3 | used here | Describes the scope of allowlisted path patterns qualifying for the ADR-034 QA exemption. |

## Consumes
none

## Produces
none

## When applied
When an investigation session creates or modifies exploratory and diagnostic artifacts covered by the ADR-034 allowlist.

## Sub-concepts
none

## Part of
qa-exemption

## Implementation status
clean

## Design notes
An investigation artifact is a non-production file (such as session logs, analysis reports, retrospectives, or memory notes) created during an exploratory or diagnostic task that is exempt from production QA testing requirements under ADR-034.
