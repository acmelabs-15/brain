---
package: addy
name: Descriptive Messages
slug: descriptive-messages
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/git-workflow-and-versioning/SKILL.md, sha256: 39665e84d944fbb394dde5e4e60fc6497cd056002b5c7de6762213f7018ff0a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Descriptive Messages

## Definition — verbatim
> "### 3. Descriptive Messages" — skills/git-workflow-and-versioning/SKILL.md:65
> "Commit messages explain the *why*, not just the *what*:" — skills/git-workflow-and-versioning/SKILL.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 65 | defined here | Standard requiring commit messages to detail developer intent and rationale using structured prefixes. |

## Consumes
Code modification rationale, architectural context, bug root cause.

## Produces
Structured commit messages (<type>: <description> with explanation of why).

## When applied
Whenever staging and recording git commits.

## Sub-concepts
none

## Part of
git-workflow-and-versioning

## Implementation status
defects: doc-drift, cross-file-contradiction (catalog doc-drift regarding section headings; cross-file contradiction on Ship phase placement vs cross-phase activation)

## Design notes
Descriptive Messages establish conventional commit formatting (feat, fix, refactor, test, docs, chore) that articulates why a change was made rather than reciting diff lines, turning git history into permanent architectural documentation.
