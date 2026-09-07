---
package: rjm
name: malformed
slug: malformed
kind: pattern
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# malformed

## Definition — verbatim
> "The link destination carries a nested ``[`` or ``]``, or the destination is never closed on its line (``[ADR-080](./ADR-080-model-pin-justification-policy.md``). A distinct authoring mistake from a target that simply does not exist." — scripts/validation/check_adr_links.py:50-52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 49 | defined here | Defined in module docstring as one of four distinct ADR link violation classes. |

## Consumes
Tracked markdown files containing inline link destinations.

## Produces
Violation findings with line numbers and destination text indicating unclosed links or nested bracket syntax errors.

## When applied
Evaluated during ADR link validation when scanning inline markdown links to catch syntax mistakes before checking whether targets resolve.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`malformed` represents an ADR link defect pattern where the link destination syntax is structurally broken (such as an unclosed parenthesis or unexpected nested square brackets) rather than pointing to a nonexistent file path. Distinguishing malformed links from unresolved links allows automated validators to report precise remediation guidance.
