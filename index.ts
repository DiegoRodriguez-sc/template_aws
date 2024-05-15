import { APIGatewayProxyEvent, APIGatewayProxyResultV2 } from "aws-lambda";

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> => {

  
  return {
    statusCode: 200,
    headers:{
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body: JSON.stringify("hola"),
  };
}
