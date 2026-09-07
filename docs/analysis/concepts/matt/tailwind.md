---
package: matt
name: Tailwind
slug: tailwind
kind: reference
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

# Tailwind

## Definition — verbatim
(used, not defined)

> "Tailwind and Mermaid both come from CDNs." — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/improve-codebase-architecture/HTML-REPORT.md | 3 | used here | Cited as the CDN-delivered utility-first CSS framework for styling the architecture review HTML report. |

## Consumes
HTML markup requiring visual formatting.

## Produces
Styled, responsive HTML layout for architecture review reports.

## When applied
When generating the self-contained HTML architecture review report.

## Sub-concepts
none

## Part of
html-report

## Implementation status
clean

## Design notes
An external utility-first CSS framework imported via CDN to style the self-contained HTML architecture report without requiring local build dependencies or repository pollution.
