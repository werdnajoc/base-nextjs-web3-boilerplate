import * as logHelpers from './logs'

export const get = async ({ url, headers = { } }: { url: string, headers: any}) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    })

    return response.json();
  } catch (error) {
    logHelpers.error(`error getting url: ${url}: `, error);
    throw error;
  }
}