---
package: addy
path: .gitattributes
type: file
bytes: 19
unit: inv-addy-2
aliases: []
memo_inputs:
  - {path: .gitattributes, sha256: d60f352d0db1404c70afb4bb8b2ca3fd1c610572aa40720e8a0b7baa7885418c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .gitattributes

## Purpose — required, verbatim
> "* text=auto eol=lf" — .gitattributes:1 (no explicit purpose statement)

## Design intent — required
Configures Git line-ending normalization across all repository files. Specifies that text files should automatically be normalized (`text=auto`) and checkout with linefeed (`eol=lf`) endings, preventing cross-platform CRLF/LF churn across macOS, Linux, and Windows development environments.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `text=auto` — .gitattributes:1 — defined here
- `eol=lf` — .gitattributes:1 — defined here

## Structure
- "* text=auto eol=lf" — .gitattributes:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Minimal 19-byte Git configuration file ensuring consistent LF line endings across the repository.

## Context cost
19 bytes (~5 tokens). Loads no external files.
