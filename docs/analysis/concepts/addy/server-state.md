---
package: addy
name: Server state
slug: server-state
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/frontend-ui-engineering/SKILL.md, sha256: 2b74ac4862be3902ec918dceac9366a6fe83b9e003601c0deaf6be09c1766aca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Server state

## Definition — verbatim
> "Server state (React Query, SWR)  → Remote data with caching" — skills/frontend-ui-engineering/SKILL.md:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 110 | defined here | State management tier for asynchronous remote data, automatic caching, revalidation, and optimistic updates |

## Consumes
API endpoints, data query functions, network responses.

## Produces
Cached query results, mutation handlers, background revalidation cycles, and loading/error flags.

## When applied
When managing remote data that originates from a backend server and requires caching and synchronization.

## Sub-concepts
none

## Part of
frontend-ui-engineering

## Implementation status
clean

## Design notes
State tier dedicated to data that lives on a remote server and is asynchronously fetched, cached, and synchronized on the client. It decouples network cache management from client-only UI state, avoiding bloated client-side stores.
