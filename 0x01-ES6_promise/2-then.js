export default function handleResponseFromAPI(promise) {
  const resolve = { status: 200, body: 'Success' };
  return promise
    .then(() => resolve)
    .catch((error) => error)
    .finally(() => console.log('Got a response from the API'));
}
