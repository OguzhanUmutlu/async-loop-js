class AsyncLoop {
    static async startWhile({
        statement, callback = r => r, endCallback = r => r, ms = 0
    }) {
        if (typeof statement !== "function") throw new Error("Statement should have been a function which returns boolean. (statement)");
        if (typeof callback !== "function") throw new Error("Callback should have been a function. (callback)");
        if (typeof endCallback !== "function") throw new Error("End callback should have been a function. (endCallback)");
        return await new Promise(r => {
            let i = 0;
            const t = setInterval(() => {
                if (statement(i)) callback(i);
                else {
                    clearInterval(t);
                    endCallback(i);
                    r();
                }
                i++;
            },
                ms);
        });
    }
    static async repeat({
        iterations, callback = r => r, endCallback = r => r, ms = 0
    }) {
        if (typeof iterations !== "number") throw new Error("Iteration amount should have been a number. (iterations)");
        return await AsyncLoop.startWhile({
            statement: i => i < iterations,
            callback, endCallback, ms
        });
    }
}
