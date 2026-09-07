---
package: rjm
name: Provenance and Re-Verification Table
slug: provenance-and-re-verification-table
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/references/provenance.md, sha256: 04ccff20a5972dda6a64eea54b0e39b152b0c950046a9924e4f23d856a453cb3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Provenance and Re-Verification Table

## Definition — verbatim
> "# Provenance and Re-Verification Table" — .claude/skills/ai-agents-change-control/references/provenance.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/references/provenance.md | 1 | defined here | Title and structure of the reference table tracking cited claims, exact line numbers, and verification commands. |

## Consumes
Referenced source files, ADR records, and executable shell commands.

## Produces
A verifiable audit table ensuring that change control rules remain synchronized with upstream implementations.

## When applied
Consulted and maintained whenever editing change control documentation or cited repository rules.

## Sub-concepts
maintenance-rule

## Part of
none

## Implementation status
clean

## Design notes
The Provenance and Re-Verification Table provides an empirical verification index for ai-agents-change-control, pairing every cited rule, threshold, and ADR reference with a live command to re-verify it against the current codebase.
