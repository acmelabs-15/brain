---
package: rjm
name: generated
slug: generated
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/scripts/assess.py, sha256: 9e103c80873a8d3846198c6929818430e317822507f1b47ba0eec238264abaeb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# generated

## Definition — verbatim
> "Classify a changed file as authored, test, or generated." — .claude/skills/code-qualities-assessment/scripts/assess.py:107

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/scripts/assess.py | 107 | defined here | File category classification identifying compiler/tool-generated code outputs exempt from direct quality scoring. |

## Consumes
File path segments (`**/generated/**`, `**/*.pb.py`) and source file header comment markers indicating automated generation.

## Produces
File classification routing files to generator drift checks rather than authored maintainability scoring.

## When applied
When `classify_file_category` detects path patterns or header markers indicating machine-generated code.

## Sub-concepts
none

## Part of
fileassessment

## Implementation status
defects: doc-drift, missing-path, always-failing-gate

## Design notes
`generated` designates source code files produced automatically by generators, compilers, protocol buffers, or migration tools rather than human authors. In rjm, generated files are reviewed through their generator logic and drift detection rather than scored as independent authored modules. Without this distinction, code quality gates would fail generated code for high redundancy or complex coupling that is appropriate and unavoidable in machine-generated code.
