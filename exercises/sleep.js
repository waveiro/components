async function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

async function runAsync() {
  console.time("sleep");
  console.time("sleep 2");
  await sleep(5000);
  console.timeEnd("sleep");
  await sleep(5000);
  console.timeEnd("sleep 2");
}

runAsync();
