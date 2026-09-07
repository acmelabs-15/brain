---
package: rjm
name: canonical-source-mirror rule
slug: canonical-source-mirror-rule
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-074-security-review-quick-pass-mode.md, sha256: c2b4a02348c862ed3899605ae5d2efbda035194ef3e8e2c32062b67584b82ba4}
  - {path: .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py, sha256: b2f5fa9b65615958cab3a8a9a402652e131570e1aacd577eb7e754caa2681ec7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# canonical-source-mirror rule

## Definition — verbatim
> "from the schema's "Field Definitions" tables; keep them in sync if the schema changes (canonical-source-mirror rule)." — .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:7-8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-074-security-review-quick-pass-mode.md | 127 | used here | Cited to govern how skill and Copilot projections must re-sync from canonical agent definitions. |
| .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py | 8 | defined here | Rule requiring validator enum sets to mirror canonical spec schema tables verbatim. |

## Consumes
Canonical schema specifications and authoritative template documents.

## Produces
Synchronized downstream projections, script validators, and platform-specific skill files.

## When applied
Enforced whenever generating, projecting, or validating secondary artifacts derived from single-source-of-truth definitions.

## Sub-concepts
none

## Part of
spec-generator, architecture-governance

## Implementation status
clean

## Design notes
The canonical-source-mirror rule prevents documentation and contract drift across multi-harness repositories by designating a single authoritative file for every schema or workflow definition and requiring all mirrors, validators, and harness projections to copy or derive contracts verbatim.
