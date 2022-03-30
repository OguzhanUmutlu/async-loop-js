# async-loop-js
Async Loops for JavaScript

# Examples

### `.startWhile()` example

```js
await AsyncLoop.startWhile({
    statement: i => i < 10,
    callback: i => console.log(`Iterating while for ${i}. time.`),
    endCallback: i => console.log(`Iteration for while has ended at ${i}. iteration`),
    ms: 20 // will repeat every 20ms
});
```

### `.repeat()` example

```js
await AsyncLoop.repeat({
    iterations: 10,
    callback: i => console.log(`Iterating repeat for ${i}. time.`),
    endCallback: i => console.log(`Iteration for repeat has ended at ${i}. iteration`),
    ms: 20 // will repeat every 20ms
});
```
