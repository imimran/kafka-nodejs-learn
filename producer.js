const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "kafka-nodejs-learn",
  brokers: ["192.168.168.123:9092"],
});


async function init() {
const producer = kafka.producer();

console.log("Connecting Producer");
await producer.connect();
console.log("Producer Connected Successfully");
await producer.send({
  topic: "rider-updates",
  messages: [
    {
      partition: 0,
      key: "location-update",
      value: JSON.stringify({ name: "Hossain", location: "SOUTH" }),
    },
  ],
});

await producer.disconnect();
}

init()