---
description: An ADR request in a fresh brain repo yields one decision record, made by brain new-doc, of the architecture kind, that passes the DEC schema.
tags: [lifecycle]
max_turns: 25
allowed_tools: [Read, Glob, Grep, Skill, Bash, Write, Edit]
---

Write an ADR for this decision: the orders write model is event-sourced, and the read side is projected into Postgres. Sam, our tech lead, made the call. We looked at plain CRUD tables, but finance needs a full audit trail of every order change. We also looked at a hosted event store, but ops can only run Postgres. Use the slug `orders-event-sourcing`.
