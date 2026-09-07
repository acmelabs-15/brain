---
package: rjm
name: markdownLintRun
slug: markdownlintrun
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# markdownLintRun

## Definition — verbatim
(used, not defined)

> "        \"markdownLintRun\"," — scripts/validate_session_json.py:155

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 155 | used here | Specified as a required session-end checklist item in SESSION_END_REQUIRED_ITEMS. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
`markdownLintRun` is a session-end checklist key identifier in `scripts/validate_session_json.py` recording whether markdown linting was executed during the session rather than an independent lifecycle concept.
