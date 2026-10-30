# Billing

The billing app turns each customer's usage into invoices and collects payment for them.

## Language

**Customer**:
A business that pays for the service, through one billing account.
_Avoid_: client, user

**Invoice**:
One bill for one customer and one billing period.
_Avoid_: bill, statement

**Billing period**:
The calendar month an invoice covers.
_Avoid_: cycle, term

**Charge**:
One attempt to collect an invoice's total through the payment provider.
_Avoid_: payment run, debit
