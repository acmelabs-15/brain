---
package: rjm
name: Copilot Agent Frontmatter
slug: copilot-agent-frontmatter
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Copilot Agent Frontmatter

## Definition — verbatim
> "Copilot Agent Frontmatter" — scripts/validation/pre_pr_sequence.py:384

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 384 | defined here | Pre-PR gate ensuring agent frontmatter parses as valid YAML without unquoted colon examples. |

## Consumes
Agent markdown files targetable by Copilot CLI.

## Produces
Pass/fail verification verdict confirming frontmatter parses cleanly as valid YAML.

## When applied
Evaluated during the pre-PR validation sequence before submitting pull requests.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
A pre-PR gate in `pre_pr_sequence.py` resolving issues #2491–#2496, verifying that YAML frontmatter in Copilot agent markdown files parses cleanly without syntax errors caused by unquoted descriptions embedding colons or raw command examples.
