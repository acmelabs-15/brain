# Keep the ledger in Postgres

Invoices and charges need transactions across tables, and the team already runs Postgres for accounts. We considered an event store, and rejected it because no one on the team has run one in production.
