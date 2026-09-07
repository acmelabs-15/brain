---
package: rjm
name: source of truth
slug: source-of-truth
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/references/incidents.md, sha256: 6c1d4f7be1f0a8e62ac391b69af7c0378cabb9adf2da39f83d24377024cfddbe}
  - {path: .claude/skills/doc-accuracy/scripts/doc_accuracy.py, sha256: e2a6c5623a7e91beaa30b099757c63e1648f530db3e3d2b4d2281dc34f4cc2f8}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# source of truth

## Definition — verbatim
> "The `templates/` directory is the **source of truth** for AI agent definitions." — templates/AGENTS.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/references/incidents.md | 217 | used here | Incident 7 header emphasizing that drift triage must identify which artifact is the canonical source of truth. |
| .claude/skills/doc-accuracy/scripts/doc_accuracy.py | 4 | used here | Scanner module header defining code as the source of truth and documentation as the subject under test. |
| templates/AGENTS.md | 7 | defined here | Overview section defining templates/ as the single source of truth for AI agent definitions. |
| templates/README.md | 11 | defined here | Directory structure defining templates/agents/ as the shared source of truth. |

## Consumes
Multi-source repository files, templates, generated outputs, and documentation.

## Produces
Unambiguous canonical authority designations for code generation and verification.

## When applied
Consulted before modifying code, generating artifacts, or resolving drift.

## Sub-concepts
none

## Part of
architecture

## Implementation status
defects: script-bug, internal-contradiction, doc-drift, cross-file-contradiction

## Design notes
In rjm's architecture, `source of truth` establishes the authoritative origin for any generated, mirrored, or documented concept. Whether designating `templates/` for Copilot agents or source code for documentation accuracy, fixing the source of truth prevents circular editing and drift inversion.
