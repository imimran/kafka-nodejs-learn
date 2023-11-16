const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "kafka-nodejs-learn",
  brokers: ["192.168.168.123:9092"],
});

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting ...");
  admin.connect();
  console.log("Admin connection success...");

  console.log("Creating Topic [rider-updates]");

  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic created...");

  console.log("Admin disconnected...");
  await admin.disconnect()

}

init()
