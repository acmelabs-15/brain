---
package: rjm
name: Argument-Hint Frontmatter
slug: argument-hint-frontmatter
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

# Argument-Hint Frontmatter

## Definition — verbatim
> "Argument-Hint Frontmatter" — scripts/validation/pre_pr_sequence.py:393

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 393 | defined here | Pre-PR validation gate verifying argument-hint frontmatter fields are bracket-safe scalar strings. |

## Consumes
Command and agent markdown frontmatter definitions containing `argument-hint`.

## Produces
Pass/fail verification verdict ensuring argument hints do not contain adjacent optional bracket groups.

## When applied
Evaluated during the pre-PR validation sequence before opening pull requests.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
A gate in `pre_pr_sequence.py` running `validate_argument_hint` to guarantee that argument-hint values in command/agent frontmatter are formatted as bracket-safe string scalars rather than adjacent optional groups (e.g. `[a] [b]`) that cause Copilot CLI to parse disconnected flow nodes.
