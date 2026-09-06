---
package: matt
name: absolute
slug: absolute
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# absolute

## Definition — verbatim
(used, not defined)

> "Because these pages are published on `aihero.dev`, **every link is absolute**: never a repo-relative path." — .agents/writing-docs.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 9 | used here | Mandates that all hyperlinks in documentation pages must be absolute URLs to avoid broken web links. |

## Consumes
Markdown hyperlinks within documentation files.

## Produces
Fully qualified URLs for cross-skill links and repository references.

## When applied
Enforced when writing or reviewing links in documentation pages published to aihero.dev.

## Sub-concepts
none

## Part of
writing-docs

## Implementation status
clean

## Design notes
A documentation authoring standard requiring all links to be absolute web URLs rather than repository-relative paths, ensuring links function consistently both inside git checkouts and on the public aihero.dev website.
