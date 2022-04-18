export default function cleanSet(theSet, startString) {
  if (!startString || !startString.length) {
    return '';
  }
  let finalStr = '';
  for (const setElement of theSet) {
    if (setElement && setElement.startsWith(startString)) {
      finalStr += finalStr.length === 0 ? setElement.replace(startString, '') : setElement.replace(startString, '-');
    }
  }
  return finalStr;
}
