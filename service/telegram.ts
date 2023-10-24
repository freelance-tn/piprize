import axios from "axios";

export async function sendTelegramMessage(botToken: string, chatId: string, message: string) {
    const telegramURL = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
    try {
      const response = await axios.post(telegramURL, {
        chat_id: chatId,
        text: message
      });
  
      if (response.status !== 200) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  