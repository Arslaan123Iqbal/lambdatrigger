"use strict";
const {v4} = require("uuid");
const AWS = require("aws-sdk");
const addTodo = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient()
  const {todo} = JSON.parse(event.body);
  const createdAt = new Date()
  const id  = v4()
  console.log("id0",id);

  const newTodo  = {
    id,
    todo,
    createdAt,
    completed: false
  }

  await dynamoDb.put({
    TableName: "TodoTable",
    Item: newTodo
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newTodo),
  };
};


module.exports = {
   handler:addTodo
}