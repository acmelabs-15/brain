---
package: rjm
name: "CATEGORY F: CONFIGURATION & ENVIRONMENT"
slug: category-f-configuration-environment
kind: pattern
package_phase: rjm:Code Quality
implementation_in_scope: true
deprecated: false
---

# CATEGORY F: CONFIGURATION & ENVIRONMENT

## Definition — verbatim
> "CATEGORY F: CONFIGURATION & ENVIRONMENT" — scripts/incoherence.py:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 74 | defined here | Definition of inconsistency category between configuration documentation and code handling. |

## Consumes
Configuration documentation, environment variable guides, and config-loading logic.

## Produces
Candidate incoherences where documented defaults or environment variables mismatch code handling.

## When applied
Selected when an application uses environment variables or configuration files with documented defaults.

## Sub-concepts
none

## Part of
abstract-dimension-catalog

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
Consistency dimension comparing environment variables and default configuration values documented in guides with the actual parsing and fallback logic in code.
