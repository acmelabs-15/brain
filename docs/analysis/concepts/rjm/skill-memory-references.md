---
package: rjm
name: Skill Memory References
slug: skill-memory-references
kind: gate
package_phase: cross-phase
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

# Skill Memory References

## Definition — verbatim
> "Skill Memory References" — scripts/validation/pre_pr_sequence.py:315

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 315 | defined here | Pre-PR gate verifying that memory names commanded in skills and agents resolve to tracked memories. |

## Consumes
Skill and agent instructions commanding read_memory or edit_memory operations, and tracked memory catalogs.

## Produces
Pass/fail gate verdict ensuring commanded memory keys resolve to tracked memories.

## When applied
Executed during the pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Skill Memory References is a validation gate (Issue #4897) verifying that read_memory and edit_memory instructions within skills resolve to existing, tracked memory files, preventing blocking steps from failing due to nonexistent or unscoped memory references.
