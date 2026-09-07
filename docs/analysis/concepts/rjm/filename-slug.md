---
package: rjm
name: filename slug
slug: filename-slug
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/checkpoint.md, sha256: 69bd04f6a728255356b0644dd36ffb5b32f432ee113cb9df036719f0a69661ed}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# filename slug

## Definition — verbatim
> "3. Build the filename slug from the label:" — .claude/commands/checkpoint.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/checkpoint.md | 66 | defined here | Defined in step 3 as the normalization procedure producing filesystem-safe 40-character labels. |

## Consumes
Raw text checkpoint labels or fallback session objective strings.

## Produces
A lowercase, hyphen-separated string truncated to 40 characters used in checkpoint filenames.

## When applied
During `/checkpoint` path generation prior to file collision checking.

## Sub-concepts
none

## Part of
checkpoint-command

## Implementation status
clean

## Design notes
Filename slug enforces standardized filename normalization by lowercasing labels, stripping non-alphanumeric characters, and truncating strings to 40 characters. This ensures that generated checkpoint files remain safe across diverse file systems and predictable in automated directory scans.
