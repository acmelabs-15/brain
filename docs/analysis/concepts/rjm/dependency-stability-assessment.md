---
package: rjm
name: Dependency Stability Assessment
slug: dependency-stability-assessment
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/evolution-scoring.md, sha256: 7e5b7f9e76ce28a7545f65dc038b5e24a9820dd515183e5dbef0a06e8045c4cb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Dependency Stability Assessment

## Definition — verbatim
> "### Step 2: Dependency Stability Assessment" — .claude/skills/skillforge/references/evolution-scoring.md:172

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/evolution-scoring.md | 172 | defined here | Defines Step 2 of evolution scoring classifying dependencies by stability and enforcing abstraction of volatile resources. |

## Consumes
List of external tools, model IDs, APIs, and libraries used by the skill.

## Produces
Classified dependency matrix with abstraction requirements.

## When applied
Applied as Step 2 of evolution scoring to evaluate external couplings before finalizing skill specifications.

## Sub-concepts
none

## Part of
evolution-scoring-framework

## Implementation status
defects: doc-drift

## Design notes
A dependency classification process that tags every coupling by volatility and mandates abstraction layers for non-stable external tools or APIs to shield the skill from breaking changes.
