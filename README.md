# That

A small utility for mapping properties in JavaScript

## Usage

```typescript
import { prop as p, fn } from '@spenserblack/that-ts';

// Mapping to properties
[foo, bar, baz].map(p('foo')); // Same as .map((item) => item.prop) or .map(({ prop }) => prop)

[1, 2, 3].map(fn('toString', 16)); // Same as .map((n) => n.toString(16))
```

## Why?

- When doing these types of simple mapping, thinking of the item's parameter name is unnecessary mental overhead
- I wanted to play around with TypeScript
- Laziness (`=` and `>` are so annoying to type!)

## Inspiration

This Ruby syntax:

```ruby
[1, 2, 3].map(&:to_s)  # equivalent to [1, 2, 3].map((n) => n.toString()) in JavaScript
```
