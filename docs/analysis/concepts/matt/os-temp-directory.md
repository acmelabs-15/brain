---
package: matt
name: OS temp directory
slug: os-temp-directory
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/improve-codebase-architecture/HTML-REPORT.md, sha256: 581e8bb5a521e46bbda8ca7e19b15948bed882187108092ebb90c62513b77528}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# OS temp directory

## Definition — verbatim
(used, not defined)

> "The architectural review is rendered as a single self-contained HTML file in the OS temp directory." — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/improve-codebase-architecture/HTML-REPORT.md | 3 | used here | Specified as the filesystem destination for rendering the self-contained HTML architectural review report. |

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
clean

## Design notes
OS temp directory is an operating system storage location used to store temporary review reports without polluting repository working trees rather than an operational lifecycle concept.
