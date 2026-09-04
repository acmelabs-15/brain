---
package: addy
path: .gitattributes
type: config
bytes: 19
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .gitattributes, sha256: d60f352d0db1404c70afb4bb8b2ca3fd1c610572aa40720e8a0b7baa7885418c}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .gitattributes

## Purpose — required, verbatim
> "* text=auto eol=lf" — .gitattributes:1
(no explicit purpose statement)

## Design intent — required
Defines repository-level Git text handling rules to enforce consistent line feed (`LF`) line endings across operating systems (preventing CRLF conversion churn on Windows).

## Phase — required
none

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
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Standard Git configuration file ensuring text files are checked out with LF line endings.

## Context cost
19 bytes, ~5 tokens.
