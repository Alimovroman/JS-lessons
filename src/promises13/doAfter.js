const doAfter = (timer) => {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random()
        setTimeout(() => {
            if (randomValue > 0.5) {
                resolve(randomValue)
            } else {
                reject(randomValue)
            }

        }, timer * 1000)
    });

}