/**
 * function that returns promise that resolves first
 * @param{promise} chinaDownload
 * @param{promise} USDownload
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]).then((value) => value);
}
