---
package: addy
path: evals/fixtures/api-and-interface-design/service-brief.md
type: doc
bytes: 693
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/api-and-interface-design/service-brief.md, sha256: 1542195d78e4cce6c86cbdc7d69c45826f09b02ca50396d8a5c9675b837cbc77}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/api-and-interface-design/service-brief.md

## Purpose — required, verbatim
> "The service needs public operations to create a short URL, resolve a slug, and" — evals/fixtures/api-and-interface-design/service-brief.md:3 (no explicit purpose statement) (no explicit purpose statement)

## Design intent — required
Provides a service design brief fixture for evaluating the `api-and-interface-design` skill (eval id: 1 in `evals/cases/api-and-interface-design.json`). It outlines operations, client compatibility needs, untrusted input constraints, and explicit unresolved questions (e.g. expiration defaults, custom slugs, authentication for stats) to test whether the agent produces robust REST endpoint contracts with uniform error structures and boundary validations without hallucinating unrequested features or resolving undecided design decisions arbitrarily.

## Phase — required
`addy:VERIFY`

## Inputs — required
- Consumed by eval execution harness for eval `id: 1` in `evals/cases/api-and-interface-design.json:29-43`.

## Outputs — required
- Evaluated agent produces endpoint specifications and contracts based on this brief.

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `URL shortener service brief` — evals/fixtures/api-and-interface-design/service-brief.md:1 — defined here
- `short URL` — evals/fixtures/api-and-interface-design/service-brief.md:3 — used here
- `backward compatible` — evals/fixtures/api-and-interface-design/service-brief.md:5 — used here
- `Known constraints` — evals/fixtures/api-and-interface-design/service-brief.md:7 — used here
- `Destination URLs` — evals/fixtures/api-and-interface-design/service-brief.md:9 — used here
- `URL-safe characters` — evals/fixtures/api-and-interface-design/service-brief.md:10 — used here
- `public API` — evals/fixtures/api-and-interface-design/service-brief.md:12 — used here
- `Still undecided` — evals/fixtures/api-and-interface-design/service-brief.md:15 — used here

## Structure
- `# URL shortener service brief` — line 1
- `Known constraints:` — line 7
- `Still undecided:` — line 15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The fixture contains an explicit `Still undecided:` section listing 3 open questions. The eval grader checks whether the agent highlights these open items or makes safe, non-binding choices rather than pretending requirements are fully settled.

## Context cost
693 bytes (~175 tokens) file size. Loaded as part of `evals/fixtures/api-and-interface-design/` directory (693 bytes total).
