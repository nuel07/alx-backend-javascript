const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  let requestTotal = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, requestTotal -= -1);
  if (requestTotal >= 5) throw new Error('Endpoint load is high');
  return requestTotal;
};

export { weakMap, queryAPI };
