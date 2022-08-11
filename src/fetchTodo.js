"use strict";
const {v4} = require("uuid");
const AWS = require("aws-sdk");
const fetchTodo = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient()
  let todos;
try {
    const result = await dynamoDb.scan({TableName: "TodoTable"}).promise();
    todos = result.Items
} catch (error) {
    console.log(error);
}



  return {
    statusCode: 200,
    body: JSON.stringify(todos),
  };
};


module.exports = {
   handler:fetchTodo
}