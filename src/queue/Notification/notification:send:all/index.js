const Bull = require("bull");
// const cluster = require("cluster");
const { setTimeout } = require("timers");
const db = require("../../../../db/models");
// const numWorkers = require("os").cpus().length;

/**
 *
 * @param {*} job
 * @param {*} totalJobs
 * @param {*} bounceTime bounce / delay time in ms
 * @param {*} counter
 */
const recursiveJobs = async (job, totalJobs, bounceTime = 10, counter = 0) => {
  setTimeout(async () => {
    if (totalJobs) {
      const user = await db.User.findOne({ where: { id: counter + 1 } });

      job.add(user);
      console.log("---");
      console.log(`job ${counter + 1} was running`);
      console.log(`total next jobs:  ${totalJobs}`);
      console.log("---");
      counter++;
      totalJobs--;
      recursiveJobs(job, totalJobs, bounceTime, counter);
    } else {
      console.log("---");
      console.log("All Jobs is running");
      console.log("---");
    }
  }, bounceTime);
};

module.exports = {
  queue: {
    job: null,
    name: null,
  },
  /**
   *
   * @param {*} name
   */
  create(name) {
    this.queue.job = new Bull(name, "redis://redis:6379");
    this.queue.name = name;
  },
  /**
   * Load process queue and listener event
   */
  load() {
    this.queue.job.process(__dirname + "/processor.js");

    this.queue.job.on("failed", (job) => {
      console.log("---");
      console.log(`job ${job.queue.name} was failed (ID: ${job.id})`);
      console.log("---");
    });

    this.queue.job.on("stalled", (job) => {
      console.log("---");
      console.log(`job ${job.queue.name} was stalled (ID: ${job.id})`);
      console.log("---");
    });

    this.queue.job.on("completed", (job) => {
      console.log("---");
      console.log(
        `success sending push notification on user ${job.data.fullName} (username: ${job.data.username})`
      );
      console.log("---");
    });
  },
  /**
   *
   * @param {*} name
   * @param {*} payload
   * @param {*} totalJobs
   * @param {*} delayTime
   */
  run(totalJobs) {
    // if (cluster.isWorker) {
    //   for (let i = 0; i < numWorkers; i++) {
    //     cluster.fork();
    //   }

    //   cluster.on("online", (worker) => {
    //     const { pid } = worker.process;

    //     if (totalJobs > 1) {
    //       recursiveJobs(this.queue.job, totalJobs, pid);
    //     }
    //   });
    // } else {
    // }

    recursiveJobs(this.queue.job, totalJobs);
  },
};
