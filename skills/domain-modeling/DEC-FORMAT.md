# Decision Record Format

A decision record is a file that records one decision the user made, with its reason and its evidence. Its prefix is `DEC`. An ADR (architecture decision record) is a decision record of the architecture kind: one prefix and one folder hold both, so a decision that turns out to be architectural changes a field, not its file name, and no link breaks.

## Create it with `brain new-doc`

Decision records live in the workspace's decisions folder: `paths.decisions` in `docs/agents/workspace.md`, `docs/decisions/` by default. Create each record with:

```
brain new-doc DEC <slug> --title "<title>"
```

It claims the next free number, writes `DEC-NNN-<slug>.md` from the template, and prints the path. The claim gives each number to one agent only, which a file written by hand cannot do. The slug is lowercase words joined by hyphens, such as `orders-event-sourcing`. The title is the decision in a few words; without `--title`, new-doc makes it from the slug ("Orders event sourcing"). The folder comes into being with the first record.

## Fill the template

new-doc fills the ID, the title and today's date. You replace every `<...>` placeholder. A filled record:

```md
---
id: DEC-031
status: accepted
kind: architecture
adr-test:
  hard-to-reverse: true
  surprising: true
  real-trade-off: true
from: user
evidence: [RES-009]
decided: 2026-10-29 by Sam
---
# DEC-031: Event-source the orders write model

Finance needs a full audit trail of every order change, so the orders write model is event-sourced and the read side is projected into Postgres. Plain CRUD tables lose that trail; a hosted event store is out because ops runs only Postgres.
```

| Field | Value | What goes in it |
|---|---|---|
| `id` | `DEC-NNN` | new-doc sets it. It matches the file name. |
| `status` | `proposed`, `accepted` or `superseded by DEC-NNN` | `accepted` once the user has decided; `proposed` while the decision waits on the user. |
| `kind` | `decision` or `architecture` | `architecture` exactly when all three `adr-test` answers are `true`, otherwise `decision`. |
| `adr-test` | `hard-to-reverse`, `surprising`, `real-trade-off`, each `true` or `false` | The answers to the three tests below. |
| `from` | `IDEA-NNN#NN`, `SPEC-NNN#NN`, `IDEA-NNN`, `SPEC-NNN` or `user` | The map row, idea or spec that raised the decision. `user` for a decision that comes from no map row, such as a direct request. |
| `evidence` | a list of `RES-NNN` | The research records the decision rests on. `[]`, or no line, when there are none. |
| `decided` | `YYYY-MM-DD by <name>` | The date, and the person who decided. It may stay out only while `status` is `proposed`. |

The record holds these fields and no other. A record with `migrated: 0.8` came from setup-brain's migrate mode: it may lack fields, and it keeps the marker.

The H1 is the ID, a colon and a short title: `# DEC-031: <title>`.

The body is 1-3 sentences: the context, what was decided, and why. A record can be a single paragraph: its value is that it records *that* the decision was made and *why*. Add a section only when it adds real value:

- **Considered Options**: when the rejected options are worth remembering.
- **Consequences**: when an effect downstream is not obvious.

For a record of the architecture kind, the documentation-and-adrs skill's Context, Decision, Alternatives and Consequences guidance can shape the body.

The record is done when every `<...>` placeholder is replaced and `brain check` reports no finding for it.

## The three tests set the kind

Every decision the user makes gets a record. The three tests set only its kind. Answer each one `true` or `false` in `adr-test`:

1. **hard-to-reverse**: the cost of changing your mind later is meaningful.
2. **surprising**: without context, a future reader looks at the code and wonders "why on earth did they do it this way?"
3. **real-trade-off**: there were genuine alternatives, and you picked one for specific reasons.

All three `true`: `kind: architecture`. Any one `false`: `kind: decision`. A decision that is easy to reverse, unsurprising, or the only real option is still recorded, as a plain decision.

A request for an ADR asks for the architecture kind. Answer the three tests honestly all the same. When one is `false`, write `kind: decision` and tell the user which test failed.

### What is of the architecture kind

- **Architectural shape.** "We're using a monorepo." "The write model is event-sourced, the read model is projected into Postgres."
- **Integration patterns between contexts.** "Ordering and Billing communicate via domain events, not synchronous HTTP."
- **Technology choices that carry lock-in.** Database, message bus, auth provider, deployment target. Not every library: just the ones that would take a quarter to swap out.
- **Boundary and scope decisions.** "Customer data is owned by the Customer context; other contexts reference it by ID only." The explicit no-s are as valuable as the yes-s.
- **Deliberate deviations from the obvious path.** "We're using manual SQL instead of an ORM because X." Anything where a reasonable reader would assume the opposite. These stop the next engineer from "fixing" something that was deliberate.
- **Constraints not visible in the code.** "We can't use AWS because of compliance requirements." "Response times must be under 200ms because of the partner API contract."
- **Rejected alternatives when the rejection is non-obvious.** If you considered GraphQL and picked REST for subtle reasons, record it; otherwise someone will suggest GraphQL again in six months.

## Supersede, keep the old record

A decision that replaces an earlier one gets its own new record through `brain new-doc DEC <slug>`. Set the old record's `status` to `superseded by DEC-NNN`, with the new record's ID. Keep the old file: it holds the history, and links to it stay valid.
