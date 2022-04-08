/**
 * function that retrieves neighborhoods in a city
 */
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  /**
     * arrow function that adds a neighborhood to the city
     * @param{newNeighborhood} newNeighborhood to add
     * @return{list} new sanFranciscoNeighborhoods list
     */
  this.addNeighborhood = (newNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
