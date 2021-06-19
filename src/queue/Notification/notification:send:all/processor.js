module.exports = async (job, done) => {
  console.log("---");
  console.log(
    `sending push notification on user ${job.data.fullName} (username: ${job.data.username})`
  );
  console.log(`notification will be send on ${job.data.platform} platform`);
  console.log("---");

  done();
};
