---
package: rjm
name: detect_domains
slug: detect-domains
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/quality-grades/SKILL.md, sha256: 169d96f9077aeeb8c6039593f702f0b100d56bc9d126dd28e82d5e5bfab775e6}
  - {path: .claude/skills/quality-grades/scripts/grade_domains.py, sha256: 14cd79a354e088527cb5cf77f2389be5577ed87949ba910b715ef69b7af91b5a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# detect_domains

## Definition — verbatim
> "1. **Detect domains**: `grade_domains.py` auto-detects product domains from the repo layout (or use `--domains` to scope)." — .claude/skills/quality-grades/SKILL.md:26

## Also called — verbatim
`detect_domains` — .claude/skills/quality-grades/scripts/grade_domains.py:83

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/scripts/grade_domains.py | 83 | defined here | Python function inspecting repo layout to discover product domains from agent and skill definitions. |
| .claude/skills/quality-grades/SKILL.md | 26 | defined here | Step 1 of the quality-grades process auto-detecting product domains or scoping via CLI flags. |

## Consumes
Repository filesystem structure containing `.claude/agents/*.md` and `.claude/skills/*/SKILL.md`.

## Produces
A sorted list of detected domain names scoping multi-layer quality evaluation.

## When applied
Step 1 of the quality-grades process before evaluating individual layer grades.

## Sub-concepts
none

## Part of
quality-grades

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
Automated domain detection scans repository agent and skill directories to identify functional product domain boundaries, establishing the evaluation target set without requiring manually maintained domain registries.
