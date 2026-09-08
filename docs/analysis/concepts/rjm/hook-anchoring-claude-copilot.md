---
package: rjm
name: Hook Anchoring (Claude + Copilot)
slug: hook-anchoring-claude-copilot
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

# Hook Anchoring (Claude + Copilot)

## Definition — verbatim
> "Hook Anchoring (Claude + Copilot)" — scripts/validation/pre_pr_sequence.py:380

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 380 | defined here | Pre-PR gate verifying hook paths in hooks.json anchor to the plugin root for Claude and Copilot. |

## Consumes
Plugin hook configuration manifests (`hooks.json`) for Claude and Copilot.

## Produces
Pass/fail verification verdict ensuring hook paths are anchored to plugin root directories.

## When applied
Evaluated during the pre-PR validation sequence before submitting pull requests.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
A validation gate in `pre_pr_sequence.py` ensuring that `hooks.json` files for Claude and Copilot configurations anchor hook scripts relative to the plugin root. Established after issue #2205 where bare unanchored paths broke hook execution under Copilot CLI.
