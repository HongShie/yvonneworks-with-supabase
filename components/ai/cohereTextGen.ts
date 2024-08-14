import { useEffect, useState } from "react";
import { CohereClient } from 'cohere-ai';

export const responseText = async () => {
  const cohere = new CohereClient({
    token: process.env.COHERE_API_KEY,
  });
  
  (async () => {
      const fetchDescription = (async () => {
        const response = await cohere.chat({
          message: "Fuji Dawn" + " is the name of the artpiece. Write a single paragraph about this original artpeice with an artistic perspective and must be less than 45 words"
        });
        return JSON.stringify(response)
      })();
  })();  
}